"use client"

import { Button } from "@/components/ui/button"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocumentFilters } from "@/components/document-filters"
import { DocumentCard } from "@/components/document-card"
import { getSupabaseClient } from "@/lib/supabase/client"
import type { Document } from "@/lib/types"
import { FileText } from "lucide-react"

export default function DocumentosPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([])
  const [filters, setFilters] = useState({ category: "Todas las Categorías", search: "" })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDocuments() {
      const supabase = getSupabaseClient()
      const { data, error } = await supabase.from("documents").select("*").order("upload_date", { ascending: false })

      if (error) {
        console.error("[v0] Error fetching documents:", error)
        setLoading(false)
        return
      }

      setDocuments((data as Document[]) || [])
      setFilteredDocuments((data as Document[]) || [])
      setLoading(false)
    }

    fetchDocuments()
  }, [])

  useEffect(() => {
    let filtered = documents

    if (filters.category !== "Todas las Categorías") {
      filtered = filtered.filter((d) => d.category === filters.category)
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (d) =>
          d.title.toLowerCase().includes(searchLower) ||
          d.description?.toLowerCase().includes(searchLower) ||
          d.author?.toLowerCase().includes(searchLower),
      )
    }

    setFilteredDocuments(filtered)
  }, [filters, documents])

  const categories = Array.from(new Set(documents.map((d) => d.category))).sort()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 text-primary-foreground md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-accent p-4">
                  <FileText className="h-12 w-12 text-accent-foreground" />
                </div>
              </div>
              <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Recursos y Documentos</h1>
              <p className="text-pretty text-lg md:text-xl">
                Accede a guías, formatos, reglamentos y toda la documentación necesaria para tu participación en el PIP
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-b border-border bg-accent py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-foreground">{documents.length}</div>
                <div className="text-sm text-accent-foreground/80">Documentos totales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-foreground">{categories.length}</div>
                <div className="text-sm text-accent-foreground/80">Categorías</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-foreground">{filteredDocuments.length}</div>
                <div className="text-sm text-accent-foreground/80">Resultados</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mb-8">
              <DocumentFilters onFilterChange={setFilters} />
            </div>

            {loading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-[250px] animate-pulse rounded-lg bg-muted" />
                ))}
              </div>
            ) : filteredDocuments.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredDocuments.map((document) => (
                  <DocumentCard key={document.id} document={document} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-muted p-12 text-center">
                <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="mb-2 text-lg font-medium text-foreground">No se encontraron documentos</p>
                <p className="text-sm text-muted-foreground">
                  {filters.search || filters.category !== "Todas las Categorías"
                    ? "Intenta ajustar los filtros de búsqueda"
                    : "No hay documentos disponibles en este momento"}
                </p>
                {(filters.search || filters.category !== "Todas las Categorías") && (
                  <button
                    onClick={() => setFilters({ category: "Todas las Categorías", search: "" })}
                    className="mt-4 text-primary hover:underline"
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Help Section */}
        <section className="border-t border-border bg-secondary py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">¿No encuentras lo que buscas?</h2>
              <p className="mb-6 text-muted-foreground">
                Si necesitas documentación adicional o tienes preguntas sobre los recursos disponibles, no dudes en
                contactarnos.
              </p>
              <Button asChild>
                <a href="mailto:pip@uniandes.edu.co">Contactar al PIP</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
