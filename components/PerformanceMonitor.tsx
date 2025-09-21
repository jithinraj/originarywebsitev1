'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor custom performance metrics without web-vitals dependency
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navigationEntry = entry as PerformanceNavigationTiming
          const loadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart

          if (process.env.NODE_ENV === 'development') {
            console.log(`Page load time: ${loadTime}ms`)
          }

          // Send to Google Analytics if available
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_load_time', {
              value: Math.round(loadTime),
              event_category: 'Performance',
              non_interaction: true,
            })
          }
        }
      }
    })

    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      observer.observe({ entryTypes: ['navigation'] })
    }

    return () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        observer.disconnect()
      }
    }
  }, [])

  return null
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}