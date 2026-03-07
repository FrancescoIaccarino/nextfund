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
  title: "Fondo Salvaguardia Imprese | NextFund Advisory",
  description: "Scopri come ottenere supporto finanziario dal Fondo Salvaguardia Imprese per imprese in difficoltà.",
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
        titolo="Fondo Salvaguardia Imprese"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT)"
        stato="Attivo"
        categoria="finanziario"
        descrizione="Investimento diretto equity per imprese in difficoltà economico-finanziaria con rilevanza strategica"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Investimento diretto equity (partecipazioni minoranza) fino €10M per operazione. Durata 5 anni per exit. Co-investimento con soci preesistenti o impresa"
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
              <SafeText text="Imprese di grandi dimensioni o marchi storici nazionali con asset strategici" />
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
              <SafeText text="Impresa costituita e operativa in difficoltà economico-finanziaria" />
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
                text="Italia intera. Confronto prioritario presso Ministero crisi d'impresa"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutti i settori con focus su imprese strategiche e marchi storici nazionali" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Investimento diretto equity (partecipazioni minoranza) fino €10M per operazione. Durata 5 anni per exit. Co-investimento: soci preesistenti &ge;50% (non orientamenti UE) o impresa &ge;25-50% (orientamenti UE)"
          />
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="Non specificato"
          investimentoMax="€ 10.000.000 per operazione"
          fondoPerduto="N/A - Investimento equity"
          tassoZero="N/A - Investimento equity"
          tassoInteresse="N/A - Investimento equity"
          durataFinanziamento="5 anni per exit"
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
              <SafeText text="Nessun limite massimo; requisiti: &gt;250 dipendenti O fatturato &gt;50M O marchi storici/asset strategici" />
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
                text="Imprese difficoltà economico-finanziaria; requisiti: &gt;250 dipendenti O fatturato &gt;50M O marchi storici nazionali O asset strategici nazionali. Confronto prioritario presso Ministero crisi d'impresa. Investimento diretto equity (partecipazioni minoranza) fino €10M per operazione. Durata 5 anni per exit. Co-investimento: soci preesistenti &ge;50% (non orientamenti UE) o impresa &ge;25-50% (orientamenti UE). Domande online dal 2 febbraio 2021. Dotazione: €300 milioni"
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
                Online
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
              nomeBando="Fondo Salvaguardia Imprese"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="300.000.000"
          numeroBandi="Non disponibile"
          valoreTotale="Non disponibile"
          percentualeAccettazione="Non disponibile"
          valoreMedio="N.D."
        />
      </BandoSection>
    </div>
  )
}
