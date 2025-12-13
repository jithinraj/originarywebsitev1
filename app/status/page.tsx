'use client'

import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Activity, Clock, ExternalLink } from 'lucide-react'

export default function StatusPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        <section className="section" style={{
          background: 'linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%)',
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-20)'
        }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.2
          }}>
            Status Updates
          </h1>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            We post status updates and incident notices here. Uptime percentages are not displayed at this time.
          </p>
        </div>

        {/* Status Updates */}
        <div style={{
          background: 'var(--white)',
          border: '1px solid var(--gray-200)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-8)',
          marginBottom: 'var(--space-8)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)'
          }}>
            <Activity size={24} style={{ color: 'var(--brand-primary)' }} />
            <h2 style={{
              margin: 0,
              fontSize: 'var(--text-2xl)',
              fontWeight: 600,
              color: 'var(--gray-900)'
            }}>
              Status Updates
            </h2>
          </div>

          <div style={{
            padding: 'var(--space-6)',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--gray-200)'
          }}>
            <p style={{ margin: 0, color: 'var(--gray-700)' }}>
              No public incidents to report. We will post maintenance and incident updates here when applicable.
            </p>
          </div>
        </div>

        {/* Performance Notice */}
        <div style={{
          background: 'var(--white)',
          border: '1px solid var(--gray-200)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-8)',
          marginBottom: 'var(--space-8)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)'
          }}>
            <Clock size={24} style={{ color: 'var(--brand-primary)' }} />
            <h2 style={{
              margin: 0,
              fontSize: 'var(--text-2xl)',
              fontWeight: 600,
              color: 'var(--gray-900)'
            }}>
              Recent Activity
            </h2>
          </div>

          <div style={{
            padding: 'var(--space-6)',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--gray-200)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: 'var(--text-base)',
              color: 'var(--gray-600)',
              margin: 0
            }}>
              No incidents reported. Subscribe below for status notifications.
            </p>
          </div>
        </div>

        {/* Subscribe Notice */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.05) 0%, rgba(0, 212, 170, 0.05) 100%)',
          border: '1px solid rgba(99, 91, 255, 0.15)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-8)',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: 'var(--text-xl)',
            fontWeight: 600,
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-4)'
          }}>
            Status Updates via Email
          </h3>
          <p style={{
            fontSize: 'var(--text-base)',
            color: 'var(--gray-600)',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.7
          }}>
            Subscribe to receive notifications for scheduled maintenance and incidents
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/company/contact" className="btn btn-primary">
              Subscribe to Updates
            </Link>
            <a
              href="mailto:contact@originary.xyz?subject=Status%20Notifications"
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
            >
              <ExternalLink size={16} />
              Email Us
            </a>
          </div>
        </div>

        {/* Historical Note */}
        <p style={{
          textAlign: 'center',
          fontSize: 'var(--text-sm)',
          color: 'var(--gray-500)',
          marginTop: 'var(--space-8)'
        }}>
          Last updated: {new Date().toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZone: 'America/Los_Angeles',
            timeZoneName: 'short'
          })}
        </p>
      </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Uptime percentages and per-service claims intentionally omitted until a provider is integrated.
