import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Search, FileCheck } from "lucide-react"

const processSteps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call Gratuita",
    description: "Conosciamo la tua azienda, gli obiettivi di crescita e valutiamo le opportunità di finanziamento disponibili. Ricevi feedback immediato su eligibilità e possibilità concrete in soli 30-45 minuti."
  },
  {
    number: "02",
    icon: Search,
    title: "Analisi e Strategia",
    description: "Screening completo dei bandi più adatti, analisi probabilità di successo e stima impatto economico. Ti presentiamo una roadmap personalizzata con priorità chiare e timeline dettagliata."
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Preparazione e Submission",
    description: "Redazione completa di business plan, documentazione tecnica e modulistica. Gestiamo l'intera submission e ti assistiamo post-approvazione per massimizzare l'importo ottenibile."
  }
]

export function Process() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Il nostro processo in 3 step
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dalla prima call all'ottenimento dei fondi: un percorso semplice e trasparente
          </p>
        </div>

        <div className="space-y-24">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Icon */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden relative flex items-center justify-center">
                    <Icon className="h-32 w-32 text-primary/70" strokeWidth={1.5} />
                    <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground text-lg px-4 py-2">
                      {step.number}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <Button variant="outline">
                    Scopri di più
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
