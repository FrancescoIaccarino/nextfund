import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Full Solr API URL - same one called by the "Scarica CSV" button on incentivi.gov.it
const SOLR_CSV_URL =
  'https://www.incentivi.gov.it/solr/coredrupal/select?q.op=OR&wt=csv&rows=8000' +
  '&fl=ID_Incentivo%3Azs_nid%2CTitolo%3Azs_title%2CDescrizione%3Azs_body' +
  '%2CObiettivo_Finalita%3Azm_field_scopes_value%2CData_apertura%3Azs_field_open_date' +
  '%2CData_chiusura%3Azs_field_close_date%2CNote_di_apertura_chiusura%3Azs_field_close_date_descriptor' +
  '%2CDimensioni%3Azm_field_dimensions_value%2CTipologia_Soggetto%3Azm_field_subject_type_value' +
  '%2CForma_agevolazione%3Azm_field_support_form_value%2CCosti_Ammessi%3Azm_field_granted_costs_value' +
  '%2CSpesa_Ammessa_min%3Azs_field_cost_min%2CSpesa_Ammessa_max%3Azs_field_cost_max' +
  '%2CAgevolazione_Concedibile_min%3Azs_field_support_grant_type_min' +
  '%2CAgevolazione_Concedibile_max%3Azs_field_support_grant_type_max' +
  '%2CSettore_Attivita%3Azm_field_activity_sector_value%2CCodici_ATECO%3Azs_field_ateco' +
  '%2CRegioni%3Azm_field_regions_value%2CComuni%3Azs_field_comuni' +
  '%2CAmbito_territoriale%3Azm_field_special_territory_value' +
  '%2CSoggetto_Concedente%3Azs_field_subject_grant' +
  '%2CBase_normativa_primaria%3Azs_field_primary_ruleset' +
  '%2CBase_normativa_secondaria%3Azs_field_secondary_ruleset' +
  '%2CProvvedimento_attuativo%3Azs_field_implementation_ruleset' +
  '%2CGazzetta_ufficiale%3Azs_field_official_references' +
  '%2CStanziamento_incentivo%3Azs_field_budget_allocation' +
  '%2CLink_istituzionale%3Azs_field_link' +
  '%2CAltre_caratteristiche%3Azs_field_other_characteristic' +
  '%2CData_ultimo_aggiornamento%3Ads_last_update%2C&q=index_id%3Aincentivi+';

function parseCSV(text: string): Record<string, string>[] {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter(l => l.trim());
  if (lines.length < 2) return [];
  const delimiter = lines[0].includes(';') ? ';' : ',';
  const parseRow = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
        else { inQuotes = !inQuotes; }
      } else if (char === delimiter && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };
  const headers = parseRow(lines[0]);
  return lines.slice(1).map(line => {
    const values = parseRow(line);
    const record: Record<string, string> = {};
    headers.forEach((h, i) => { record[h.trim()] = (values[i] || '').trim(); });
    return record;
  }).filter(r => Object.values(r).some(v => v));
}

export async function POST() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Missing Supabase credentials' }, { status: 500 });
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

  let csvText: string;
  try {
    const resp = await fetch(SOLR_CSV_URL, {
      signal: AbortSignal.timeout(60000),
      headers: { 'Accept': 'text/csv,*/*', 'User-Agent': 'NextFund/1.0' },
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status + ' ' + resp.statusText);
    csvText = await resp.text();
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: 'Fetch failed: ' + msg }, { status: 502 });
  }

  const records = parseCSV(csvText);
  if (records.length === 0) {
    return NextResponse.json({ error: 'No records parsed from CSV' }, { status: 500 });
  }

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

  const BATCH = 500;
  let inserted = 0;
  for (let i = 0; i < bandi.length; i += BATCH) {
    const { error } = await supabase
      .from('bandi')
      .upsert(bandi.slice(i, i + BATCH), { onConflict: 'id' });
    if (error) return NextResponse.json({ error: error.message, inserted }, { status: 500 });
    inserted += bandi.slice(i, i + BATCH).length;
  }

  return NextResponse.json({ success: true, total: bandi.length });
}
