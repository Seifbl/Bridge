"use client"
import Head from "next/head"
import { usePathname } from "next/navigation"

export default function CanonicalHead() {
  const pathname = usePathname()
  const canonicalUrl = `https://www.bridgeportage.fr${pathname}`

  return (
    <Head>
      <title>Bridge - Société de portage salarial</title>
      <meta
        name="description"
        content="Maximisez vos revenus avec Bridge : Une optimisation sur mesure, un accompagnement personnalisé et des démarches simples et transparentes."
      />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}
