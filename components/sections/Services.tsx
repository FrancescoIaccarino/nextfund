import { Card } from "@/components/ui/card"
import { Search, FileText, Users, Cpu, Shield, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Scouting Bandi",
    description: "Monitoraggio continuo di opportunità nazionali, regionali ed europee con alert personalizzati basati sul profilo della tua azienda."
  },
  {
    icon: FileText,
    title: "Compilazione Domande",
    description: "Redazione completa di documentazione tecnica, business plan e modulistica per la presentazione dei bandi."
  },
  {
    icon: Users,
    title: "Consulenza Strategica",
    description: "Analisi di eligibilità, valutazione probabilità di successo e roadmap personalizzata allineata ai tuoi obiettivi di business."
  },
  {
    icon: Cpu,
    title: "Tecnologia AI",
    description: "Automazione intelligente per screening bandi, analisi requisiti e preparazione documentale con tempi ridotti fino al 60%."
  },
  {
    icon: Shield,
    title: "Supporto Post-Submission",
    description: "Assistenza per integrazioni, rendicontazione spese e gestione di tutti gli adempimenti amministrativi."
  },
  {
    icon: TrendingUp,
    title: "Monitoraggio Continuo",
    description: "Database aggiornato di normative, bandi e best practice per massimizzare le opportunità di finanziamento."
  }
]

export function Services() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Servizi completi per accedere ai bandi pubblici
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dalla scoperta delle opportunità fino all'ottenimento dei fondi: ti accompagniamo in ogni fase del processo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
