"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight"
import { TextEffect } from '@/components/motion-primitives/text-effect';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.4s]" />
              </div>
              <span className="text-sm font-medium">Available 24/7</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance">
              <TextEffect per="word" as="span" preset="blur" delay={0.5}>Freight</TextEffect>
              <br />
              <TextEffect per="word" as="span" preset="blur" delay={1} className="text-muted-foreground">Solutions</TextEffect>
              <br />
              <TextEffect per="word" as="span" preset="blur" delay={1.5}>That Move</TextEffect>
            </h1>



            <TextEffect per='char' as='p' preset='fade' delay={0.5} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Three Stars Transport Inc provides professional trucking services across North America. Reliable, efficient, and always on time.
            </TextEffect>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/quote">
                <Button
                  size="lg"
                  className="text-lg px-8 h-14 bg-foreground text-background hover:bg-foreground/90"
                >
                  Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 border-2 bg-transparent"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-bold">13+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">48</div>
                <div className="text-sm text-muted-foreground mt-1">States Covered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">99%</div>
                <div className="text-sm text-muted-foreground mt-1">On-Time Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Trailer body */}
                <rect
                  x="50"
                  y="100"
                  width="200"
                  height="100"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground/20"
                />

                {/* Trailer details - vertical lines */}
                <line
                  x1="80"
                  y1="100"
                  x2="80"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />
                <line
                  x1="110"
                  y1="100"
                  x2="110"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />
                <line
                  x1="140"
                  y1="100"
                  x2="140"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />
                <line
                  x1="170"
                  y1="100"
                  x2="170"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />
                <line
                  x1="200"
                  y1="100"
                  x2="200"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />
                <line
                  x1="230"
                  y1="100"
                  x2="230"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />

                {/* Cab */}
                <rect
                  x="250"
                  y="110"
                  width="70"
                  height="90"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground/20"
                />
                <rect
                  x="320"
                  y="150"
                  width="55"
                  height="50"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground/20"
                />
                {/* Cab window */}
                <rect
                  x="260"
                  y="130"
                  width="30"
                  height="30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/15"
                />

                {/* Cab door line */}
                <line
                  x1="300"
                  y1="140"
                  x2="300"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/15"
                />

                {/* Cab details */}
                <rect
                  x="310"
                  y="145"
                  width="10"
                  height="8"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />
                <line
                  x1="260"
                  y1="170"
                  x2="290"
                  y2="170"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />

                {/* Wheels with more detail */}
                <circle cx="70" cy="220" r="20" stroke="currentColor" strokeWidth="2" className="text-foreground/20" />
                <circle
                  cx="70"
                  cy="220"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/15"
                />
                <circle cx="70" cy="220" r="4" fill="currentColor" className="text-foreground/20" />

                <circle cx="115" cy="220" r="20" stroke="currentColor" strokeWidth="2" className="text-foreground/20" />
                <circle
                  cx="115"
                  cy="220"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/15"
                />
                <circle cx="115" cy="220" r="4" fill="currentColor" className="text-foreground/20" />

                <circle cx="220" cy="220" r="20" stroke="currentColor" strokeWidth="2" className="text-foreground/20" />
                <circle
                  cx="220"
                  cy="220"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/15"
                />
                <circle cx="220" cy="220" r="4" fill="currentColor" className="text-foreground/20" />

                <circle cx="260" cy="220" r="20" stroke="currentColor" strokeWidth="2" className="text-foreground/20" />
                <circle
                  cx="260"
                  cy="220"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/15"
                />
                <circle cx="260" cy="220" r="4" fill="currentColor" className="text-foreground/20" />

                <circle cx="345" cy="220" r="20" stroke="currentColor" strokeWidth="2" className="text-foreground/20" />
                <circle
                  cx="345"
                  cy="220"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/15"
                />
                <circle cx="345" cy="220" r="4" fill="currentColor" className="text-foreground/20" />


                {/* Undercarriage */}
                <line
                  x1="80"
                  y1="200"
                  x2="310"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/15"
                />
                <rect
                  x="120"
                  y="195"
                  width="15"
                  height="5"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />
                <rect
                  x="160"
                  y="195"
                  width="15"
                  height="5"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                />

                {/* Accent lines */}
                <line
                  x1="0"
                  y1="240"
                  x2="400"
                  y2="240"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
                <line
                  x1="0"
                  y1="250"
                  x2="350"
                  y2="250"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/20"
                />
              </svg>

              <div className="absolute top-20 right-10 px-3 py-2 bg-background border border-border rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-primary cursor-pointer">
                <div className="text-xs text-muted-foreground">Real-time</div>
                <div className="text-sm font-semibold">Tracking</div>
              </div>

              <div className="absolute bottom-32 left-10 px-3 py-2 bg-background border border-border rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-primary cursor-pointer">
                <div className="text-xs text-muted-foreground">Nationwide</div>
                <div className="text-sm font-semibold">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
