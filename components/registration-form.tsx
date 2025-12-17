"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getSupabaseClient } from "@/lib/supabase/client"
import { CheckCircle2, Loader2, Upload, X } from "lucide-react"

const faculties = [
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

const semilleroTypes = ["Investigación", "Creación", "Investigación y creación"]

function RegistrationFormContent() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const [formData, setFormData] = useState({
    semillero_name: "",
    semillero_description: "",
    semillero_faculty: "",
    semillero_type: "",
    leader_name: "",
    leader_email: "",
    leader_role: "",
    second_leader_name: "",
    second_leader_email: "",
    second_leader_role: "",
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("La imagen no debe superar los 5MB")
        return
      }

      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview(null)
  }

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null

    try {
      setUploadingImage(true)
      const supabase = getSupabaseClient()

      const fileExt = imageFile.name.split(".").pop()
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
      const filePath = `semilleros/${fileName}`

      const { error: uploadError, data } = await supabase.storage.from("public").upload(filePath, imageFile)

      if (uploadError) throw uploadError

      const {
        data: { publicUrl },
      } = supabase.storage.from("public").getPublicUrl(filePath)

      return publicUrl
    } catch (err) {
      console.error("[v0] Image upload error:", err)
      throw new Error("Error al subir la imagen")
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      let imageUrl = null

      if (imageFile) {
        imageUrl = await uploadImage()
      }

      const supabase = getSupabaseClient()

      const { error: insertError } = await supabase.from("semillero_registrations").insert([
        {
          ...formData,
          semillero_image_url: imageUrl,
          status: "pending",
        },
      ])

      if (insertError) throw insertError

      setSuccess(true)

      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (err) {
      console.error("[v0] Registration error:", err)
      setError("Hubo un error al procesar tu inscripción. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="mx-auto max-w-3xl">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
          <h2 className="mb-2 text-2xl font-bold text-foreground">¡Inscripción Exitosa!</h2>
          <p className="text-muted-foreground">
            Tu solicitud de registro del semillero ha sido recibida. Nos pondremos en contacto contigo pronto.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mx-auto max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl">Formulario de Inscripción de Semillero</CardTitle>
        <CardDescription>Completa el formulario para registrar tu semillero de investigación</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Semillero Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Información del Semillero</h3>

            <div className="space-y-2">
              <Label htmlFor="semillero_name">Nombre del Semillero *</Label>
              <Input
                id="semillero_name"
                type="text"
                required
                value={formData.semillero_name}
                onChange={(e) => setFormData({ ...formData, semillero_name: e.target.value })}
                placeholder="Nombre del semillero"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="semillero_description">Descripción del Semillero *</Label>
              <Textarea
                id="semillero_description"
                required
                value={formData.semillero_description}
                onChange={(e) => setFormData({ ...formData, semillero_description: e.target.value })}
                placeholder="Describe los objetivos, temas de investigación y actividades del semillero..."
                rows={5}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">Mínimo 100 caracteres</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="semillero_faculty">Facultad del Semillero *</Label>
                <Select
                  value={formData.semillero_faculty}
                  onValueChange={(value) => setFormData({ ...formData, semillero_faculty: value })}
                  required
                >
                  <SelectTrigger id="semillero_faculty">
                    <SelectValue placeholder="Selecciona la facultad" />
                  </SelectTrigger>
                  <SelectContent>
                    {faculties.map((f) => (
                      <SelectItem key={f} value={f}>
                        {f}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="semillero_type">Tipo de Semillero *</Label>
                <Select
                  value={formData.semillero_type}
                  onValueChange={(value) => setFormData({ ...formData, semillero_type: value })}
                  required
                >
                  <SelectTrigger id="semillero_type">
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {semilleroTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="semillero_image">Imagen del Semillero</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="semillero_image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("semillero_image")?.click()}
                  className="w-full sm:w-auto"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {imageFile ? "Cambiar Imagen" : "Subir Imagen"}
                </Button>
                {imageFile && <span className="text-sm text-muted-foreground flex-1 truncate">{imageFile.name}</span>}
              </div>
              {imagePreview && (
                <div className="relative mt-2 inline-block">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Preview"
                    className="h-32 w-32 rounded-lg object-cover border border-border"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
                    onClick={removeImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <p className="text-xs text-muted-foreground">Tamaño máximo: 5MB</p>
            </div>
          </div>

          {/* Leader Information Section */}
          <div className="space-y-4 border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-foreground">Información del Líder</h3>

            <div className="space-y-2">
              <Label htmlFor="leader_name">Nombre del Líder *</Label>
              <Input
                id="leader_name"
                type="text"
                required
                value={formData.leader_name}
                onChange={(e) => setFormData({ ...formData, leader_name: e.target.value })}
                placeholder="Nombre completo del líder"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="leader_email">Correo del Líder *</Label>
                <Input
                  id="leader_email"
                  type="email"
                  required
                  value={formData.leader_email}
                  onChange={(e) => setFormData({ ...formData, leader_email: e.target.value })}
                  placeholder="correo@uniandes.edu.co"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="leader_role">Rol en la Universidad *</Label>
                <Input
                  id="leader_role"
                  type="text"
                  required
                  value={formData.leader_role}
                  onChange={(e) => setFormData({ ...formData, leader_role: e.target.value })}
                  placeholder="Ej: Estudiante, Profesor, Investigador"
                />
              </div>
            </div>
          </div>

          {/* Second Leader Information Section (Optional) */}
          <div className="space-y-4 border-t border-border pt-6">
            <h3 className="text-lg font-semibold text-foreground">
              Información del Segundo Líder{" "}
              <span className="text-sm font-normal text-muted-foreground">(Opcional - En caso de remplazo)</span>
            </h3>

            <div className="space-y-2">
              <Label htmlFor="second_leader_name">Nombre del Segundo Líder</Label>
              <Input
                id="second_leader_name"
                type="text"
                value={formData.second_leader_name}
                onChange={(e) => setFormData({ ...formData, second_leader_name: e.target.value })}
                placeholder="Nombre completo del segundo líder"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="second_leader_email">Correo del Segundo Líder</Label>
                <Input
                  id="second_leader_email"
                  type="email"
                  value={formData.second_leader_email}
                  onChange={(e) => setFormData({ ...formData, second_leader_email: e.target.value })}
                  placeholder="correo@uniandes.edu.co"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="second_leader_role">Rol en la Universidad</Label>
                <Input
                  id="second_leader_role"
                  type="text"
                  value={formData.second_leader_role}
                  onChange={(e) => setFormData({ ...formData, second_leader_role: e.target.value })}
                  placeholder="Ej: Estudiante, Profesor, Investigador"
                />
              </div>
            </div>
          </div>

          {error && <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">{error}</div>}

          <Button
            type="submit"
            className="w-full"
            disabled={loading || uploadingImage || formData.semillero_description.length < 100}
          >
            {loading || uploadingImage ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {uploadingImage ? "Subiendo imagen..." : "Enviando..."}
              </>
            ) : (
              "Enviar Inscripción"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export function RegistrationForm() {
  return (
    <Suspense
      fallback={
        <Card className="mx-auto max-w-3xl">
          <CardContent className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </CardContent>
        </Card>
      }
    >
      <RegistrationFormContent />
    </Suspense>
  )
}
