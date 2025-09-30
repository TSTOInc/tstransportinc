import Head from "next/head"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Three Stars Transport Inc | Reliable Trucking Services</title>
        <meta name="description" content="Three Stars Transport Inc provides reliable and efficient trucking services. Contact us for freight shipping solutions." />
        <meta name="keywords" content="trucking, freight, transport, logistics, Three Stars Transport" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.tstransportinc.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Three Stars Transport Inc | Reliable Trucking Services" />
        <meta property="og:description" content="Three Stars Transport Inc provides reliable and efficient trucking services. Contact us for freight shipping solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tstransportinc.com" />
        <meta property="og:image" content="https://www.tstransportinc.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Three Stars Transport Inc | Reliable Trucking Services" />
        <meta name="twitter:description" content="Three Stars Transport Inc provides reliable and efficient trucking services. Contact us for freight shipping solutions." />
        <meta name="twitter:image" content="https://www.tstransportinc.com/og-image.png" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
