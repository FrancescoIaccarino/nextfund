import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/layout/PageHeader'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

type Bando = {
  id: string
  titolo: string
  descrizione: string
  obiettivi: string | null
  data_apertura: string | null
  data_chiusura: string | null
  stato: string
  forma_agevolazione: string | null
  regioni: string | null
  soggetto_concedente: string | null
  link_istituzionale: string | null
  aggiornato_il: string | null
  dimensioni: string | null
  tipologia_soggetto: string | null
  costi_ammessi: string | null
  spesa_min: string | null
  spesa_max: string | null
  agevolazione_min: string | null
  agevolazione_max: string | null
  settori: string | null
  comuni: string | null
  base_normativa: string | null
  stanziamento: string | null
  note_chiusura: string | null
  codici_ateco: string | null
  cambio_territoriale: string | null
}

function StatoBadge({ stato }: { stato: string }) {
  const colors: Record<string, string> = {
    aperto: 'bg-green-100 text-green-800 border border-green-200',
    chiuso: 'bg-red-100 text-red-800 border border-red-200',
    in_arrivo: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
  }
  const labels: Record<string, string> = {
    aperto: 'â Aperto',
    chiuso: 'â Chiuso',
    in_arrivo: 'â In Arrivo',
  }
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors[stato] ?? 'bg-gray-100 text-gray-700'}`}>
      {labels[stato] ?? stato}
    </span>
  )
}

function formatDate(d: string | null) {
  if (!d) return null
  return new Date(d).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })
}

function formatCurrency(val: string | null) {
  if (!val) return null
  const num = parseFloat(val)
  if (isNaN(num)) return val
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num)
}

function TagList({ value, label }: { value: string | null; label: string }) {
  if (!value) return null
  const items = value.split('|').map(s => s.trim()).filter(Boolean)
  if (items.length === 0) return null
  return (
    <div>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded-md border border-blue-100">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string | null }) {
  if (!value) return null
  return (
    <div className="flex gap-3">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-32 shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-gray-800">{value}</span>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <h2 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

export const revalidate = 3600

export default async function BandoAutomaticoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = createClient(supabaseUrl, supabaseKey)
  const { data: bando, error } = await supabase
    .from('bandi')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !bando) notFound()

  const b = bando as Bando

  return (
    <>
      {/* Header */}
      <div className="bg-[#0a1628] text-white">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <Link
            href="/bandi-updated"
            className="text-blue-300 hover:text-white text-sm mb-6 inline-flex items-center gap-1 transition-colors"
          >
            â Torna ai Bandi Automatici
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <StatoBadge stato={b.stato} />
            {b.forma_agevolazione && (
              <span className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/20">
                {b.forma_agevolazione}
              </span>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">{b.titolo}</h1>
          {b.soggetto_concedente && (
            <p className="text-blue-200 text-sm font-medium">{b.soggetto_concedente}</p>
          )}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
            {b.data_apertura && (
              <span>Apertura: <span className="text-white/90">{formatDate(b.data_apertura)}</span></span>
            )}
            {b.data_chiusura && (
              <span>Chiusura: <span className="text-white/90">{formatDate(b.data_chiusura)}</span></span>
            )}
            {b.aggiornato_il && (
              <span>Aggiornato: <span className="text-white/90">{formatDate(b.aggiornato_il)}</span></span>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">

        {/* Obiettivi / Descrizione */}
        {(b.obiettivi || b.descrizione) && (
          <Section title="Obiettivi">
            {b.obiettivi && <p className="text-sm text-gray-700 leading-relaxed">{b.obiettivi}</p>}
            {b.descrizione && !b.obiettivi && <p className="text-sm text-gray-700 leading-relaxed">{b.descrizione}</p>}
          </Section>
        )}

        {/* A chi si rivolge */}
        {(b.tipologia_soggetto || b.dimensioni || b.regioni || b.comuni || b.settori || b.codici_ateco) && (
          <Section title="A chi si rivolge">
            <TagList value={b.tipologia_soggetto} label="Tipologia Soggetto" />
            <TagList value={b.dimensioni} label="Dimensione Azienda" />
            <TagList value={b.regioni} label="Regioni" />
            <TagList value={b.comuni} label="Comuni" />
            <TagList value={b.settori} label="Settori Ammessi" />
            <TagList value={b.codici_ateco} label="Codici ATECO" />
          </Section>
        )}

        {/* Cosa finanzia */}
        {(b.costi_ammessi || b.descrizione) && (
          <Section title="Cosa finanzia">
            {b.costi_ammessi && <p className="text-sm text-gray-700 leading-relaxed">{b.costi_ammessi}</p>}
            {!b.costi_ammessi && b.descrizione && (
              <p className="text-sm text-gray-700 leading-relaxed">{b.descrizione}</p>
            )}
          </Section>
        )}

        {/* Agevolazioni */}
        {(b.forma_agevolazione || b.agevolazione_min || b.agevolazione_max || b.spesa_min || b.spesa_max || b.stanziamento) && (
          <Section title="Agevolazioni">
            <InfoRow label="Forma" value={b.forma_agevolazione} />
            {(b.agevolazione_min || b.agevolazione_max) && (
              <InfoRow
                label="Contributo"
                value={[formatCurrency(b.agevolazione_min), formatCurrency(b.agevolazione_max)]
                  .filter(Boolean)
                  .join(' \u2013 ')}
              />
            )}
            {(b.spesa_min || b.spesa_max) && (
              <InfoRow
                label="Spesa Ammessa"
                value={[formatCurrency(b.spesa_min), formatCurrency(b.spesa_max)]
                  .filter(Boolean)
                  .join(' \u2013 ')}
              />
            )}
            <InfoRow label="Stanziamento" value={formatCurrency(b.stanziamento)} />
          </Section>
        )}

        {/* Base Normativa */}
        {b.base_normativa && (
          <Section title="Base Normativa">
            <p className="text-sm text-gray-700 leading-relaxed">{b.base_normativa}</p>
          </Section>
        )}

        {/* Note chiusura */}
        {b.note_chiusura && (
          <Section title="Note">
            <p className="text-sm text-gray-700 leading-relaxed">{b.note_chiusura}</p>
          </Section>
        )}

        {/* Link ufficiale */}
        {(b.link_istituzionale) && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Vuoi approfondire?</p>
              <p className="text-xs text-gray-500">Visita il sito ufficiale del bando per tutta la documentazione.</p>
            </div>
            <a
              href={b.link_istituzionale}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#0a1628] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#1a2e4a] transition-colors"
            >
              Sito ufficiale â
            </a>
          </div>
        )}

        <p className="text-center text-xs text-gray-400 pt-4">
          Dati da{' '}
          <a href="https://www.incentivi.gov.it/it/open-data" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
            incentivi.gov.it
          </a>{' '}
          Â· Licenza IODL v2.0
        </p>
      </div>
    </>
  )
}
