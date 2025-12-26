'use client'

import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import { ArrowRight, GitBranch, Users, FileText, Shield } from 'lucide-react'

export default function GovernancePage() {
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
              <GitBranch size={16} />
              <span>GOVERNANCE</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              How PEAC evolves
            </h1>

            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--gray-600)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)',
              lineHeight: 1.7
            }}>
              PEAC is designed for multiple independent implementations.
              Governance ensures the protocol remains neutral and adapter-friendly.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-16)'
          }} className="governance-grid">
            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(99, 91, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-4)'
              }}>
                <FileText size={24} style={{ color: 'var(--brand-primary)' }} />
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                PEIPs
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: 'var(--text-sm)' }}>
                PEAC Enhancement Proposals define changes to the protocol.
                All significant changes go through the PEIP process.
              </p>
            </div>

            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(0, 212, 170, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-4)'
              }}>
                <GitBranch size={24} style={{ color: 'var(--brand-secondary)' }} />
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                Versioning
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: 'var(--text-sm)' }}>
                Semantic versioning with clear compatibility guarantees.
                Breaking changes require major version increments.
              </p>
            </div>

            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(255, 107, 53, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-4)'
              }}>
                <Users size={24} style={{ color: 'var(--brand-accent)' }} />
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                Neutrality
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: 'var(--text-sm)' }}>
                The protocol remains rail- and vendor-agnostic.
                No single implementation has privileged status.
              </p>
            </div>

            <div className="card" style={{
              padding: 'var(--space-8)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-2xl)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-4)'
              }}>
                <Shield size={24} style={{ color: '#3B82F6' }} />
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                Conformance
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: 'var(--text-sm)' }}>
                Test vectors and validators ensure implementations
                behave consistently across ecosystems.
              </p>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12)',
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-2xl)',
            marginBottom: 'var(--space-20)'
          }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
              Contribute to PEAC
            </h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', maxWidth: '400px', margin: '0 auto var(--space-6)' }}>
              Join the discussion on GitHub. Submit PEIPs, review proposals, or contribute to implementations.
            </p>
            <Link
              href="https://github.com/peacprotocol/peac"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}
            >
              <span>View on GitHub</span>
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .governance-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
