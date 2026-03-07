import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Trasforma le{" "}
            <span className="text-nextfund-blue">Opportunità di Finanziamento</span>
            <br />
            in{" "}
            <span className="text-nextfund-gold">Crescita Concreta</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Accompagniamo le aziende verso il successo attraverso finanza agevolata,
            consulenza e supporto alla digitalizzazione.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-nextfund-blue hover:bg-nextfund-blue-dark text-white px-8"
            >
              <Link href="#servizi">
                Scopri i Nostri Servizi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-nextfund-blue text-nextfund-blue hover:bg-nextfund-blue/5 px-8"
            >
              <Link href="#contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
