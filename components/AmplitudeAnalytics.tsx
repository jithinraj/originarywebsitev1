'use client'

import { useEffect } from 'react'
import * as amplitude from '@amplitude/analytics-browser'

export default function AmplitudeAnalytics() {
  useEffect(() => {
    amplitude.init('45962ad6d2c1acb615d7aa4e01920ec0', {
      autocapture: false,
      defaultTracking: {
        pageViews: true,
        sessions: true,
        formInteractions: false,
        fileDownloads: false
      }
    })
  }, [])

  return null
}
