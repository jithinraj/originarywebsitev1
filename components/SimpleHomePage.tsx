import Link from 'next/link'

export default function SimpleHomePage() {
  return (
    <main style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
      {/* Hero Section */}
      <section className="hero home-hero" style={{ opacity: 1, visibility: 'visible', display: 'block', padding: '4rem 0' }}>
        <div className="container" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
          <div className="hero-grid" style={{ opacity: 1, visibility: 'visible', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div className="hero-copy" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
              <div style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
                <span className="kicker" style={{ opacity: 1, visibility: 'visible', display: 'inline-block' }}>
                  PEAC Orchestration Platform
                </span>
              </div>
              <div style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
                <h1 className="display" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
                  <span>Proof-first infrastructure</span> for autonomous commerce
                </h1>
              </div>
              <div style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
                <p className="sub" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
                  Originary unifies policy, payments, and proof so autonomous agents, APIs, and humans can transact safely.
                  Publish your <code>peac.txt</code> once, negotiate terms on the fly, settle instantly, and ship receipts that stand up in court.
                </p>
              </div>
              <div style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
                <div className="actions hero-actions" style={{ opacity: 1, visibility: 'visible', display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                  <Link href="/company/contact" className="btn primary" style={{ opacity: 1, visibility: 'visible', display: 'inline-flex' }}>
                    Request a demo
                  </Link>
                  <Link href="/developers" className="btn secondary" style={{ opacity: 1, visibility: 'visible', display: 'inline-flex' }}>
                    Explore developer docs
                  </Link>
                </div>
              </div>
              <div className="hero-highlights" style={{ opacity: 1, visibility: 'visible', display: 'block', marginTop: '2rem' }}>
                <ul style={{ opacity: 1, visibility: 'visible', display: 'block', listStyle: 'none', padding: 0 }}>
                  <li style={{ opacity: 1, visibility: 'visible', display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ color: 'green' }}>✓</span>
                    <span>Machine-readable policy orchestration across content, APIs, and data lakes.</span>
                  </li>
                  <li style={{ opacity: 1, visibility: 'visible', display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ color: 'green' }}>✓</span>
                    <span>Dual-rail settlement via Stripe, x402, stablecoins, or enterprise credits.</span>
                  </li>
                  <li style={{ opacity: 1, visibility: 'visible', display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ color: 'green' }}>✓</span>
                    <span>Signed receipts that follow every agent request for total accountability.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero-showcase" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
              <div className="hero-card receipt-card" style={{
                opacity: 1,
                visibility: 'visible',
                display: 'block',
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}>
                <div className="receipt-card__header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid #f3f4f6'
                }}>
                  <span className="badge" style={{
                    background: '#10b981',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>Live receipt</span>
                  <span className="receipt-id" style={{
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>#8f2c-45aa</span>
                </div>
                <div className="receipt-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6b7280' }}>Resource</span>
                  <code style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>/api/content/atlantic/17</code>
                </div>
                <div className="receipt-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6b7280' }}>Requester</span>
                  <span style={{ fontSize: '0.875rem' }}>atlas-agent/2.3.1</span>
                </div>
                <div className="receipt-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6b7280' }}>Clause</span>
                  <span style={{ fontSize: '0.875rem' }}>peac:v1.6 - attribution + commercial tier</span>
                </div>
                <div className="receipt-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#6b7280' }}>Settlement:</span>
                  <span style={{ fontSize: '0.875rem' }}> $0.0025 via x402 (primary)</span>
                </div>
                <div className="receipt-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ color: '#6b7280' }}>Status</span>
                  <span className="status success" style={{
                    color: '#10b981',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>✓ Receipt Ready</span>
                </div>
                <div className="receipt-footer" style={{
                  paddingTop: '0.5rem',
                  borderTop: '1px solid #f3f4f6',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ color: '#6b7280' }}>Signature</span>
                  <code style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>0x94cd…5a9b</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="section value-section" style={{ opacity: 1, visibility: 'visible', display: 'block', padding: '4rem 0' }}>
        <div className="container" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
          <div className="section-header text-center" style={{ opacity: 1, visibility: 'visible', display: 'block', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Operate every policy, payment, and proof from one fabric
            </h2>
            <p className="lead" style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
              Stripe-level craft for the agentic economy. Originary gives legal, product, and engineering a common system to control access and revenue without slowing teams down.
            </p>
          </div>
          <div className="value-grid" style={{
            opacity: 1,
            visibility: 'visible',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div className="value-card" style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Unified policy graph</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Publish once, negotiate everywhere. Originary translates PEAC clauses into enforceable controls across agents, APIs, and downstream systems.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> Autogenerate variants for agents, crawlers, and humans
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> Versioning with full diff history
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> Multi-tenant isolation and overrides
                </li>
              </ul>
            </div>

            <div className="value-card" style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Composable commerce rails</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Bring your own pricing logic and payment providers. Our gateway brokers credits, fiat, or crypto without refactoring existing endpoints.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> Meter usage with policy-aware throttles
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> Stripe, x402, and on-chain adapters
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> Dynamic rate cards per policy segment
                </li>
              </ul>
            </div>

            <div className="value-card" style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Provable trust and analytics</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Every interaction emits a tamper-evident receipt. Stream them into your observability stack or hand to regulators in a click.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> JSON-LD receipts signed with rotating keys
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> Graph explorer for provenance queries
                </li>
                <li style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>→</span> SIEM & data warehouse connectors out of the box
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ opacity: 1, visibility: 'visible', display: 'block', padding: '4rem 0', background: '#f9fafb' }}>
        <div className="container" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
          <div className="text-center" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
              Join leading enterprises building with PEAC protocol
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/company/contact" className="btn primary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600'
              }}>
                Contact
              </Link>
              <Link href="/pricing" className="btn secondary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                border: '1px solid #d1d5db'
              }}>
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}