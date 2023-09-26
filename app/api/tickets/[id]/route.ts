import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

type Params = {
  id: string
}

export async function DELETE(_: Request, { params }: { params: Params }) {
  const id = params.id

  const supabase = createRouteHandlerClient({ cookies })

  const { error } = await supabase.from("tickets").delete().eq("id", id)

  return NextResponse.json({ error })
}

// export const dynamic = "force-dynamic" // the rest HTTP methods are dynamic; only GET is the exception

// export async function GET(_: Request, { params }: { params: Params }) {
//   const id = params.id
//   const res = await fetch(`http://localhost:4000/tickets/${id}`)

//   const ticket = await res.json()

//   return NextResponse.json(ticket, {
//     status: 200,
//   })
// }
