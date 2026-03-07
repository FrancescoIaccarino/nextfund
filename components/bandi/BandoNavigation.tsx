"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface NavItem {
  id: string
  label: string
}

interface BandoNavigationProps {
  items: NavItem[]
}

export function BandoNavigation({ items }: BandoNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(items[0]?.id || "")
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if sticky
      setIsSticky(window.scrollY > 400)

      // Find active section
      const sections = items.map(item => document.getElementById(item.id))
      const currentSection = sections.find(section => {
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav
      className={cn(
        "z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isSticky ? "sticky top-0 shadow-sm" : "relative"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
