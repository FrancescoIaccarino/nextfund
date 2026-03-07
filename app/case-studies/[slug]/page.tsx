import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { getCaseStudyBySlug } from "@/lib/data/case-studies"

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">
              {caseStudy.sector}
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {caseStudy.client}
            </p>
          </div>

          {/* Challenge */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>La Sfida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>La Soluzione</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{caseStudy.solution}</p>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Risultati</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/contatti">
                Richiedi Consulenza
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/case-studies">Vedi Altri Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
