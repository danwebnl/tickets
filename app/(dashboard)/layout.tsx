import type { Metadata } from "next"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// components
import Navbar from "@/app/components/Navbar"

export const metadata: Metadata = {
  title: "Tickets | Dashboard",
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect("/login")
  }

  return (
    <>
      <Navbar user={data?.session?.user} />
      {children}
    </>
  )
}
