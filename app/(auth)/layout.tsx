import Image from "next/image"
import Logo from "./ticket-logo.png"
import Link from "next/link"
import { ReactNode } from "react"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
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
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}
