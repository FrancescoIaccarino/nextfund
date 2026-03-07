import { BandoHero } from "@/components/bandi/BandoHero"
import { BandoNavigation } from "@/components/bandi/BandoNavigation"
import { BandoSection } from "@/components/bandi/BandoSection"
import { AgevolazioniCard } from "@/components/bandi/AgevolazioniCard"
import { SettoriTags } from "@/components/bandi/SettoriTags"
import { CTAButton } from "@/components/bandi/CTAButton"
import { StatisticheChart } from "@/components/bandi/StatisticheChart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MapPin, Building2, Calendar, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rete - Giovani, Competenze, Lavoro | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Rete - Giovani, Competenze, Lavoro. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Rete - Giovani, Competenze, Lavoro"
        sottotitolo="Ministero per lo Sport e i Giovani / Presidenza del Consiglio dei Ministri - gestito da Invitalia"
        stato="Attivo"
        categoria="startup"
        descrizione="Formazione, orientamento, creazione impresa, stage: no finanziamenti diretti aziendali; supporto giovani 16-35 anni su carriera e imprenditorialità co"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Formazione, orientamento, creazione impresa, stage: no finanziamenti diretti aziendali; supporto giovani 16-35 anni su carriera e imprenditorialità con bilancio competenze e piano sviluppo professionale
          </p>
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
              <p>Giovani 16-35 anni: studenti, diplomati, ITS, università, disoccupati, aspiranti imprenditori (no finanziamenti per aziende)</p>
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
              <p>Giovani senza limiti di anzianità aziendale (target formazione e stage)</p>
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
              <p className="text-sm">Italia intera; no vincoli geografici (target formazione giovani)</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Formazione, orientamento lavoro, creazione impresa, stage retribuiti per giovani 16-35 anni (no finanziamenti aziendali)" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Formazione, orientamento, creazione impresa, stage: no finanziamenti diretti aziendali; supporto giovani 16-35 anni su carriera e imprenditorialità con bilancio competenze e piano sviluppo professionale
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 0 (no finanziamenti; formazione e stage gratuiti)"
          investimentoMax="€ 0 (no finanziamenti diretti; solo formazione e stage)"
          fondoPerduto="100% gratuito (formazione, orientamento, stage retribuiti); no fondo perduto per aziende"
          tassoZero="No finanziamento (formazione e stage completamente gratuiti)"
          tassoInteresse="No interesse (formazione e stage gratuiti)"
          durataFinanziamento="Variabile per corso/stage (solitamente 2-12 mesi)"
          valoreMedio="2k €"
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
              <p>No valutazione fatturato (target giovani e formazione)</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">Progetto Ministero Sport/Giovani - Presidenza Consiglio. Target giovani 16-35 anni: studenti, diplomati, ITS, università, disoccupati, aspiranti imprenditori. Servizi: orientamento (bilancio competenze, piano sviluppo professionale), formazione (corsi mirati), creazione impresa (percorsi formativi, incentivi), stage (1k retribuiti Italia/estero). Hub Rete diffusi nazionalmente. Gratuiti. Obblighi mantenimento attività. Domande continuative. Documentazione: documento identità, qualifica giovane. Risorse: finanziamento progetti pubblici (no aziende)</p>
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
                Non a sportello (Progetto)
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/progetto-rete-giovani-competenze-lavoro"
              nomeBando="Rete - Giovani, Competenze, Lavoro"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="10.000.000"
          numeroBandi="1000 stage totali"
          valoreTotale="2-3 milioni"
          percentualeAccettazione="Non disponibile"
          valoreMedio="2k €"
        />
      </BandoSection>
    </div>
  )
}
