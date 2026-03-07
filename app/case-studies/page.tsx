import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/lib/data/case-studies"

export default function CaseStudiesPage() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground">
            Scopri come abbiamo aiutato i nostri clienti a raggiungere i loro obiettivi di crescita e trasformazione
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="group flex flex-col transition-all hover:shadow-lg">
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
              <CardContent className="mt-auto">
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
      </div>
    </div>
  )
}
