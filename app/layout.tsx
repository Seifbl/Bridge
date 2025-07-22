import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import AnalyticsTracker from "components/AnalyticsTracker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bridge - Société de portage salarial",
  description:
    "Profitez d'une Maximisez vos revenus avec Bridge : Une optimisation sur mesure, un accompagnement personnalisé et des démarches simples et transparentes. d'optimisation de revenus, gérée par un conseiller dédié, adaptée à votre situation et qui évolue selon vos priorités.",
  icons: {
    icon: "/fav.png",
  },
}

const GA_TRACKING_ID = "G-DNWJ71CBST"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* SEO base */}
        <meta name="robots" content="index, follow" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  )
}
