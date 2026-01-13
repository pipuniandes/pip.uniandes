"use client"

import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-uniandes-en-negro.png"
            alt="Universidad de los Andes"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/semilleros" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Semilleros
          </Link>
          <Link href="/documentos" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Documentos
          </Link>
          <Link
            href="/inscripcion"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Inscripción
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium text-foreground hover:text-primary">
                  Inicio
                </Link>
                <Link href="/semilleros" className="text-lg font-medium text-foreground hover:text-primary">
                  Semilleros
                </Link>
                <Link href="/documentos" className="text-lg font-medium text-foreground hover:text-primary">
                  Documentos
                </Link>
                <Link href="/inscripcion" className="text-lg font-medium text-foreground hover:text-primary">
                  Inscripción
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
