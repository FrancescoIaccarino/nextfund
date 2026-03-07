import { Target, Clock, TrendingUp } from "lucide-react"

export function StatsBar() {
  return (
    <section className="py-12 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            <div>
              <p className="text-3xl font-bold">60%</p>
              <p className="text-sm text-muted-foreground">Tempi ridotti</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-3xl font-bold">30 giorni</p>
              <p className="text-sm text-muted-foreground">Media submission</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Trasparenza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
