'use client'

export type Currency = 'USD'

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
    pro: { amount: 100, formatted: '$100' },
    enterprise: { amount: 0, formatted: 'Custom' }
  }
}

export function useCurrency(): PriceDisplay & { isLoading: boolean } {
  // Always use USD - no currency detection
  const currency: Currency = 'USD'
  const prices = PRICES[currency]

  return {
    ...prices,
    currency,
    symbol: '$',
    isLoading: false
  }
}
