"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, User, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Document } from "@/lib/types"

interface DocumentCardProps {
  document: Document
}

const fileTypeIcons: Record<string, React.ReactNode> = {
  PDF: <FileText className="h-5 w-5 text-red-500" />,
  DOCX: <FileText className="h-5 w-5 text-blue-500" />,
  XLSX: <FileText className="h-5 w-5 text-green-500" />,
  PPTX: <FileText className="h-5 w-5 text-orange-500" />,
}

export function DocumentCard({ document }: DocumentCardProps) {
  const [downloading, setDownloading] = useState(false)
  const fileType = document.file_type?.toUpperCase() || "FILE"
  const icon = fileTypeIcons[fileType] || <FileText className="h-5 w-5 text-muted-foreground" />

  const handleDownload = async () => {
    try {
      setDownloading(true)

      // Crear un link temporal y descargar el archivo desde public/
      const link = globalThis.document.createElement("a")
      link.href = document.file_url
      link.download = `${document.title}.pdf`
      link.target = "_blank"
      globalThis.document.body.appendChild(link)
      link.click()
      globalThis.document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading document:", error)
      alert("Error al descargar el documento. Por favor intenta nuevamente.")
    } finally {
      setDownloading(false)
    }
  }

  return (
    <Card className="flex flex-col transition-shadow hover:shadow-md">
      <CardContent className="flex-1 p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-muted p-2">{icon}</div>
            <div className="flex-1">
              <h3 className="mb-1 text-balance font-semibold text-foreground">{document.title}</h3>
              <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {document.category}
              </span>
            </div>
          </div>
        </div>

        {document.description && (
          <p className="mb-4 text-pretty text-sm text-muted-foreground">{document.description}</p>
        )}

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          {document.author && (
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{document.author}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>
              {new Date(document.upload_date).toLocaleDateString("es-CO", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          {fileType && <div className="rounded bg-muted px-2 py-0.5 font-medium">{fileType}</div>}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={handleDownload} disabled={downloading} className="w-full bg-transparent" variant="outline">
          <Download className="h-4 w-4" />
          {downloading ? "Descargando..." : "Descargar"}
        </Button>
      </CardFooter>
    </Card>
  )
}
