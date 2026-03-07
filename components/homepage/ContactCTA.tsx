import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pronto a Trasformare il Tuo Business?
          </h2>
          <p className="mb-8 text-lg opacity-90 md:text-xl">
            Contattaci per una consulenza personalizzata. Il nostro team di esperti è pronto ad aiutarti a raggiungere i tuoi obiettivi di crescita.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group"
            >
              <Link href="/contatti">
                Richiedi Consulenza
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/chi-siamo">Scopri Chi Siamo</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-2 bg-primary-foreground/10 p-6 backdrop-blur">
              <Mail className="h-6 w-6" />
              <div className="text-sm font-medium">Email</div>
              <a
                href="mailto:info@nextfundadvisory.com"
                className="text-sm opacity-90 hover:opacity-100"
              >
                info@nextfundadvisory.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 bg-primary-foreground/10 p-6 backdrop-blur">
              <Phone className="h-6 w-6" />
              <div className="text-sm font-medium">Telefono</div>
              <a
                href="tel:+390212345678"
                className="text-sm opacity-90 hover:opacity-100"
              >
                +39 02 1234 5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
