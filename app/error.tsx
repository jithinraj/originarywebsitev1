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
          background: #fafafa;
        }

        .error-container {
          text-align: center;
          max-width: 480px;
        }

        .error-code {
          font-size: 120px;
          font-weight: 700;
          line-height: 1;
          color: #e5e5e5;
          margin-bottom: 16px;
        }

        .error-title {
          font-size: 28px;
          font-weight: 600;
          color: #0a0a0a;
          margin: 0 0 12px;
        }

        .error-description {
          font-size: 16px;
          color: #737373;
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
          font-weight: 600;
          color: white;
          background: #635bff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .error-btn-primary:hover {
          background: #5349e8;
        }

        .error-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          color: #0a0a0a;
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          text-decoration: none;
          transition: border-color 0.2s;
        }

        .error-btn-secondary:hover {
          border-color: #d4d4d4;
        }

        .error-digest {
          margin-top: 24px;
          font-size: 12px;
          color: #a3a3a3;
          font-family: ui-monospace, monospace;
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
