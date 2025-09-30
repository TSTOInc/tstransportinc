"use client"

import { Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6 text-foreground" />
              <div>
                <h1 className="text-xl font-bold text-foreground leading-tight">Three Stars Transport Inc.</h1>
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Services
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/quote">
              <Button variant="secondary">Get a Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
