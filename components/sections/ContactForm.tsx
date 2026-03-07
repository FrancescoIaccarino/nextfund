"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, Mail, Phone as PhoneIcon, User } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Richiedi la tua discovery call gratuita
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                30-45 minuti per conoscere la tua azienda e scoprire le opportunità di finanziamento disponibili. Senza impegno, senza costi nascosti.
              </p>

              {/* Benefits Icons */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary-foreground/10 flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90">Consulenza gratuita di 30-45 minuti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary-foreground/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90">Esperti specializzati in finanza agevolata</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary-foreground/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90">Risposta entro 24 ore</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Nome"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Cognome"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                  </div>
                </div>

                <Input
                  type="email"
                  placeholder="Email aziendale"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />

                <Input
                  type="tel"
                  placeholder="Telefono"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />

                <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground">
                    <SelectValue placeholder="Area di interesse" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transizione-40">Transizione 4.0 e 5.0</SelectItem>
                    <SelectItem value="pnrr">PNRR e Bandi Regionali</SelectItem>
                    <SelectItem value="rs">R&S e Innovazione</SelectItem>
                    <SelectItem value="sabatini">Nuova Sabatini</SelectItem>
                    <SelectItem value="altro">Altro / Non so ancora</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Prenota discovery call
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
