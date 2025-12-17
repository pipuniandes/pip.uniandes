export function FacultyStats() {
  const faculties = [
    { name: "Administración", count: 0 },
    { name: "Artes y Humanidades", count: 23 },
    { name: "Arquitectura y Diseño", count: 15 },
    { name: "Ciencias", count: 18 },
    { name: "Ciencias Sociales", count: 9 },
    { name: "Derecho", count: 7 },
    { name: "Economía", count: 5 },
    { name: "Educación", count: 9 },
    { name: "Ingeniería", count: 28 },
    { name: "Medicina", count: 12 },
  ]

  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-accent-foreground md:text-4xl">Divulgación del conocimiento</h2>
          <p className="mx-auto max-w-3xl text-balance text-lg text-accent-foreground/80">
            Conoce la distribución de semilleros de investigación por facultad en la Universidad de los Andes
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {faculties.map((faculty, index) => (
            <div key={index} className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">{faculty.count}</div>
              <div className="text-sm font-medium text-foreground">{faculty.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
