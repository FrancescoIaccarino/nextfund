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
  title: "Fondo nazionale efficienza energetica | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Fondo nazionale efficienza energetica. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Fondo nazionale efficienza energetica"
        sottotitolo="Ministero dell'Ambiente e della Sicurezza Energetica - gestito da Invitalia"
        stato="Attivo"
        categoria="sostenibilita"
        descrizione="Interventi in efficienza energetica: riduzione consumi processi industriali; reti teleriscaldamento/raffrescamento; efficientamento servizi pubblici e"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Interventi in efficienza energetica: riduzione consumi processi industriali; reti teleriscaldamento/raffrescamento; efficientamento servizi pubblici e illuminazione pubblica; riqualificazione energetica edifici
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
              <p>Imprese (PMI e Grandi), ESCO, Pubbliche Amministrazioni, soggetti pubblici, persone fisiche, condomini, persone giuridiche private</p>
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
              <p>Imprese operative, ESCO operative, PA (no limite anzianità)</p>
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
              <p className="text-sm">Italia intera (imprese, ESCO, PA); priorità efficienza energetica settori strategici</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutti i settori: riduzione consumi energetici industriali, reti teleriscaldamento/teleraffrescamento, efficientamento infrastrutture pubbliche, riqualificazione energetica edifici" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Interventi in efficienza energetica: riduzione consumi processi industriali; reti teleriscaldamento/raffrescamento; efficientamento servizi pubblici e illuminazione pubblica; riqualificazione energetica edifici
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 150.000 (garanzia imprese/ESCO); € 150.000 (finanziamento imprese/ESCO); minori per PA"
          investimentoMax="€ 2.500.000 (garanzia imprese/ESCO); € 4.000.000 (finanziamento 0,25% imprese); € 2.000.000 (PA garanzia); € 2.000.000 (PA finanziamento)"
          fondoPerduto="30-70% a copertura costi agevolabili: Garanzia fino 80% (imprese); Finanziamento 0,25% fino 70% (imprese); Finanziamento PA fino 60% (80% se infrastrutture pubbliche)"
          tassoZero="Finanziamento a tasso 0,25% (minimo): fino 70% imprese; fino 60% PA (80% infrastrutture pubbliche)"
          tassoInteresse="Tasso agevolato: 0,25% base (minimo) per imprese/ESCO"
          durataFinanziamento="Fino 15 anni per PA (max); fino 10 anni imprese/ESCO (finanziamento 0,25%)"
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
              <p>Qualsiasi fatturato per imprese, ESCO, PA</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">Gestione: Ministero Ambiente e Sicurezza Energetica. Finanziamenti: imprese/ESCO €250-4M (max 70%, 0,25%); PA €150-2M (max 60%, 80% infrastrutture). Garanzie: imprese/ESCO €150-2,5M (max 80%); PA €150-2M. Interventi: efficienza industriale, teleriscaldamento/raffrescamento, infrastrutture pubbliche, riqualificazione energetica. Dotazione: €310 milioni. Requisiti ambientali e efficienza energetica. Domande continuative. Documentazione: business plan, preventivi, certificazioni energetiche</p>
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
                Sportello (Chiuso)
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/fondo-nazionale-efficienza-energetica"
              nomeBando="Fondo nazionale efficienza energetica"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="310.000.000"
          numeroBandi="Chiuso 31/12/2023"
          valoreTotale="Chiuso 31/12/2023"
          percentualeAccettazione="Chiuso 31/12/2023"
          valoreMedio="N.D."
        />
      </BandoSection>
    </div>
  )
}
