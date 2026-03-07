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
  title: "Digital transformation | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Digital transformation. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Digital transformation"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) - gestito da Invitalia"
        stato="Sportello"
        categoria="innovazione"
        descrizione="Trasformazione tecnologica e digitale dei processi produttivi: Capo II innovazione di processo (acquisto macchinari/software/consulenze digitali); Cap"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Trasformazione tecnologica e digitale dei processi produttivi: Capo II innovazione di processo (acquisto macchinari/software/consulenze digitali); Capo III innovazione organizzazione (change management, processo riorganizzazione digitale); Impresa 4.0 (IoT, AI, cloud, cybersecurity, robotica)
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
              <p>Micro, piccole e medie imprese (PMI), anche in forma aggregata (rete fino 10 imprese) o sotto coordinamento Digital Innovation Hub / Ecosistema Digitale Innovazione</p>
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
              <p>Nuova impresa o costituita da max 36 mesi; imprese già operanti ammesse</p>
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
              <p className="text-sm">Italia intera; sportello aperto con procedura order cronologico; domande continue</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutti i settori: innovazione di processo, innovazione organizzazione, applicazione tecnologie Impresa 4.0, trasformazione tecnologica digitale" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Trasformazione tecnologica e digitale dei processi produttivi: Capo II innovazione di processo (acquisto macchinari/software/consulenze digitali); Capo III innovazione organizzazione (change management, processo riorganizzazione digitale); Impresa 4.0 (IoT, AI, cloud, cybersecurity, robotica)
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 100.000 (budget eleggibile minimo)"
          investimentoMax="€ 3.000.000 (budget eleggibile massimo per progetto); progetto max 18 mesi"
          fondoPerduto="50% totale: 10% contributo a fondo perduto + 40% finanziamento agevolato a tasso zero (7 anni)"
          tassoZero="40% finanziamento agevolato a tasso zero (complementare al 10% FP)"
          tassoInteresse="Tasso zero (0%)"
          durataFinanziamento="7 anni + preammortamento variabile (rate semestrali 31 maggio / 30 novembre); progetto max 18 mesi"
          valoreMedio="233k €"
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
              <p>Qualsiasi fatturato per PMI</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">Dotazione: 100 milioni di euro. Sportello attivo procedura ordine cronologico. Budget eleggibile €100-3M; progetto max 18 mesi. Tre categorie: Capo II Innovazione processo; Capo III Innovazione organizzazione; Impresa 4.0. Agevolazioni: 10% FP + 40% finanziamento 0% (7 anni). Obblighi: mantenimento 5 anni. Domande continuative dal 15 dicembre 2020. Non cumulabili con altri aiuti sugli stessi costi. Documentazione: SPID/CIE/CNS, business plan, dichiarazione digitalizzazione</p>
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/digital-transformation"
              nomeBando="Digital transformation"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="100.000.000"
          numeroBandi="100-200 domande/anno"
          valoreTotale="30-40 milioni"
          percentualeAccettazione="50-65%"
          valoreMedio="233k €"
        />
      </BandoSection>
    </div>
  )
}
