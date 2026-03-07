import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { getFeaturedInsights } from "@/lib/data/insights"

export function InsightsPreview() {
  const featuredInsights = getFeaturedInsights(3)

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Insights
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Analisi, trend e best practice dal mondo della finanza
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredInsights.map((insight) => (
            <Card key={insight.id} className="group flex flex-col transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="secondary">{insight.category}</Badge>
                  {insight.readTime && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {insight.readTime} min
                    </span>
                  )}
                </div>
                <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                  {insight.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {insight.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(insight.publishDate).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <Button asChild variant="ghost" className="group/btn w-full justify-between">
                  <Link href={`/insights/${insight.slug}`}>
                    Leggi l'articolo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/insights">Vedi Tutti gli Insights</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
