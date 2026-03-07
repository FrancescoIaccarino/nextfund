"use client";

import { motion } from "framer-motion";
import { Search, FileText, Send, TrendingUp, CheckCircle } from "lucide-react";
import { ProcessStep } from "@/components/cards/ProcessStep";

const steps = [
  {
    icon: Search,
    title: "Analisi del Business",
    description: "Analizziamo la tua azienda per identificare le opportunità di finanziamento più adatte ai tuoi obiettivi.",
  },
  {
    icon: FileText,
    title: "Progettazione Tecnica e Domanda",
    description: "Redazione perizie asseverate, certificazione ex-ante, verifica compliance DNSH e predisposizione domanda.",
  },
  {
    icon: Send,
    title: "Invio Domanda & Monitoraggio",
    description: "Presentazione pratica agli enti competenti e monitoraggio costante fino all'approvazione formale.",
  },
  {
    icon: TrendingUp,
    title: "Erogazione Fondi",
    description: "Gestione burocratica completa fino all'accredito dei fondi sul tuo conto corrente.",
  },
  {
    icon: CheckCircle,
    title: "Supporto Continuo",
    description: "Rendicontazione certificata e supporto costante per garantire il successo del tuo progetto.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-secondary">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Il Metodo NextFund
            <br />
            <span className="text-nextfund-blue">5 Step per Ottenere Liquidità Sicura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dall'analisi iniziale all'incasso dei fondi: un percorso strutturato con compliance certificata
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} number={idx + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
