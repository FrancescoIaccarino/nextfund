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
  title: "Smart&Start Italia | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Smart&Start Italia. Fondo perduto, tasso zero e agevolazioni per startup innovative.",
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
        titolo="Smart&Start Italia"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) - gestito da Invitalia e gestori autorizzati"
        stato="Attivo"
        categoria="startup"
        descrizione="Creazione e sviluppo startup innovative ad alto contenuto tecnologico con finanziamento agevolato a tasso zero"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Creazione/ sviluppo startup innovative: macchinari, impianti, attrezzature, programmi informatici, brevetti, licenze, marchi, consulenze tecnologiche, servizi di incubazione/accelerazione, capitale circolante per massimo 20%"
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
              <SafeText text="Startup innovative (micro e piccole imprese) da costituire o costituite da max 60 mesi; incluse imprese straniere con sede produttiva in Italia" />
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
              <SafeText text="Da costituire o costituita da massimo 60 mesi al momento della domanda" />
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
                text="Italia intera con maggiorazioni per Sud (Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna, Sicilia: 90% copertura); resto Italia 80%. Sede operativa in Italia"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Startup innovative ad alto contenuto tecnologico: tutti i settori (industria, servizi, ICT, biotech, cleantech, ecc.) purché con almeno 15% spese in R&S o titolarità privativa intellettuale" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <SafeText
            className="text-lg leading-relaxed"
            text="Creazione/ sviluppo startup innovative: macchinari, impianti, attrezzature, programmi informatici, brevetti, licenze, marchi, consulenze tecnologiche, servizi di incubazione/accelerazione, capitale circolante per massimo 20%"
          />
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 0 (no minimo)"
          investimentoMax="€ 1.500.000 (massimo finanziabile)"
          fondoPerduto="Fino 90% per startup Sud; 80% resto Italia; gratuiti servizi tutoraggio"
          tassoZero="Finanziamento agevolato a tasso zero fino al 90% (Sud) / 80% (resto Italia)"
          tassoInteresse="Tasso zero (0%)"
          durataFinanziamento="Fino a 10 anni + preammortamento fino a 4 anni"
          valoreMedio="187k €"
        />

        <div className="mt-8">
          <CalcolatoreAgevolazioni
            investimentoMin="€ 0"
            investimentoMax="€ 1.500.000"
            fondoPerduto="Fino 90% per startup Sud"
            tassoZero="90% finanziamento a tasso zero"
            nomeBando="Smart&Start Italia"
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
              <SafeText text="Micro/piccole imprese: fatturato/bilancio annuo &le; €5M (requisito startup innovative)" />
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
                text="Risorse: Fondo PMI gestito da Invitalia/CDP/banche; domande continue tutto l'anno. Requisiti startup innovative: iscrizione sezione speciale Registro Imprese, almeno 15% R&S o titolarità IP, prevalenza soci under 36/disoccupati/donne. Gratuiti: servizi tutoraggio/incubazione per startup &lt;24 mesi (fino 30k €); mentoring per startup &gt;24 mesi. Durata progetto max 24 mesi. Obblighi mantenimento 5 anni. Agevolazioni cumulabili con altri strumenti. Documentazione: SPID/CIE/CNS, business plan, dichiarazione requisiti startup innovative"
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
                Sportello continuo
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/smartstart-italia"
              nomeBando="Smart&Start Italia"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="200.000.000"
          numeroBandi="350-400 startup/anno"
          valoreTotale="60-80 milioni"
          percentualeAccettazione="28-32%"
          valoreMedio="187k €"
        />
      </BandoSection>
    </div>
  )
}
