'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const reportWebVitals = (metric: any) => {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${metric.name}: ${metric.value}`)
      }

      // Send to analytics in production
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        })
      }
    }

    // Dynamic import to avoid SSR issues
    import('web-vitals').then((webVitals) => {
      // Use the actual available exports from web-vitals v5
      if (webVitals.onCLS) webVitals.onCLS(reportWebVitals)
      if (webVitals.onINP) webVitals.onINP(reportWebVitals) // INP replaced FID
      if (webVitals.onFCP) webVitals.onFCP(reportWebVitals)
      if (webVitals.onLCP) webVitals.onLCP(reportWebVitals)
      if (webVitals.onTTFB) webVitals.onTTFB(reportWebVitals)
    }).catch(() => {
      // web-vitals is optional, fail silently
    })

    // Monitor custom performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navigationEntry = entry as PerformanceNavigationTiming
          const loadTime = navigationEntry.loadEventEnd - navigationEntry.loadEventStart

          if (process.env.NODE_ENV === 'development') {
            console.log(`Page load time: ${loadTime}ms`)
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