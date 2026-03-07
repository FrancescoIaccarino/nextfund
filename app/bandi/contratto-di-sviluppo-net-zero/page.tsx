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
  title: "Contratto di sviluppo - Net Zero | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Contratto di sviluppo - Net Zero. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Contratto di sviluppo - Net Zero"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) - gestito da Invitalia"
        stato="Attivo"
        categoria="sostenibilita"
        descrizione="Progetti di sviluppo industriale, tutela ambientale, ricerca/sviluppo/innovazione per: nuova unità produttiva; ampliamento capacità; riconversione att"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Progetti di sviluppo industriale, tutela ambientale, ricerca/sviluppo/innovazione per: nuova unità produttiva; ampliamento capacità; riconversione attività; ristrutturazione. Costi ammissibili minimo 20 milioni euro
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
              <p>PMI e Grandi imprese; forme congiunte o rete fino a 5 imprese</p>
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
              <p>Non previsto requisito esplicito; impresa deve essere costituita e operativa</p>
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
              <p className="text-sm">Italia intera con intensità differenziate: Basilicata, Calabria, Campania, Molise, Puglia, Sardegna, Sicilia (art. 107.3.a TFUE con maggiorazioni R&S); centro-nord secondo regimi. Almeno 40% risorse al Sud</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Batterie; Pannelli solari; Turbine eoliche; Pompe di calore; Elettrolizzatori; Dispositivi di cattura e stoccaggio del carbonio (CCUS); Componenti chiave; Recupero materie prime critiche" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Progetti di sviluppo industriale, tutela ambientale, ricerca/sviluppo/innovazione per: nuova unità produttiva; ampliamento capacità; riconversione attività; ristrutturazione. Costi ammissibili minimo 20 milioni euro
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 20.000.000"
          investimentoMax="Non indicato massimale assoluto; si applicano limiti intensità aiuto UE"
          fondoPerduto="Variabile per tipologia progetto, dimensione impresa e area: fino 85% piccole; 75% medie; 65% grandi; minimo 15% grandi imprese centro-nord"
          tassoZero="Fino al 75% spese ammissibili; tasso agevolato: 20% reference rate UE + margine rating"
          tassoInteresse="Tasso agevolato: 20% reference rate UE + margine risk rating; finanziamento con garanzie ipotecarie/bancarie/assicurative"
          durataFinanziamento="Fino 10 anni + preammortamento fino 3 anni; durata programma max 36 mesi dalla concessione"
          valoreMedio="875k €"
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
              <p>Nessun limite massimo; requisito: coerenza economico-finanziaria e capacità coprire quota non agevolata</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">PNRR: € 1.738 M (€ 1.225 M M1C2I7 + € 513,7 M M2C2I5). Domande dal 27 giugno 2024; regime SA.112546 chiuso 4 nov 2025, restano altri regimi. Obblighi: DNSH, divieto doppio finanziamento, norme PNRR, Quadro temporaneo. Documentazione: SPID/CIE/CNS, firma digitale, PEC, istanza Net Zero, business plan, DSAN DNSH, DSAN norme ambientali, DSAN divieto doppio finanziamento, DSAN PNRR, DSAN Mod A1/B1, DSAN Requisiti 2.8. Almeno 50% fatturato con imprese produttrici dispositivi</p>
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/contratto-di-sviluppo-net-zero"
              nomeBando="Contratto di sviluppo - Net Zero"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="225.000.000"
          numeroBandi="30-50 progetti/anno"
          valoreTotale="30-40 milioni"
          percentualeAccettazione="50-70%"
          valoreMedio="875k €"
        />
      </BandoSection>
    </div>
  )
}
