'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated (placeholder for now)
    const isAuthenticated = false // This would check actual auth state
    if (!isAuthenticated) {
      router.push('/signin')
    }
  }, [router])

  return (
    <div className="wrap">
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-6)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--accent-brand)'
              }}>
                <span>DASHBOARD</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-5xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                Welcome to your Dashboard
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)',
                maxWidth: '600px',
                margin: '0 auto var(--space-8) auto',
                lineHeight: 1.7
              }}>
                Manage your API keys, view usage analytics, and configure your PEAC integration.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                marginBottom: 'var(--space-12)'
              }}>
                <Link href="/signin" className="btn btn-primary">
                  Sign In to Access
                </Link>
                <Link href="/developers" className="btn btn-secondary">
                  View Documentation
                </Link>
              </div>
            </div>

            <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
                  🔑 API Key Management
                </h3>
                <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
                  Generate and manage your API keys to start making requests to our services.
                </p>
                <Link href="/signin" className="btn btn-secondary">
                  Get Started
                </Link>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
                  📊 Usage Analytics
                </h3>
                <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
                  Monitor your API usage, track performance metrics, and analyze trends.
                </p>
                <Link href="/signin" className="btn btn-secondary">
                  View Analytics
                </Link>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-xl)' }}>
                  ⚙️ PEAC Configuration
                </h3>
                <p style={{ marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
                  Configure your PEAC protocol settings and integration preferences.
                </p>
                <Link href="/signin" className="btn btn-secondary">
                  Configure
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
