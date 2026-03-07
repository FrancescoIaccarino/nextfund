import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface BandoHeroProps {
  titolo: string
  sottotitolo: string
  stato: string
  categoria: "startup" | "innovazione" | "sostenibilita" | "territoriale" | "finanziario"
  descrizione?: string
}

const categoriaColors = {
  startup: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  innovazione: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  sostenibilita: "bg-green-500/10 text-green-700 border-green-500/20",
  territoriale: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  finanziario: "bg-red-500/10 text-red-700 border-red-500/20",
}

const categoriaGradients = {
  startup: "from-blue-500/5 to-blue-500/10",
  innovazione: "from-purple-500/5 to-purple-500/10",
  sostenibilita: "from-green-500/5 to-green-500/10",
  territoriale: "from-orange-500/5 to-orange-500/10",
  finanziario: "from-red-500/5 to-red-500/10",
}

export function BandoHero({ titolo, sottotitolo, stato, categoria, descrizione }: BandoHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${categoriaGradients[categoria]} py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badges */}
          <div className="mb-6 flex flex-wrap gap-3">
            <Badge variant="outline" className={categoriaColors[categoria]}>
              {stato}
            </Badge>
            <Badge variant="secondary">
              {categoria === "startup" && "Startup e Nuove Imprese"}
              {categoria === "innovazione" && "Innovazione e Digitale"}
              {categoria === "sostenibilita" && "Sostenibilità e Ambiente"}
              {categoria === "territoriale" && "Sviluppo Territoriale"}
              {categoria === "finanziario" && "Sostegno Finanziario"}
            </Badge>
          </div>

          {/* Titolo */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {titolo}
          </h1>

          {/* Sottotitolo */}
          <p className="mb-6 text-xl text-muted-foreground">
            {sottotitolo}
          </p>

          {/* Descrizione */}
          {descrizione && (
            <p className="mb-8 text-lg leading-relaxed text-foreground/80">
              {descrizione}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#come-fare-domanda">
                Richiedi Informazioni
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#agevolazioni">
                Scopri le Agevolazioni
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 -z-10 h-full w-1/3 opacity-20">
        <div className={`h-full w-full bg-gradient-to-l ${categoriaGradients[categoria]}`} />
      </div>
    </section>
  )
}
