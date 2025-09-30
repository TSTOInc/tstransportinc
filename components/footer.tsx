import { Truck } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-background/20">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              
              
              
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6" />
              <span className="text-xl font-bold">Three Stars Transport Inc.</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-background/80 text-sm">DOT# 2357598 | MC# 807667</p>
          </div>
        </div>
        <div className="pt-8 text-center md:text-left">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Three Stars Transport Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
