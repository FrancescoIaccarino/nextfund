import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bandi e Finanziamenti Agevolati | NextFund Advisory",
  description: "Scopri tutti i bandi e finanziamenti agevolati disponibili per la tua impresa. Fondo perduto, tasso zero e agevolazioni per startup, PMI e innovazione.",
}

export default function BandiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
