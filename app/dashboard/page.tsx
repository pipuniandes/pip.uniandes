"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSupabaseClient } from "@/lib/supabase/client"
import type { Registration } from "@/lib/types"
import { FileText, Users, Clock, CheckCircle2 } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [registrations, setRegistrations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [busyId, setBusyId] = useState<string | null>(null)


  useEffect(() => {
    async function checkAuth() {
      const supabase = getSupabaseClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/login")
        return
      }

      setUser(user)

      const { data } = await supabase
  .from("semillero_registrations")
  .select("*")
  .order("created_at", { ascending: false })


      setRegistrations((data as any[]) || [])
      setLoading(false)
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    const supabase = getSupabaseClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }
 const refresh = async () => {
  const res = await fetch("/api/admin/semilleros", { cache: "no-store" })
  const json = await res.json()

  if (!res.ok) {
    console.error("Error refrescando:", json)
    return
  }

  setRegistrations(json.data || [])
}

const approve = async (id: string) => {
  setBusyId(id)
  const res = await fetch(`/api/admin/semilleros/${id}/approve`, { method: "POST" })
  if (!res.ok) {
    console.error("Error aprobando:", await res.json())
  }
  await refresh()
  setBusyId(null)
}

const reject = async (id: string) => {
  setBusyId(id)
  const res = await fetch(`/api/admin/semilleros/${id}/reject`, { method: "POST" })
  if (!res.ok) {
    console.error("Error rechazando:", await res.json())
  }
  await refresh()
  setBusyId(null)
}

  const stats = {
    total: registrations.length,
    pending: registrations.filter((r) => !r.status || r.status === "pending").length,
    approved: registrations.filter((r) => r.status === "approved").length,
    rejected: registrations.filter((r) => r.status === "rejected").length,
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <section className="border-b border-border bg-background py-8">
          <div className="container flex items-center justify-between px-4 md:px-8 lg:px-12">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Panel de Administración</h1>
              <p className="text-muted-foreground">Gestiona las inscripciones del PIP</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </div>
        </section>

        <section className="py-8">
          <div className="container px-4 md:px-8 lg:px-12">
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Inscripciones</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.total}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-500">{stats.pending}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aprobadas</CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">{stats.approved}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rechazadas</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-500">{stats.rejected}</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Últimas Inscripciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registrations.slice(0, 10).map((reg) => (
  <div
    key={reg.id}
    className="border-b border-border pb-4 last:border-0"
  >
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="font-medium text-foreground">{reg.leader_name}</p>
<p className="text-sm text-muted-foreground">
  {reg.leader_email} • {reg.semillero_faculty}
</p>

<p className="text-sm text-muted-foreground">
  {reg.semillero_name} • {reg.semillero_type}
</p>
      </div>

      <div className="text-right">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
            reg.status === "pending" || !reg.status
              ? "bg-orange-100 text-orange-700"
              : reg.status === "approved"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
          }`}
        >
          {!reg.status || reg.status === "pending"
            ? "Pendiente"
            : reg.status === "approved"
              ? "Aprobada"
              : "Rechazada"}
        </span>

        <p className="mt-1 text-xs text-muted-foreground">
          {new Date(reg.created_at).toLocaleDateString("es-CO")}
        </p>
      </div>
    </div>

    {(!reg.status || reg.status === "pending") && (
      <div className="mt-3 flex justify-end gap-2">
        <Button
          size="sm"
          onClick={() => approve(reg.id)}
          disabled={busyId === reg.id}
        >
          Aprobar
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={() => reject(reg.id)}
          disabled={busyId === reg.id}
        >
          Rechazar
        </Button>
      </div>
    )}
  </div>
))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

