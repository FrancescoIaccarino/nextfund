import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Target,
  Users,
  Award,
  CheckCircle2,
  Shield,
  Lightbulb,
  Handshake,
  Heart,
  Sparkles,
  Search,
  FileCheck,
  ClipboardCheck,
  FileText,
  BadgeCheck,
  Factory,
  Cpu,
  Leaf,
  Utensils,
  Hotel,
  ShoppingBag,
  Headphones,
  MessageCircle,
  Settings,
  BarChart3
} from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"

// Valori aziendali
const valori = [
  {
    icon: Shield,
    title: "Integrita",
    description: "Operiamo con trasparenza e onesta in ogni interazione, costruendo relazioni basate sulla fiducia reciproca."
  },
  {
    icon: Handshake,
    title: "Collaborazione",
    description: "Lavoriamo fianco a fianco con i nostri clienti, creando partnership durature orientate al successo comune."
  },
  {
    icon: Award,
    title: "Eccellenza",
    description: "Puntiamo sempre ai massimi standard qualitativi, con aggiornamento costante e miglioramento continuo."
  },
  {
    icon: Heart,
    title: "Responsabilita Sociale",
    description: "Crediamo nel valore delle imprese come motore di sviluppo sostenibile per il territorio e la comunita."
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description: "Mettiamo le aziende nelle condizioni di crescere autonomamente, trasferendo competenze e strumenti."
  }
]

// Pilastri fondamentali
const pilastri = [
  {
    icon: BarChart3,
    title: "Esperienza Consolidata",
    description: "Anni di specializzazione nel settore della finanza agevolata con centinaia di progetti gestiti con successo."
  },
  {
    icon: Settings,
    title: "Servizio Integrato",
    description: "Dalla pianificazione strategica alla rendicontazione finale: un unico partner per tutto il percorso."
  },
  {
    icon: Lightbulb,
    title: "Innovazione Continua",
    description: "Aggiornamento costante su opportunita, normative e trend per offrire sempre soluzioni all'avanguardia."
  },
  {
    icon: Users,
    title: "Partnership Qualificate",
    description: "Network di professionisti specializzati in ambito tecnico, legale e fiscale per un supporto completo."
  }
]

// Il Metodo NextFund - 5 Step
const metodoSteps = [
  {
    number: "01",
    icon: Search,
    title: "Analisi Preliminare",
    description: "Analisi approfondita del contesto aziendale, verifica dei massimali de minimis e mappatura delle opportunita disponibili."
  },
  {
    number: "02",
    icon: Target,
    title: "Scouting",
    description: "Identificazione delle opportunita di agevolazione piu adatte al profilo aziendale e agli obiettivi di investimento."
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Studio di Fattibilita",
    description: "Verifica della coerenza progettuale con i requisiti del bando e assessment dei requisiti aziendali necessari."
  },
  {
    number: "04",
    icon: FileText,
    title: "Progettazione",
    description: "Traduzione delle priorita di investimento nel linguaggio tecnico del bando con documentazione completa."
  },
  {
    number: "05",
    icon: BadgeCheck,
    title: "Gestione e Rendicontazione",
    description: "Supporto continuo fino all'erogazione effettiva dei fondi con rendicontazione certificata e conforme."
  }
]

// Politica della Qualita
const qualita = [
  {
    icon: Headphones,
    title: "Ascolto del Cliente",
    description: "Comprensione profonda dei bisogni espliciti e impliciti per soluzioni realmente su misura."
  },
  {
    icon: Users,
    title: "Coinvolgimento del Personale",
    description: "Team responsabilizzato e consapevole degli obiettivi, con formazione continua e specializzazione."
  },
  {
    icon: CheckCircle2,
    title: "Qualita dei Servizi",
    description: "Consulenza sempre in linea con gli accordi stipulati e le normative vigenti."
  },
  {
    icon: Settings,
    title: "Efficienza Operativa",
    description: "Processi ottimizzati per risultati sostenibili e tempi di risposta rapidi."
  }
]

// Settori di Specializzazione
const settori = [
  { icon: Factory, name: "Manufacturing & Industria", description: "Produzione, automazione e innovazione industriale" },
  { icon: Cpu, name: "Tecnologia & Digitale", description: "ICT, software, AI e trasformazione digitale" },
  { icon: Leaf, name: "Energia & Sostenibilita", description: "Rinnovabili, efficienza energetica, economia circolare" },
  { icon: Utensils, name: "Agroalimentare", description: "Agricoltura, food processing e filiera agroalimentare" },
  { icon: Hotel, name: "Turismo & Hospitality", description: "Strutture ricettive, ristorazione e servizi turistici" },
  { icon: ShoppingBag, name: "Commercio & Retail", description: "Distribuzione, e-commerce e punti vendita" }
]

// Statistiche
const stats = [
  { value: "95%", label: "Tasso di Successo" },
  { value: "200+", label: "Progetti Gestiti" },
  { value: "50M+", label: "Euro Ottenuti" },
  { value: "10+", label: "Anni di Esperienza" }
]

export default function ChiSiamoPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeader
        title="La Boutique della Finanza Agevolata"
        description="Siamo il partner strategico che trasforma le opportunita di finanziamento in leve concrete per la crescita della tua impresa. Competenza, dedizione e risultati misurabili."
      />

      {/* Chi Siamo - Introduzione */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 text-sm px-4 py-1.5">
                Chi Siamo
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-8">
                Un team dedicato al
                <span className="text-primary block mt-2">successo della tua impresa</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                NextFund Advisory e una boutique di consulenza specializzata in finanza agevolata che supporta le imprese italiane nell'accesso a bandi, contributi a fondo perduto e agevolazioni fiscali. Uniamo competenza tecnica, visione strategica e un approccio personalizzato per massimizzare le opportunita di finanziamento.
              </p>
            </div>

            {/* Stats Grid - REMOVED */}
            {/* 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-6 bg-muted/30">
                  <div className="text-3xl md:text-4xl font-display text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Pilastri Fondamentali */}
      <section className="py-24 bg-secondary">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-sm px-4 py-1.5">
              I Nostri Pilastri
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
              Cosa ci rende
              <span className="text-primary block mt-2">diversi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quattro pilastri fondamentali guidano ogni nostro progetto e definiscono il nostro approccio al lavoro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pilastri.map((pilastro, idx) => (
              <Card key={idx} className="bg-card border-border hover:shadow-elegant-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <pilastro.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-3">{pilastro.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pilastro.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valori Aziendali */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-sm px-4 py-1.5">
              I Nostri Valori
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
              I principi che
              <span className="text-primary block mt-2">ci guidano</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cinque valori fondamentali che definiscono chi siamo e come operiamo ogni giorno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valori.map((valore, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-muted/30 hover:bg-muted/50 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <valore.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-foreground mb-2">{valore.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{valore.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Il Metodo NextFund - Timeline */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5 bg-white/10 text-white border-white/20 hover:bg-white/10">
              Il Nostro Metodo
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6">
              5 Step per il
              <span className="text-white/90 italic ml-2">Successo</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Un percorso strutturato e collaudato che ti accompagna dalla prima analisi fino all'erogazione dei fondi.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
              {metodoSteps.map((step, idx) => (
                <div key={idx} className="relative group flex flex-col items-center text-center">
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-white/5 border border-white/10 shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-elegant transition-all duration-300">
                    <step.icon className="w-7 h-7 text-white/70 group-hover:text-white transition-colors duration-300" />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-primary border border-white/20 flex items-center justify-center text-xs font-serif font-medium group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-display text-white group-hover:text-white/90 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Politica della Qualita */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <Badge variant="outline" className="mb-6 text-sm px-4 py-1.5">
                  Politica della Qualita
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
                  La qualita come
                  <span className="text-primary block mt-2">garanzia di risultati</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Il nostro sistema di gestione della qualita si basa su principi chiari che garantiscono servizi eccellenti e risultati concreti per ogni cliente.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="text-sm px-3 py-1">Compliance Garantita</Badge>
                  <Badge variant="secondary" className="text-sm px-3 py-1">Trasparenza Totale</Badge>
                </div>
              </div>

              {/* Right Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {qualita.map((item, idx) => (
                  <div key={idx} className="p-6 bg-muted/30">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-display text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Settori di Specializzazione */}
      <section className="py-24 bg-secondary">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-sm px-4 py-1.5">
              Settori di Specializzazione
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
              Esperienza trasversale
              <span className="text-primary block mt-2">in molteplici settori</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Abbiamo maturato competenze specifiche in diversi comparti industriali, permettendoci di offrire consulenza mirata e soluzioni su misura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {settori.map((settore, idx) => (
              <Card key={idx} className="bg-card border-border hover:shadow-elegant transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <settore.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display text-foreground mb-1">{settore.name}</h3>
                      <p className="text-sm text-muted-foreground">{settore.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 mb-8">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
              Pronto a far crescere
              <span className="text-primary block mt-2">la tua impresa?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Scopri come possiamo aiutarti ad accedere alle migliori opportunita di finanziamento.
              La prima consulenza e gratuita e senza impegno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/contatti">
                  Richiedi una Consulenza
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8">
                <Link href="/servizi">
                  Scopri i Servizi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
