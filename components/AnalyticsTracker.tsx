'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

const GA_TRACKING_ID = 'G-DNWJ71CBST'

export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}
