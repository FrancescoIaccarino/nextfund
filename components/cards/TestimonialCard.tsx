"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export function TestimonialCard({ name, role, company, content, rating }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-card border border-border p-6 hover:border-nextfund-blue/30 transition-all duration-300"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-nextfund-gold fill-nextfund-gold' : 'text-muted-foreground'}`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground text-base mb-6 leading-relaxed">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 border border-border">
          <AvatarFallback className="bg-nextfund-blue/20 text-nextfund-blue font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-foreground font-semibold text-base">{name}</p>
          <p className="text-muted-foreground text-sm">{role} • {company}</p>
        </div>
      </div>
    </motion.div>
  );
}
