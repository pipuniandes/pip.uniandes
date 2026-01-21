import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqsInvestigacion = [
  {
    question: "¿Por dónde empiezo si quiero hacer una investigación?",
    answer: "Comienza por identificar un tema que te interese genuinamente. No es necesario que sea de tu carrera. Explora semilleros activos, habla con profesores o revisa los proyectos de otros estudiantes. La clave es encontrar una pregunta o problemática que te motive."
  },
  {
    question: "¿Cómo sé si mi tema es viable para investigar?",
    answer: "Pregúntate: ¿A quién le sirve esta investigación? ¿Por qué es importante hoy? ¿Se puede resolver con el tiempo y recursos que tengo? La justificación es el corazón de tu proyecto: define para qué y para quién estás investigando."
  },
  {
    question: "¿Qué pasos debo seguir para estructurar mi proyecto?",
    answer: "Los pasos sugeridos son: 1) Elegir y justificar el tema. 2) Definir una pregunta de investigación clara. 3) Establecer objetivos generales y específicos. 4) Diseñar un plan de trabajo con cronograma. 5) Delimitar tu problema, metodología y fuentes."
  },
  {
    question: "¿Debo investigar solo o en grupo?",
    answer: "¡No tienes que hacerlo solo! Puedes unirte a un semillero, crear uno nuevo, o coordinar con profesores o estudiantes con intereses similares. El trabajo colaborativo enriquece tu experiencia."
  },
  {
    question: "¿Cómo formulo una buena pregunta de investigación?",
    answer: "Una buena pregunta debe ser: Abierta (no se responde con sí/no), relevante y contextualizada, con posibilidad de ser investigada, y bien delimitada (temporal, espacial, temática)."
  },
  {
    question: "¿Cómo elijo la mejor metodología?",
    answer: "Depende de tu disciplina o enfoque (cualitativa, cuantitativa o mixta), tus objetivos y pregunta, y el tiempo y los recursos que tengas. Busca asesoría con tus docentes o consejeros. También puedes revisar literatura metodológica en biblioteca."
  },
  {
    question: "¿Dónde puedo buscar información confiable?",
    answer: "Revisa: Bases de datos como JSTOR, Web of Science, Scopus; la Biblioteca Uniandes (biblioteca.uniandes.edu.co); Google Académico, SciELO, ResearchGate; repositorios de tesis o artículos; y fuentes participativas como entrevistas, visitas de campo y diarios."
  },
  {
    question: "¿Cómo organizo mis fuentes?",
    answer: "Usa herramientas como Zotero o Mendeley para referencias, Excel para fichas bibliográficas, y tablas de sistematización de entrevistas, lecturas o diarios. La clave es guardar todo ordenadamente desde el inicio."
  },
  {
    question: "¿Cómo hago un buen análisis de resultados?",
    answer: "Clasifica la información por categorías o temas, contrasta diferentes fuentes (triangulación), ten presente tu pregunta y objetivos en todo momento, sé crítico con tus propias interpretaciones, y apóyate en herramientas estadísticas o software de análisis si es necesario."
  },
  {
    question: "¿Qué consideraciones éticas debo tener en investigación?",
    answer: "Respeta la dignidad y consentimiento de las personas involucradas. Consulta si necesitas aval del Comité de Ética. Sé transparente con el uso de recursos. Reconoce y cita siempre las fuentes consultadas. Piensa en el impacto ambiental, social y cultural de tu proyecto."
  },
  {
    question: "¿Quién me puede acompañar en este proceso?",
    answer: "Consejeros de investigación de tu facultad, profesores afines al tema, grupos de investigación y semilleros, estudiantes que ya hayan investigado, y el Centro de Español o la Biblioteca para redacción y búsqueda de información."
  }
]

const faqsCreacion = [
  {
    question: "¿Qué significa crear en la universidad?",
    answer: "Crear es transformar: puede ser un proyecto artístico, una solución a un problema social, una propuesta estética, un experimento interdisciplinar o una intervención comunitaria. No es exclusivo de ciertas carreras."
  },
  {
    question: "¿Por dónde empiezo si quiero crear?",
    answer: "Piensa en lo que te interesa o inquieta. No necesitas tener la idea perfecta. Explora grupos existentes o empieza uno nuevo."
  },
  {
    question: "¿Qué necesito para estructurar mi proyecto de creación?",
    answer: "Necesitas: un tema de interés, justificación (¿para qué?, ¿para quién?), un posible problema o reto que abordar, objetivos claros, un plan de trabajo flexible, y una metodología adecuada."
  },
  {
    question: "¿Qué formas existen para crear?",
    answer: "Existen muchas formas: instalaciones artísticas, documentales, cuentos, videojuegos, intervenciones comunitarias, productos digitales, performances, y proyectos híbridos o experimentales."
  },
  {
    question: "¿Cómo sé si mi idea tiene sentido?",
    answer: "Hazte preguntas como: ¿Qué me motiva de esta idea? ¿Contribuye a alguien más? ¿Ya existe algo parecido? ¿Cómo me gustaría que impacte?"
  },
  {
    question: "¿Qué fuentes puedo usar para inspirarme?",
    answer: "Puedes usar: experiencias personales, películas, libros, arte, viajes, conversaciones con comunidades, lecturas académicas, y proyectos de otros creadores."
  },
  {
    question: "¿Cómo elijo una metodología para crear?",
    answer: "No hay una sola forma. Puedes mezclar herramientas visuales, narrativas, sonoras, tecnológicas. Inspírate en cómo se han expresado otros creadores."
  },
  {
    question: "¿Con quién puedo trabajar en proyectos de creación?",
    answer: "Puedes trabajar con profesores interesados, semilleros ya existentes, y compañeros de otras disciplinas. La interdisciplinariedad enriquece los proyectos de creación."
  },
  {
    question: "¿Qué pasa si necesito trabajar con comunidades?",
    answer: "Asegúrate de tener su consentimiento. Escúchalas y vincúlalas activamente. Reconoce su aporte como parte del proceso creativo."
  },
  {
    question: "¿Qué consideraciones éticas debo tener en creación?",
    answer: "No instrumentalices a las personas. Sé consciente del privilegio de crear desde la universidad. Actúa con responsabilidad y respeto hacia todos los involucrados."
  }
]

export default function PreguntasFrecuentesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Preguntas Frecuentes
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Encuentra respuestas a las preguntas más comunes sobre investigación y creación en pregrado.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Investigación Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                ¿Cómo investigo en pregrado?
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqsInvestigacion.map((faq, index) => (
                  <AccordionItem key={index} value={`inv-${index}`}>
                    <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* FAQ Creación Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
                ¿Cómo creo en pregrado?
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqsCreacion.map((faq, index) => (
                  <AccordionItem key={index} value={`cre-${index}`}>
                    <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl rounded-2xl bg-muted/50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                ¿No encontraste lo que buscabas?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Si tienes otras preguntas, no dudes en contactarnos. Estamos aquí para ayudarte.
              </p>
              <a
                href="mailto:pip@uniandes.edu.co"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
