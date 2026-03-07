import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto costa il servizio di consulenza per bandi?",
    answer: "Utilizziamo un modello ibrido trasparente: una fee iniziale di €500-€1.500 per l'analisi strategica e lo scouting, più una success fee del 5-12% calcolata sull'importo ottenuto (solo in caso di approvazione). Non paghiamo = non pagate la success fee. Nessun costo nascosto."
  },
  {
    question: "Quanto tempo ci vuole per presentare un bando?",
    answer: "Dipende dalla complessità: dai 3-4 settimane per crediti d'imposta semplici, fino a 6-10 settimane per bandi PNRR o europei. Grazie all'automazione AI riduciamo i tempi del 60% rispetto ai consulenti tradizionali."
  },
  {
    question: "Quali tipi di bandi gestite?",
    answer: "Ci occupiamo principalmente di Transizione 4.0 e 5.0, Nuova Sabatini, crediti R&S, bandi regionali e PNRR. Copriamo anche bandi europei, SIMEST per l'internazionalizzazione e agevolazioni territoriali come la ZES Unica."
  },
  {
    question: "Cosa vi differenzia dai consulenti tradizionali?",
    answer: "Tre elementi chiave: (1) Tecnologia AI per velocizzare analisi e screening, (2) Modello di pricing trasparente con success fee allineata ai risultati, (3) Linguaggio semplice e accessibile - niente burocratese, solo comunicazione chiara su tempi, costi e probabilità di successo."
  },
  {
    question: "La discovery call è davvero gratuita?",
    answer: "Sì, completamente gratuita e senza impegno. In 30-45 minuti conosciamo la tua azienda, valutiamo l'eligibilità e ti diamo un feedback immediato sulle opportunità disponibili. Solo se decidi di procedere attiviamo l'analisi approfondita."
  }
]

export function FAQ() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Domande frequenti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutto quello che devi sapere sui nostri servizi e sulla finanza agevolata
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
