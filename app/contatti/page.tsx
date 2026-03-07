import { PageHeader } from "@/components/layout/PageHeader"
import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react"

export default function ContattiPage() {
  return (
    <div>
      <PageHeader 
        title="Contattaci"
        description="Hai un progetto in mente? Parla con i nostri esperti e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi."
      />

      <div className="container px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@nextfundadvisory.com"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  info@nextfundadvisory.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Telefono
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm font-medium mb-1">Ufficio</p>
                  <a
                    href="tel:+390212345678"
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                  >
                    +39 02 1234 5678
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Sede
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Via Example 123
                  <br />
                  20100 Milano (MI)
                  <br />
                  Italia
                </p>
              </CardContent>
            </Card>

            {/* Socials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Seguici sui Social
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/nextfundadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/nextfundadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com/nextfundadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
             <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
