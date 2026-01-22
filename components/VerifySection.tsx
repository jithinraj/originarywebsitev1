import VerifyWidget from './VerifyWidget'

export default function VerifySection() {
  return (
    <section className="section" style={{
      background: 'linear-gradient(180deg, var(--white) 0%, var(--surface-subtle) 100%)',
      paddingTop: 'var(--space-20)',
      paddingBottom: 'var(--space-20)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            background: 'var(--accent-brand-subtle)',
            border: '1px solid var(--accent-brand-muted)',
            borderRadius: 'var(--radius-full)',
            padding: 'var(--space-2) var(--space-4)',
            marginBottom: 'var(--space-6)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: 'var(--accent-brand)'
          }}>
            TRY IT NOW
          </div>
          
          <h2 style={{
            fontSize: 'clamp(var(--text-3xl), 5vw, var(--text-5xl))',
            fontWeight: 700,
            marginBottom: 'var(--space-4)',
            color: 'var(--text-primary)'
          }}>
            Verify any <span className="text-gradient">PEAC-Receipt</span>
          </h2>
          
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
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
          color: 'var(--text-secondary)'
        }}>
          <p>
            Public keys: <a 
              href="/.well-known/jwks.json" 
              target="_blank" 
              rel="noopener"
              style={{ 
                color: 'var(--accent-brand)', 
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
                color: 'var(--accent-brand)', 
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
