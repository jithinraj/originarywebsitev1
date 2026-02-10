'use client'

import { useState } from 'react'

interface StripeButtonProps {
  plan?: 'dev1' | 'start' | 'pro'
  amount?: number
  label?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function StripeButton({
  plan = 'start',
  amount = 1,
  label,
  variant = 'primary',
  className = ''
}: StripeButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePayment = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Call the server-side API to create a checkout session
      const response = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (err) {
      console.error('Payment error:', err)
      setError(err instanceof Error ? err.message : 'Payment failed')
      setIsLoading(false)
    }
  }

  const buttonLabel = label || `Pay $${amount} with Stripe`
  const isPrimary = variant === 'primary'

  return (
    <div className="stripe-button-container">
      <button
        onClick={handlePayment}
        disabled={isLoading}
        style={{
          backgroundColor: isLoading
            ? 'var(--text-muted)'
            : (isPrimary ? 'var(--accent-brand)' : 'transparent'),
          color: isPrimary ? 'white' : 'var(--accent-brand)',
          padding: '12px 24px',
          borderRadius: '6px',
          border: isPrimary ? 'none' : '2px solid var(--accent-brand)',
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
        }}
        className={className}
        aria-label={`Pay $${amount} to activate ${plan} plan`}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            Processing...
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 10h18" />
            </svg>
            {buttonLabel}
          </>
        )}
      </button>

      {error && (
        <div
          style={{
            color: 'var(--accent-error)',
            fontSize: '14px',
            marginTop: '8px',
            textAlign: 'center'
          }}
          role="alert"
        >
          {error}
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  )
}
