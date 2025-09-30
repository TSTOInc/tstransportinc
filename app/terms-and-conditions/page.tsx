"use client"

import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: September 30, 2025
          </p>

          <Separator className="my-6" />

          <p className="text-base leading-relaxed">
            Please read these terms and conditions carefully before using Our Service.
          </p>

          {/* ----------------- Interpretation and Definitions ----------------- */}
          <h2 className="text-2xl font-semibold pt-10">Interpretation and Definitions</h2>

          <h3 className="text-xl font-semibold pt-6">Interpretation</h3>
          <p className="text-base leading-relaxed">
            The words whose initial letters are capitalized have meanings defined under
            the following conditions. The following definitions shall have the same
            meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-xl font-semibold pt-6">Definitions</h3>
          <p className="text-base leading-relaxed">
            For the purposes of these Terms and Conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 pt-2 text-base">
            <li>
              <strong>Affiliate</strong> means an entity that controls, is controlled by, or is
              under common control with a party, where &quot;control&quot; means ownership of 50% or
              more of the shares, equity interest or other securities entitled to vote
              for election of directors or other managing authority.
            </li>
            <li><strong>Country</strong> refers to: California, United States</li>
            <li>
              <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
              &quot;Our&quot; in this Agreement) refers to Three Stars Transport Inc, 1427
              Evawood Ave, La Puente, CA 91744.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the Service such as a
              computer, a cell phone or a digital tablet.
            </li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li>
              <strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these
              Terms and Conditions that form the entire agreement between You and the
              Company regarding the use of the Service. This Terms and Conditions
              agreement has been created with the help of the{" "}
              <a
                href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/"
                target="_blank"
                className="underline text-primary"
              >
                Free Terms and Conditions Generator
              </a>.
            </li>
            <li>
              <strong>Third-party Social Media Service</strong> means any services or content
              (including data, information, products or services) provided by a
              third-party that may be displayed, included or made available by the
              Service.
            </li>
            <li>
              <strong>Website</strong> refers to Three Stars Transport Inc, accessible from{" "}
              <a
                href="https://www.tstransportinc.com"
                target="_blank"
                className="underline text-primary"
              >
                tstransportinc.com
              </a>
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual is
              accessing or using the Service, as applicable.
            </li>
          </ul>

          {/* ----------------- Acknowledgment ----------------- */}
          <h2 className="text-2xl font-semibold pt-10">Acknowledgment</h2>
          <p className="text-base leading-relaxed">
            These are the Terms and Conditions governing the use of this Service and the
            agreement that operates between You and the Company. These Terms and
            Conditions set out the rights and obligations of all users regarding the use
            of the Service.
          </p>
          <p className="text-base leading-relaxed">
            Your access to and use of the Service is conditioned on Your acceptance of
            and compliance with these Terms and Conditions. These Terms and Conditions
            apply to all visitors, users and others who access or use the Service.
          </p>
          <p className="text-base leading-relaxed">
            By accessing or using the Service You agree to be bound by these Terms and
            Conditions. If You disagree with any part of these Terms and Conditions then
            You may not access the Service.
          </p>
          <p className="text-base leading-relaxed">
            You represent that you are over the age of 18. The Company does not permit
            those under 18 to use the Service.
          </p>
          <p className="text-base leading-relaxed">
            Your access to and use of the Service is also conditioned on Your acceptance
            of and compliance with the Privacy Policy of the Company. Our Privacy Policy
            describes Our policies and procedures on the collection, use and disclosure
            of Your personal information when You use the Application or the Website and
            tells You about Your privacy rights and how the law protects You. Please read
            Our Privacy Policy carefully before using Our Service.
          </p>

          {/* ----------------- Links to Other Websites ----------------- */}
          <h2 className="text-2xl font-semibold pt-10">Links to Other Websites</h2>
          <p className="text-base leading-relaxed">
            Our Service may contain links to third-party web sites or services that are
            not owned or controlled by the Company.
          </p>
          <p className="text-base leading-relaxed">
            The Company has no control over, and assumes no responsibility for, the
            content, privacy policies, or practices of any third party web sites or
            services. You further acknowledge and agree that the Company shall not be
            responsible or liable, directly or indirectly, for any damage or loss caused
            or alleged to be caused by or in connection with the use of or reliance on any
            such content, goods or services available on or through any such web sites or
            services.
          </p>
          <p className="text-base leading-relaxed">
            We strongly advise You to read the terms and conditions and privacy policies
            of any third-party web sites or services that You visit.
          </p>

          {/* ----------------- Termination ----------------- */}
          <h2 className="text-2xl font-semibold pt-10">Termination</h2>
          <p className="text-base leading-relaxed">
            We may terminate or suspend Your access immediately, without prior notice or
            liability, for any reason whatsoever, including without limitation if You
            breach these Terms and Conditions.
          </p>
          <p className="text-base leading-relaxed">
            Upon termination, Your right to use the Service will cease immediately.
          </p>

          {/* ----------------- Limitation of Liability ----------------- */}
          <h2 className="text-2xl font-semibold pt-10">Limitation of Liability</h2>
          <p className="text-base leading-relaxed">
            Notwithstanding any damages that You might incur, the entire liability of the
            Company and any of its suppliers under any provision of this Terms and Your
            exclusive remedy for all of the foregoing shall be limited to the amount
            actually paid by You through the Service or 100 USD if You haven&apos;t
            purchased anything through the Service.
          </p>
          <p className="text-base leading-relaxed">
            To the maximum extent permitted by applicable law, in no event shall the
            Company or its suppliers be liable for any special, incidental, indirect, or
            consequential damages whatsoever (including, but not limited to, damages for
            loss of profits, loss of data or other information, for business interruption,
            for personal injury, loss of privacy...) even if the Company or any supplier
            has been advised of the possibility of such damages.
          </p>

          {/* ----------------- Disclaimer ----------------- */}
          <h2 className="text-2xl font-semibold pt-10">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
          <p className="text-base leading-relaxed">
            The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all
            faults and defects without warranty of any kind...
          </p>

          {/* ----------------- Governing Law ----------------- */}
          <h2 className="text-2xl font-semibold pt-10">Governing Law</h2>
          <p className="text-base leading-relaxed">
            The laws of the Country, excluding its conflicts of law rules, shall govern
            this Terms and Your use of the Service...
          </p>

          {/* ----------------- Contact ----------------- */}
          <h2 className="text-2xl font-semibold pt-10">Contact Us</h2>
          <p className="text-base leading-relaxed">
            If you have any questions about these Terms and Conditions, You can contact us:
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
