'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type Bando = {
  id: string
  titolo: string
  descrizione: string
  data_apertura: string | null
  data_chiusura: string | null
  stato: string
  forma_agevolazione: string | null
  regioni: string | null
  soggetto_concedente: string | null
  link_istituzionale: string | null
  aggiornato_il: string | null
  settori: string | null
  dimensioni: string | null
  tipologia_soggetto: string | null
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
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colors[stato] ?? 'bg-gray-100 text-gray-800'}`}>
      {labels[stato] ?? stato}
    </span>
  )
}

function formatDate(d: string | null) {
  if (!d) return 'â'
  return new Date(d).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })
}

function BandoCard({ bando }: { bando: Bando }) {
  return (
    <Link href={`/bandi-automatici/${bando.id}`} className="block h-full">
      <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-blue-200 transition-all h-full cursor-pointer">
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
            <p><span className="font-medium">Regioni:</span> {bando.regioni.split('|').slice(0, 3).join(', ')}{bando.regioni.split('|').length > 3 ? '...' : ''}</p>
          )}
          {bando.forma_agevolazione && (
            <p><span className="font-medium">Agevolazione:</span> {bando.forma_agevolazione}</p>
          )}
          <p>
            <span className="font-medium">Apertura:</span> {formatDate(bando.data_apertura)}
            {bando.data_chiusura && <> Â· <span className="font-medium">Chiusura:</span> {formatDate(bando.data_chiusura)}</>}
          </p>
        </div>

        <span className="text-xs text-blue-600 font-medium mt-1">Vedi dettagli â</span>
      </div>
    </Link>
  )
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
        active
          ? 'bg-[#0a1628] text-white border-[#0a1628]'
          : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
      }`}
    >
      {label}
    </button>
  )
}

export default function BandiFilters({ bandi }: { bandi: Bando[] }) {
  const [statoFilter, setStatoFilter] = useState<string>('tutti')
  const [settoreFilter, setSettoreFilter] = useState<string>('tutti')
  const [dimensioneFilter, setDimensioneFilter] = useState<string>('tutti')

  // Derive unique filter options from data
  const settori = useMemo(() => {
    const set = new Set<string>()
    bandi.forEach(b => {
      if (b.settori) b.settori.split('|').forEach(s => { const t = s.trim(); if (t) set.add(t) })
    })
    return Array.from(set).sort().slice(0, 15)
  }, [bandi])

  const dimensioni = useMemo(() => {
    const set = new Set<string>()
    bandi.forEach(b => {
      if (b.dimensioni) b.dimensioni.split('|').forEach(s => { const t = s.trim(); if (t) set.add(t) })
    })
    return Array.from(set).sort()
  }, [bandi])

  const filtered = useMemo(() => {
    return bandi.filter(b => {
      if (statoFilter !== 'tutti' && b.stato !== statoFilter) return false
      if (settoreFilter !== 'tutti') {
        const items = (b.settori || '').split('|').map(s => s.trim())
        if (!items.includes(settoreFilter)) return false
      }
      if (dimensioneFilter !== 'tutti') {
        const items = (b.dimensioni || '').split('|').map(s => s.trim())
        if (!items.includes(dimensioneFilter)) return false
      }
      return true
    })
  }, [bandi, statoFilter, settoreFilter, dimensioneFilter])

  const aperti = filtered.filter(b => b.stato === 'aperto')
  const inArrivo = filtered.filter(b => b.stato === 'in_arrivo')
  const chiusi = filtered.filter(b => b.stato === 'chiuso')

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Contatori */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {[
          { label: `${aperti.length} Bandi Aperti`, color: 'bg-green-100 text-green-800' },
          { label: `${inArrivo.length} In Arrivo`, color: 'bg-yellow-100 text-yellow-800' },
          { label: `${chiusi.length} Chiusi`, color: 'bg-gray-100 text-gray-600' },
        ].map(stat => (
          <span key={stat.label} className={`px-4 py-1.5 rounded-full text-sm font-semibold ${stat.color}`}>
            {stat.label}
          </span>
        ))}
      </div>

      {/* Filtri */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 space-y-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Filtra per</p>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-gray-500 w-16">Stato:</span>
          {['tutti', 'aperto', 'in_arrivo', 'chiuso'].map(v => (
            <FilterPill
              key={v}
              label={v === 'tutti' ? 'Tutti' : v === 'in_arrivo' ? 'In Arrivo' : v.charAt(0).toUpperCase() + v.slice(1)}
              active={statoFilter === v}
              onClick={() => setStatoFilter(v)}
            />
          ))}
        </div>

        {dimensioni.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-500 w-16">Dimensione:</span>
            <FilterPill label="Tutte" active={dimensioneFilter === 'tutti'} onClick={() => setDimensioneFilter('tutti')} />
            {dimensioni.map(d => (
              <FilterPill key={d} label={d} active={dimensioneFilter === d} onClick={() => setDimensioneFilter(d)} />
            ))}
          </div>
        )}

        {settori.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-500 w-16">Settore:</span>
            <FilterPill label="Tutti" active={settoreFilter === 'tutti'} onClick={() => setSettoreFilter('tutti')} />
            {settori.map(s => (
              <FilterPill key={s} label={s} active={settoreFilter === s} onClick={() => setSettoreFilter(s)} />
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">Nessun bando corrisponde ai filtri selezionati</p>
          <button
            onClick={() => { setStatoFilter('tutti'); setSettoreFilter('tutti'); setDimensioneFilter('tutti') }}
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            Rimuovi tutti i filtri
          </button>
        </div>
      )}

      {/* Bandi Aperti */}
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

      {/* In Arrivo */}
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

      {/* Chiusi */}
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

      <div className="mt-8 text-center text-xs text-gray-400">
        Dati aggiornati ogni notte dalla fonte:{' '}
        <a href="https://www.incentivi.gov.it/it/open-data" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
          incentivi.gov.it
        </a>{' '}Â· Licenza IODL v2.0
      </div>
    </div>
  )
}
