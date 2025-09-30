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
import QuoteForm from "@/components/forms/quote-form"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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
              <div key={i} className="p-6 bg-muted/30 rounded-xl border border-border hover:border-foreground transition-all duration-300">
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
          <Card>
            <CardHeader className="pl-16 pt-8">
              <h2 className="text-4xl font-bold mb-2">Request a Quote</h2>
              <p className=" text-muted-foreground">All fields are required unless marked optional</p>
            </CardHeader>
            <CardContent>
              <QuoteForm />
            </CardContent>

          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
