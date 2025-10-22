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
    pro: { amount: 99, formatted: '$99' },
    enterprise: { amount: 2500, formatted: '$2,500' }
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
