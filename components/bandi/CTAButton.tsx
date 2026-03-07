import { Button } from "@/components/ui/button"
import { ExternalLink, Mail } from "lucide-react"
import Link from "next/link"

interface CTAButtonProps {
  linkUfficiale?: string
  nomeBando: string
}

export function CTAButton({ linkUfficiale, nomeBando }: CTAButtonProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {linkUfficiale && (
        <Button size="lg" variant="outline" asChild>
          <a href={linkUfficiale} target="_blank" rel="noopener noreferrer">
            Visita il sito ufficiale
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </Button>
      )}
      <Button size="lg" asChild>
        <Link href={`/contatti?bando=${encodeURIComponent(nomeBando)}`}>
          Richiedi Assistenza
          <Mail className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  )
}
