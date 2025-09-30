"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, Package, Clock, Shield } from "lucide-react"
import { useState } from "react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    pickupDate: "",
    details: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote request:", formData)
    // Handle form submission
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[0.95]">
              Get your instant quote
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Fill out the form below and we'll get back to you within 2 hours with a competitive quote for your
              shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "2-Hour Response", desc: "Fast turnaround" },
              { icon: Shield, title: "Insured Cargo", desc: "Full protection" },
              { icon: Truck, title: "Modern Fleet", desc: "Latest equipment" },
              { icon: Package, title: "All Freight Types", desc: "Any size, any load" },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-muted/30 rounded-xl border border-border">
                <feature.icon className="w-8 h-8 mb-4 text-foreground" strokeWidth={1.5} />
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8 p-8 md:p-12 bg-muted/30 rounded-2xl border border-border">
            <div>
              <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
              <p className="text-muted-foreground">All fields are required unless marked optional</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Shipment Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-truckload">Full Truckload (FTL)</SelectItem>
                      <SelectItem value="less-than-truckload">Less Than Truckload (LTL)</SelectItem>
                      <SelectItem value="refrigerated">Refrigerated Transport</SelectItem>
                      <SelectItem value="expedited">Expedited Shipping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickupDate">Pickup Date</Label>
                  <Input
                    id="pickupDate"
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => handleChange("pickupDate", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin (City, State)</Label>
                  <Input
                    id="origin"
                    value={formData.origin}
                    onChange={(e) => handleChange("origin", e.target.value)}
                    placeholder="Los Angeles, CA"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination (City, State)</Label>
                  <Input
                    id="destination"
                    value={formData.destination}
                    onChange={(e) => handleChange("destination", e.target.value)}
                    placeholder="New York, NY"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleChange("weight", e.target.value)}
                    placeholder="5000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions (L x W x H in inches)</Label>
                  <Input
                    id="dimensions"
                    value={formData.dimensions}
                    onChange={(e) => handleChange("dimensions", e.target.value)}
                    placeholder="48 x 40 x 60"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Additional Details (Optional)</Label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => handleChange("details", e.target.value)}
                  placeholder="Any special requirements, handling instructions, or additional information..."
                  rows={4}
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto px-12">
              Submit Quote Request
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
