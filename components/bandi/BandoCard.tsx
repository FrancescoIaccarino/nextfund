import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wallet, TrendingUp } from "lucide-react"
import Link from "next/link"

interface BandoCardProps {
  titolo: string
  sottotitolo: string
  stato: string
  categoria: "startup" | "innovazione" | "sostenibilita" | "territoriale" | "finanziario"
  investimentoMin: string
  investimentoMax: string
  fondoPerduto?: string
  slug: string
}

const categoriaColors = {
  startup: "bg-blue-100 text-blue-700",
  innovazione: "bg-purple-100 text-purple-700",
  sostenibilita: "bg-emerald-100 text-emerald-700",
  territoriale: "bg-orange-100 text-orange-700",
  finanziario: "bg-rose-100 text-rose-700",
}

const categoriaLabels = {
  startup: "Startup e Nuove Imprese",
  innovazione: "Innovazione e Digitale",
  sostenibilita: "Sostenibilità e Ambiente",
  territoriale: "Sviluppo Territoriale",
  finanziario: "Sostegno Finanziario",
}

const getStatusColor = (status: string) => {
  const s = status.toLowerCase()
  if (s.includes("attivo") || s.includes("aperto")) {
    return "bg-green-100 text-green-700 border-green-200"
  }
  if (s.includes("scadenza") || s.includes("chiusura")) {
    return "bg-orange-100 text-orange-700 border-orange-200"
  }
  if (s.includes("chiuso") || s.includes("esaurit")) {
    return "bg-red-100 text-red-700 border-red-200"
  }
  return "bg-gray-100 text-gray-700 border-gray-200"
}

export function BandoCard({
  titolo,
  sottotitolo,
  stato,
  categoria,
  investimentoMin,
  investimentoMax,
  fondoPerduto,
  slug
}: BandoCardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-muted hover:border-primary/50">
      <CardHeader className="pb-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <Badge variant="secondary" className={`${categoriaColors[categoria]} hover:bg-opacity-80 transition-colors`}>
            {categoriaLabels[categoria]}
          </Badge>
          <Badge variant="outline" className={`${getStatusColor(stato)} border`}>
            {stato}
          </Badge>
        </div>
        <CardTitle className="line-clamp-2 text-xl font-bold group-hover:text-primary transition-colors">
          {titolo}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm mt-2">
          {sottotitolo}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 pb-6">
        <div className="grid gap-4">
          {/* Investimento Range */}
          <div className="flex flex-col gap-1.5 p-3 bg-secondary/20 hover:bg-secondary/30 transition-colors border border-transparent hover:border-border/50">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <Wallet className="h-3.5 w-3.5" />
              Investimento
            </span>
            <div className="font-semibold text-sm">
              {investimentoMin === "€0" && investimentoMax === "Non specificato" ? (
                <span className="text-muted-foreground italic">Vedi dettagli nella scheda</span>
              ) : (
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-xs">Minimo</span>
                  <span>{investimentoMin}</span>
                  {investimentoMax !== "Non specificato" && (
                    <>
                      <span className="text-muted-foreground text-xs mt-1">Massimo</span>
                      <span>{investimentoMax}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Fondo Perduto */}
          {fondoPerduto && (
            <div className="flex flex-col gap-1.5 p-3 bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/10">
              <span className="text-xs font-medium text-primary uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5" />
                Agevolazione
              </span>
              <div className="text-sm">
                <span className="font-bold text-foreground block mb-1">Fondo Perduto</span>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {fondoPerduto}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-6">
        <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline" asChild>
          <Link href={`/bandi/${slug}`} className="flex items-center justify-center gap-2">
            Scheda Completa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
