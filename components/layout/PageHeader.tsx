"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  imageSrc?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
}

export function PageHeader({ 
  title, 
  description, 
  imageSrc = "/hero-bg.jpg",
  children,
  align = "center"
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
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
      <div className={`container relative z-10 px-4 py-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-4xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-display">
            {title}
          </h1>

          {/* Subheading */}
          {description && (
            <p className={`text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
              {description}
            </p>
          )}

          {/* Children */}
          {children && (
            <div className={`mt-8 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
              {children}
            </div>
          )}
        </motion.div>
      </div>

    </section>
  );
}
