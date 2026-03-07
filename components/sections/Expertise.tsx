import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Building2, Lightbulb } from "lucide-react"

const expertiseItems = [
  {
    number: "01",
    icon: Cpu,
    title: "Transizione 4.0 e 5.0",
    description: "Crediti d'imposta per investimenti in tecnologia, digitalizzazione e sostenibilità. Massimizziamo il tuo accesso agli incentivi per macchinari innovativi e transizione green."
  },
  {
    number: "02",
    icon: Building2,
    title: "PNRR e Bandi Regionali",
    description: "Contributi a fondo perduto per digitalizzazione, innovazione e sviluppo territoriale. Navighiamo la complessità normativa per portarti ai fondi giusti."
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "R&S e Innovazione",
    description: "Incentivi per ricerca, sviluppo, design e brevetti. Valorizziamo i tuoi progetti innovativi con il giusto supporto finanziario pubblico."
  }
]

export function Expertise() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Esperti nelle principali aree di finanziamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competenze verticali sui bandi che contano per la crescita della tua PMI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                {/* Icon Area */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden flex items-center justify-center">
                  <Icon className="h-24 w-24 text-primary/70" strokeWidth={1.5} />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {item.number}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
