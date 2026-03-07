import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { getFeaturedCaseStudies } from "@/lib/data/case-studies"

export function CaseStudiesPreview() {
  const featuredCaseStudies = getFeaturedCaseStudies(3)

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Case Studies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Scopri come abbiamo aiutato i nostri clienti a raggiungere i loro obiettivi
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="group transition-all hover:shadow-lg">
              <CardHeader>
                <Badge variant="secondary" className="mb-2 w-fit">
                  {caseStudy.sector}
                </Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {caseStudy.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {caseStudy.challenge}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2">
                  {caseStudy.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="flex items-baseline justify-between text-sm">
                      <span className="text-muted-foreground">{result.metric}</span>
                      <span className="font-semibold text-primary">{result.value}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="ghost" className="group/btn w-full justify-between">
                  <Link href={`/case-studies/${caseStudy.slug}`}>
                    Leggi il caso completo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/case-studies">Vedi Tutti i Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
