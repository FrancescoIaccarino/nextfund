"use client";

import { motion } from "framer-motion";

const partners = [
  "MISE",
  "MIMIT",
  "Comunità Europea",
  "Invitalia",
  "CDP",
];

export function LogoBand() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-base text-muted-foreground mb-8 uppercase tracking-wider"
        >
          Partner e Istituzioni di Fiducia
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center"
            >
              <span className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
