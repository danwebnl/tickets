import Image from "next/image"
import Logo from "./ticket-logo.png"
import Link from "next/link"
import { ReactNode } from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect("/")
  }

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
