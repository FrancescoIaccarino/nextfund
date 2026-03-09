import { createClient } from '@supabase/supabase-js'
import BandiFilters from './BandiFilters'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const revalidate = 3600

const FIELDS =
  'id,titolo,descrizione,obiettivi,data_apertura,data_chiusura,stato,forma_agevolazione,regioni,soggetto_concedente,link_istituzionale,aggiornato_il,settori,dimensioni,tipologia_soggetto,agevolazione_max,stanziamento,spesa_max,costi_ammessi,base_normativa,note_chiusura,codici_ateco,comuni,cambio_territoriale,spesa_min,agevolazione_min'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchAll(): Promise<any[]> {
  const supabase = createClient(supabaseUrl, supabaseKey)
  const PAGE = 1000
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let all: any[] = []
  let from = 0
  while (true) {
    const { data, error } = await supabase
      .from('bandi')
      .select(FIELDS)
      .order('aggiornato_il', { ascending: false })
      .range(from, from + PAGE - 1)
    if (error || !data || data.length === 0) break
    all = all.concat(data)
    if (data.length < PAGE) break
    from += PAGE
  }
  return all
}

export default async function BandiUpdatedPage() {
  const bandi = await fetchAll()
  return (
    <>
      <div className="bg-[#0a1628] pt-24 pb-10 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Database Incentivi
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Bandi Automatici
          </h1>
          <p className="text-gray-400 text-base max-w-2xl">
            {bandi.length.toLocaleString('it-IT')} bandi disponibili, aggiornati automaticamente da fonti ufficiali.
            Usa i filtri per trovare le agevolazioni adatte alla tua azienda.
          </p>
        </div>
      </div>
      <BandiFilters bandi={bandi} />
    </>
  )
}
