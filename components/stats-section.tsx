export function StatsSection() {
  const stats = [
    { number: "76", label: "Semilleros activos de investigación" },
    { number: "18", label: "Semilleros financiados por la vicerrectoría" },
    { number: "12", label: "Facultades participantes" },
    { number: "250+", label: "Estudiantes investigadores activos" },
  ]

  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Semilleros de Investigación</h2>
          <p className="mx-auto max-w-3xl text-balance text-lg text-muted-foreground">
            Los semilleros de investigación son espacios académicos donde estudiantes de pregrado desarrollan proyectos
            de investigación bajo la guía de profesores expertos, fortaleciendo sus competencias investigativas y su
            pensamiento crítico.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center rounded-lg bg-card p-8 text-center shadow-sm">
              <div className="mb-3 text-5xl font-bold text-primary md:text-6xl">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
