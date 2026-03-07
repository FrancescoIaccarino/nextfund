import { Badge } from "@/components/ui/badge"

interface SettoriTagsProps {
  settori: string
}

export function SettoriTags({ settori }: SettoriTagsProps) {
  // Split settori by common delimiters
  const settoriArray = settori
    .split(/[;,]/)
    .map(s => s.trim())
    .filter(s => s.length > 0)

  return (
    <div className="flex flex-wrap gap-2">
      {settoriArray.map((settore, index) => (
        <Badge key={index} variant="secondary">
          {settore}
        </Badge>
      ))}
    </div>
  )
}
