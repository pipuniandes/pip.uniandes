"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SemilleroFilters } from "@/components/semillero-filters"
import { SemilleroCard } from "@/components/semillero-card"
import { getSupabaseClient } from "@/lib/supabase/client"
import type { Semillero } from "@/lib/types"

export default function SemillerosPage() {
  const [semilleros, setSemilleros] = useState<Semillero[]>([])
  const [filteredSemilleros, setFilteredSemilleros] = useState<Semillero[]>([])
  const [filters, setFilters] = useState({ faculty: "Todas las Facultades", area: "Todas las Áreas" })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSemilleros() {
      const supabase = getSupabaseClient()
      const { data, error } = await supabase
        .from("semilleros")
        .select("*")
        .eq("status", "Activo")
        .order("name", { ascending: true })

      if (error) {
        console.error("[v0] Error fetching semilleros:", error)
        setLoading(false)
        return
      }

      console.log("[v0] Semilleros activos cargados:", data?.length || 0)
      setSemilleros((data as Semillero[]) || [])
      setFilteredSemilleros((data as Semillero[]) || [])
      setLoading(false)
    }

    fetchSemilleros()
  }, [])

  useEffect(() => {
    let filtered = semilleros

    if (filters.faculty !== "Todas las Facultades") {
      filtered = filtered.filter((s) => s.faculty === filters.faculty)
    }

    if (filters.area !== "Todas las Áreas") {
      filtered = filtered.filter((s) => s.area === filters.area)
    }

    setFilteredSemilleros(filtered)
  }, [filters, semilleros])

  const fundedCount = semilleros.filter((s) => s.is_funded).length

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 text-primary-foreground md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
                Semilleros de Investigación
              </h1>
              <p className="text-pretty text-lg md:text-xl">
                Descubre los 76 espacios activos de investigación y creación disponibles para estudiantes de pregrado en
                la Universidad de los Andes
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-b border-border bg-accent py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-foreground">{semilleros.length}</div>
                <div className="text-sm text-accent-foreground/80">Semilleros activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-foreground">{fundedCount}</div>
                <div className="text-sm text-accent-foreground/80">Financiados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-foreground">{filteredSemilleros.length}</div>
                <div className="text-sm text-accent-foreground/80">Resultados</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <SemilleroFilters onFilterChange={setFilters} />
            </div>

            {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-[400px] animate-pulse rounded-lg bg-muted" />
                ))}
              </div>
            ) : filteredSemilleros.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSemilleros.map((semillero) => (
                  <SemilleroCard key={semillero.id} semillero={semillero} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-muted p-12 text-center">
                <p className="text-lg text-muted-foreground">
                  No se encontraron semilleros con los filtros seleccionados.
                </p>
                <button
                  onClick={() => setFilters({ faculty: "Todas las Facultades", area: "Todas las Áreas" })}
                  className="mt-4 text-primary hover:underline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
