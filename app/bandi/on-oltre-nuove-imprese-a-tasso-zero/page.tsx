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
  title: "ON - Oltre Nuove imprese a tasso zero | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per ON - Oltre Nuove imprese a tasso zero. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="ON - Oltre Nuove imprese a tasso zero"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) - gestito da Invitalia"
        stato="Attivo"
        categoria="startup"
        descrizione="Avvio nuove imprese, società tra professionisti, studi professionali: macchinari, impianti, IT, attrezzature, software, brevetti, licenze, marchi"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Avvio nuove imprese, società tra professionisti, studi professionali: macchinari, impianti, IT, attrezzature, software, brevetti, licenze, marchi, consulenze, costi di costituzione, formazione soci. Per imprese innovative anche R&S"
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
              <SafeText text="Micro e piccole imprese (&lt;50 dipendenti; fatturato/bilancio &le; €10M)" />
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
              <SafeText text="Nuova impresa: costituita da max 60 mesi; società di persone max 10 anni; imprese innovative senza limite età" />
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
                text="Intero territorio nazionale con intensità % decrescenti dal Sud: Basilicata, Calabria, Campania, Puglia, Sicilia (90%); Abruzzo, Molise (80%); resto Italia (70%)"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Tutte le attività economiche (escluse agricoltura, pesca, produzione esclusiva bevande alcoliche, gioco d'azzardo, finanza, immobiliari; ammesse attività nel settore dei servizi alle imprese, alle persone/comunità)" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Avvio nuove imprese, società tra professionisti, studi professionali: macchinari, impianti, IT, attrezzature, software, brevetti, licenze, marchi, consulenze, costi di costituzione, formazione soci. Per imprese innovative anche R&S"
          />
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 0 (no minimo)"
          investimentoMax="€ 3.000.000 per imprese ordinarie; € 5.000.000 per imprese innovative"
          fondoPerduto="Fino 90% per imprese Sud; 80% Abruzzo/Molise; 70% resto Italia"
          tassoZero="100% finanziamento a tasso zero"
          tassoInteresse="Tasso zero (0%)"
          durataFinanziamento="Fino 10 anni (5 anni per imprese innovative) + preammortamento 2-3 anni"
          valoreMedio="106k €"
        />

        <div className="mt-8">
          <CalcolatoreAgevolazioni
            investimentoMin="€ 0"
            investimentoMax="€ 3.000.000"
            fondoPerduto="Fino 90% per imprese Sud"
            tassoZero="100% finanziamento a tasso zero"
            nomeBando="ON - Oltre Nuove imprese a tasso zero"
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
              <SafeText text="Micro/piccole imprese: fatturato &le; €10M o totale bilancio &le; €10M nell'anno precedente" />
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
                text="Autoimpiego: disoccupati, inoccupati, lavoratrici svantaggiate, donne under 35, under 36 NEET, over 50 disoccupati. Imprese innovative: almeno 1 requisito tra brevetti, R&S &gt;10% spese, titolarità software, spesa qualificata innovazione &gt;1/3. Obblighi: mantenimento 5 anni attività, occupazione 3 anni, sede legale/operativa in Italia. Domande continue dal 19 maggio 2023. Risorse: decreto Coesione 2021, rifinanziato 2024. Documentazione: SPID/CIE/CNS, business plan, dichiarazione finanziamenti de minimis"
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/ON-nuove-imprese-tasso-zero"
              nomeBando="ON - Oltre Nuove imprese a tasso zero"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="100.000.000"
          numeroBandi="400-450 domande/anno"
          valoreTotale="40-50 milioni"
          percentualeAccettazione="60-75%"
          valoreMedio="106k €"
        />
      </BandoSection>
    </div>
  )
}
