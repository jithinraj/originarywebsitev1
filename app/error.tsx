'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="error-page">
      <div className="error-container">
        <div className="error-code">500</div>
        <h1 className="error-title">Something went wrong</h1>
        <p className="error-description">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
        <div className="error-actions">
          <button onClick={reset} className="error-btn-primary">
            Try again
          </button>
          <Link href="/" className="error-btn-secondary">
            Go home
          </Link>
        </div>
        {error.digest && (
          <p className="error-digest">Error ID: {error.digest}</p>
        )}
      </div>

      <style jsx>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: var(--bg);
          font-family: var(--font-sans);
        }

        .error-container {
          text-align: center;
          max-width: 480px;
        }

        .error-code {
          font-size: 120px;
          font-weight: 500;
          line-height: 1;
          color: var(--faint);
          margin-bottom: 16px;
        }

        .error-title {
          font-size: 28px;
          font-weight: 500;
          color: var(--ink);
          margin: 0 0 12px;
        }

        .error-description {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 32px;
        }

        .error-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .error-btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          color: var(--on-action);
          background: var(--action);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: opacity var(--dur-fast) var(--ease-standard);
        }

        .error-btn-primary:hover {
          opacity: 0.88;
        }

        .error-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          background: var(--paper);
          border: 1px solid var(--rule);
          border-radius: 8px;
          text-decoration: none;
          transition: border-color var(--dur-fast) var(--ease-standard);
        }

        .error-btn-secondary:hover {
          border-color: var(--border-chip-active);
        }

        .error-digest {
          margin-top: 24px;
          font-size: 12px;
          color: var(--faint);
          font-family: var(--font-mono);
        }

        @media (max-width: 480px) {
          .error-code {
            font-size: 80px;
          }

          .error-title {
            font-size: 24px;
          }

          .error-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  )
}
