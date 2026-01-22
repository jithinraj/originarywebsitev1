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
        background: 'var(--surface-subtle)',
        padding: 'var(--space-6)'
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          textAlign: 'center',
          padding: 'var(--space-8)',
          background: 'var(--surface-elevated)',
          borderRadius: 'var(--radius-2xl)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--accent-brand-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--space-6) auto'
          }}
        >
          <WifiOff size={40} style={{ color: 'var(--accent-brand)' }} />
        </div>

        <h1
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            marginBottom: 'var(--space-3)',
            color: 'var(--text-primary)'
          }}
        >
          You&apos;re Offline
        </h1>

        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--text-secondary)',
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
            color: 'var(--text-muted)',
            marginTop: 'var(--space-6)'
          }}
        >
          Cached pages may still be accessible
        </p>
      </div>
    </div>
  )
}
