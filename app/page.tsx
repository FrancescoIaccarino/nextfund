import { HeroSectionDark } from "@/components/sections-dark/HeroSectionDark";
import { LogoBand } from "@/components/sections-dark/LogoBand";
import { FeatureShowcase } from "@/components/sections-dark/FeatureShowcase";
import { ProcessSection } from "@/components/sections-dark/ProcessSection";
import { TestimonialsSection } from "@/components/sections-dark/TestimonialsSection";
import { FAQSection } from "@/components/sections-dark/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSectionDark />
      <LogoBand />
      <FeatureShowcase />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
