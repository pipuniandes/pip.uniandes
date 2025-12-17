"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Slide {
  id: number
  title: string
  description: string
  image: string
  cta?: {
    text: string
    href: string
  }
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Grabación Taller #4 PIP 2024-1",
    description: "Revive los mejores momentos del último taller de investigación en pregrado",
    image: "/students-in-research-workshop-at-university.jpg",
    cta: {
      text: "Ver Grabación",
      href: "#",
    },
  },
  {
    id: 2,
    title: "Convocatoria 2024-1 Abierta",
    description: "Inscríbete ahora y forma parte de los semilleros de investigación",
    image: "/university-campus-aerial-view-modern.jpg",
    cta: {
      text: "Inscríbete Ya",
      href: "/inscripcion",
    },
  },
  {
    id: 3,
    title: "Resultados Destacados 2023",
    description: "Conoce los logros de nuestros investigadores en pregrado",
    image: "/research-laboratory-students-working.jpg",
    cta: {
      text: "Ver Más",
      href: "#noticias",
    },
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />

          <div className="absolute inset-0 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl text-balance">
                <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">{slide.description}</p>
                {slide.cta && (
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href={slide.cta.href}>{slide.cta.text}</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 text-primary-foreground backdrop-blur-sm hover:bg-background/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 text-primary-foreground backdrop-blur-sm hover:bg-background/40"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-accent" : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
