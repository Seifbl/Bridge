"use client"
import Head from "next/head"
import { usePathname } from "next/navigation"

export default function CanonicalHead() {
  const pathname = usePathname()
  const canonicalUrl = `https://www.bridgeportage.fr${pathname}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}
