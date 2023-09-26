import Link from "next/link"
import { cookies } from "next/headers"
import { Ticket } from "@/app/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

async function getTickets() {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from("tickets").select()

  if (error) {
    console.log(error.message)
  }

  return data
}

export default async function TicketList() {
  const tickets: Ticket[] | null = await getTickets()

  return (
    tickets && (
      <>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="card mt-5">
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        ))}
        {tickets.length === 0 && (
          <p className="text-center">There are no open tickets, yay!</p>
        )}
      </>
    )
  )
}
