"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import ContactForm from "@/components/forms/contact-form"

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours.",
    })
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Let's work together</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to ship? Request a quote and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl">
          <div className="lg:col-span-2">
            <Card className="border-2 border-border">
              <CardContent className="p-8 md:p-12">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground">(619) 939-6319</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground break-all">{"dispatch@tstransportinc.com\n"}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    1427 Evanwood Ave
                    <br />
                    La Puente, CA 91744
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Dispatch: 24/7</p>
                    <p>Office: Mon-Fri 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
