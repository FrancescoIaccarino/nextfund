"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProcessStep({ number, icon: Icon, title, description }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: number * 0.1 }}
      className="relative"
    >
      {/* Number Badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-nextfund-blue flex items-center justify-center text-white font-bold text-sm z-10">
        {number}
      </div>

      <div className="bg-card border border-border p-6 hover:border-nextfund-blue/30 transition-colors h-full flex flex-col">
        <Icon className="w-10 h-10 text-foreground mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed flex-1">{description}</p>
      </div>
    </motion.div>
  );
}
