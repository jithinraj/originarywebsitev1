'use client'

import { useState, useEffect } from 'react'

export type Currency = 'USD' | 'INR'

export interface PriceDisplay {
  start: { amount: number; formatted: string }
  pro: { amount: number; formatted: string }
  enterprise: { amount: number; formatted: string }
  currency: Currency
  symbol: string
}

const PRICES = {
  USD: {
    start: { amount: 1, formatted: '$1' },
    pro: { amount: 99, formatted: '$99' },
    enterprise: { amount: 2500, formatted: '$2,500' }
  },
  INR: {
    start: { amount: 99, formatted: '₹99' },
    pro: { amount: 7999, formatted: '₹7,999' },
    enterprise: { amount: 99999, formatted: '₹99,999' }
  }
}

export function useCurrency(): PriceDisplay & { isLoading: boolean } {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Detect user location
    async function detectLocation() {
      try {
        // Try to get timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

        // Check if timezone indicates India
        if (timezone.startsWith('Asia/Kolkata') || timezone.startsWith('Asia/Calcutta')) {
          setCurrency('INR')
        } else {
          // Fallback: Try geolocation API
          const response = await fetch('https://ipapi.co/json/')
          const data = await response.json()

          if (data.country_code === 'IN') {
            setCurrency('INR')
          } else {
            setCurrency('USD')
          }
        }
      } catch (error) {
        // Default to USD on error
        console.warn('Currency detection failed, defaulting to USD:', error)
        setCurrency('USD')
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [])

  const prices = PRICES[currency]

  return {
    ...prices,
    currency,
    symbol: currency === 'INR' ? '₹' : '$',
    isLoading
  }
}
