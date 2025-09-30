import { Check } from "lucide-react"

export function About() {
  const features = [
    "13+ years industry experience",
    "Modern, maintained fleet",
    "Professional certified drivers",
    "Real-time shipment tracking",
    "Competitive transparent pricing",
    "Excellent safety record",
  ]

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium mb-6">Why Choose Us</div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance leading-tight">
              Your trusted logistics partner
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We deliver more than freight—we deliver peace of mind. With a commitment to excellence and customer
              satisfaction, we ensure your cargo arrives safely and on time, every time.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                    <Check className="w-4 h-4 text-background" strokeWidth={3} />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/semi-truck-on-highway-at-sunset.jpg"
                alt="Three Stars Transport truck"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-foreground/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
