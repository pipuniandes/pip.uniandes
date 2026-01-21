import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { StatsSection } from "@/components/stats-section"
import { NewsSection } from "@/components/news-section"
import { FacultyStats } from "@/components/faculty-stats"
import { DocumentsSection } from "@/components/documents-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <StatsSection />
        <NewsSection />
        <FacultyStats />
        <DocumentsSection />
      </main>
      <Footer />
    </div>
  )
}
