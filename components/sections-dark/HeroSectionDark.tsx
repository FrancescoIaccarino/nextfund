"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function HeroSectionDark() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-nextfund-blue/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-tight">
            La Boutique della Finanza Agevolata
            <br />
            <span className="opacity-90">per le Imprese Italiane.</span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed"
          >
            Con competenza e metodo accompagniamo le aziende nell'accesso a{" "}
            <strong className="text-white font-semibold">bandi pubblici</strong>,{" "}
            <strong className="text-white font-semibold">crediti d'imposta</strong> e{" "}
            <strong className="text-white font-semibold">agevolazioni fiscali</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-nextfund-blue px-8 font-semibold"
            >
              <Link href="#contatti">
                Richiedi Consulenza Gratuita
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>

          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
