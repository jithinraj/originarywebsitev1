export default function PerformanceMethodology() {
  return (
    <div className="wrap">
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                Performance Methodology
              </h1>

              <div style={{
                padding: 'var(--space-8)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--gray-200)'
              }}>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  color: 'var(--gray-700)',
                  margin: 0
                }}>
                  We'll publish our test harness, environments, datasets, and p95/p99 definitions here.
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