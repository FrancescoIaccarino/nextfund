"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Rocket, Cpu, Leaf, MapPin, Banknote } from "lucide-react"

const bandiCategories = [
  {
    title: "Startup e Nuove Imprese",
    icon: Rocket,
    items: [
      { title: "ON - Oltre Nuove imprese a tasso zero", href: "/bandi/on-oltre-nuove-imprese-a-tasso-zero" },
      { title: "Smart&Start Italia", href: "/bandi/smartstart-italia" },
      { title: "Imprenditoria femminile", href: "/bandi/imprenditoria-femminile-fondo-impresa-femminile" },
      { title: "Resto al Sud 2.0", href: "/bandi/resto-al-sud-20" },
      { title: "Autoimpiego Centro-Nord", href: "/bandi/autoimpiego-centro-nord" },
      { title: "Rete - Giovani, Competenze, Lavoro", href: "/bandi/rete-giovani-competenze-lavoro" },
    ],
  },
  {
    title: "Innovazione e Digitale",
    icon: Cpu,
    items: [
      { title: "Digital transformation", href: "/bandi/digital-transformation" },
      { title: "Beni strumentali - Nuova Sabatini", href: "/bandi/beni-strumentali-nuova-sabatini" },
    ],
  },
  {
    title: "Sostenibilità e Ambiente",
    icon: Leaf,
    items: [
      { title: "Contratto di sviluppo - Net Zero", href: "/bandi/contratto-di-sviluppo-net-zero" },
      { title: "Economia circolare", href: "/bandi/economia-circolare" },
      { title: "Contratto di sviluppo", href: "/bandi/contratto-di-sviluppo" },
      { title: "Fondo nazionale efficienza energetica", href: "/bandi/fondo-nazionale-efficienza-energetica" },
    ],
  },
  {
    title: "Sviluppo Territoriale",
    icon: MapPin,
    items: [
      { title: "Fondo Cresci al Sud", href: "/bandi/fondo-cresci-al-sud" },
      { title: "Legge 181/89 - Aree di crisi industriale", href: "/bandi/legge-18189-aree-di-crisi-industriale" },
    ],
  },
  {
    title: "Sostegno Finanziario",
    icon: Banknote,
    items: [
      { title: "Fondo Salvaguardia Imprese", href: "/bandi/fondo-salvaguardia-imprese" },
      { title: "Finanziamenti vittime di mancati pagamenti", href: "/bandi/finanziamenti-vittime-di-mancati-pagamenti" },
    ],
  },
]

export function BandiMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-gray-400 hover:text-white bg-transparent data-[state=open]:text-white">
            Bandi
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[800px] p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Scopri tutti i bandi disponibili
                </h4>
                <Link
                  href="/bandi"
                  className="text-sm text-primary hover:underline"
                >
                  Vedi tutti i bandi →
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {bandiCategories.map((category) => (
                  <div key={category.title} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4 text-primary" />
                      <h5 className="font-semibold text-sm">{category.title}</h5>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
