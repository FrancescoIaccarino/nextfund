"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg-secondary border-t border-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo-white.svg"
                alt="NextFund Advisory"
                width={150}
                height={43}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Finanza agevolata di nuova generazione per la crescita del tuo business.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/nextfundadvisory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nextfund-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/nextfundadvisory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nextfund-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/nextfundadvisory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nextfund-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Azienda</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#servizi" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="#processo" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Processo
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-gray-500 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contatti" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Legale</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/note-legali" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Note Legali
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Ricevi aggiornamenti su bandi e opportunità di finanziamento
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="La tua email"
                className="bg-dark-bg-card border-gray-800 text-white placeholder:text-gray-600"
              />
              <Button size="sm" className="bg-nextfund-blue hover:bg-nextfund-blue-light">
                Iscriviti
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {currentYear} NextFund Advisory. All rights reserved. • P.IVA: IT00000000000</p>
          <p>NextFund Advisory accompagna le aziende nel loro business.</p>
        </div>
      </div>
    </footer>
  );
}
