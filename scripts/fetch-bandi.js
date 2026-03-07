// scripts/fetch-bandi.js
// Scarica i bandi da incentivi.gov.it via Solr API e li salva nel database Supabase.
// Viene eseguito ogni notte alle 2:00 da GitHub Actions.
//
// FIX: Il CSV non e' un file statico. La pagina /it/open-data genera il CSV
// dinamicamente interrogando l'endpoint Solr interno. Chiamiamo l'API direttamente.

import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Endpoint Solr con alias dei campi che corrispondono alle colonne del DB
const SOLR_BASE = 'https://www.incentivi.gov.it/solr/coredrupal/select';
const SOLR_FIELDS = [
  'ID_Incentivo:zs_nid',
  'Titolo:zs_title',
  'Descrizione:zs_body',
  'Data_apertura:zs_field_open_date',
  'Data_chiusura:zs_field_close_date',
  'Forma_agevolazione:zm_field_support_form_value',
  'Regioni:zm_field_regions_value',
  'Soggetto_Concedente:zs_field_subject_grant',
  'Link_istituzionale:zs_field_link',
].join(',');

const CSV_URL =
  SOLR_BASE +
  '?q=*%3A*&q.op=OR&wt=csv&rows=100000&fl=' +
  encodeURIComponent(SOLR_FIELDS);

function calcolaStato(dataApertura, dataChiusura) {
  const oggi = new Date();
  const apertura = dataApertura ? new Date(dataApertura) : null;
  const chiusura = dataChiusura ? new Date(dataChiusura) : null;
  if (chiusura && chiusura < oggi) return 'chiuso';
  if (apertura && apertura > oggi) return 'in_arrivo';
  return 'aperto';
}

async function main() {
  try {
    console.log('Scarico bandi da Solr API...');
    const res = await fetch(CSV_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NextFund-Bot/1.0)',
        'Accept': 'text/csv,*/*',
        'Accept-Language': 'it-IT,it;q=0.9',
      },
    });

    if (!res.ok) throw new Error('Errore download: ' + res.status + ' ' + res.statusText);

    const testo = await res.text();
    console.log('File scaricato, dimensione:', testo.length, 'caratteri');

    const righe = parse(testo, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ',',
      bom: true,
      relax_quotes: true,
      relax_column_count: true,
    });

    console.log('Trovati ' + righe.length + ' bandi');

    const bandi = righe
      .filter(r => r.ID_Incentivo)
      .map(r => ({
        id: String(r.ID_Incentivo).trim(),
        titolo: r.Titolo || null,
        descrizione: r.Descrizione ? r.Descrizione.slice(0, 3000) : null,
        data_apertura: r.Data_apertura ? r.Data_apertura.split('T')[0] : null,
        data_chiusura: r.Data_chiusura ? r.Data_chiusura.split('T')[0] : null,
        stato: calcolaStato(r.Data_apertura, r.Data_chiusura),
        forma_agevolazione: r.Forma_agevolazione || null,
        regioni: r.Regioni || null,
        soggetto_concedente: r.Soggetto_Concedente || null,
        link_istituzionale: r.Link_istituzionale || null,
        fonte: 'incentivi.gov.it',
        aggiornato_il: new Date().toISOString(),
      }));

    console.log('Bandi validi:', bandi.length);
    let salvati = 0;
    for (let i = 0; i < bandi.length; i += 500) {
      const blocco = bandi.slice(i, i + 500);
      const { error } = await supabase.from('bandi').upsert(blocco, { onConflict: 'id' });
      if (error) {
        console.error('Errore blocco ' + i + ':', error.message);
      } else {
        salvati += blocco.length;
        console.log('Salvati ' + salvati + '/' + bandi.length);
      }
    }
    console.log('Aggiornamento completato!');
  } catch (err) {
    console.error('Errore fatale:', err.message);
    process.exit(1);
  }
}

main();
