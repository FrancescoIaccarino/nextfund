'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'

// --- Types ---
type Bando = {
  id: string
  titolo: string
  descrizione: string | null
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
  agevolazione_max: string | null
  stanziamento: string | null
}

// --- Helpers ---
function parseVals(str: string | null): string[] {
  if (!str) return []
  return str.split(/[|,;]/).map(s => s.trim()).filter(Boolean)
}

function uniqueVals(bandi: Bando[], field: keyof Bando): string[] {
  const set = new Set<string>()
  for (const b of bandi) {
    for (const v of parseVals(b[field] as string | null)) set.add(v)
  }
  return Array.from(set).sort()
}

function fmtCurrency(val: string | null): string | null {
  if (!val) return null
  const n = parseFloat(val)
  if (isNaN(n) || n <= 0) return null
  const eur = '\u20AC'
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace('.0', '')}M ${eur}`
  if (n >= 1_000) return `${Math.round(n / 1_000)}K ${eur}`
  return `${n.toLocaleString('it-IT')} ${eur}`
}

function fmtDate(d: string | null): string | null {
  if (!d) return null
  try {
    return new Date(d).toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return null
  }
}

// --- Status config ---
const STATO: Record<string, { label: string; dot: string; pill: string; stripe: string }> = {
  aperto: {
    label: 'Aperto',
    dot: 'bg-emerald-500',
    pill: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    stripe: 'bg-emerald-500',
  },
  chiuso: {
    label: 'Chiuso',
    dot: 'bg-red-400',
    pill: 'bg-red-50 text-red-700 border-red-200',
    stripe: 'bg-red-400',
  },
  in_arrivo: {
    label: 'In Arrivo',
    dot: 'bg-amber-400',
    pill: 'bg-amber-50 text-amber-800 border-amber-200',
    stripe: 'bg-amber-400',
  },
}

const PAGE_SIZE = 50

// --- BandoCard ---
function BandoCard({ b }: { b: Bando }) {
  const cfg = STATO[b.stato] ?? {
    label: b.stato,
    dot: 'bg-gray-400',
    pill: 'bg-gray-100 text-gray-700 border-gray-200',
    stripe: 'bg-gray-400',
  }
  const ente = b.soggetto_concedente
    ? b.soggetto_concedente.replace(/\\/g, '').split(/[,|]/)[0].trim()
    : null
  const settoriTags = parseVals(b.settori).slice(0, 2)
  const extraTags = Math.max(0, parseVals(b.settori).length - 2)
  const budget = fmtCurrency(b.agevolazione_max) ?? fmtCurrency(b.stanziamento)
  const scadenza = fmtDate(b.data_chiusura)

  return (
    <Link
      href={`/bandi-automatici/${b.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      {/* Top colour stripe */}
      <div className={`h-1 w-full ${cfg.stripe} group-hover:h-1.5 transition-all`} />
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Header: badge + scadenza */}
        <div className="flex items-start justify-between gap-2 min-h-[28px]">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border shrink-0 ${cfg.pill}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
            {cfg.label}
          </span>
          {scadenza && b.stato !== 'chiuso' && (
            <span className="text-[11px] text-gray-400 mt-0.5 shrink-0">
              Scade {scadenza}
            </span>
          )}
        </div>
        {/* Title - 3 lines max */}
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-700 transition-colors flex-1">
          {b.titolo || 'Titolo non disponibile'}
        </h3>
        {/* Entity */}
        {ente && (
          <p className="text-xs text-gray-500 line-clamp-1 -mt-1">{ente}</p>
        )}
        {/* Footer: tags + budget */}
        <div className="flex items-end justify-between gap-2 pt-3 border-t border-gray-100 mt-auto">
          <div className="flex flex-wrap gap-1 min-w-0">
            {settoriTags.map((t, i) => (
              <span
                key={i}
                className="bg-blue-50 text-blue-700 text-[11px] px-2 py-0.5 rounded-md border border-blue-100 truncate max-w-[140px]"
              >
                {t}
              </span>
            ))}
            {extraTags > 0 && (
              <span className="text-[11px] text-gray-400 self-center">
                +{extraTags}
              </span>
            )}
            {settoriTags.length === 0 && b.forma_agevolazione && (
              <span className="bg-purple-50 text-purple-700 text-[11px] px-2 py-0.5 rounded-md border border-purple-100 truncate max-w-[160px]">
                {parseVals(b.forma_agevolazione)[0] ?? b.forma_agevolazione}
              </span>
            )}
          </div>
          {budget && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 shrink-0">
              {budget}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

// --- FilterCombobox ---
function FilterCombobox({
  label,
  options,
  value,
  onChange,
  placeholder,
}: {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filtered = useMemo(
    () => options.filter(o => o.toLowerCase().includes(search.toLowerCase())),
    [options, search]
  )

  return (
    <div ref={ref} className="relative">
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
        {label}
      </p>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-left transition-all border ${
          value
            ? 'bg-blue-500/10 border-blue-500/30 text-blue-300'
            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300'
        }`}
      >
        <span className="flex-1 truncate min-w-0">
          {value || (placeholder ?? 'Tutti')}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-gray-500 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1.5 bg-[#1b2a42] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
          {options.length > 6 && (
            <div className="p-2 border-b border-white/10">
              <input
                autoFocus
                type="text"
                placeholder="Cerca..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                onClick={e => e.stopPropagation()}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
              />
            </div>
          )}
          <div className="max-h-52 overflow-y-auto">
            <button
              type="button"
              onClick={() => { onChange(''); setOpen(false); setSearch('') }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                !value ? 'text-blue-400 bg-blue-500/10' : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'
              }`}
            >
              Tutti
            </button>
            {filtered.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); setSearch('') }}
                className={`w-full text-left px-3 py-2 text-sm leading-tight transition-colors ${
                  value === opt
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="px-3 py-3 text-xs text-gray-500 text-center">
                Nessun risultato
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// --- Pagination ---
function Pagination({
  page,
  totalPages,
  onPage,
}: {
  page: number
  totalPages: number
  onPage: (p: number) => void
}) {
  if (totalPages <= 1) return null

  const MAX_VISIBLE = 7
  let startPage = Math.max(1, page - Math.floor(MAX_VISIBLE / 2))
  const endPage = Math.min(totalPages, startPage + MAX_VISIBLE - 1)
  if (endPage - startPage < MAX_VISIBLE - 1) {
    startPage = Math.max(1, endPage - MAX_VISIBLE + 1)
  }
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

  return (
    <div className="flex items-center justify-center gap-1.5 py-8">
      <button
        onClick={() => onPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        &lsaquo;
      </button>
      {startPage > 1 && (
        <>
          <button onClick={() => onPage(1)} className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors">1</button>
          {startPage > 2 && <span className="text-gray-400 text-sm px-1">...</span>}
        </>
      )}
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPage(p)}
          className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
            p === page
              ? 'bg-blue-600 border-blue-600 text-white font-medium'
              : 'border-gray-200 text-gray-600 hover:bg-gray-100'
          }`}
        >
          {p}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="text-gray-400 text-sm px-1">...</span>}
          <button onClick={() => onPage(totalPages)} className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors">{totalPages}</button>
        </>
      )}
      <button
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        &rsaquo;
      </button>
    </div>
  )
}

// --- Main BandiFilters ---
export default function BandiFilters({ bandi }: { bandi: Bando[] }) {
  const [search, setSearch] = useState('')
  const [stato, setStato] = useState('')
  const [settore, setSettore] = useState('')
  const [dimensione, setDimensione] = useState('')
  const [regione, setRegione] = useState('')
  const [soggetto, setSoggetto] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [page, setPage] = useState(1)

  // Option lists
  const settori = useMemo(() => uniqueVals(bandi, 'settori'), [bandi])
  const dimensioni = useMemo(() => uniqueVals(bandi, 'dimensioni'), [bandi])
  const regioni = useMemo(() => uniqueVals(bandi, 'regioni'), [bandi])
  const soggetti = useMemo(() => {
    const set = new Set<string>()
    for (const b of bandi) {
      const first = b.soggetto_concedente?.replace(/\\/g, '').split(/[,|]/)[0]?.trim()
      if (first) set.add(first)
    }
    return Array.from(set).sort()
  }, [bandi])

  // Status counts
  const counts = useMemo(() => {
    const c: Record<string, number> = { '': bandi.length, aperto: 0, in_arrivo: 0, chiuso: 0 }
    for (const b of bandi) if (b.stato in c) c[b.stato]++
    return c
  }, [bandi])

  // Active filter count
  const activeCount = [stato, settore, dimensione, regione, soggetto, search.trim()].filter(Boolean).length

  // Filtering logic
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return bandi.filter(b => {
      if (
        q &&
        !b.titolo?.toLowerCase().includes(q) &&
        !b.descrizione?.toLowerCase().includes(q) &&
        !b.soggetto_concedente?.toLowerCase().includes(q)
      ) return false
      if (stato && b.stato !== stato) return false
      if (settore && !parseVals(b.settori).includes(settore)) return false
      if (dimensione && !parseVals(b.dimensioni).includes(dimensione)) return false
      if (regione && !parseVals(b.regioni).includes(regione)) return false
      if (soggetto) {
        const first = b.soggetto_concedente?.replace(/\\/g, '').split(/[,|]/)[0]?.trim()
        if (first !== soggetto) return false
      }
      return true
    })
  }, [bandi, search, stato, settore, dimensione, regione, soggetto])

  // Reset page when filters change
  useEffect(() => { setPage(1) }, [search, stato, settore, dimensione, regione, soggetto])

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginatedFiltered = useMemo(
    () => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filtered, page]
  )

  const reset = () => {
    setSearch('')
    setStato('')
    setSettore('')
    setDimensione('')
    setRegione('')
    setSoggetto('')
    setPage(1)
  }

  // -- Sidebar inner --
  const SidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">Filtri</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {filtered.length} bandi trovati
            </p>
          </div>
          {activeCount > 0 && (
            <button
              onClick={reset}
              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-2.5 py-1.5 rounded-lg transition-all"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Azzera ({activeCount})
            </button>
          )}
        </div>
      </div>
      {/* Scrollable filter area */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-7">
        {/* Stato - button group */}
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
            Stato Bando
          </p>
          <div className="space-y-1">
            {(
              [
                { v: '', label: 'Tutti i bandi' },
                { v: 'aperto', label: 'Aperti' },
                { v: 'in_arrivo', label: 'In Arrivo' },
                { v: 'chiuso', label: 'Chiusi' },
              ] as const
            ).map(({ v, label }) => (
              <button
                key={v}
                onClick={() => setStato(v)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                  stato === v
                    ? 'bg-blue-500/15 text-blue-300 border border-blue-500/25'
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <span
                  className={
                    v === 'aperto'
                      ? 'text-emerald-400'
                      : v === 'in_arrivo'
                      ? 'text-amber-400'
                      : v === 'chiuso'
                      ? 'text-red-400'
                      : 'text-gray-300'
                  }
                >
                  {label}
                </span>
                <span
                  className={`text-xs font-mono px-1.5 py-0.5 rounded-md ${
                    stato === v ? 'bg-blue-500/20 text-blue-300' : 'bg-white/5 text-gray-500'
                  }`}
                >
                  {counts[v] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* Settore */}
        {settori.length > 0 && (
          <FilterCombobox
            label="Settore Attivit\u00E0"
            options={settori}
            value={settore}
            onChange={setSettore}
            placeholder="Tutti i settori"
          />
        )}
        {/* Dimensione */}
        {dimensioni.length > 0 && (
          <FilterCombobox
            label="Dimensione Impresa"
            options={dimensioni}
            value={dimensione}
            onChange={setDimensione}
            placeholder="Tutte le dimensioni"
          />
        )}
        {/* Regione */}
        {regioni.length > 0 && (
          <FilterCombobox
            label="Regione"
            options={regioni}
            value={regione}
            onChange={setRegione}
            placeholder="Tutte le regioni"
          />
        )}
        {/* Ente Concedente */}
        {soggetti.length > 0 && (
          <FilterCombobox
            label="Ente Concedente"
            options={soggetti}
            value={soggetto}
            onChange={setSoggetto}
            placeholder="Tutti gli enti"
          />
        )}
      </div>
    </div>
  )

  return (
    <div className="flex bg-gray-50" style={{ minHeight: 'calc(100vh - 80px)' }}>
      {/* -- Desktop sidebar -- */}
      <aside className="hidden lg:flex lg:w-64 xl:w-72 shrink-0 flex-col bg-[#0d1a2d] border-r border-white/5">
        {SidebarContent}
      </aside>

      {/* -- Mobile drawer -- */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="relative w-72 max-w-[85vw] flex flex-col bg-[#0d1a2d] h-full shadow-2xl z-10">
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-3.5 right-4 text-gray-400 hover:text-white z-20 p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {SidebarContent}
          </aside>
        </div>
      )}

      {/* -- Main content -- */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top search bar - sticks below the fixed header (h-16) */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center gap-3 sticky top-16 z-20">
          {/* Mobile: filter toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
            <span>Filtri</span>
            {activeCount > 0 && (
              <span className="bg-blue-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {activeCount}
              </span>
            )}
          </button>
          {/* Search input */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              placeholder="Cerca per titolo, ente, parola chiave..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
            />
          </div>
          {/* Result count */}
          <span className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500 shrink-0 tabular-nums">
            <span className="font-semibold text-gray-800">{filtered.length}</span>
            <span className="hidden md:inline text-gray-400">bandi</span>
          </span>
        </div>

        {/* Cards area */}
        <div className="flex-1 px-4 sm:px-6 py-6">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl border border-gray-200 flex items-center justify-center mb-5 shadow-sm">
                <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-800 font-semibold text-lg mb-1">
                Nessun bando trovato
              </h3>
              <p className="text-gray-400 text-sm max-w-xs mb-6">
                Prova a modificare i criteri di ricerca o azzera i filtri attivi.
              </p>
              <button
                onClick={reset}
                className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
              >
                Azzera filtri
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {paginatedFiltered.map(b => (
                  <BandoCard key={b.id} b={b} />
                ))}
              </div>
              <Pagination page={page} totalPages={totalPages} onPage={p => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }} />
            </>
          )}
        </div>
      </main>
    </div>
  )
}
