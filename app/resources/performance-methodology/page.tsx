import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance Methodology',
  description: 'Performance testing methodology and benchmarks for Originary services.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/resources/performance-methodology'
  }
}

export default function PerformanceMethodology() {
  return (
    <div className="wrap">
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--text-primary)'
              }}>
                Performance Methodology
              </h1>

              <div style={{
                padding: 'var(--space-8)',
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-default)'
              }}>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  We&apos;ll publish our test harness, environments, datasets, and p95/p99 definitions here.
                  Until then, all performance numbers are treated as targets.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}