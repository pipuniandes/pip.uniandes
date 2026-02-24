import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!url || !serviceKey) {
      return NextResponse.json(
        { error: "Missing env vars", hasUrl: !!url, hasServiceKey: !!serviceKey },
        { status: 500 }
      )
    }

    const supabase = createClient(url, serviceKey)

    const { data, error } = await supabase
      .from("semillero_registrations")
      .update({ status: "approved" })
      .eq("id", id)
      .select()

    if (error) {
      return NextResponse.json(
        { error: error.message, code: (error as any).code, details: (error as any).details, hint: (error as any).hint },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, data })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || String(e) }, { status: 500 })
  }
}
