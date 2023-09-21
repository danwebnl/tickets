import { NextResponse } from "next/server"

export const dynamic = "force-dynamic" // the rest HTTP methods are dynamic; only GET is the exception

type Params = {
  id: string
}

export async function GET(_: Request, { params }: { params: Params }) {
  const id = params.id
  const res = await fetch(`http://localhost:4000/tickets/${id}`)

  const ticket = await res.json()

  return NextResponse.json(ticket, {
    status: 200,
  })
}
