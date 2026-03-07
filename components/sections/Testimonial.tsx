import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonial() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12">
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
            "Nextfund Advisory ha trasformato un processo che vedevo come un incubo burocratico in qualcosa di gestibile e chiaro. In poche settimane abbiamo presentato tre bandi che da soli non avremmo mai considerato. Finalmente consulenti che parlano la nostra lingua."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5" />
            </div>
            <div>
              <p className="font-semibold text-lg">Maria Bianchi</p>
              <p className="text-muted-foreground">CEO, TechStart Italia</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
