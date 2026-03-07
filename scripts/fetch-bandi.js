// scripts/fetch-bandi.js
// Scarica i bandi da incentivi.gov.it e li salva su Supabase.
// GitHub Actions (Azure US) non raggiunge incentivi.gov.it direttamente:
// usa allorigins.win (Cloudflare Workers, globale) come proxy fallback.

import { parse } from 'csv-parse/sync';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const BASE_URL = 'https://www.incentivi.gov.it';
const OPEN_DATA_PAGE = BASE_URL + '/it/open-data';
const CSV_PATH = '/sites/default/files/open-data/';
// Proxy Cloudflare Workers - raggiunge server italiani anche da US Azure
const PROXY = 'https://api.allorigins.win/raw?url=';

// Fetch con fallback automatico al proxy se il diretto fallisce
async function fetchWithFallback(url, timeoutMs = 20000) {
  // 1. Tenta diretto
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
    if (r.ok) { console.log('  OK diretto: ' + url); return r; }
  } catch (e) {
    console.log('  Diretto fallito (' + e.message + '), provo proxy...');
  }
  // 2. Tenta via allorigins proxy
  const proxiedUrl = PROXY + encodeURIComponent(url);
  const r = await fetch(proxiedUrl, { signal: AbortSignal.timeout(timeoutMs + 15000) });
  if (!r.ok) throw new Error('HTTP ' + r.status + ' anche via proxy per ' + url);
  console.log('  OK via proxy: ' + url);
  return r;
}

// Trova l'URL del CSV dal portale open-data, poi da date recenti
async function findCsvUrl() {
  // 1. Cerca il link nella pagina HTML
  console.log('Cerco link CSV nella pagina open-data...');
  try {
    const resp = await fetchWithFallback(OPEN_DATA_PAGE, 20000);
    const html = await resp.text();
    const match = html.match(/href="(\/sites\/default\/files\/open-data\/[^"]+\.csv)"/i);
    if (match) {
      console.log('Link trovato nella pagina: ' + match[1]);
      return BASE_URL + match[1];
    }
    console.warn('Pagina caricata ma nessun link CSV trovato');
  } catch (e) {
    console.warn('Impossibile caricare pagina: ' + e.message);
  }

  // 2. Prova le ultime 10 date direttamente (timeout breve)
  console.log('Provo date recenti (ultimi 10 giorni)...');
  const today = new Date();
  for (let d = 0; d <= 10; d++) {
    const dt = new Date(today);
    dt.setDate(today.getDate() - d);
    const url = BASE_URL + CSV_PATH + dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate() + '_opendata-export.csv';
    try {
      const r = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(3000) });
      if (r.ok) { console.log('File trovato diretto: ' + url); return url; }
    } catch (_) {}
  }

  // 3. Prova le ultime 10 date via proxy
  console.log('Provo date recenti via proxy...');
  for (let d = 0; d <= 10; d++) {
    const dt = new Date(today);
    dt.setDate(today.getDate() - d);
    const url = BASE_URL + CSV_PATH + dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate() + '_opendata-export.csv';
    try {
      const r = await fetch(PROXY + encodeURIComponent(url), { method: 'HEAD', signal: AbortSignal.timeout(8000) });
      if (r.ok) { console.log('File trovato via proxy: ' + url); return url; }
    } catch (_) {}
  }

  // 4. Fallback assoluto: URL noto da aprile 2025
  const fallback = BASE_URL + CSV_PATH + '2025-4-5_opendata-export.csv';
  console.log('Uso URL di fallback (aprile 2025): ' + fallback);
  return fallback;
}

async function main() {
  console.log('Avvio aggiornamento bandi...');

  const csvUrl = await findCsvUrl();
  console.log('Scarico CSV da: ' + csvUrl);

  const resp = await fetchWithFallback(csvUrl, 120000);
  const csvText = await resp.text();
  console.log('CSV scaricato: ' + csvText.length + ' caratteri');

  // Determina il delimitatore (;  o ,)
  let records;
  try {
    records = parse(csvText, { columns: true, skip_empty_lines: true, delimiter: ';', trim: true, bom: true });
    if (records.length < 2) throw new Error('troppo pochi record con ;');
  } catch (_) {
    records = parse(csvText, { columns: true, skip_empty_lines: true, delimiter: ',', trim: true, bom: true });
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
    const { error } = await supabase.from('bandi').upsert(batch, { onConflict: 'id' });
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
