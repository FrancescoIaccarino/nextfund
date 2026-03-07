import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { getInsightBySlug } from "@/lib/data/insights"

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const insight = getInsightBySlug(slug)

  if (!insight) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <Badge variant="secondary">{insight.category}</Badge>
              {insight.readTime && (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {insight.readTime} min di lettura
                </span>
              )}
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {insight.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(insight.publishDate).toLocaleDateString("it-IT", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {insight.author && <div>By {insight.author}</div>}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-neutral max-w-none mb-12">
            <div className="whitespace-pre-wrap">{insight.content}</div>
          </div>

          {/* Tags */}
          {insight.tags.length > 0 && (
            <div className="mb-12 flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/contatti">
                Richiedi Consulenza
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/insights">Vedi Altri Insights</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
