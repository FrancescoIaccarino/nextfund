import { BandoHero } from "@/components/bandi/BandoHero"
import { BandoNavigation } from "@/components/bandi/BandoNavigation"
import { BandoSection } from "@/components/bandi/BandoSection"
import { AgevolazioniCard } from "@/components/bandi/AgevolazioniCard"
import { CalcolatoreAgevolazioni } from "@/components/bandi/CalcolatoreAgevolazioni"
import { SettoriTags } from "@/components/bandi/SettoriTags"
import { CTAButton } from "@/components/bandi/CTAButton"
import { StatisticheChart } from "@/components/bandi/StatisticheChart"
import { SafeText } from "@/components/bandi/SafeText"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MapPin, Building2, Calendar, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Imprenditoria femminile - Fondo impresa femminile | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Imprenditoria femminile. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Imprenditoria femminile - Fondo impresa femminile"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) e Dipartimento per le Pari Opportunità"
        stato="Attivo"
        categoria="startup"
        descrizione="Avvio di nuova impresa o sviluppo impresa esistente: macchinari, attrezzature, immobili, software, formazione, capitale circolante"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Avvio di nuova impresa (fino €250k): macchinari, attrezzature, immobili, software, formazione. Sviluppo impresa esistente (fino €400k): nuove attività, ampliamento, capitale circolante, investimenti generali"
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
              <SafeText text="Qualsiasi dimensione: imprese femminili individuali, società di persone (&ge;60% donne), società di capitali (&ge;2/3 donne quote e CdA), lavoratrici autonome" />
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
              <SafeText text="Nuova impresa (&lt;12 mesi) o impresa costituita da max 60 mesi per avvio; per sviluppo impresa attiva &gt;12 mesi" />
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
                text="Italia intera; con particolare attenzione alle regioni del Sud. Sede legale/operativa in Italia"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutti i settori ammessi: industria, artigianato, trasformazione prodotti agricoli, commercio, servizi, turismo, cultura, creatività, ambiti scientifici e tecnologici" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Avvio di nuova impresa (fino €250k): macchinari, attrezzature, immobili, software, formazione. Sviluppo impresa esistente (fino €400k): nuove attività, ampliamento, capitale circolante, investimenti generali"
          />
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 0 (no minimo)"
          investimentoMax="€ 250.000 per avvio; € 400.000 per sviluppo"
          fondoPerduto="Fino 80-90% (90% per disoccupate)"
          tassoZero="100% tasso zero sulla parte non coperta"
          tassoInteresse="Tasso zero (0%)"
          durataFinanziamento="Fino 8 anni per sviluppo"
          valoreMedio="187k €"
        />

        <div className="mt-8">
          <CalcolatoreAgevolazioni
            investimentoMin="€ 0"
            investimentoMax="€ 400.000"
            fondoPerduto="Fino 90% per disoccupate"
            tassoZero="100% tasso zero sulla parte non coperta"
            nomeBando="Imprenditoria femminile - Fondo impresa femminile"
          />
        </div>
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
              <SafeText text="Qualsiasi fatturato per impresa individuale; nessun limite per altre forme (focus su empowerment femminile)" />
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
                text="PNRR: € 400 milioni per creazione imprese femminili (investimento M1C2I7). Programma attivo ottobre 2023 - dicembre 2026. Iniziative: COD(H)ER, Giro d'Italia donne che fanno impresa, acceleratore LiFE per startup innovative femminili, formazione manageriale universitaria, premi per ingegneria biomedica, Premio Intellectual Property Award. Partner: Unioncamere, SIM, UIBM, Fondazione Emblema, PNI Cube, Università Padova, Generation Italy. Comitato Impresa Donna presso MIMIT. Sportello aperto; domande esaminate 90 giorni in ordine cronologico. Documentazione: SPID/CIE/CNS, firma digitale, business plan, requisiti femminilità da verificare"
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/imprenditoria-femminile"
              nomeBando="Imprenditoria femminile - Fondo impresa femminile"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="200.000.000"
          numeroBandi="350-400 agevolazioni/anno"
          valoreTotale="60-80 milioni"
          percentualeAccettazione="70-85%"
          valoreMedio="187k €"
        />
      </BandoSection>
    </div>
  )
}
