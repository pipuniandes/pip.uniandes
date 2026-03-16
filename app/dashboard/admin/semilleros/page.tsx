"use client"

import { useEffect, useState } from "react"

export default function AdminSemillerosPage() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  async function load() {
    setLoading(true)
    setError("")
    const res = await fetch("/api/admin/semilleros")
    const json = await res.json()

    if (!res.ok) {
      setError(json?.error || "Error cargando semilleros.")
      setItems([])
      setLoading(false)
      return
    }

    setItems(Array.isArray(json) ? json : [])
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div style={{ padding: "40px" }}>
      <h1>Administrador de Semilleros</h1>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && items.length === 0 && <p>No hay semilleros pendientes.</p>}

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {items.map((s) => (
          <div key={s.id} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
            <strong>{s.semillero_name}</strong>
            <div style={{ fontSize: 14, opacity: 0.8 }}>
              {s.semillero_faculty} · {s.semillero_type}
            </div>
            <p style={{ marginTop: 8 }}>{s.semillero_description}</p>
            <div style={{ fontSize: 13, opacity: 0.8 }}>
              Líder: {s.leader_name} · {s.leader_email}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
