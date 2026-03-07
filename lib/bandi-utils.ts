// Utility functions for bandi pages

export interface Bando {
  "Nome Bando": string
  "Ente Erogante": string
  "Settori Ammessi": string
  "Cosa finanzia": string
  "Dimensione Azienda": string
  "Età Azienda (mesi)": string
  "Investimento Minimo": string
  "Investimento Massimo": string
  "Finanziamento % Fondo Perduto": string
  "Finanziamento % Tasso Zero": string
  "Tasso Interesse": string
  "Durata Finanziamento (anni)": string
  "Fatturato Max": string
  "Localizzazione": string
  "Note/Requisiti Speciali": string
  "Link Ufficiale": string
  "Tipo di Sportello": string
  "Dotazione Assoluta (€)": string
  "Numero Bandi Erogati per Anno": string
  "Valore Totale Erogato per Anno (€)": string
  "Percentuale Accettazione Domande": string
  "Valore medio": string
}

export type BandoCategoria = "startup" | "innovazione" | "sostenibilita" | "territoriale" | "finanziario"

// Map bandi to categories
export function getBandoCategoria(nomeBando: string): BandoCategoria {
  const nome = nomeBando.toLowerCase()

  if (
    nome.includes("on -") ||
    nome.includes("smart") ||
    nome.includes("femminile") ||
    nome.includes("resto al sud") ||
    nome.includes("autoimpiego") ||
    nome.includes("giovani")
  ) {
    return "startup"
  }

  if (
    nome.includes("digital") ||
    nome.includes("sabatini") ||
    nome.includes("beni strumentali")
  ) {
    return "innovazione"
  }

  if (
    nome.includes("net zero") ||
    nome.includes("economia circolare") ||
    nome.includes("efficienza energetica") ||
    nome.includes("contratto di sviluppo")
  ) {
    return "sostenibilita"
  }

  if (
    nome.includes("cresci al sud") ||
    nome.includes("181") ||
    nome.includes("crisi")
  ) {
    return "territoriale"
  }

  return "finanziario"
}

// Create URL slug from bando name
export function createSlug(nomeBando: string): string {
  return nomeBando
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

// Format currency
export function formatCurrency(value: string | number): string {
  if (typeof value === 'string') {
    // If already formatted, return as is
    if (value.includes('€') || value.toLowerCase().includes('milioni') || value.toLowerCase().includes('miliardi')) {
      return value
    }

    // Try to parse number
    const num = parseFloat(value.replace(/[^\d.]/g, ''))
    if (isNaN(num)) return value
    value = num
  }

  if (value >= 1000000) {
    return `€${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `€${(value / 1000).toFixed(0)}k`
  }
  return `€${value}`
}

// Get bando stato from tipo sportello
export function getBandoStato(tipoSportello: string): string {
  const tipo = tipoSportello?.toLowerCase() || ''

  if (tipo.includes('online') || tipo.includes('sportello')) {
    return 'Attivo'
  }
  if (tipo.includes('chiuso')) {
    return 'Chiuso'
  }
  if (tipo.includes('sospeso')) {
    return 'Sospeso'
  }

  return 'Sportello'
}

// Format percentage
export function formatPercentage(value: string): string {
  if (!value) return ''
  if (value.includes('%')) return value

  const num = parseFloat(value.replace(/[^\d.]/g, ''))
  if (isNaN(num)) return value

  return `${num}%`
}

// Clean and format text
export function cleanText(text: string): string {
  if (!text) return ''
  return text.trim().replace(/\s+/g, ' ')
}
