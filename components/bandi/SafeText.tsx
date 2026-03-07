import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface SafeTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string
  as?: "p" | "span" | "div"
}

export function SafeText({ text, as: Component = "p", className, ...props }: SafeTextProps) {
  return (
    <Component
      className={cn(className)}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  )
}
