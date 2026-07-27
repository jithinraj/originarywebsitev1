'use client'

import { useEffect } from 'react'

export default function ClarityAnalytics() {
  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined') return

    // Defer analytics to prioritize LCP
    // Use requestIdleCallback if available, otherwise use setTimeout as fallback
    if (typeof requestIdleCallback !== 'undefined') {
      const timer = requestIdleCallback(() => {
        import('@microsoft/clarity').then((m) => m.default.init('u5xxnbz8pn')).catch(() => {})
      }, { timeout: 3000 })

      return () => cancelIdleCallback(timer)
    } else {
      // Fallback for Safari and older browsers
      const timer = setTimeout(() => {
        import('@microsoft/clarity').then((m) => m.default.init('u5xxnbz8pn')).catch(() => {})
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  return null
}
