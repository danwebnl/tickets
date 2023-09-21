import Link from "next/link"
import { Ticket } from "@/app/types"

async function getTickets() {
  // imitate delay
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const result: Ticket[] = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log("error", error))

  return result
}

export default async function TicketList() {
  const tickets = await getTickets()
  console.log("tickets", tickets)

  return (
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
}
