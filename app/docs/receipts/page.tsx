import { Metadata } from 'next'
import Link from 'next/link'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PEAC-Receipt Documentation : Originary',
  description: 'Learn about PEAC-Receipt, the open standard for verifiable agent access receipts. Technical specification, implementation guide, and examples.',
  openGraph: {
    title: 'PEAC-Receipt Documentation',
    description: 'Learn about PEAC-Receipt, the open standard for verifiable agent access receipts.',
    url: 'https://originary.xyz/docs/receipts',
    siteName: 'Originary',
    type: 'website'
  }
}

export default function ReceiptsDocPage() {
  return (
    <>
      <NavigationHeader />
      <main style={{ minHeight: '100vh', background: 'var(--white)' }}>
        <div className="container" style={{ padding: 'var(--space-32) var(--space-6)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              background: 'rgba(99, 91, 255, 0.1)',
              border: '1px solid rgba(99, 91, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              padding: 'var(--space-2) var(--space-6)',
              color: 'var(--brand-primary)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--space-6)'
            }}>
              DOCUMENTATION
            </div>

            <h1 style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-6)',
              color: 'var(--gray-900)'
            }}>
              PEAC-Receipt
            </h1>

            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-12)'
            }}>
              PEAC-Receipt is an open standard for cryptographically signed receipts that prove agent access to resources with verifiable compliance.
            </p>

            {/* What is PEAC-Receipt */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                What is PEAC-Receipt?
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                PEAC-Receipt is a standardized HTTP header containing a cryptographically signed JSON Web Token (JWT) that serves as proof of authorized access. Every response from an Originary-protected resource includes this receipt.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                The receipt contains: resource accessed, timestamp, payment evidence, policy snapshot, and is signed using Ed25519 for fast verification at edge locations.
              </p>
            </div>

            {/* Header Format */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Header Format
              </h2>
              <pre style={{
                background: 'var(--gray-900)',
                color: 'var(--gray-100)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                overflow: 'auto',
                lineHeight: 1.6
              }}>
{`PEAC-Receipt: eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjUtMDkta2V5MSIsInR5cCI6IkpXVCJ9.
eyJpc3MiOiJvcmlnaW5hcnkueHl6IiwiaWF0IjoxNzM3NTYyODAwLCJyZXNvdXJjZSI6Ii9hcGkvY29udGVudCIsInBheW1lbnQiOnsic3RhdHVzIjoidmVyaWZpZWQiLCJhbW91bnQiOjEuMDAsImN1cnJlbmN5IjoiVVNEIn19.
r5k2nF8xT3mQwK9LpXvYzJ7dR2sE4gH6tB1cA8oU0fPqN3vM5wJ9eX7lK2yT6uG8hZ4nV1xS3dW0jR6pL5`}
              </pre>
            </div>

            {/* Claims */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Receipt Claims
              </h2>
              <ul style={{ color: 'var(--gray-600)', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li><strong>iss</strong>: Issuer (domain that signed the receipt)</li>
                <li><strong>iat</strong>: Issued at (Unix timestamp)</li>
                <li><strong>resource</strong>: Path or identifier of accessed resource</li>
                <li><strong>payment</strong>: Payment evidence (status, amount, currency, transaction ID)</li>
                <li><strong>kid</strong>: Key identifier for signature verification</li>
              </ul>
            </div>

            {/* Verification */}
            <div className="card" style={{ marginBottom: 'var(--space-8)', textAlign: 'left' }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Verification
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                Verify receipts using our API or verify endpoint:
              </p>
              <pre style={{
                background: 'var(--gray-900)',
                color: 'var(--gray-100)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontFamily: 'var(--font-mono)',
                overflow: 'auto',
                lineHeight: 1.6
              }}>
{`curl -X POST https://originary.xyz/api/verify \\
  -H "Content-Type: application/json" \\
  -d '{"receipt": "eyJhbGci..."}'`}
              </pre>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginTop: 'var(--space-4)' }}>
                Or use our web interface: <Link href="/verify" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 600 }}>originary.xyz/verify</Link>
              </p>
            </div>

            {/* Next Steps */}
            <div style={{
              background: 'var(--gray-50)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)',
              marginTop: 'var(--space-12)'
            }}>
              <h2 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                Ready to implement?
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                Start generating receipts with Originary in under 5 minutes.
              </p>
              <Link
                href="/checkout/start"
                className="btn btn-primary"
              >
                Get Started for $1
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
