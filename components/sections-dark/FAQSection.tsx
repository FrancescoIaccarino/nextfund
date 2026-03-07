"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/ContactForm";

const faqs = [
  {
    question: "Come garantite che il credito d'imposta non venga revocato?",
    answer: "Utilizziamo un metodo scientifico in 3 fasi: (1) Certificazione ex-ante da parte di organismi accreditati, (2) Verifica compliance normativa DNSH e requisiti tecnici, (3) Perizia asseverata con documentazione completa. Ti supportiamo con rendicontazione certificata durante tutto il processo. Il nostro tasso di approvazione è del 98% proprio grazie a questo rigore procedurale.",
  },
  {
    question: "Cosa rientra esattamente nel piano Transizione 5.0?",
    answer: "La Transizione 5.0 include investimenti in beni strumentali 4.0 (interconnessi) che generano anche un risparmio energetico certificato. Credito d'imposta dal 35% al 45% a seconda della riduzione dei consumi. Requisiti fondamentali: interconnessione certificata, rispetto DNSH (Do No Significant Harm), perizia asseverata. Copre macchinari, software gestionali, formazione 4.0 e consulenza specialistica.",
  },
  {
    question: "Lavorate davvero a Success Fee? Quali sono i costi?",
    answer: "Sì, lavoriamo a Success Fee su tutti i bandi a fondo perduto e crediti d'imposta. Zero costi anticipati. La fee è una percentuale concordata del contributo effettivamente ottenuto e accreditato. Per consulenze strategiche (es. business plan, due diligence) prevediamo tariffe orarie trasparenti. Massima chiarezza contrattuale dal primo incontro.",
  },
  {
    question: "Quanto tempo richiede l'ottenimento dei fondi?",
    answer: "Timeline tipica: Analisi iniziale 48h, Progettazione tecnica e perizie 2-4 settimane, Invio domanda immediato. I tempi di approvazione dipendono dall'ente erogatore: bandi regionali 3-6 mesi, crediti d'imposta utilizzabili in compensazione F24 subito dopo l'investimento. Ti forniamo una roadmap dettagliata con scadenze precise fin dal primo giorno.",
  },
  {
    question: "Quali aziende possono accedere a questi incentivi?",
    answer: "Possono accedere PMI, startup innovative, grandi imprese, professionisti con partita IVA. Requisiti generali: regolarità fiscale e contributiva, sede operativa in Italia (o UE per alcuni bandi), settori ammessi variabili per bando. Non ci sono limiti dimensionali rigidi: gestiamo pratiche da €50k a €5M+. Durante l'analisi iniziale verifichiamo puntualmente l'eleggibilità della tua azienda.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-32 bg-secondary">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Le Domande che Ogni Imprenditore
            <br />
            <span className="text-nextfund-blue">Si Pone Prima di Iniziare</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Risposte chiare e tecniche per prendere decisioni informate
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-20">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card border border-border px-6 data-[state=open]:border-nextfund-blue/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-nextfund-blue transition-colors text-lg md:text-xl font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
