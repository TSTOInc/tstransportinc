import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import ThemedToaster from "@/components/themed-toaster"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
export const metadata: Metadata = {
  title: "Three Stars Transport Inc. - Reliable Freight Solutions",
  description: "Professional trucking services across America. On-time delivery, every time.",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            try {
              const storedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = storedTheme || (prefersDark ? 'dark' : 'light');
              document.documentElement.classList.add(theme);
            } catch(e) {}
          })();
        `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Three Stars Transport Inc",
            "url": "https://www.tstransportinc.com",
            "logo": "https://www.tstransportinc.com/og-image.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1427 Evanwood Ave",
              "addressLocality": "La Puente",
              "addressRegion": "CA",
              "postalCode": "91744",
              "addressCountry": "US"
            },
            "telephone": "(619) 939-6319",
          })
        }} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" enableSystem={true}>
          <main>{children}</main>
          <ThemedToaster />
        </ThemeProvider>
      </body>
    </html>

  )
}
