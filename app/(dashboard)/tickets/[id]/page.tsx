import { notFound } from "next/navigation"
import { Ticket } from "@/app/types"

type Params = {
  id: string
}

export const dynamicParams = true // default val = true

export async function generateMetadata({ params }: { params: Params }) {
  const id = params.id

  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket: Ticket = await res.json()

  return {
    title: `Tickets | ${ticket.title}`,
  }
}

export async function generateStaticParams() {
  const result: Ticket[] = await fetch("http://localhost:4000/tickets").then(
    (result) => result.json()
  )

  const list = result.map((item) => ({
    id: item.id,
  }))

  return list
}

async function getTicket(id: string) {
  const result = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  })
    .then((res) => {
      if (!res.ok) {
        notFound()
      }
      return res.json()
    })
    .catch((error) => {
      console.log("error", error)
      notFound()
    })

  return result
}

export default async function TicketItem({ params }: { params: Params }) {
  const { title, user_email, priority, body } = await getTicket(params.id)
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{title}</h3>
        <small>Created by {user_email}</small>
        <p>{body}</p>
        <div className={`pill ${priority}`}>{priority} priority</div>
      </div>
    </main>
  )
}
