import type { CaseStudy } from "./types"

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "acquisizione-settore-manifatturiero",
    title: "Acquisizione Strategica nel Settore Manifatturiero",
    client: "Leading Manufacturing Group",
    sector: "Manifatturiero",
    challenge: "Un gruppo industriale italiano cercava di espandersi attraverso l'acquisizione di un competitor strategico per consolidare la propria posizione di mercato e realizzare sinergie operative significative.",
    solution: "Abbiamo supportato il cliente in tutte le fasi dell'operazione: identificazione del target, valutazione, due diligence finanziaria e operativa, negoziazione dei termini e strutturazione dell'operazione. Il nostro team ha coordinato tutti gli advisor coinvolti garantendo una gestione efficiente del processo.",
    results: [
      {
        metric: "Valore dell'operazione",
        value: "€45M"
      },
      {
        metric: "Sinergie annue stimate",
        value: "€8M"
      },
      {
        metric: "Tempo di closing",
        value: "6 mesi"
      }
    ],
    services: ["ma-advisory"],
    featured: true,
    publishDate: new Date("2024-09-15")
  },
  {
    id: "2",
    slug: "fundraising-tech-startup",
    title: "Fundraising Serie A per Tech Startup",
    client: "Innovative Tech Company",
    sector: "Technology",
    challenge: "Una startup tecnologica in forte crescita necessitava di capitale per accelerare lo sviluppo prodotto e l'espansione commerciale internazionale.",
    solution: "Abbiamo strutturato la strategia di fundraising, preparato il business plan e i materiali per gli investitori, identificato e contattato i potenziali investitori più adatti, e supportato la negoziazione della term sheet e del contratto di investimento.",
    results: [
      {
        metric: "Capitale raccolto",
        value: "€12M"
      },
      {
        metric: "Valutazione post-money",
        value: "€50M"
      },
      {
        metric: "Investitori coinvolti",
        value: "3 VC funds"
      }
    ],
    services: ["corporate-finance"],
    featured: true,
    publishDate: new Date("2024-11-20")
  },
  {
    id: "3",
    slug: "ristrutturazione-debito-retail",
    title: "Ristrutturazione Debito Catena Retail",
    client: "Retail Chain",
    sector: "Retail",
    challenge: "Una catena retail con oltre 50 punti vendita si trovava in una situazione di tensione finanziaria a causa dell'elevato indebitamento e della diminuzione dei margini operativi.",
    solution: "Abbiamo analizzato la situazione finanziaria, preparato un piano di ristrutturazione sostenibile, negoziato con il pool di banche creditrici ottenendo la sospensione delle rate e la ristrutturazione del debito con allungamento delle scadenze.",
    results: [
      {
        metric: "Debito ristrutturato",
        value: "€28M"
      },
      {
        metric: "Risparmio annuo oneri finanziari",
        value: "€1.2M"
      },
      {
        metric: "Allungamento scadenze",
        value: "5 anni"
      }
    ],
    services: ["debt-advisory"],
    featured: true,
    publishDate: new Date("2024-08-10")
  },
  {
    id: "4",
    slug: "investimento-real-estate-logistica",
    title: "Investimento in Asset Logistico",
    client: "Real Estate Fund",
    sector: "Real Estate / Logistica",
    challenge: "Un fondo immobiliare cercava opportunità di investimento nel settore logistico, con focus su asset di qualità in posizioni strategiche.",
    solution: "Abbiamo identificato e valutato diverse opportunità, condotto la due diligence tecnica ed economico-finanziaria, e strutturato l'operazione di acquisizione attraverso un veicolo dedicato.",
    results: [
      {
        metric: "Valore asset acquisito",
        value: "€35M"
      },
      {
        metric: "Yield atteso",
        value: "6.5%"
      },
      {
        metric: "Superficie GLA",
        value: "45,000 mq"
      }
    ],
    services: ["real-estate-advisory"],
    featured: false,
    publishDate: new Date("2024-10-05")
  },
  {
    id: "5",
    slug: "pianificazione-successoria-family-business",
    title: "Pianificazione Successoria Family Business",
    client: "Family Business",
    sector: "Multi-settore",
    challenge: "Una famiglia imprenditoriale alla seconda generazione necessitava di pianificare il passaggio generazionale e la governance del patrimonio familiare.",
    solution: "Abbiamo supportato la famiglia nella definizione della governance, nella pianificazione successoria con ottimizzazione fiscale, e nella strutturazione di un family office per la gestione coordinata del patrimonio.",
    results: [
      {
        metric: "Patrimonio gestito",
        value: "€120M"
      },
      {
        metric: "Risparmio fiscale stimato",
        value: "€4.5M"
      },
      {
        metric: "Membri famiglia coinvolti",
        value: "8"
      }
    ],
    services: ["family-office"],
    featured: false,
    publishDate: new Date("2024-07-22")
  },
  {
    id: "6",
    slug: "sustainability-reporting-corporate",
    title: "Implementazione Strategia ESG e Sustainability Report",
    client: "Listed Company",
    sector: "Industria",
    challenge: "Un'azienda quotata doveva implementare una strategia ESG strutturata e predisporre il primo bilancio di sostenibilità secondo gli standard GRI.",
    solution: "Abbiamo condotto un assessment ESG, definito la strategia di sostenibilità con KPI misurabili, implementato i processi di raccolta dati, e redatto il sustainability report certificato.",
    results: [
      {
        metric: "Rating ESG ottenuto",
        value: "A-"
      },
      {
        metric: "Riduzione emissioni CO2 pianificata",
        value: "-30% entro 2030"
      },
      {
        metric: "Standard reporting",
        value: "GRI + TCFD"
      }
    ],
    services: ["esg-sustainability"],
    featured: false,
    publishDate: new Date("2024-12-01")
  }
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getFeaturedCaseStudies(count: number = 3): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured).slice(0, count)
}

export function getCaseStudiesByService(serviceId: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.services.includes(serviceId))
}
