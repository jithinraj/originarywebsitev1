'use client'

import { useEffect } from 'react'
import clarity from '@microsoft/clarity'

export default function ClarityAnalytics() {
  useEffect(() => {
    // Defer analytics to prioritize LCP
    const timer = requestIdleCallback(() => {
      clarity.init('u5xxnbz8pn')
    }, { timeout: 3000 })

    return () => cancelIdleCallback(timer)
  }, [])

  return null
}
