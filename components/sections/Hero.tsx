import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp, Award, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Card with rounded corners */}
        <div className="bg-primary text-primary-foreground overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Content */}
            <div className="px-8 md:px-12 lg:px-16 py-12 lg:py-20 flex flex-col justify-center">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
                  ))}
                </div>
                <span className="text-primary-foreground/90 font-medium">Partner di fiducia dal 2026</span>
              </div>

              {/* Title with serif font */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 leading-tight">
                Finanza agevolata semplice e accessibile per la tua PMI
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                Trasformiamo i bandi pubblici in opportunità concrete di crescita, con tecnologia innovativa e supporto personalizzato.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8"
                >
                  Richiedi consulenza gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-primary-foreground hover:bg-primary-foreground/10 px-8 border-0"
                >
                  Scopri i servizi
                </Button>
              </div>
            </div>

            {/* Right Icons Pattern */}
            <div className="relative lg:min-h-[600px] flex items-center justify-center p-12">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Decorative icons in a pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Center icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-24 w-24 bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                        <TrendingUp className="h-12 w-12 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Orbiting icons */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <div className="h-16 w-16 bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                        <Award className="h-8 w-8 text-primary-foreground/70" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <div className="h-16 w-16 bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                        <Shield className="h-8 w-8 text-primary-foreground/70" />
                      </div>
                    </div>

                    <div className="absolute top-1/2 left-0 -translate-y-1/2">
                      <div className="h-16 w-16 bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                        <Star className="h-8 w-8 text-primary-foreground/70 fill-primary-foreground/70" />
                      </div>
                    </div>

                    <div className="absolute top-1/2 right-0 -translate-y-1/2">
                      <div className="h-16 w-16 bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
                        <ArrowRight className="h-8 w-8 text-primary-foreground/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
