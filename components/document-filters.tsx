"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface DocumentFiltersProps {
  onFilterChange: (filters: { category: string; search: string }) => void
}

const categories = [
  "Todas las Categorías",
  "Guías",
  "Formatos",
  "Reglamentos",
  "Manuales",
  "Presentaciones",
  "Convocatorias",
]

export function DocumentFilters({ onFilterChange }: DocumentFiltersProps) {
  const [category, setCategory] = useState("Todas las Categorías")
  const [search, setSearch] = useState("")

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    onFilterChange({ category: value, search })
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    onFilterChange({ category, search: value })
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar documentos..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <Select value={category} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full sm:w-[240px]">
          <SelectValue placeholder="Selecciona categoría" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {(category !== "Todas las Categorías" || search) && (
        <button
          onClick={() => {
            setCategory("Todas las Categorías")
            setSearch("")
            onFilterChange({ category: "Todas las Categorías", search: "" })
          }}
          className="text-sm text-primary hover:underline"
        >
          Limpiar
        </button>
      )}
    </div>
  )
}
