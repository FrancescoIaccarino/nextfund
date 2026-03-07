import { Zap, Cpu, MessageCircle, Target, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Velocità di Esecuzione",
    description: "Tempi ridotti del 60% rispetto a consulenti tradizionali grazie all'automazione intelligente."
  },
  {
    icon: Cpu,
    title: "Tecnologia AI",
    description: "Screening automatico, analisi eligibilità e template intelligenti per massima efficienza."
  },
  {
    icon: MessageCircle,
    title: "Trasparenza Totale",
    description: "Comunicazione chiara su costi, tempistiche e probabilità di successo. Zero sorprese."
  },
  {
    icon: Target,
    title: "Approccio Strategico",
    description: "Roadmap di finanza agevolata allineata ai tuoi obiettivi di business a lungo termine."
  },
  {
    icon: Shield,
    title: "Success Fee",
    description: "Modello win-win: paghiamo solo se ottieni il finanziamento. Interesse allineato al tuo successo."
  },
  {
    icon: Users,
    title: "Team Specializzato",
    description: "Competenze multidisciplinari in ambito giuridico, economico e tecnologico."
  }
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perché scegliere Nextfund Advisory
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovazione tecnologica, competenza verticale e trasparenza assoluta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
