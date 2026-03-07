"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calculator, Euro, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react"

interface CalcolatoreAgevolazioniProps {
  investimentoMin: string
  investimentoMax: string
  fondoPerduto?: string
  tassoZero?: string
  nomeBando: string
}

export function CalcolatoreAgevolazioni({
  investimentoMin,
  investimentoMax,
  fondoPerduto,
  tassoZero,
  nomeBando
}: CalcolatoreAgevolazioniProps) {
  const [importo, setImporto] = useState<string>("")
  const [risultati, setRisultati] = useState<{
    fondoPerdutoImporto: number
    fondoPerdutoPerc: number
    tassoZeroImporto: number
    tassoZeroPerc: number
    totaleAgevolato: number
    totaleAgevolatoPerc: number
    aCaricoImpresa: number
    aCaricoImpresaPerc: number
  } | null>(null)
  const [errore, setErrore] = useState<string>("")

  // Parse percentages from strings
  const parseFondoPerduto = () => {
    if (!fondoPerduto) return 0
    const match = fondoPerduto.match(/(\d+(?:\.\d+)?)/g)
    if (!match) return 0
    // Take the highest percentage mentioned
    const percentages = match.map(Number)
    return Math.max(...percentages)
  }

  const parseTassoZero = () => {
    if (!tassoZero) return 0
    const match = tassoZero.match(/(\d+(?:\.\d+)?)/g)
    if (!match) return 0
    const percentages = match.map(Number)
    return Math.max(...percentages)
  }

  // Parse min/max from strings
  const parseAmount = (str: string): number => {
    if (!str || str === "Non specificato" || str === "€ 0 (no minimo)") return 0
    const match = str.match(/[\d.]+/g)
    if (!match) return 0
    // Remove periods (thousands separators in Italian format) before parsing
    const cleanedNumber = match.join('').replace(/\./g, '')
    const num = parseFloat(cleanedNumber)
    // Convert to euros based on context
    if (str.includes('milioni') || str.includes('M')) return num * 1000000
    if (str.includes('mila') || str.includes('k')) return num * 1000
    return num
  }

  const minAmount = parseAmount(investimentoMin)
  const maxAmount = parseAmount(investimentoMax)

  useEffect(() => {
    if (!importo) {
      setRisultati(null)
      setErrore("")
      return
    }

    const amount = parseFloat(importo.replace(/[^\d.]/g, ''))

    if (isNaN(amount) || amount <= 0) {
      setErrore("Inserisci un importo valido")
      setRisultati(null)
      return
    }

    if (minAmount > 0 && amount < minAmount) {
      setErrore(`L'importo minimo per questo bando è €${minAmount.toLocaleString('it-IT')}`)
      setRisultati(null)
      return
    }

    if (maxAmount > 0 && amount > maxAmount) {
      setErrore(`L'importo massimo per questo bando è €${maxAmount.toLocaleString('it-IT')}`)
      setRisultati(null)
      return
    }

    setErrore("")

    const percFondoPerduto = parseFondoPerduto()
    const percTassoZero = parseTassoZero()

    const fondoPerdutoCalc = (amount * percFondoPerduto) / 100
    const tassoZeroCalc = (amount * percTassoZero) / 100
    const totaleAgevolato = fondoPerdutoCalc + tassoZeroCalc
    const aCaricoImpresa = amount - totaleAgevolato

    setRisultati({
      fondoPerdutoImporto: fondoPerdutoCalc,
      fondoPerdutoPerc: percFondoPerduto,
      tassoZeroImporto: tassoZeroCalc,
      tassoZeroPerc: percTassoZero,
      totaleAgevolato,
      totaleAgevolatoPerc: (totaleAgevolato / amount) * 100,
      aCaricoImpresa: Math.max(0, aCaricoImpresa),
      aCaricoImpresaPerc: Math.max(0, (aCaricoImpresa / amount) * 100)
    })
  }, [importo, fondoPerduto, tassoZero, minAmount, maxAmount])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            <div>
              <CardTitle className="text-xl">Calcolatore Agevolazioni</CardTitle>
              <CardDescription>
                Calcola in tempo reale quanto puoi ottenere con questo bando
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Importo */}
          <div className="space-y-2">
            <Label htmlFor="importo" className="text-base">
              Importo Investimento Previsto
            </Label>
            <div className="relative">
              <Euro className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="importo"
                type="text"
                placeholder="Inserisci l'importo (es. 100000)"
                value={importo}
                onChange={(e) => setImporto(e.target.value)}
                className="pl-10 text-lg"
              />
            </div>
            {minAmount > 0 && maxAmount > 0 && (
              <p className="text-xs text-muted-foreground">
                Range consentito: {formatCurrency(minAmount)} - {formatCurrency(maxAmount)}
              </p>
            )}
          </div>

          {/* Errore */}
          {errore && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errore}</AlertDescription>
            </Alert>
          )}

          {/* Risultati */}
          {risultati && !errore && (
            <div className="space-y-4 border-2 border-green-500/20 bg-green-500/5 p-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-green-900">Risultati del Calcolo</h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Fondo Perduto */}
                {risultati.fondoPerdutoPerc > 0 && (
                  <Card className="border-green-500/30 bg-green-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-muted-foreground">
                        Contributo a Fondo Perduto
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-bold text-green-700">
                            {formatCurrency(risultati.fondoPerdutoImporto)}
                          </span>
                          <Badge variant="outline" className="text-green-700 border-green-500/30">
                            {risultati.fondoPerdutoPerc.toFixed(1)}%
                          </Badge>
                        </div>
                        <Progress
                          value={risultati.fondoPerdutoPerc}
                          className="h-2 bg-green-200"
                        />
                        <p className="text-xs text-muted-foreground">
                          Non devi restituire questa somma
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Finanziamento Tasso Zero */}
                {risultati.tassoZeroPerc > 0 && (
                  <Card className="border-blue-500/30 bg-blue-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-muted-foreground">
                        Finanziamento Agevolato
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-bold text-blue-700">
                            {formatCurrency(risultati.tassoZeroImporto)}
                          </span>
                          <Badge variant="outline" className="text-blue-700 border-blue-500/30">
                            {risultati.tassoZeroPerc.toFixed(1)}%
                          </Badge>
                        </div>
                        <Progress
                          value={risultati.tassoZeroPerc}
                          className="h-2 bg-blue-200"
                        />
                        <p className="text-xs text-muted-foreground">
                          Prestito a tasso zero da restituire
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Totale Agevolato */}
                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">
                      Totale Agevolazioni
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-bold text-primary">
                          {formatCurrency(risultati.totaleAgevolato)}
                        </span>
                        <Badge variant="default">
                          {risultati.totaleAgevolatoPerc.toFixed(1)}%
                        </Badge>
                      </div>
                      <Progress
                        value={risultati.totaleAgevolatoPerc}
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        Supporto totale ricevuto dallo Stato
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* A Carico Impresa */}
                <Card className="border-orange-500/30 bg-orange-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">
                      A Carico dell'Impresa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-bold text-orange-700">
                          {formatCurrency(risultati.aCaricoImpresa)}
                        </span>
                        <Badge variant="outline" className="text-orange-700 border-orange-500/30">
                          {risultati.aCaricoImpresaPerc.toFixed(1)}%
                        </Badge>
                      </div>
                      <Progress
                        value={risultati.aCaricoImpresaPerc}
                        className="h-2 bg-orange-200"
                      />
                      <p className="text-xs text-muted-foreground">
                        Quota da coprire con risorse proprie
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Summary */}
              <div className="mt-4 bg-white/50 p-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="mt-1 h-5 w-5 text-primary" />
                  <div className="space-y-1">
                    <p className="font-semibold">Riepilogo</p>
                    <p className="text-sm text-muted-foreground">
                      Con un investimento di <strong>{formatCurrency(parseFloat(importo.replace(/[^\d.]/g, '')))}</strong>,
                      riceverai <strong className="text-green-600">{formatCurrency(risultati.totaleAgevolato)}</strong> di
                      agevolazioni ({risultati.totaleAgevolatoPerc.toFixed(1)}% del totale).
                      Dovrai coprire con risorse proprie o altri finanziamenti{" "}
                      <strong className="text-orange-600">{formatCurrency(risultati.aCaricoImpresa)}</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Alert className="border-primary/30 bg-primary/5">
                <AlertDescription className="text-sm">
                  💡 <strong>Nota:</strong> Questo è un calcolo indicativo basato sui dati del bando.
                  Le percentuali effettive possono variare in base a fattori specifici (dimensione azienda,
                  localizzazione, settore, ecc.). Contattaci per una valutazione personalizzata.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Empty State */}
          {!risultati && !errore && (
            <div className="border-2 border-dashed border-muted-foreground/20 p-8 text-center">
              <Calculator className="mx-auto mb-3 h-12 w-12 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">
                Inserisci l'importo dell'investimento per vedere il calcolo delle agevolazioni
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
