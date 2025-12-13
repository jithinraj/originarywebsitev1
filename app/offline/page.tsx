'use client'

import Link from 'next/link'
import { WifiOff, RefreshCw } from 'lucide-react'

export default function OfflinePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gray-50)',
        padding: 'var(--space-6)'
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          textAlign: 'center',
          padding: 'var(--space-8)',
          background: 'var(--white)',
          borderRadius: 'var(--radius-2xl)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(99, 91, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--space-6) auto'
          }}
        >
          <WifiOff size={40} style={{ color: 'var(--brand-primary)' }} />
        </div>

        <h1
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            marginBottom: 'var(--space-3)',
            color: 'var(--gray-900)'
          }}
        >
          You&apos;re Offline
        </h1>

        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--gray-600)',
            lineHeight: 1.6,
            marginBottom: 'var(--space-6)'
          }}
        >
          It looks like you&apos;ve lost your internet connection. Some features may not be available until you reconnect.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Go to Homepage
          </Link>
        </div>

        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--gray-400)',
            marginTop: 'var(--space-6)'
          }}
        >
          Cached pages may still be accessible
        </p>
      </div>
    </div>
  )
}
