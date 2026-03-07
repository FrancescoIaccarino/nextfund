import { BandoHero } from "@/components/bandi/BandoHero"
import { BandoNavigation } from "@/components/bandi/BandoNavigation"
import { BandoSection } from "@/components/bandi/BandoSection"
import { AgevolazioniCard } from "@/components/bandi/AgevolazioniCard"
import { SettoriTags } from "@/components/bandi/SettoriTags"
import { CTAButton } from "@/components/bandi/CTAButton"
import { StatisticheChart } from "@/components/bandi/StatisticheChart"
import { SafeText } from "@/components/bandi/SafeText"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MapPin, Building2, Calendar, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resto al Sud 2.0 | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Resto al Sud 2.0. Nuove imprese Sud Italia e giovani imprenditori.",
}

const navItems = [
  { id: "cose", label: "Cos'è" },
  { id: "chi-si-rivolge", label: "A chi si rivolge" },
  { id: "cosa-finanzia", label: "Cosa finanzia" },
  { id: "agevolazioni", label: "Agevolazioni" },
  { id: "requisiti", label: "Requisiti" },
  { id: "come-fare-domanda", label: "Come fare domanda" },
  { id: "statistiche", label: "Statistiche" },
]

export default function BandoPage() {
  return (
    <div>
      <BandoHero
        titolo="Resto al Sud 2.0"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) - gestito da Invitalia"
        stato="Attivo"
        categoria="startup"
        descrizione="Supporto all'avvio di nuove attività imprenditoriali nel Sud Italia per giovani e disoccupati"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Avvio nuove imprese nel Sud Italia: macchinari, attrezzature, immobili, software, consulenze, capitale circolante. Supporto a giovani, donne e disoccupati"
          />
        </div>
      </BandoSection>

      <BandoSection id="chi-si-rivolge" titolo="A chi si rivolge" variant="muted">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Dimensione Azienda</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <SafeText text="Persone fisiche con &lt;35 anni o disoccupate; studi professionali; liberi professionisti; piccole imprese; forme individuali, associate, societarie; priorità a giovani, donne, disoccupati" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Età Azienda</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <SafeText text="Nuova impresa da avviare o costituita di recente nel Sud Italia" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Localizzazione</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <SafeText
                className="text-sm"
                text="Sud Italia: Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna, Sicilia"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutti i settori per nuove attività imprenditoriali nel Sud Italia" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Avvio nuove imprese: macchinari, attrezzature, immobili, software, consulenze, costi di costituzione, capitale circolante, formazione"
          />
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="Non specificato"
          investimentoMax="Non specificato"
          fondoPerduto="Contributo a fondo perduto disponibile"
          tassoZero="Finanziamento agevolato a tasso zero"
          tassoInteresse="Tasso zero (0%)"
          durataFinanziamento="Variabile"
          valoreMedio="N.D."
        />
      </BandoSection>

      <BandoSection id="requisiti" titolo="Requisiti e Note">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Fatturato Massimo</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <SafeText text="Non specificato" />
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <SafeText
                className="text-sm leading-relaxed"
                text="Requisiti: persone fisiche &lt;35 anni o disoccupate, con priorità a giovani, donne e disoccupati. Focus su sviluppo imprenditorialità nel Sud Italia. Sede legale e operativa nelle 8 regioni del Mezzogiorno. Consultare sito ufficiale per requisiti completi e modalità di accesso."
              />
            </div>
          </div>
        </div>
      </BandoSection>

      <BandoSection id="come-fare-domanda" titolo="Come fare domanda" variant="muted">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tipo di Sportello</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="text-base">
                Sportello
              </Badge>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Richiedi Assistenza</h3>
            <p className="mb-6 text-muted-foreground">
              Il nostro team di esperti può assisterti nella compilazione della domanda
              e nell'ottenimento del finanziamento. Contattaci per una consulenza gratuita.
            </p>
            <CTAButton
              linkUfficiale=""
              nomeBando="Resto al Sud 2.0"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="Non disponibile"
          numeroBandi="Non disponibile"
          valoreTotale="Non disponibile"
          percentualeAccettazione="Non disponibile"
          valoreMedio="N.D."
        />
      </BandoSection>
    </div>
  )
}
