import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      

      <main className="flex-1 py-12 px-6 md:px-10">
        {children}
      </main>

      
    </div>
  )
}
