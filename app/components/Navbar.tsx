import Link from "next/link"
import Image from "next/image"
import Logo from "./ticket-logo.png"

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Tickets Helpdesk logo"
        width={70}
        quality={100}
        priority
        // placeholder="blur"
      />
      <h1>Tickets Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
