import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { getSupabaseServer } from "@/lib/supabase/server"
import type { News } from "@/lib/types"

export async function NewsSection() {
  const supabase = await getSupabaseServer()
  const { data: news } = await supabase.from("news").select("*").order("published_date", { ascending: false }).limit(3)

  const newsItems = (news as News[]) || []

  return (
    <section id="noticias" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Últimas Noticias</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Mantente informado sobre las actividades, convocatorias y logros del PIP
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image_url || "/placeholder.svg?height=200&width=400"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                {item.category && (
                  <div className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {item.category}
                  </div>
                )}
                <h3 className="mb-2 text-balance text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mb-4 text-pretty text-muted-foreground line-clamp-3">{item.excerpt || item.content}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {item.author && (
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(item.published_date).toLocaleDateString("es-CO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={`/noticias/${item.id}`}>Leer más</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {newsItems.length === 0 && (
          <div className="rounded-lg bg-muted p-12 text-center">
            <p className="text-muted-foreground">No hay noticias disponibles en este momento.</p>
          </div>
        )}
      </div>
    </section>
  )
}
