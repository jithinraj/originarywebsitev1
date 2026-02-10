'use client'

import { useState } from 'react'

interface StripeCheckoutButtonProps {
  plan: 'dev1' | 'start' | 'pro'
  amount?: number
  label?: string
  className?: string
}

export default function StripeCheckoutButton({
  plan,
  amount,
  label,
  className
}: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to start checkout. Please try again.')
      setIsLoading(false)
    }
  }

  const defaultLabel = amount
    ? `Pay $${(amount / 100).toFixed(2)}`
    : plan === 'dev1' || plan === 'start'
    ? 'Get Started'
    : 'Contact sales'

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={className}
      style={
        !className
          ? {
              backgroundColor: isLoading ? 'var(--text-muted)' : 'var(--accent-brand)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
              transition: 'all 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              minWidth: '200px',
            }
          : undefined
      }
    >
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18" />
          </svg>
          {label || defaultLabel}
        </>
      )}
    </button>
  )
}
