import { Badge } from "@/components/ui/badge"
import { Target } from "lucide-react"

const stats = [
  {
    label: "Tempi Ridotti",
    percentage: "60%",
    position: "top-left"
  },
  {
    label: "Successo Clienti",
    percentage: "95%",
    position: "top-right"
  },
  {
    label: "Soddisfazione",
    percentage: "100%",
    position: "bottom-left"
  },
  {
    label: "Trasparenza",
    percentage: "100%",
    position: "bottom-right"
  }
]

export function Results() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Risultati concreti che fanno la differenza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Il nostro approccio innovativo porta vantaggi misurabili per le PMI italiane
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Stats */}
            <div className="space-y-8">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="flex items-center gap-4 justify-center lg:justify-end">
                  <div className="text-right">
                    <p className="text-2xl font-bold">{stat.percentage}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                    {stat.percentage}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Center Icon */}
            <div className="flex items-center justify-center">
              <div className="h-64 w-64 bg-gradient-to-br from-primary/10 to-primary/20 overflow-hidden flex items-center justify-center">
                <Target className="h-32 w-32 text-primary" strokeWidth={1.5} />
              </div>
            </div>

            {/* Right Stats */}
            <div className="space-y-8">
              {stats.slice(2, 4).map((stat, index) => (
                <div key={index} className="flex items-center gap-4 justify-center lg:justify-start">
                  <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                    {stat.percentage}
                  </Badge>
                  <div className="text-left">
                    <p className="text-2xl font-bold">{stat.percentage}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
