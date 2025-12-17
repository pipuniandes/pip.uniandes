"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SemilleroFiltersProps {
  onFilterChange: (filters: { faculty: string; area: string }) => void
}

const faculties = [
  "Todas las Facultades",
  "Administración",
  "Artes y Humanidades",
  "Arquitectura y Diseño",
  "Ciencias",
  "Ciencias Sociales",
  "Derecho",
  "Economía",
  "Educación",
  "Ingeniería",
  "Medicina",
]

const areas = [
  "Todas las Áreas",
  "Arte",
  "Ciencia",
  "Desarrollo sostenible",
  "Innovación social",
  "Tecnología",
  "Salud",
  "Economía y negocios",
]

export function SemilleroFilters({ onFilterChange }: SemilleroFiltersProps) {
  const [faculty, setFaculty] = useState("Todas las Facultades")
  const [area, setArea] = useState("Todas las Áreas")

  const handleFacultyChange = (value: string) => {
    setFaculty(value)
    onFilterChange({ faculty: value, area })
  }

  const handleAreaChange = (value: string) => {
    setArea(value)
    onFilterChange({ faculty, area: value })
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Select value={faculty} onValueChange={handleFacultyChange}>
          <SelectTrigger className="w-full sm:w-[240px]">
            <SelectValue placeholder="Selecciona facultad" />
          </SelectTrigger>
          <SelectContent>
            {faculties.map((f) => (
              <SelectItem key={f} value={f}>
                {f}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={area} onValueChange={handleAreaChange}>
          <SelectTrigger className="w-full sm:w-[240px]">
            <SelectValue placeholder="Selecciona área" />
          </SelectTrigger>
          <SelectContent>
            {areas.map((a) => (
              <SelectItem key={a} value={a}>
                {a}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-sm text-muted-foreground">
        {faculty !== "Todas las Facultades" || area !== "Todas las Áreas" ? (
          <button
            onClick={() => {
              setFaculty("Todas las Facultades")
              setArea("Todas las Áreas")
              onFilterChange({ faculty: "Todas las Facultades", area: "Todas las Áreas" })
            }}
            className="text-primary hover:underline"
          >
            Limpiar filtros
          </button>
        ) : null}
      </div>
    </div>
  )
}
