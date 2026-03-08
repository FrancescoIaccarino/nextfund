import { createClient } from '@supabase/supabase-js'
import { PageHeader } from '@/components/layout/PageHeader'
import BandiFilters from './BandiFilters'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const revalidate = 3600

export default async function BandiUpdatedPage() {
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data: bandi, error } = await supabase
    .from('bandi')
    .select('id,titolo,descrizione,data_apertura,data_chiusura,stato,forma_agevolazione,regioni,soggetto_concedente,link_istituzionale,aggiornato_il,settori,dimensioni,tipologia_soggetto')
    .order('aggiornato_il', { ascending: false })
    .limit(1000)

  return (
    <>
      <PageHeader
        title="Bandi Aggiornati in Tempo Reale"
        description="Dati ufficiali aggiornati ogni notte da incentivi.gov.it â il portale nazionale delle agevolazioni pubbliche."
      />

      {error && (
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            Errore nel caricamento dei dati. Riprova tra qualche minuto.
          </div>
        </div>
      )}

      {!error && bandi && <BandiFilters bandi={bandi} />}

      {!error && (!bandi || bandi.length === 0) && (
        <div className="text-center py-24 text-gray-500">
          <p className="text-xl font-medium mb-2">Nessun bando disponibile al momento</p>
          <p className="text-sm">Il database viene aggiornato ogni notte alle 2:00.</p>
        </div>
      )}
    </>
  )
}
