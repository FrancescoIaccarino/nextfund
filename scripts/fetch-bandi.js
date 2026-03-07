// scripts/fetch-bandi.js
// Scarica i bandi da incentivi.gov.it e li salva nel database Supabase.
// Viene eseguito ogni notte alle 2:00 da GitHub Actions.

import fetch from 'node-fetch';
import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function getCsvUrl() {
  console.log('Cerco il link CSV aggiornato...');
  try {
    const res = await fetch('https://www.incentivi.gov.it/it/open-data', {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'it-IT' }
    });
    const html = await res.text();
    const match = html.match(/href="(\/sites\/default\/files\/open-data\/[^"]+\.csv)"/);
    if (match) return 'https://www.incentivi.gov.it' + match[1];
  } catch (e) {
    console.log('Pagina non raggiungibile, uso URL di fallback');
  }
  const oggi = new Date();
  const anno = oggi.getFullYear();
  const mese = String(oggi.getMonth() + 1).padStart(2, '0');
  const giorno = String(oggi.getDate()).padStart(2, '0');
  return `https://www.incentivi.gov.it/sites/default/files/open-data/${anno}-${mese}-${giorno}_opendata-export.csv`;
}

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
    const csvUrl = await getCsvUrl();
    console.log('Scarico:', csvUrl);
    const res = await fetch(csvUrl);
    if (!res.ok) throw new Error('Errore download: ' + res.status);
    const testo = await res.text();
    console.log('File scaricato, dimensione:', testo.length, 'caratteri');

    const righe = parse(testo, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ',',
      bom: true,
      relax_quotes: true,
      relax_column_count: true
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
        aggiornato_il: new Date().toISOString()
      }));

    console.log('Salvo ' + bandi.length + ' bandi nel database...');
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
