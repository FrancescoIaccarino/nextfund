"use client"

import { useState } from "react"
import { BandoCard } from "@/components/bandi/BandoCard"
import bandiData from "@/data/bandi.json"
import type { Bando } from "@/lib/bandi-utils"
import { getBandoCategoria, createSlug, getBandoStato } from "@/lib/bandi-utils"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"
import Image from "next/image"
import { PageHeader } from "@/components/layout/PageHeader"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "all", label: "Tutte le categorie" },
  { id: "startup", label: "Startup e Nuove Imprese" },
  { id: "innovazione", label: "Innovazione e Digitale" },
  { id: "sostenibilita", label: "Sostenibilità e Ambiente" },
  { id: "territoriale", label: "Sviluppo Territoriale" },
  { id: "finanziario", label: "Sostegno Finanziario" },
]

export default function BandiPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const bandi = bandiData as Bando[]

  const filteredBandi = selectedCategory === "all" 
    ? bandi 
    : bandi.filter(bando => getBandoCategoria(bando["Nome Bando"]) === selectedCategory)

  // Raggruppa bandi per categoria se "all" è selezionato, altrimenti mostra solo la categoria selezionata
  const displayedCategories = selectedCategory === "all" 
    ? categories.filter(c => c.id !== "all")
    : categories.filter(c => c.id === selectedCategory)

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Bandi e Finanziamenti Agevolati"
        description="Scopri tutti i bandi disponibili per la tua impresa. Fondi a fondo perduto, finanziamenti a tasso zero e agevolazioni per startup, PMI e innovazione."
        align="left"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 min-w-[160px]">
            <p className="text-sm text-white/80">Bandi Disponibili</p>
            <p className="text-3xl font-bold text-white">{filteredBandi.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 min-w-[160px]">
            <p className="text-sm text-white/80">Categorie</p>
            <p className="text-3xl font-bold text-white">{displayedCategories.length}</p>
          </div>
        </div>
      </PageHeader>

      {/* Filters Section */}
      <section className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Trovati <span className="font-bold text-foreground">{filteredBandi.length}</span> bandi disponibili
              {selectedCategory !== "all" && (
                <span className="ml-1">
                  in <span className="font-medium text-primary">
                    {categories.find(c => c.id === selectedCategory)?.label}
                  </span>
                </span>
              )}
            </p>
            
            <div className="flex items-center gap-2">
              {selectedCategory !== "all" && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedCategory("all")}
                  className="h-8 px-2 text-muted-foreground hover:text-foreground"
                >
                  Rimuovi filtri <X className="ml-2 h-4 w-4" />
                </Button>
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 border-dashed">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtra per categoria
                    {selectedCategory !== "all" && (
                      <Badge variant="secondary" className="ml-2 h-5 px-1.5 font-normal">
                        1
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[240px]">
                  <DropdownMenuLabel>Seleziona Categoria</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="justify-between"
                    >
                      {category.label}
                      {selectedCategory === category.id && (
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      {/* Bandi Grid */}
      <section className="py-16 min-h-[600px]">
        <div className="container mx-auto px-4">
          {displayedCategories.map((category) => {
            const categoryBandi = bandi.filter(b => getBandoCategoria(b["Nome Bando"]) === category.id)
            
            if (categoryBandi.length === 0) return null

            return (
              <div key={category.id} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-2xl font-bold tracking-tight">{category.label}</h2>
                  <Badge variant="secondary" className="text-xs font-normal text-muted-foreground">
                    {categoryBandi.length}
                  </Badge>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryBandi.map((bando, index) => (
                    <BandoCard
                      key={`${category.id}-${index}`}
                      titolo={bando["Nome Bando"]}
                      sottotitolo={bando["Ente Erogante"]}
                      stato={getBandoStato(bando["Tipo di Sportello"])}
                      categoria={category.id as any}
                      investimentoMin={bando["Investimento Minimo"] || "€0"}
                      investimentoMax={bando["Investimento Massimo"] || "Non specificato"}
                      fondoPerduto={bando["Finanziamento % Fondo Perduto"]}
                      slug={createSlug(bando["Nome Bando"])}
                    />
                  ))}
                </div>
              </div>
            )
          })}
          
          {filteredBandi.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Nessun bando trovato in questa categoria.</p>
              <Button 
                variant="link" 
                onClick={() => setSelectedCategory("all")}
                className="mt-2 text-primary"
              >
                Vedi tutti i bandi
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Non trovi il bando giusto?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Contattaci per una consulenza personalizzata. Ti aiuteremo a trovare
            le migliori opportunità di finanziamento per la tua impresa.
          </p>
          <Button size="lg" asChild>
            <a href="/contatti">Richiedi Consulenza</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
