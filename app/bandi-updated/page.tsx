import { createClient } from '@supabase/supabase-js'
import { PageHeader } from '@/components/layout/PageHeader'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

type Bando = {
  id: string
  titolo: string
  descrizione: string
  data_apertura: string | null
  data_chiusura: string | null
  stato: string
  forma_agevolazione: string
  regioni: string
  soggetto_concedente: string
  link_istituzionale: string
  aggiornato_il: string
}

function StatoBadge({ stato }: { stato: string }) {
  const colors: Record<string, string> = {
    aperto: 'bg-green-100 text-green-800',
    chiuso: 'bg-red-100 text-red-800',
    in_arrivo: 'bg-yellow-100 text-yellow-800',
  }
  const labels: Record<string, string> = {
    aperto: 'Aperto',
    chiuso: 'Chiuso',
    in_arrivo: 'In Arrivo',
  }
  const color = colors[stato] ?? 'bg-gray-100 text-gray-800'
  const label = labels[stato] ?? stato
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>
      {label}
    </span>
  )
}

function formatDate(d: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('it-IT', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

function BandoCard({ bando }: { bando: Bando }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow h-full">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 flex-1">
          {bando.titolo ?? 'Bando senza titolo'}
        </h3>
        <StatoBadge stato={bando.stato} />
      </div>
      {bando.descrizione && (
        <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
          {bando.descrizione}
        </p>
      )}
      <div className="mt-auto space-y-1 text-xs text-gray-500">
        {bando.soggetto_concedente && (
          <p><span className="font-medium">Ente:</span> {bando.soggetto_concedente}</p>
        )}
        {bando.regioni && (
          <p><span className="font-medium">Regioni:</span> {bando.regioni}</p>
        )}
        {bando.forma_agevolazione && (
          <p><span className="font-medium">Agevolazione:</span> {bando.forma_agevolazione}</p>
        )}
        <p>
          <span className="font-medium">Apertura:</span> {formatDate(bando.data_apertura)}
          {bando.data_chiusura && (
            <> · <span className="font-medium">Chiusura:</span> {formatDate(bando.data_chiusura)}</>
          )}
        </p>
      </div>
      {bando.link_istituzionale && (
        <a
          href={bando.link_istituzionale}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:underline mt-1 inline-block truncate"
        >
          Sito ufficiale →
        </a>
      )}
    </div>
  )
}

export const revalidate = 3600

export default async function BandiUpdatedPage() {
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data: bandi, error } = await supabase
    .from('bandi')
    .select('*')
    .order('aggiornato_il', { ascending: false })
    .limit(500)

  const aperti = bandi?.filter(b => b.stato === 'aperto') ?? []
  const inArrivo = bandi?.filter(b => b.stato === 'in_arrivo') ?? []
  const chiusi = bandi?.filter(b => b.stato === 'chiuso') ?? []

  return (
    <>
      <PageHeader
        title="Bandi Aggiornati in Tempo Reale"
        description="Dati ufficiali aggiornati ogni notte da incentivi.gov.it — il portale nazionale delle agevolazioni pubbliche."
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {[
            { label: 'Bandi Aperti', value: aperti.length, color: 'bg-green-100 text-green-800' },
            { label: 'In Arrivo', value: inArrivo.length, color: 'bg-yellow-100 text-yellow-800' },
            { label: 'Chiusi', value: chiusi.length, color: 'bg-gray-100 text-gray-600' },
          ].map(s => (
            <span key={s.label} className={`px-4 py-1.5 rounded-full text-sm font-semibold ${s.color}`}>
              {s.value} {s.label}
            </span>
          ))}
        </div>
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-red-700">
            Errore nel caricamento. Riprova tra qualche minuto.
          </div>
        )}
        {aperti.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              Bandi Aperti
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">{aperti.length}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aperti.map(b => <BandoCard key={b.id} bando={b} />)}
            </div>
          </section>
        )}
        {inArrivo.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              In Arrivo
              <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">{inArrivo.length}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inArrivo.map(b => <BandoCard key={b.id} bando={b} />)}
            </div>
          </section>
        )}
        {chiusi.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              Bandi Chiusi
              <span className="bg-gray-100 text-gray-600 text-sm font-semibold px-3 py-1 rounded-full">{chiusi.length}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chiusi.map(b => <BandoCard key={b.id} bando={b} />)}
            </div>
          </section>
        )}
        {(!bandi || bandi.length === 0) && (
          <div className="text-center py-24 text-gray-500">
            <p className="text-xl font-medium mb-2">Nessun bando disponibile al momento</p>
            <p className="text-sm">Il database viene aggiornato ogni notte alle 2:00.</p>
          </div>
        )}
        <div className="mt-8 text-center text-xs text-gray-400">
          Dati aggiornati ogni notte dalla fonte:{' '}
          <a href="https://www.incentivi.gov.it/it/open-data" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
            incentivi.gov.it
          </a>
          {' '}· Licenza IODL v2.0
        </div>
      </div>
    </>
  )
}
