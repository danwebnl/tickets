import Link from "next/link"
import Image from "next/image"
import Logo from "./ticket-logo.png"
import LogoutButton from "./LogOutButton"

type User = {
  email?: string
}

export default function Navbar({ user }: { user: User | undefined }) {
  console.log("user", user)
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
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  )
}
