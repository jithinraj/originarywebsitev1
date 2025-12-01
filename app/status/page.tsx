'use client'

import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { Activity, CheckCircle, Clock, ExternalLink } from 'lucide-react'

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
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: 'var(--radius-full)',
            padding: 'var(--space-2) var(--space-6)',
            marginBottom: 'var(--space-8)',
            color: 'rgb(16, 185, 129)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            <CheckCircle size={16} />
            All Systems Operational
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.2
          }}>
            Originary Status
          </h1>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Real-time service health and performance metrics
          </p>
        </div>

        {/* Current Status */}
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
              Service Status
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <ServiceStatus service="Policy Engine" status="operational" />
          </div>
        </div>

        {/* Uptime */}
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
              Uptime (Last 30 Days)
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            <UptimeStat service="Policy Engine" uptime="100%" />
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

function ServiceStatus({ service, status }: { service: string; status: 'operational' | 'degraded' | 'down' }) {
  const statusConfig = {
    operational: {
      color: 'rgb(16, 185, 129)',
      bg: 'rgba(16, 185, 129, 0.1)',
      label: 'Operational'
    },
    degraded: {
      color: 'rgb(245, 158, 11)',
      bg: 'rgba(245, 158, 11, 0.1)',
      label: 'Degraded Performance'
    },
    down: {
      color: 'rgb(239, 68, 68)',
      bg: 'rgba(239, 68, 68, 0.1)',
      label: 'Service Down'
    }
  }

  const config = statusConfig[status]

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4)',
      background: 'var(--gray-50)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--gray-200)'
    }}>
      <span style={{
        fontSize: 'var(--text-base)',
        fontWeight: 500,
        color: 'var(--gray-900)'
      }}>
        {service}
      </span>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-1) var(--space-3)',
        background: config.bg,
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: config.color
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: config.color
        }} />
        {config.label}
      </div>
    </div>
  )
}

function UptimeStat({ service, uptime }: { service: string; uptime: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: 'var(--text-3xl)',
        fontWeight: 700,
        color: 'rgb(16, 185, 129)',
        marginBottom: 'var(--space-2)'
      }}>
        {uptime}
      </div>
      <div style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--gray-600)',
        fontWeight: 500
      }}>
        {service}
      </div>
    </div>
  )
}
