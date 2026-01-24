'use client'

import { useEffect } from 'react'
import clarity from '@microsoft/clarity'

export default function ClarityAnalytics() {
  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined') return

    // Defer analytics to prioritize LCP
    // Use requestIdleCallback if available, otherwise use setTimeout as fallback
    if (typeof requestIdleCallback !== 'undefined') {
      const timer = requestIdleCallback(() => {
        clarity.init('u5xxnbz8pn')
      }, { timeout: 3000 })

      return () => cancelIdleCallback(timer)
    } else {
      // Fallback for Safari and older browsers
      const timer = setTimeout(() => {
        clarity.init('u5xxnbz8pn')
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  return null
}
