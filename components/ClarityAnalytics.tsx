'use client'

import { useEffect } from 'react'
import clarity from '@microsoft/clarity'

export default function ClarityAnalytics() {
  useEffect(() => {
    // Initialize Clarity with your project ID
    clarity.init('u5xxnbz8pn')
  }, [])

  return null
}
