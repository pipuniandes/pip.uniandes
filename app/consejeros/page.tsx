import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Target, MessageCircle, Award, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const roles = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Información y orientación",
    description: "Brinda información clara y actualizada sobre oportunidades, programas, convocatorias y figuras de vinculación en investigación, creación e innovación."
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Rutas institucionales",
    description: "Orienta a estudiantes y semilleros en la identificación de rutas institucionales adecuadas según su nivel de formación e intereses."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Conexión institucional",
    description: "Facilita la conexión con las unidades, instancias y personas responsables de los procesos académicos, administrativos y éticos."
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Acompañamiento y seguimiento",
    description: "Apoya la comprensión del ecosistema institucional y hace seguimiento a los avances de los estudiantes en sus procesos investigativos."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Difusión de oportunidades",
    description: "Da a conocer convocatorias, talleres y recursos disponibles, aprovechando diversos canales como redes sociales y correo."
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Trabajo colaborativo",
    description: "Fomenta el trabajo conjunto entre facultades, consejeros y grupos de investigación para fortalecer el ecosistema investigativo."
  }
]

const benefits = [
  "Acceso a recursos institucionales para mejorar la formación investigativa.",
  "Oportunidad de mentoría y desarrollo profesional.",
  "Conexión con líderes y expertos en la investigación.",
  "Reconocimiento y premios por contribuciones significativas.",
  "Participación en proyectos interdisciplinarios y de alto impacto.",
  "Desarrollo de habilidades éticas y de comunicación."
]

const resources = [
  "Vicerrectoría de Investigación y Creación (VIC): Información sobre convocatorias, programas de apoyo y mecanismos de vinculación.",
  "Programa de Investigación en Pregrado (PIP): Lineamientos institucionales sobre semilleros y listado de semilleros activos.",
  "Sistema General de Bibliotecas: Acceso a recursos de información, repositorio institucional y asesorías especializadas.",
  "Centro de Ética Aplicada: Orientación sobre consideraciones éticas y rutas institucionales para proyectos."
]

export default function ConsejerosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                ¿Qué es un Consejero de Investigación?
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Guía para consejeros de investigación de la Universidad de los Andes.
              </p>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                    El acompañamiento en investigación
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    El o la <strong>consejera de investigación</strong> es un profesor o profesional que acompaña y orienta a estudiantes universitarios en sus procesos de investigación o creación académica durante el pregrado.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    El consejero atiende principalmente a: estudiantes de pregrado interesados en vincularse a procesos de investigación, creación e innovación; asistentes de investigación y estudiantes doctorales; y semilleros de investigación.
                  </p>
                  <p className="text-muted-foreground">
                    Sus funciones se adaptarán a las particularidades y necesidades de cada unidad académica, contribuyendo al fortalecimiento del ecosistema de investigación de la universidad.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div className="mb-4 rounded-full bg-primary/10 p-6">
                        <Users className="h-16 w-16 text-primary" />
                      </div>
                      <p className="text-lg font-semibold text-foreground">
                        Más de 100 consejeros activos
                      </p>
                      <p className="text-sm text-muted-foreground">
                        acompañando a estudiantes en 76 semilleros
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Funciones del Consejero
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Los consejeros de investigación desempeñan múltiples funciones para garantizar una formación integral de los estudiantes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {roles.map((role, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {role.icon}
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-2xl bg-accent p-8">
                    <h3 className="mb-6 text-xl font-bold text-foreground">
                      Recursos Institucionales
                    </h3>
                    <ul className="space-y-4">
                      {resources.map((resource, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-sm text-foreground">{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                    Apoyo para el cumplimiento de su rol
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    Para el cumplimiento de su rol, el consejero de investigación cuenta con diversos recursos institucionales de la Universidad de los Andes.
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    Estos recursos facilitan el acompañamiento a estudiantes y la canalización de consultas hacia las instancias competentes.
                  </p>
                  <Link href="/inscripcion">
                    <Button className="bg-primary hover:bg-primary/90">
                      Registrar un semillero
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
                ¿Quieres saber más?
              </h2>
              <p className="mb-8 text-primary-foreground/80">
                Descarga el Manual del Consejero para conocer en detalle las responsabilidades, procesos y mejores prácticas.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/documentos">
                  <Button variant="secondary" size="lg">
                    Ver documentos
                  </Button>
                </Link>
                <Link href="/preguntas-frecuentes">
                  <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                    Preguntas frecuentes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
