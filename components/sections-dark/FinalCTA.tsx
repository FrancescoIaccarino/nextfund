"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 bg-dark-bg-primary overflow-hidden">

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-nextfund-blue/20 mb-8">
            <Zap className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Lascia che Noi Facciamo il Lavoro
            <br />
            <span className="text-nextfund-gold">
              Mentre Tu Fai Crescere il Business
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Inizia oggi il tuo percorso verso la crescita con NextFund Advisory.
            Consulenza gratuita, nessun impegno, massima trasparenza.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-nextfund-blue hover:bg-nextfund-blue-light text-white px-8 shadow-elegant hover:shadow-elegant-lg transition-all"
            >
              <Link href="#contatti">
                Richiedi Consulenza Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white px-8"
            >
              <Link href="#servizi">Scopri di Più</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto pt-16 border-t border-gray-800">
            <div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Trasparente</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Supporto</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">0€</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Costi Iniziali</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
