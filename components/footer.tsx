"use client"

import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Programa de Investigación en Pregrado</h3>
            <p className="text-sm text-muted-foreground">
              Fomentando la investigación y creación desde el pregrado en la Universidad de los Andes
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Inicio
              </Link>
              <Link href="/semilleros" className="text-sm text-muted-foreground hover:text-primary">
                Semilleros
              </Link>
              <Link href="/documentos" className="text-sm text-muted-foreground hover:text-primary">
                Documentos
              </Link>
              <Link href="/inscripcion" className="text-sm text-muted-foreground hover:text-primary">
                Inscripción
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contacto</h4>
            <p className="text-sm text-muted-foreground">
              Universidad de los Andes
              <br />
              Carrera 1 #18A-12
              <br />
              Bogotá, Colombia
              <br />
              pip@uniandes.edu.co
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © 2025 Universidad de los Andes. Todos los derechos reservados.
          </p>
          <Button variant="ghost" size="sm" onClick={scrollToTop} className="gap-2">
            <ChevronUp className="h-4 w-4" />
            Ir arriba
          </Button>
        </div>
      </div>
    </footer>
  )
}
