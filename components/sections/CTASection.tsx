import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-nextfund-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a Trasformare il Futuro della tua Azienda?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti ad
            accedere ai finanziamenti più vantaggiosi per il tuo business.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-nextfund-gold hover:bg-nextfund-gold-dark text-white px-8"
          >
            <Link href="#contatti">
              Richiedi Consulenza Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
