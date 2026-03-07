import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BandoSectionProps {
  id: string
  titolo: string
  children: ReactNode
  className?: string
  variant?: "default" | "muted"
}

export function BandoSection({
  id,
  titolo,
  children,
  className,
  variant = "default"
}: BandoSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16",
        variant === "muted" && "bg-muted/50",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          {titolo}
        </h2>
        {children}
      </div>
    </section>
  )
}
