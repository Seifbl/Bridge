import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bridge - société de portage salarial",
  description:
    "Profitez d'une stratégie d'optimisation de revenus, gérée par un conseiller dédié, adaptée à votre situation et qui évolue selon vos priorités.",
  icons: {
    icon: "/fav.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

