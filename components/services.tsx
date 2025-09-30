import { Truck, Package, Container, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Full Truckload",
      description: "Dedicated trucks for large shipments with direct delivery from origin to destination.",
    },
    {
      icon: Package,
      title: "Less Than Truckload",
      description: "Cost-effective solutions for smaller freight that doesn't require a full trailer.",
    },
    {
      icon: Container,
      title: "Refrigerated Transport",
      description: "Temperature-controlled shipping for perishable goods and sensitive materials.",
    },
    {
      icon: Zap,
      title: "Expedited Shipping",
      description: "Fast, time-critical delivery when you need your freight there yesterday.",
    },
  ]

  return (
    <section id="services" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Services built for your business</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive trucking solutions tailored to meet your unique logistics needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-background border border-border rounded-xl hover:border-foreground transition-all duration-300"
            >
              <div className="mb-6">
                <service.icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
