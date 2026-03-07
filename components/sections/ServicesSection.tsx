import { Target, TrendingUp } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Target,
    title: "Finanza Agevolata",
    description:
      "Ti accompagniamo dall'analisi delle tue esigenze e gestiamo l'intero processo di candidatura, dalla compilazione delle domande fino al supporto nella rendicontazione.",
    features: [
      "Ricerca e selezione bandi",
      "Compilazione domanda di finanziamento",
      "Supporto completo alla rendicontazione",
    ],
  },
  {
    icon: TrendingUp,
    title: "Consulenza",
    description:
      "Offriamo strategie mirate per il tuo settore, business plan dettagliati, analisi di mercato, ottimizzazione dei processi aziendali, e consulenza strategica per la crescita sostenibile.",
    features: [
      "Business plan e analisi di mercato",
      "Riorganizzazione e efficientamento processi",
      "Comunicazione, privacy e sicurezza",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluzioni complete e personalizzate per accelerare la crescita del tuo business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
