"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

const testimonials = [
  {
    name: "Marco Rossi",
    role: "CEO",
    company: "TechStart SRL",
    content: "Grazie a NextFund abbiamo ottenuto 150k€ di contributi in soli 3 mesi. Il loro sistema di matching automatico ci ha fatto risparmiare settimane di ricerca.",
    rating: 5,
  },
  {
    name: "Laura Bianchi",
    role: "CFO",
    company: "InnovateHub",
    content: "Il processo è stato veloce e trasparente. La dashboard per monitorare lo stato della pratica è fantastica, sempre aggiornata in tempo reale.",
    rating: 5,
  },
  {
    name: "Giuseppe Verdi",
    role: "Founder",
    company: "GreenEnergy Srl",
    content: "Consulenza strategica che ha trasformato il nostro business. Non solo finanziamenti, ma una vera partnership per la crescita.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Dicono di Noi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Storie di successo dei nostri clienti
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
