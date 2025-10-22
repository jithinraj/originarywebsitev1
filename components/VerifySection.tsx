import VerifyWidget from './VerifyWidget'

export default function VerifySection() {
  return (
    <section className="section" style={{
      background: 'linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%)',
      paddingTop: 'var(--space-20)',
      paddingBottom: 'var(--space-20)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            background: 'rgba(99, 91, 255, 0.1)',
            border: '1px solid rgba(99, 91, 255, 0.2)',
            borderRadius: 'var(--radius-full)',
            padding: 'var(--space-2) var(--space-4)',
            marginBottom: 'var(--space-6)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: 'var(--brand-primary)'
          }}>
            TRY IT NOW
          </div>
          
          <h2 style={{
            fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
            fontWeight: 700,
            marginBottom: 'var(--space-4)',
            color: 'var(--gray-900)'
          }}>
            Verify any <span className="text-gradient">PEAC-Receipt</span>
          </h2>
          
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--gray-600)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Paste a JWS receipt below to verify its signature and view claims. Verification uses our public JWKS endpoint.
          </p>
        </div>

        <VerifyWidget />

        <div style={{
          marginTop: 'var(--space-8)',
          textAlign: 'center',
          fontSize: 'var(--text-sm)',
          color: 'var(--gray-600)'
        }}>
          <p>
            Public keys: <a 
              href="/.well-known/jwks.json" 
              target="_blank" 
              rel="noopener"
              style={{ 
                color: 'var(--brand-primary)', 
                textDecoration: 'underline',
                fontFamily: 'var(--font-mono)'
              }}
            >
              /.well-known/jwks.json
            </a>
            {' • '}
            Policy: <a 
              href="/.well-known/aipref.json" 
              target="_blank" 
              rel="noopener"
              style={{ 
                color: 'var(--brand-primary)', 
                textDecoration: 'underline',
                fontFamily: 'var(--font-mono)'
              }}
            >
              /.well-known/aipref.json
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
