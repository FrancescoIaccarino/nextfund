import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Consulenza Finanziaria{" "}
            <span className="text-primary">Strategica</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Accompagniamo aziende e imprenditori verso la crescita attraverso soluzioni di advisory finanziario personalizzate e orientate ai risultati.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/contatti">
                Richiedi Consulenza
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/chi-siamo">Scopri Chi Siamo</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Anni di Esperienza
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">€2B+</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Valore Transazioni Gestite
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">150+</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Clienti Soddisfatti
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
