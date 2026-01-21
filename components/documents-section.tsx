"use client"

import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const documents = [
  {
    id: 1,
    title: "Lineamientos Generales para Semilleros de Investigación",
    description: "Documento que establece los lineamientos y normas generales para la creación y funcionamiento de semilleros de investigación.",
    file_url: "https://blobs.vusercontent.net/blob/Lineamientos_generales_semilleros-SMP35556e4W4yCVfo27N9NWqZo05kY.pdf"
  },
  {
    id: 2,
    title: "Programa de Investigación y Creación en Pregrado y Posgrado",
    description: "Documento oficial que describe el programa PIP, sus objetivos, alcances y beneficios para estudiantes de pregrado y posgrado.",
    file_url: "https://blobs.vusercontent.net/blob/Programa_de_Investigacion_y_Creacion_en_Pregrado_y_Posgrado-tobjoMWnazXGIUalPmOwFfa6iyI5YD.pdf"
  }
]

export function DocumentsSection() {
  const handleDownload = (doc: typeof documents[0]) => {
    const link = globalThis.document.createElement("a")
    link.href = doc.file_url
    link.download = `${doc.title}.pdf`
    link.target = "_blank"
    globalThis.document.body.appendChild(link)
    link.click()
    globalThis.document.body.removeChild(link)
  }

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Documentos y Recursos
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Accede a los documentos oficiales y lineamientos del Programa de Investigación en Pregrado.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {documents.map((doc) => (
            <Card key={doc.id} className="group transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary">
                  {doc.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {doc.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => handleDownload(doc)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
