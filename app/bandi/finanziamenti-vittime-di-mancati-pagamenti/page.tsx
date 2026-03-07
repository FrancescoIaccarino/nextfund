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
  title: "Finanziamenti vittime di mancati pagamenti | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Finanziamenti vittime di mancati pagamenti. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Finanziamenti vittime di mancati pagamenti"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT)"
        stato="Attivo"
        categoria="finanziario"
        descrizione="Finanziamento agevolato a tasso zero per PMI e professionisti vittime di mancati pagamenti documentati in procedimento penale o da sentenza passata in"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Finanziamento agevolato a tasso zero per PMI e professionisti vittime di mancati pagamenti documentati in procedimento penale o da sentenza passata in giudicato
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
              <p>Piccole e medie imprese (PMI) e professionisti autonomi vittime di mancati pagamenti documentati</p>
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
              <p>PMI/professionisti vittima mancato pagamento (no limite anzianità)</p>
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
              <p className="text-sm">Italia intera</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutti i settori: PMI e professionisti vittime di mancati pagamenti documentati penalmente" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Finanziamento agevolato a tasso zero per PMI e professionisti vittime di mancati pagamenti documentati in procedimento penale o da sentenza passata in giudicato
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 0 (no minimo)"
          investimentoMax="€ 500.000 (finanziamento massimo per beneficiario)"
          fondoPerduto="No fondo perduto; solo finanziamento a tasso zero (fino €500k max)"
          tassoZero="100% tasso zero (fino €500k massimo)"
          tassoInteresse="Tasso zero (0%)"
          durataFinanziamento="Tra 3 e 10 anni (compresi preammortamento max 2 anni)"
          valoreMedio="186k €"
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
              <p>Qualsiasi fatturato per PMI e professionisti</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">Requisiti vittima: qualifica parte offesa procedimento penale con condanna passata giudicato; crediti documentati uffici giudiziari; importo mancato pagamento. Finanziamento massimo €500k per crediti imputabili; durata 3-10 anni + preammortamento max 2 anni. Regime de minimis. Erogazione 50% in acconto in attesa conferma uffici giudiziari. Domande continuative. Documentazione: sentenza passata giudicato, conferma uffici giudiziari, SPID/CIE/CNS</p>
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/finanziamenti-vittime-di-mancati-pagamenti"
              nomeBando="Finanziamenti vittime di mancati pagamenti"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="30.000.000"
          numeroBandi="20-50 domande/anno"
          valoreTotale="5-8 milioni"
          percentualeAccettazione="40-60%"
          valoreMedio="186k €"
        />
      </BandoSection>
    </div>
  )
}
