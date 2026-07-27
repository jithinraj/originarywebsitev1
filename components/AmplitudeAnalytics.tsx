'use client'

import { useEffect } from 'react'

/**
 * Amplitude loads on idle via dynamic import, so the SDK stays out of the
 * initial bundle and never competes with first paint or interactivity.
 */
export default function AmplitudeAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let cancelled = false
    const start = () => {
      if (cancelled) return
      import('@amplitude/analytics-browser')
        .then((amplitude) => {
          if (cancelled) return
          amplitude.init('45962ad6d2c1acb615d7aa4e01920ec0', {
            autocapture: false,
            defaultTracking: {
              pageViews: true,
              sessions: true,
              formInteractions: false,
              fileDownloads: false,
            },
          })
        })
        .catch(() => {})
    }

    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(start, { timeout: 4000 })
      return () => {
        cancelled = true
        cancelIdleCallback(id)
      }
    }
    const id = setTimeout(start, 2000)
    return () => {
      cancelled = true
      clearTimeout(id)
    }
  }, [])

  return null
}
