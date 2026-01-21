"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronUp, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo-uniandes-en-negro.png"
              alt="Universidad de los Andes"
              width={180}
              height={50}
              className="mb-4 h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80">
              Programa de Investigación y Creación en Pregrado
            </p>
          </div>

          {/* Enlaces del sitio */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">El PIP</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-primary-foreground/80 hover:text-accent">
                Inicio
              </Link>
              <Link href="/semilleros" className="text-sm text-primary-foreground/80 hover:text-accent">
                Semilleros
              </Link>
              <Link href="/consejeros" className="text-sm text-primary-foreground/80 hover:text-accent">
                Consejeros
              </Link>
              <Link href="/preguntas-frecuentes" className="text-sm text-primary-foreground/80 hover:text-accent">
                Preguntas Frecuentes
              </Link>
              <Link href="/inscripcion" className="text-sm text-primary-foreground/80 hover:text-accent">
                Inscripción
              </Link>
            </nav>
          </div>

          {/* Enlaces institucionales */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Institucional</h4>
            <nav className="flex flex-col gap-2">
              <a 
                href="https://uniandes.edu.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-accent"
              >
                Universidad de los Andes
              </a>
              <a 
                href="https://investigacioncreacion.uniandes.edu.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-accent"
              >
                Vicerrectoría de Investigación
              </a>
              <a 
                href="https://biblioteca.uniandes.edu.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-accent"
              >
                Biblioteca
              </a>
              <a 
                href="https://catalogo.uniandes.edu.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-accent"
              >
                Catálogo de Programas
              </a>
            </nav>
          </div>

          {/* Contacto y redes */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">Contacto</h4>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Carrera 1 #18A-12
              <br />
              Bogotá, Colombia
              <br />
              <a href="mailto:pip@uniandes.edu.co" className="hover:text-accent">
                pip@uniandes.edu.co
              </a>
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/Losuniandes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/Losuniandes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/losuniandes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/user/universidaduniandes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Universidad de los Andes. Todos los derechos reservados.
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop} 
            className="gap-2 text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
          >
            <ChevronUp className="h-4 w-4" />
            Ir arriba
          </Button>
        </div>
      </div>
    </footer>
  )
}
