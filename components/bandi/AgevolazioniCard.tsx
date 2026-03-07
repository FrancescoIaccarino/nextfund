import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Euro, TrendingUp, Calendar, Percent } from "lucide-react"

interface AgevolazioniCardProps {
  investimentoMin: string
  investimentoMax: string
  fondoPerduto?: string
  tassoZero?: string
  tassoInteresse?: string
  durataFinanziamento?: string
  valoreMedio?: string
}

export function AgevolazioniCard({
  investimentoMin,
  investimentoMax,
  fondoPerduto,
  tassoZero,
  tassoInteresse,
  durataFinanziamento,
  valoreMedio
}: AgevolazioniCardProps) {
  // Parse percentages for progress bars
  const fondoPerdutoNum = fondoPerduto ? parseFloat(fondoPerduto.replace(/[^\d.]/g, '')) : 0
  const tassoZeroNum = tassoZero ? parseFloat(tassoZero.replace(/[^\d.]/g, '')) : 0

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Investimento */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Euro className="h-5 w-5 text-primary" />
            <CardTitle>Investimento</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground">Minimo</p>
              <p className="text-2xl font-bold">{investimentoMin}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Massimo</p>
              <p className="text-2xl font-bold">{investimentoMax}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fondo Perduto */}
      {fondoPerduto && (
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <CardTitle>Fondo Perduto</CardTitle>
            </div>
            <CardDescription>A fondo perduto, non rimborsabile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-3xl font-bold text-green-600">{fondoPerduto}</p>
              {fondoPerdutoNum > 0 && (
                <Progress value={fondoPerdutoNum} className="h-2" />
              )}
              <Badge variant="outline" className="text-green-700 border-green-500/20">
                Contributo diretto
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tasso Zero */}
      {tassoZero && (
        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Percent className="h-5 w-5 text-blue-600" />
              <CardTitle>Finanziamento Agevolato</CardTitle>
            </div>
            <CardDescription>Tasso zero o agevolato</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-3xl font-bold text-blue-600">{tassoZero}</p>
              {tassoZeroNum > 0 && (
                <Progress value={tassoZeroNum} className="h-2" />
              )}
              {tassoInteresse && (
                <p className="text-sm text-muted-foreground">
                  Tasso: {tassoInteresse}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Durata */}
      {durataFinanziamento && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>Durata</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{durataFinanziamento}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Anni di rimborso
            </p>
          </CardContent>
        </Card>
      )}

      {/* Valore Medio */}
      {valoreMedio && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <CardTitle>Valore Medio Erogato</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{valoreMedio}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Importo medio per progetto
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
