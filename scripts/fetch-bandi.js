// scripts/fetch-bandi.js
// Scarica i bandi da incentivi.gov.it e li salva nel database Supabase.
// Viene eseguito ogni notte alle 2:00 da GitHub Actions.
//
// STRATEGIA: Il CSV è un file statico su incentivi.gov.it con URL datata.
// Prima cerca il link dalla pagina open-data, poi prova le ultime date.

import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const BASE_URL = 'https://www.incentivi.gov.it';
const OPEN_DATA_PAGE = BASE_URL + '/it/open-data';
const CSV_PATH_PREFIX = '/sites/default/files/open-data/';

// Cerca il link CSV nella pagina open-data, poi prova date recenti
async function findCsvUrl() {
  console.log('Cerco il link CSV nella pagina open-data...');
  try {
    const resp = await fetch(OPEN_DATA_PAGE, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NextFund-Bot/1.0)' },
      signal: AbortSignal.timeout(15000),
    });
    const html = await resp.text();
    const match = html.match(/href="(\/sites\/default\/files\/open-data\/[^"]+\.csv)"/i);
    if (match) {
      console.log('Link CSV trovato nella pagina: ' + match[1]);
      return BASE_URL + match[1];
    }
  } catch (e) {
    console.warn('Pagina open-data non raggiungibile: ' + e.message);
  }

  // Fallback: prova le ultime 90 date (il file viene aggiornato periodicamente)
  console.log('Provo con date recenti...');
  const today = new Date();
  for (let daysAgo = 0; daysAgo <= 90; daysAgo++) {
    const d = new Date(today);
    d.setDate(today.getDate() - daysAgo);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const url = BASE_URL + CSV_PATH_PREFIX + year + '-' + month + '-' + day + '_opendata-export.csv';
    try {
      const head = await fetch(url, {
        method: 'HEAD',
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NextFund-Bot/1.0)' },
        signal: AbortSignal.timeout(8000),
      });
      if (head.ok) {
        console.log('File CSV trovato: ' + url);
        return url;
      }
    } catch (_) {
      // continua al giorno precedente
    }
  }
  throw new Error('Nessun file CSV trovato negli ultimi 90 giorni');
}

async function main() {
  console.log('Avvio aggiornamento bandi...');

  const csvUrl = await findCsvUrl();
  console.log('Scarico CSV da: ' + csvUrl);

  const resp = await fetch(csvUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NextFund-Bot/1.0)' },
    signal: AbortSignal.timeout(120000),
  });
  if (!resp.ok) throw new Error('HTTP ' + resp.status + ' da ' + csvUrl);

  const csvText = await resp.text();
  console.log('CSV scaricato: ' + csvText.length + ' caratteri');

  // Prova prima con punto e virgola, poi con virgola
  let records;
  try {
    records = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ';',
      trim: true,
      bom: true,
    });
    if (records.length < 2) throw new Error('troppo pochi record con ;');
  } catch (_) {
    records = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ',',
      trim: true,
      bom: true,
    });
  }
  console.log('Trovati ' + records.length + ' bandi nel CSV');

  const now = new Date();
  const bandi = records.map(r => {
    const apertura = r.Data_apertura ? new Date(r.Data_apertura) : null;
    const chiusura = r.Data_chiusura ? new Date(r.Data_chiusura) : null;
    let stato = 'aperto';
    if (chiusura && chiusura < now) stato = 'chiuso';
    else if (apertura && apertura > now) stato = 'in_arrivo';

    return {
      id: String(r.ID_Incentivo || '').trim(),
      titolo: r.Titolo || '',
      descrizione: r.Descrizione || '',
      data_apertura: r.Data_apertura || null,
      data_chiusura: r.Data_chiusura || null,
      forma_agevolazione: r.Forma_agevolazione || '',
      regioni: r.Regioni || '',
      soggetto_concedente: r.Soggetto_Concedente || '',
      link_istituzionale: r.Link_istituzionale || '',
      stato,
      aggiornato_il: new Date().toISOString(),
    };
  }).filter(b => b.id);

  console.log('Upsert di ' + bandi.length + ' bandi su Supabase...');

  const BATCH = 500;
  let inserted = 0;
  for (let i = 0; i < bandi.length; i += BATCH) {
    const batch = bandi.slice(i, i + BATCH);
    const { error } = await supabase
      .from('bandi')
      .upsert(batch, { onConflict: 'id' });
    if (error) throw new Error('Supabase error: ' + error.message);
    inserted += batch.length;
    console.log('  Inseriti ' + inserted + '/' + bandi.length + '...');
  }

  console.log('Completato! ' + bandi.length + ' bandi aggiornati.');
}

main().catch(err => {
  console.error('Errore fatale:', err.message);
  process.exit(1);
});
