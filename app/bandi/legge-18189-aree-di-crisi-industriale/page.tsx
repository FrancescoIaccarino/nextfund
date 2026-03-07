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
  title: "Legge 181/89 - Aree di crisi industriale | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Legge 181/89 - Aree di crisi industriale. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Legge 181/89 - Aree di crisi industriale"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) - gestito da Invitalia"
        stato="Attivo"
        categoria="territoriale"
        descrizione="Programmi di investimento produttivo e tutela ambientale: ampliamento, requalificazione, riconversione industriale con obiettivo creazione nuova occup"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Programmi di investimento produttivo e tutela ambientale: ampliamento, requalificazione, riconversione industriale con obiettivo creazione nuova occupazione. Completabili con innovazione organizzazione/processo, ricerca industriale e sviluppo sperimentale, formazione personale
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
              <p>Qualsiasi dimensione (PMI e Grandi imprese) già costituite in società di capitali, cooperative, società consortili; ammesse reti di impresa (3-6 soggetti)</p>
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
              <p>Impresa già costituita; no limite minimo di anzianità</p>
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
              <p className="text-sm">Aree di crisi industriale complessa e non complessa: Brindisi e provincia, Massa-Carrara (comuni designati), Gela-Vittoria, Venezia, Livorno, e altre individuate MIMIT. Unità produttiva deve ubicarsi in comune dell'area di crisi designata</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutti i settori: industria, artigianato, manifattura, trasformazione, servizi, commercio, innovazione, R&S nei settori ritenuti strategici nelle aree di crisi" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Programmi di investimento produttivo e tutela ambientale: ampliamento, requalificazione, riconversione industriale con obiettivo creazione nuova occupazione. Completabili con innovazione organizzazione/processo, ricerca industriale e sviluppo sperimentale, formazione personale
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 1.000.000 (programma singolo); € 400.000 minimo per impresa in contratto di rete; minimo complessivo rete € 1.200.000"
          investimentoMax="Non indicato massimale assoluto; si applicano limiti intensità aiuto UE e regimi di aiuto"
          fondoPerduto="Fino 75% copertura spese: per piccole imprese (zone 107.3.a) max 75% (25% FP); (zone 107.3.c) max 75% (25% FP); per grandi imprese max 50% (variabile per area); incrementabile fino 70% in presenza PMI/soggetti svantaggiati"
          tassoZero="30-50% spese ammissibili come finanziamento agevolato; durata fino 10 anni + preammortamento fino 3 anni"
          tassoInteresse="Tasso agevolato con formule variable in base a rating e durata; assistito da garanzie (ipotecarie, bancarie, assicurative)"
          durataFinanziamento="Fino 10 anni + preammortamento fino 3 anni; valutazione caso-per-caso sulla coerenza del programma"
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
              <p>Qualsiasi fatturato per PMI e Grandi imprese; requisito: solidità economico-finanziaria e capacità coprire quota non agevolata</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">Normativa: Legge 181/1989; Circolare Direttoriale n. 2006 del 5 settembre 2025 (aggiornata rispetto a circolare 16 giugno 2022 n. 237343). Beneficiarie imprese PMI/Grandi già in società di capitali, cooperative, consortili. Obblighi: creare nuova occupazione, realizzare in area crisi, coerenza economico-finanziaria. Valutazione progetti su criteri MIMIT. Sportello riaperture periodiche per aree (Brindisi riaperturo 26 nov 2025; Gela, Venezia, Massa-Carrara aggiornamenti recenti). Domande valutate in ordine cronologico. Sede legale/operativa impresa deve essere in Italia; unità produttiva nel comune area di crisi designata</p>
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
                Sportello (periodi sospensione)
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/legge-181"
              nomeBando="Legge 181/89 - Aree di crisi industriale"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="124.000.000"
          numeroBandi="10-20 progetti/anno"
          valoreTotale="Non disponibile"
          percentualeAccettazione="Non disponibile"
          valoreMedio="N.D."
        />
      </BandoSection>
    </div>
  )
}
