"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = scrolled ? "/logo-blue.svg" : "/logo-white.svg";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            alt="NextFund Advisory"
            width={180}
            height={52}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/chi-siamo"
            className={cn(
              "text-base font-medium transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            )}
          >
            Chi Siamo
          </Link>
          <Link
            href="/servizi"
            className={cn(
              "text-base font-medium transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            )}
          >
            Servizi
          </Link>
          <Link
            href="/bandi"
            className={cn(
              "text-base font-medium transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            )}
          >
            Bandi
          </Link>
          <Link
            href="/insights"
            className={cn(
              "text-base font-medium transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            )}
          >
            Blog
          </Link>
          <Link
            href="/contatti"
            className={cn(
              "text-base font-medium transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            )}
          >
            Contatti
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA Button */}
          <Button
            asChild
            className={cn(
              "hidden md:flex text-base",
              scrolled
                ? "bg-nextfund-blue hover:bg-nextfund-blue-light text-white"
                : "bg-white hover:bg-white/90 text-nextfund-blue"
            )}
          >
            <Link href="/contatti">Chiamaci Ora</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden",
                  !scrolled && "text-white hover:text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Apri menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center font-display">
                  <Image
                    src="/logo-blue.svg"
                    alt="NextFund Advisory"
                    width={150}
                    height={43}
                    className="h-8 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/chi-siamo"
                  className="text-lg font-medium text-foreground hover:text-nextfund-blue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Chi Siamo
                </Link>
                <Link
                  href="/servizi"
                  className="text-lg font-medium text-foreground hover:text-nextfund-blue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Servizi
                </Link>
                <Link
                  href="/bandi"
                  className="text-lg font-medium text-foreground hover:text-nextfund-blue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bandi
                </Link>
                <Link
                  href="/insights"
                  className="text-lg font-medium text-foreground hover:text-nextfund-blue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contatti"
                  className="text-lg font-medium text-foreground hover:text-nextfund-blue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contatti
                </Link>

                <div className="pt-4 border-t border-border">
                  <Button
                    asChild
                    className="w-full bg-nextfund-blue hover:bg-nextfund-blue-light text-white text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/contatti">Chiamaci Ora</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
