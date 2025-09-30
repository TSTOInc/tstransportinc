"use client"

import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: September 30, 2025</p>

          <Separator className="my-6" />

          {/* Example Paragraph */}
          <p className="text-base leading-relaxed">
            This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your
            information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <p className="text-base leading-relaxed">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
            collection and use of information in accordance with this Privacy Policy.
          </p>

          {/* Section Heading */}
          <h2 className="text-2xl font-semibold pt-10">Interpretation and Definitions</h2>

          <h3 className="text-xl font-semibold pt-6">Interpretation</h3>
          <p className="text-base leading-relaxed">
            The words whose initial letters are capitalized have meanings defined under the following conditions. The
            following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-xl font-semibold pt-6">Definitions</h3>
          <p className="text-base leading-relaxed">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc pl-6 space-y-2 pt-2 text-base">
            <li><strong>Account</strong>: a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Affiliate</strong>: an entity that controls, is controlled by, or is under common control with a party...</li>
            <li><strong>Company</strong>: refers to Three Stars Transpor Inc, 1427 Evanwood Ave, La Puente, CA 91744.</li>
            <li><strong>Cookies</strong>: small files placed on Your device containing browsing data.</li>
            <li><strong>Country</strong>: California, United States.</li>
            <li><strong>Device</strong>: any device that can access the Service.</li>
            <li><strong>Personal Data</strong>: any information that relates to an identified or identifiable individual.</li>
            <li><strong>Service</strong>: refers to the Website.</li>
            <li><strong>Website</strong>: accessible from <a href="https://www.tstransportinc.com" className="underline text-primary" target="_blank">tstransportinc.com</a></li>
            <li><strong>You</strong>: the individual accessing or using the Service.</li>
          </ul>

          {/* Continue sections similarly... */}

          <h2 className="text-2xl font-semibold pt-10">Collecting and Using Your Personal Data</h2>

          <h3 className="text-xl font-semibold pt-6">Types of Data Collected</h3>
          <h4 className="text-lg font-semibold pt-4">Personal Data</h4>
          <p className="text-base leading-relaxed">
            While using Our Service, We may ask You to provide Us with certain personally identifiable information...
          </p>
          <ul className="list-disc pl-6 space-y-2 pt-2 text-base">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-10">Contact Us</h2>
          <p className="text-base leading-relaxed">
            If you have any questions about this Privacy Policy, You can contact us:
          </p>
          <ul className="list-disc pl-6 pt-2 text-base">
            <li>By phone: (619) 939-6319</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
