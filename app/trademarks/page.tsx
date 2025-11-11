import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trademarks | Originary',
  description: 'Trademark guidelines and usage policy for Originary and related marks.',
}

export default function TrademarksPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ paddingTop: 'calc(var(--space-32) + 60px)', paddingBottom: 'var(--space-24)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              color: 'var(--brand-primary)',
              marginBottom: 'var(--space-6)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Legal
            </div>
            <h1 style={{
              fontSize: 'clamp(var(--text-4xl), 5vw, var(--text-5xl))',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              marginBottom: 'var(--space-4)',
              color: 'var(--gray-900)'
            }}>
              Trademarks
            </h1>
            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--gray-600)'
            }}>
              Effective from 2025-07-27
            </p>
          </div>

          <div className="card" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
              Our Trademarks
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              The following marks are trademarks of Poem, Inc.:
            </p>
            <ul style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.7, paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
              <li><strong>Originary™</strong></li>
              <li><strong>Originary Trace™</strong></li>
            </ul>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
              All other product and company names mentioned may be trademarks of their respective owners.
            </p>
          </div>

          <div className="card" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
              Usage Guidelines
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              When referring to our products and services:
            </p>
            <ul style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.7, paddingLeft: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
              <li>Use the ™ symbol on first prominent use</li>
              <li>Do not modify, abbreviate, or create derivative marks</li>
              <li>Do not use our marks as part of your product, service, or company name</li>
              <li>Do not imply endorsement or sponsorship without written permission</li>
            </ul>
          </div>

          <div className="card" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
              Open Source
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--gray-700)', lineHeight: 1.7 }}>
              Our open-source software is licensed separately from our trademarks. Software licenses do not grant trademark rights. See individual repositories for software license details.
            </p>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--space-8) 0',
            borderTop: '1px solid var(--gray-200)',
            marginTop: 'var(--space-8)'
          }}>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', marginBottom: 'var(--space-4)' }}>
              Questions about trademark usage?
            </p>
            <Link href="/company/contact" className="btn btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
