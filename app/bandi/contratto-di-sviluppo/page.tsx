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
  title: "Contratto di sviluppo | NextFund Advisory",
  description: "Scopri come ottenere finanziamenti per Contratto di sviluppo. Fondo perduto, tasso zero e agevolazioni disponibili.",
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
        titolo="Contratto di sviluppo"
        sottotitolo="Ministero delle Imprese e del Made in Italy (MIMIT) - gestito da Invitalia"
        stato="Attivo"
        categoria="sostenibilita"
        descrizione="Investimenti per crescita sostenibile, tecnologie critiche, competitività imprese: Sostenibilità transizione verde (Net Zero, batterie, pannelli solar"
      />

      <BandoNavigation items={navItems} />

      <BandoSection id="cose" titolo="Cos'è">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Investimenti per crescita sostenibile, tecnologie critiche, competitività imprese: Sostenibilità transizione verde (Net Zero, batterie, pannelli solari, etc.); Tecnologie critiche per transizione digitale; Aree ZES per sviluppo Mezzogiorno
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
              <p>PMI e Grandi imprese; forme congiunte; Accordi di sviluppo per programmi ≥50M (20M agricolo)</p>
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
              <p>Non esplicitato esplicito; impresa costituita e operativa</p>
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
              <p className="text-sm">Italia intera con intensità differenziate regionali; Sostenibilità/Transizione verde prioritaria Centro-Sud; ZES: Mezzogiorno (8 regioni)</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold">Settori Ammessi</h3>
          <SettoriTags settori="Industriale, agroindustriale, turistico, tutela ambientale, sostenibilità e transizione verde/digitale" />
        </div>
      </BandoSection>

      <BandoSection id="cosa-finanzia" titolo="Cosa finanzia">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Investimenti per crescita sostenibile, tecnologie critiche, competitività imprese: Sostenibilità transizione verde (Net Zero, batterie, pannelli solari, etc.); Tecnologie critiche per transizione digitale; Aree ZES per sviluppo Mezzogiorno
          </p>
        </div>
      </BandoSection>

      <BandoSection id="agevolazioni" titolo="Agevolazioni" variant="muted">
        <AgevolazioniCard
          investimentoMin="€ 5.000.000 (Sostenibilità/Transizione verde); € 2.000.000 (Tecnologie critiche) - Per ZES variabile"
          investimentoMax="Sostenibilità/Transizione verde: no massimale assoluto; Tecnologie critiche: no massimale; ZES: soggetto a valutazione"
          fondoPerduto="Variabile: fino 85% piccole imprese (zone Sostenibilità); 75% medie; 65% grandi; per Tecnologie critiche: fino 50% PMI; fino 40% grandi; per ZES: fino 70%"
          tassoZero="Finanziamento agevolato (tasso ridotto): fino 75% Sostenibilità/Transizione; fino 50% Tecnologie critiche; variabile ZES"
          tassoInteresse="Tasso agevolato secondo norme PNRR/PN RIC (variabile per area e tipologia)"
          durataFinanziamento="Fino 10 anni; preammortamento fino 3 anni; durata programma max 36 mesi"
          valoreMedio="8.3M €"
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
              <p>Nessun limite massimo; requisito: solidità economico-finanziaria</p>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Note e Requisiti Speciali
            </h3>
            <div className="prose max-w-none border bg-muted/50 p-6">
              <p className="text-sm leading-relaxed">Sportelli periodici per PNRR Sostenibilità (Net Zero, batterie, transizione verde): fino 85% piccole; Sportello PN RIC 2021-27 (Transizione verde/digitale): aperto 15 aprile 2025; ZES: domande continuative. Durata max 36 mesi programma. Obblighi DNSH, divieto doppio finanziamento. Documentazione: SPID/CIE/CNS, istanza, business plan, DSAN. €498M PN RIC 2021-27; risorse PNRR Sostenibilità variabili</p>
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
              linkUfficiale="https://www.invitalia.it/incentivi-e-strumenti/contratto-di-sviluppo"
              nomeBando="Contratto di sviluppo"
            />
          </div>
        </div>
      </BandoSection>

      <BandoSection id="statistiche" titolo="Statistiche e Dati">
        <StatisticheChart
          dotazioneAssoluta="500.000.000"
          numeroBandi="20-40 progetti/anno"
          valoreTotale="200-300 milioni"
          percentualeAccettazione="60-70%"
          valoreMedio="8.3M €"
        />
      </BandoSection>
    </div>
  )
}
