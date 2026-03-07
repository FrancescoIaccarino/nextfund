import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  Search, 
  FileText, 
  ShieldCheck, 
  Euro, 
  Users,
  Send,
  Handshake,
  Lightbulb,
  Leaf,
  GraduationCap,
  Globe,
  Cpu,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServiziPage() {
  const coreServices = [
    {
      icon: Search,
      title: "Finanza Agevolata",
      description: "Soluzioni su misura per accedere a bandi e agevolazioni, gestendo l'intero iter burocratico.",
      features: [
        "Monitoraggio costante opportunità",
        "Studio di fattibilità personalizzato",
        "Gestione completa della domanda",
        "Supporto fino alla rendicontazione"
      ]
    },
    {
      icon: Users,
      title: "Consulenza Strategica",
      description: "Affianchiamo gli imprenditori con servizi di project management e pianificazione.",
      features: [
        "Project Management complessi",
        "Pianificazione economico-finanziaria",
        "Business Plan e Analisi di Mercato",
        "Strategie di crescita sostenibile"
      ]
    }
  ];

  const specializedServices = [
    {
      icon: Cpu,
      title: "Piano Transizione 5.0",
      description: "Supporto completo per accedere al credito d'imposta per investimenti in digitalizzazione e risparmio energetico.",
      features: [
        "Analisi requisiti 5.0",
        "Certificazione risparmio energetico",
        "Gestione credito d'imposta"
      ]
    },
    {
      icon: Globe,
      title: "Progetti Europei & Open Innovation",
      description: "Assistenza per bandi diretti della Commissione Europea e progetti innovativi disruptive.",
      features: [
        "Bandi Commissione Europea",
        "Partner search qualificato",
        "Sviluppo progetti Open Innovation"
      ]
    },
    {
      icon: GraduationCap,
      title: "Formazione Finanziata",
      description: "Sviluppo delle competenze aziendali tramite fondi interprofessionali, senza costi per l'impresa.",
      features: [
        "Analisi fabbisogni formativi",
        "Piani formativi finanziati",
        "Upskilling e Reskilling"
      ]
    },
    {
      icon: Leaf,
      title: "Sostenibilità ed ESG",
      description: "Accompagniamo la transizione da modelli tradizionali a sistemi sostenibili ed efficienti.",
      features: [
        "Transizione ecologica",
        "Efficienza energetica",
        "Bilanci di sostenibilità"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Aggiornamento Normativo",
      description: "Monitoraggio legislativo continuo per non perdere nessuna opportunità.",
      icon: Lightbulb
    },
    {
      title: "Verifica Requisiti",
      description: "Controllo puntuale dell'idoneità aziendale per i singoli bandi.",
      icon: ShieldCheck
    },
    {
      title: "Stesura Progetto",
      description: "Elaborazione professionale della documentazione progettuale richiesta.",
      icon: FileText
    },
    {
      title: "Richiesta Finanziamento",
      description: "Gestione della presentazione ufficiale della domanda agli enti preposti.",
      icon: Send
    },
    {
      title: "Supporto all'Erogazione",
      description: "Assistenza continuativa fino all'effettivo ricevimento dei contributi.",
      icon: Handshake
    }
  ];

  return (
    <div className="bg-background">
      <PageHeader 
        title="I Nostri Servizi"
        description="Soluzioni integrate di finanza agevolata e consulenza strategica per la crescita della tua impresa."
      />
      
      {/* Core Services Section */}
      <section className="py-12 md:py-16 container px-4 mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">I Nostri Servizi Core</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Il cuore della nostra offerta: finanza agevolata e consulenza direzionale per guidare la tua crescita.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {coreServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ambiti di Specializzazione</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Competenze verticali per affrontare le sfide dell'innovazione, della sostenibilità e della formazione.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-background p-5 md:p-6 shadow-sm border hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 flex items-center justify-center mb-3 md:mb-4 text-primary">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="bg-primary/5 py-12 md:py-16">
        <div className="container px-4 mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center justify-center p-2.5 md:p-3 bg-primary/10 mb-4 md:mb-6">
            <Euro className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Focus sul Fondo Perduto</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-2">
            La nostra specializzazione principale è l'ottenimento di contributi a fondo perduto da fonti quali Unione Europea, ministeri, regioni, province e Camera di Commercio.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contatti">Verifica la tua eleggibilità</Link>
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 container px-4 mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Il Servizio Procedurale Completo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Gestiamo l'intero ciclo di vita del finanziamento, permettendoti di concentrarti sul tuo business mentre noi ci occupiamo della burocrazia.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex gap-4">
              {/* Vertical line */}
              {index !== processSteps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-border -translate-x-1/2" />
              )}
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center shadow-lg ring-4 ring-background">
                <step.icon className="w-5 h-5" />
              </div>
              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative flex items-center justify-between gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Icon Marker */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center shadow-lg ring-4 ring-background">
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Pronto a far crescere la tua impresa?</h2>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            <Link href="/contatti">Richiedi una consulenza gratuita</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
