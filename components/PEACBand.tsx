'use client'

import Link from 'next/link'
import { ArrowRight, Shield, FileCheck, Lock } from 'lucide-react'

export default function PEACBand() {
  return (
    <section
      style={{
        padding: 'var(--space-24) 0',
        background: 'var(--surface-subtle)',
        borderTop: '1px solid var(--border-default)',
        borderBottom: '1px solid var(--border-default)'
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
              background: 'var(--accent-brand-subtle)',
              border: '1px solid var(--accent-brand-muted)',
              borderRadius: 'var(--radius-full)',
              padding: '6px 14px',
              marginBottom: 'var(--space-6)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--accent-brand)'
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
              color: 'var(--text-primary)'
            }}
          >
            Built on the Open PEAC Protocol
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-8)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)'
            }}
          >
            Trace is a PEAC reference implementation: policy discovery at{' '}
            <code
              style={{
                background: 'var(--border-default)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9em',
                fontFamily: 'monospace'
              }}
            >
              /.well-known/peac.txt
            </code>
            , verifiable receipts, and HTTP 402 semantics for AI agents.
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
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <FileCheck size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                Policy Discovery
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                peac.txt generator, policy headers, discovery links, and public badge
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: 'var(--space-6)',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <Shield size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                Verifiable Receipts
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                JWKS, compact JWS receipts, /v1/verify endpoint with kid lookup
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: 'var(--space-6)',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <Lock size={24} style={{ color: 'var(--accent-brand)', marginBottom: 'var(--space-3)' }} />
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                HTTP 402 Semantics
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
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
                color: 'var(--accent-brand)',
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
                color: 'var(--text-secondary)',
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
