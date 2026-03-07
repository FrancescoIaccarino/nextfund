"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const teamMembers = [
  {
    name: "Rocco Totaro",
    role: "Co-Founder",
    image: "1"
  },
  {
    name: "Benito Piscitelli",
    role: "Co-Founder",
    image: "2"
  },
  {
    name: "Leonardo Reggine",
    role: "Co-Founder",
    image: "3"
  },
  {
    name: "Mariano Benedetto",
    role: "Co-Founder",
    image: "4"
  },
  {
    name: "Marco Cielo",
    role: "Co-Founder",
    image: "5"
  },
  {
    name: "Francesco Iaccarino",
    role: "Co-Founder",
    image: "6"
  },
  {
    name: "Lorenzo Buttrazzi",
    role: "Co-Founder",
    image: "7"
  }
]

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Un team giovane con competenze solide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            7 founder con background multidisciplinare in ambito giuridico, economico-manageriale e tecnologico
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">{member.name.split(' ')[0]}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Card className="overflow-hidden mb-6">
            <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">{teamMembers[currentIndex].name.split(' ')[0]}</p>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-xl mb-1">{teamMembers[currentIndex].name}</h3>
              <p className="text-muted-foreground">{teamMembers[currentIndex].role}</p>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePrev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            + un team di esperti in consulenza, compliance e tecnologia
          </p>
        </div>
      </div>
    </section>
  )
}
