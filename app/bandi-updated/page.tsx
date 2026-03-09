import { createClient } from '@supabase/supabase-js'
import BandiFilters from './BandiFilters'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const revalidate = 3600

export default async function BandiUpdatedPage() {
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data: bandi } = await supabase
    .from('bandi')
    .select(
      'id,titolo,descrizione,obiettivi,data_apertura,data_chiusura,stato,forma_agevolazione,regioni,soggetto_concedente,link_istituzionale,aggiornato_il,settori,dimensioni,tipologia_soggetto,agevolazione_max,stanziamento,spesa_max,costi_ammessi,base_normativa,note_chiusura,codici_ateco,comuni,cambio_territoriale,spesa_min,agevolazione_min'
    )
    .order('aggiornato_il', { ascending: false })
    .limit(1000)

  return <BandiFilters bandi={bandi ?? []} />
}
