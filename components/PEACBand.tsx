'use client'

import Link from 'next/link'
import { ArrowRight, Shield, FileCheck, Lock } from 'lucide-react'

export default function PEACBand() {
  return (
    <section
      style={{
        padding: 'var(--space-24) 0',
        background: 'var(--gray-50)',
        borderTop: '1px solid var(--gray-200)',
        borderBottom: '1px solid var(--gray-200)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              background: 'rgba(99, 91, 255, 0.06)',
              border: '1px solid rgba(99, 91, 255, 0.12)',
              borderRadius: 'var(--radius-full)',
              padding: '6px 14px',
              marginBottom: 'var(--space-6)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'rgba(99, 91, 255, 0.85)'
            }}
          >
            <Shield size={14} />
            Powered by PEAC
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-4xl))',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: 'var(--space-4)',
              color: 'var(--gray-900)'
            }}
          >
            Built on the Open PEAC Protocol
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-8)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)'
            }}
          >
            Trace is a PEAC reference implementation: policy discovery at{' '}
            <code
              style={{
                background: 'var(--gray-200)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9em',
                fontFamily: 'monospace'
              }}
            >
              /.well-known/peac.txt
            </code>
            , verifiable receipts, and HTTP 402 semantics for the Agentic Web.
          </p>

          {/* Feature Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
              textAlign: 'left'
            }}
          >
            <div
              className="card"
              style={{
                padding: 'var(--space-6)',
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <FileCheck size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                Policy Discovery
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                peac.txt generator, policy headers, discovery links, and public badge
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: 'var(--space-6)',
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <Shield size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                Verifiable Receipts
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                JWKS, compact JWS receipts, /v1/verify endpoint with kid lookup
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: 'var(--space-6)',
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <Lock size={24} style={{ color: 'var(--brand-primary)', marginBottom: 'var(--space-3)' }} />
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--gray-900)' }}>
                HTTP 402 Semantics
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.6 }}>
                Production-grade HTTP 402 controls and payment adapters
              </p>
            </div>
          </div>

          {/* CTA Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <a
              href="https://peacprotocol.org"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                color: 'var(--brand-primary)',
                textDecoration: 'none'
              }}
            >
              Explore PEAC Protocol
              <ArrowRight size={16} />
            </a>

            <Link
              href="/verify"
              className="link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                color: 'var(--gray-700)',
                textDecoration: 'none'
              }}
            >
              Try receipt verification demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
