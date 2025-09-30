"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative hover:bg-primary-foreground/10"
    >
      {/* Sun (light mode) */}
      <Sun className="h-5 w-5 text-black transition-all dark:-rotate-90 dark:scale-0" />

      {/* Moon (dark mode) */}
      <Moon className="absolute h-5 w-5 text-white transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
