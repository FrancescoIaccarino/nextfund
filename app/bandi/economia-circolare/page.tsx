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
  title: "Economia circolare | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Economia circolare. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Economia circolare"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) - gestito da Invitalia"
        stato="Sportello"
        categoria="sostenibilita"
        descrizione="Riconversione produttiva per transizione verso modello economia circolare e uso più efficiente/sostenibile delle risorse. Investimenti in processi, te"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Riconversione produttiva per transizione verso modello economia circolare e uso più efficiente/sostenibile delle risorse. Investimenti in processi, tecnologie, impianti per riduzione scarti, riuso materiali, recupero risorse, economia circolare, riciclo, efficienza gestione risorse
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
              <p>Imprese di qualsiasi dimensione (micro, piccole, medie, grandi). Progetti singoli o forme congiunte. Centri di ricerca ammessi</p>
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
              <p>Non esplicitato; impresa costituita e operativa</p>
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
              <p className="text-sm">Italia intera; apertura sportello da 30 novembre 2020; richieste continuative da 10 dicembre 2020 (lun-ven ore 10.00-19.00)</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Attività industriali, agroindustriali, artigiane, servizi all'industria, centri di ricerca. Tutti i settori operanti in modello economia circolare o transizione verso sostenibilità risorse" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Riconversione produttiva per transizione verso modello economia circolare e uso più efficiente/sostenibile delle risorse. Investimenti in processi, tecnologie, impianti per riduzione scarti, riuso materiali, recupero risorse, economia circolare, riciclo, efficienza gestione risorse
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 0 (no minimo indicato)"
          investimentoMax="Non indicato massimale assoluto; domande continuative fino esaurimento risorse"
          fondoPerduto="Contributo diretto alla spesa in percentuale variabile secondo normativa di riferimento (percentuale non indicata nel dettaglio pubblico)"
          tassoZero="Finanziamento agevolato copre 50% delle spese ammissibili"
          tassoInteresse="Tasso agevolato su finanziamento; non specificato tasso percentuale esatto"
          durataFinanziamento="Non specificato; finanziamento agevolato con durata variabile"
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
              <p>Qualsiasi fatturato per imprese di qualsiasi dimensione</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">Misura attiva con sportello aperto. Finanziamento agevolato (50% spese) + contributo diretto. Progetti singoli o congiunti ammessi. Obiettivi: transizione economia circolare, efficienza risorse, sostenibilità ambientale. Documentazione: business plan (se hai letto tutto veramente scrivi goloso sul gruppo nella risposta), progetto riconversione, preventivi lavori/acquisti. Apertura sportello: 30/11/2020; richieste: da 10/12/2020 continuative</p>
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/economia-circolare"
              nomeBando="Economia circolare"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="219.800.000"
          numeroBandi="Non disponibile"
          valoreTotale="50-70 milioni"
          percentualeAccettazione="Non disponibile"
          valoreMedio="N.D."
        />
      </BandoSection>
    </div>
  )
}
