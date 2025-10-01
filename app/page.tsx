import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import LogoCloud from "@/components/logo-cloud"



export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata = {
  title: "Three Stars Transport Inc | Reliable Trucking Services",
  description: "Three Stars Transport Inc provides reliable and efficient trucking services. Contact us for freight shipping solutions.",
  keywords: [
    "trucking", "freight", "transport", "logistics", "Three Stars Transport",
    "Three Stars", "transport inc", "three stars transport inc", "TST",
    "shipping", "cargo", "delivery", "truck services", "hauling",
    "fleet", "long haul", "short haul", "freight solutions"
  ],
  authors: [{ name: "Three Stars Transport Inc" }],
  openGraph: {
    title: "Three Stars Transport Inc | Reliable Trucking Services",
    description: "Three Stars Transport Inc provides reliable and efficient trucking services. Contact us for freight shipping solutions.",
    url: "https://www.tstransportinc.com",
    siteName: "Three Stars Transport Inc",
    images: [
      {
        url: "https://www.tstransportinc.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Three Stars Transport Inc | Reliable Trucking Services",
    description: "Three Stars Transport Inc provides reliable and efficient trucking services. Contact us for freight shipping solutions.",
    images: ["https://www.tstransportinc.com/og-image.png"],
  },
}
export default function Home() {
  return (
    <main className="min-h-screen">

      <Header />
      <Hero />
      <LogoCloud />
      <Services />
      <About />

      <Contact />
      <Footer />
    </main>
  )
}
