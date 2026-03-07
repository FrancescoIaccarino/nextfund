"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Settings, BarChart3 } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";

const features = [
  {
    icon: Target,
    title: "Piano Transizione 5.0 & Industria 4.0",
    description:
      "Ti guidiamo in ogni fase: dalla certificazione iniziale alla documentazione finale, per ottenere il massimo credito d'imposta.",
    features: [
      "Certificazione tecnica preventiva (ex-ante)",
      "Verifica compliance principio DNSH",
      "Perizia asseverata e documentazione completa",
    ],
  },
  {
    icon: Settings,
    title: "Finanza Agevolata & Fondo Perduto",
    description:
      "Monitoraggio di +1000 bandi attivi tra regionali, nazionali ed europei. Success Fee: paghi solo se ricevi i soldi.",
    features: [
      "Copertura completa: bandi EU, nazionali, regionali",
      "Success Fee: paghi solo se ricevi i soldi",
      "Alert in tempo reale su nuove opportunità",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Plan & Consulenza Strategica",
    description:
      "Supporto strategico per trasformare le tue idee in progetti finanziabili. Dalla pianificazione alla crescita.",
    features: [
      "Business plan per bandi e investitori",
      "Analisi di fattibilità e studi di mercato",
      "Consulenza strategica per la crescita aziendale",
    ],
  },
  {
    icon: TrendingUp,
    title: "Rendicontazione & Due Diligence",
    description:
      "Rendicontazione certificata e supporto costante per garantire la conformità in ogni fase del progetto.",
    features: [
      "Rendicontazione conforme a normative nazionali ed EU",
      "Supporto continuo durante tutto il progetto",
      "Archiviazione documentale sicura per 10 anni",
    ],
  },
];

export function FeatureShowcase() {
  return (
    <section id="servizi" className="py-32 bg-background">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Il Partner che Supporta la Tua Vision
            <br />
            <span className="text-nextfund-blue">Attraverso la Finanza Agevolata</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributi fino al 75% a fondo perduto: competenza tecnica e compliance garantita per far crescere il tuo business
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
