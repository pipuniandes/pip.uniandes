import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"
import { CheckCircle2, FileText, Users, Clock } from "lucide-react"

export const dynamic = "force-dynamic"

export default function InscripcionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 text-primary-foreground md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Inscripción a Semilleros</h1>
              <p className="text-pretty text-lg md:text-xl">
                Da el primer paso en tu carrera investigativa uniéndote a un semillero de la Universidad de los Andes
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="border-b border-border bg-accent py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-background p-3">
                  <FileText className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-accent-foreground">1. Completa el formulario</h3>
                <p className="text-sm text-accent-foreground/80">Llena todos los campos requeridos</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-background p-3">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-accent-foreground">2. Revisión</h3>
                <p className="text-sm text-accent-foreground/80">Evaluamos tu solicitud</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-background p-3">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-accent-foreground">3. Entrevista</h3>
                <p className="text-sm text-accent-foreground/80">Conoce al equipo del semillero</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 rounded-full bg-background p-3">
                  <CheckCircle2 className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-1 font-semibold text-accent-foreground">4. Bienvenida</h3>
                <p className="text-sm text-accent-foreground/80">Inicia tu experiencia investigativa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <RegistrationForm />
          </div>
        </section>

        {/* Information Section */}
        <section className="border-t border-border bg-secondary py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Información Importante</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="rounded-lg bg-card p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Requisitos</h3>
                  <ul className="list-inside list-disc space-y-1">
                    <li>Ser estudiante activo de pregrado en la Universidad de los Andes</li>
                    <li>Tener un promedio acumulado mínimo de 3.5</li>
                    <li>Disponibilidad de al menos 6 horas semanales</li>
                    <li>Compromiso de participación por al menos un semestre académico</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-card p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Proceso de Selección</h3>
                  <p>
                    Las inscripciones son evaluadas por los coordinadores de cada semillero. El proceso incluye revisión
                    de documentos, entrevista personal y evaluación de motivación. Recibirás respuesta en un plazo
                    máximo de 2 semanas.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Beneficios</h3>
                  <ul className="list-inside list-disc space-y-1">
                    <li>Desarrollo de competencias investigativas</li>
                    <li>Mentoría de profesores expertos</li>
                    <li>Oportunidades de publicación y presentación en congresos</li>
                    <li>Posibilidad de financiamiento para proyectos destacados</li>
                    <li>Networking con otros investigadores</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
