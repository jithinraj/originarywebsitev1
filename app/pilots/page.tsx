import type { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, Rocket, CheckCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pilots | Originary',
  description: 'Fixed-scope pilots for production validation. Work with Originary to integrate PEAC decision records into your infrastructure.',
  alternates: {
    canonical: '/pilots'
  },
  openGraph: {
    title: 'Pilots | Originary',
    description: 'Fixed-scope pilots for production validation. Work with Originary to integrate PEAC decision records into your infrastructure.',
    url: '/pilots',
    type: 'website',
    images: ['/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilots | Originary',
    description: 'Fixed-scope pilots for production validation. Work with Originary to integrate PEAC decision records.',
    images: ['/og.jpg'],
  },
  robots: 'index,follow',
}

export default function PilotsPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--space-6)' }}>

          <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-5)',
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--brand-primary)'
            }}>
              <Rocket size={16} />
              <span>PILOTS</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              Fixed-scope pilots for production validation
            </h1>

            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)',
              lineHeight: 1.7
            }}>
              Work with Originary to integrate PEAC decision records into your infrastructure.
              Scoped engagements with clear deliverables.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-16)'
          }}>
            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                Discovery
              </h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
                Understand your requirements and map PEAC to your existing infrastructure.
                Identify integration points and success criteria.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  Architecture review
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  Integration planning
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  Success criteria definition
                </li>
              </ul>
            </div>

            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                Proof of Value
              </h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
                Deploy PEAC in a controlled environment. Validate decision records,
                receipts, and verification flows against your use cases.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  Sandbox deployment
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  End-to-end testing
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  Performance validation
                </li>
              </ul>
            </div>

            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
                Production Rollout
              </h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
                Move to production with confidence. Gradual rollout, monitoring,
                and ongoing support as you scale.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  Production deployment
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  Monitoring setup
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--gray-600)' }}>
                  <CheckCircle size={16} style={{ color: 'var(--success)' }} />
                  Ongoing support
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12)',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-20)'
          }}>
            <Calendar size={32} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-4)' }} />
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Start a conversation
            </h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', maxWidth: '400px', margin: '0 auto var(--space-6)' }}>
              Tell us about your use case and we will scope a pilot together.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span>Contact us</span>
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
