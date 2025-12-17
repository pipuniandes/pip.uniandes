import Image from "next/image"
import Link from "next/link"
import { Mail, User, Badge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Semillero } from "@/lib/types"

interface SemilleroCardProps {
  semillero: Semillero
}

export function SemilleroCard({ semillero }: SemilleroCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-gradient-to-br from-primary/10 to-accent/20">
          {semillero.image_url ? (
            <Image src={semillero.image_url || "/placeholder.svg"} alt={semillero.name} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-6xl font-bold text-primary/20">{semillero.name.charAt(0)}</div>
            </div>
          )}
          {semillero.is_funded && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground shadow-md">
              <Badge className="h-3 w-3" />
              Financiado
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {semillero.faculty}
          </span>
        </div>
        <h3 className="mb-2 text-balance text-xl font-bold text-foreground">{semillero.name}</h3>
        <p className="mb-4 text-pretty text-sm text-muted-foreground line-clamp-3">{semillero.description}</p>
        <div className="space-y-2 text-sm">
          {semillero.coordinator && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4 flex-shrink-0" />
              <span className="font-medium">Responsable:</span>
              <span>{semillero.coordinator}</span>
            </div>
          )}
          {semillero.email && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="font-medium">Contacto:</span>
              <span className="truncate text-xs">{semillero.email}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" asChild>
          <Link href={`/inscripcion?semillero=${semillero.id}`}>Inscribirse</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
