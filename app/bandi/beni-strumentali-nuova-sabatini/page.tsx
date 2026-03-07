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
  title: "Beni strumentali - Nuova Sabatini | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Beni strumentali - Nuova Sabatini. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Beni strumentali - Nuova Sabatini"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT)"
        stato="Attivo"
        categoria="innovazione"
        descrizione="Acquisto o acquisizione in leasing di nuovi macchinari, impianti, attrezzature, beni strumentali ad uso produttivo, hardware, software e tecnologie di"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Acquisto o acquisizione in leasing di nuovi macchinari, impianti, attrezzature, beni strumentali ad uso produttivo, hardware, software e tecnologie digitali per: trasformazione tecnologica/digitale, ecosostenibilità processi produttivi, ammodernamento strutturale
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
              <p>Micro, piccole e medie imprese (PMI) regolarmente iscritte al Registro delle imprese. Inclusa sottomisura Nuova Sabatini Capitalizzazione per PMI in forma di Società di capitali</p>
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
              <p>Non esplicitato; impresa regolarmente iscritta al Registro</p>
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
              <p className="text-sm">Italia intera; adesione sportello Invitalia come intermediario; richiesta continuativa fino esaurimento risorse o chiusura sportello</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutti i settori produttivi (inclusi agricoltura e pesca), esclusi settore finanziario e assicurativo. Sottocategorie: beni strumentali standard, beni 4.0, beni green a basso impatto ambientale" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Acquisto o acquisizione in leasing di nuovi macchinari, impianti, attrezzature, beni strumentali ad uso produttivo, hardware, software e tecnologie digitali per: trasformazione tecnologica/digitale, ecosostenibilità processi produttivi, ammodernamento strutturale
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 0 (no minimo; domande accolte fino esaurimento risorse)"
          investimentoMax="Non indicato massimale assoluto; domande continue fino esaurimento risorse disponibili"
          fondoPerduto="Contributo in conto impianti pari al valore degli interessi su finanziamento 5 anni: 2,75% beni standard; 3,575% beni 4.0; 3,575% beni green. Agevolazione calcolata su importo investimento"
          tassoZero="Finanziamento per differenza tra investimento totale e contributo in conto impianti"
          tassoInteresse="Tasso interesse finanziamento base per calcolo agevolazione: 2,75% (beni standard), 3,575% (beni 4.0 e green); finanziamento con tasso agevolato attraverso istituti bancari convenzionati"
          durataFinanziamento="5 anni (quinquennale) base per calcolo agevolazione; durata finanziamento variabile presso banche partner"
          valoreMedio="150k €"
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
              <p>Qualsiasi fatturato per PMI regolarmente iscritte</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">Domande continue tutto l'anno fino esaurimento risorse. Misura attiva con sportello aperto. Tre sottomisure: beni strumentali (2,75%), beni 4.0 (3,575%), beni green (3,575%). Nuova Sabatini Capitalizzazione per PMI Società di capitali per incentivare capitalizzazione aziendale. Documentazione: iscrizione Registro imprese, business plan, documentazione beni acquistati/leasing, preventivi/ordini. Risultati storici (2017-2023): 125k domande presentate, 250k accolte, €4 miliardi risorse impegnate</p>
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/beni-strumentali-nuova-sabatini"
              nomeBando="Beni strumentali - Nuova Sabatini"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="360.000.000"
          numeroBandi="800-1000 domande/anno"
          valoreTotale="120-150 milioni"
          percentualeAccettazione="70-80%"
          valoreMedio="150k €"
        />
      </BandoSection>
    </div>
  )
}
