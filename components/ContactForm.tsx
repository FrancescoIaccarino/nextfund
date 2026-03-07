"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacyAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("Form inviato! (Placeholder - implementare backend)");
  };

  return (
    <div className="bg-card border border-border p-8 mx-auto w-full">
      <div className="text-center mb-8">
        <div className="w-14 h-14 bg-nextfund-blue/10 flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-nextfund-blue" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Invia un messaggio</h3>
        <p className="text-sm text-muted-foreground">
          Compila il form e ti risponderemo il prima possibile
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Il tuo nome"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="la.tua@email.it"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Oggetto *</Label>
          <Input
            id="subject"
            type="text"
            placeholder="Di cosa vuoi parlare?"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Messaggio *</Label>
          <Textarea
            id="message"
            placeholder="Descrivici il tuo progetto e le tue esigenze..."
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="privacy"
            checked={formData.privacyAccepted}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, privacyAccepted: checked as boolean })
            }
            required
          />
          <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
            Ho letto ed accettato i termini della{" "}
            <a href="/privacy-policy" className="text-nextfund-blue hover:underline">
              Privacy Policy
            </a>
            . *
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-nextfund-blue hover:bg-nextfund-blue-dark text-white"
          size="lg"
        >
          <Send className="mr-2 h-5 w-5" />
          Invia Messaggio
        </Button>
      </form>
    </div>
  );
}
