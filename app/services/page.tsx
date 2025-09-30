import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Truck, Package, Container, Zap, Shield, Clock, MapPin, Headphones } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: "Full Truckload (FTL)",
      description: "Dedicated trucks for large shipments with direct delivery from origin to destination.",
      features: [
        "Exclusive use of entire trailer",
        "Direct point-to-point delivery",
        "Faster transit times",
        "Reduced handling and damage risk",
        "Ideal for 10+ pallets or 15,000+ lbs",
      ],
    },
    {
      icon: Package,
      title: "Less Than Truckload (LTL)",
      description: "Cost-effective solutions for smaller freight that doesn't require a full trailer.",
      features: [
        "Pay only for space you use",
        "Consolidated shipping with other loads",
        "Flexible pickup and delivery",
        "Perfect for 1-10 pallets",
        "Nationwide coverage",
      ],
    },
    {
      icon: Container,
      title: "Refrigerated Transport",
      description: "Temperature-controlled shipping for perishable goods and sensitive materials.",
      features: [
        "Precise temperature control",
        "Real-time monitoring",
        "Food-grade certified trailers",
        "Pharmaceutical-grade options",
        "24/7 temperature tracking",
      ],
    },
    {
      icon: Zap,
      title: "Expedited Shipping",
      description: "Fast, time-critical delivery when you need your freight there yesterday.",
      features: [
        "Priority handling and routing",
        "Team drivers for non-stop delivery",
        "Same-day and next-day options",
        "Real-time GPS tracking",
        "Dedicated customer support",
      ],
    },
  ]

  const advantages = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive cargo insurance on every shipment for complete peace of mind.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "98.5% on-time delivery rate with real-time tracking and proactive updates.",
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description: "Coast-to-coast service with strategic terminals across all 48 states.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service and dispatch team ready to assist.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[0.95]">
              Comprehensive freight solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              From full truckload to expedited shipping, we provide tailored logistics services to meet your unique
              business needs.
            </p>
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="px-8">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-12 items-start p-8 md:p-12 bg-background rounded-2xl border border-border hover:border-foreground transition-all duration-300"
              >
                <div>
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-foreground">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Why choose Three Stars Transport</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Industry-leading service backed by decades of experience and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="p-8 bg-muted/30 rounded-xl border border-border hover:border-foreground transition-all duration-300">
                <advantage.icon className="w-10 h-10 mb-6 text-foreground" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to ship with us?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get a competitive quote in under 2 hours and experience the Three Stars difference.
          </p>
          <Link href="/quote">
            <Button size="lg" className="px-12" variant="secondary">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
