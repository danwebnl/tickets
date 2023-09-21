import { ReactNode } from "react"
import type { Metadata } from "next"

// components
import Navbar from "@/app/components/Navbar"

export const metadata: Metadata = {
  title: "Tickets | Dashboard",
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
