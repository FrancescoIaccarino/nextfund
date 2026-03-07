"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, DollarSign, Users, CheckCircle } from "lucide-react"

interface StatisticheChartProps {
  dotazioneAssoluta?: string
  numeroBandi?: string
  valoreTotale?: string
  percentualeAccettazione?: string
  valoreMedio?: string
}

export function StatisticheChart({
  dotazioneAssoluta,
  numeroBandi,
  valoreTotale,
  percentualeAccettazione,
  valoreMedio
}: StatisticheChartProps) {
  const accettazioneNum = percentualeAccettazione
    ? parseFloat(percentualeAccettazione.replace(/[^\d.]/g, ''))
    : 0

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Dotazione Assoluta */}
      {dotazioneAssoluta && dotazioneAssoluta !== "Non disponibile" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dotazione Totale</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dotazioneAssoluta}</div>
            <p className="text-xs text-muted-foreground">
              Risorse disponibili per il bando
            </p>
          </CardContent>
        </Card>
      )}

      {/* Numero Bandi Erogati */}
      {numeroBandi && numeroBandi !== "Non disponibile" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progetti Finanziati</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{numeroBandi}</div>
            <p className="text-xs text-muted-foreground">
              Numero medio progetti all'anno
            </p>
          </CardContent>
        </Card>
      )}

      {/* Valore Totale Erogato */}
      {valoreTotale && valoreTotale !== "Non disponibile" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valore Erogato/Anno</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{valoreTotale}</div>
            <p className="text-xs text-muted-foreground">
              Importo medio erogato annualmente
            </p>
          </CardContent>
        </Card>
      )}

      {/* Percentuale Accettazione */}
      {percentualeAccettazione && percentualeAccettazione !== "Non disponibile" && (
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasso di Successo</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{percentualeAccettazione}</div>
            <p className="text-xs text-muted-foreground mb-3">
              Percentuale domande accettate
            </p>
            {accettazioneNum > 0 && (
              <Progress value={accettazioneNum} className="h-2" />
            )}
          </CardContent>
        </Card>
      )}

      {/* Valore Medio */}
      {valoreMedio && valoreMedio !== "N.D." && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Importo Medio</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{valoreMedio}</div>
            <p className="text-xs text-muted-foreground">
              Valore medio per progetto
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
