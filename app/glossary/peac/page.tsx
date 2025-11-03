import type { Metadata } from "next";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PEAC Protocol - Policy, Evidence, Access, Compliance",
  description: "PEAC is an open protocol for policy discovery and verifiable receipts. Enables agents to discover terms via .well-known/peac.txt and prove compliance with cryptographic PEAC-Receipt tokens.",
  alternates: { canonical: "/glossary/peac/" },
  keywords: "PEAC protocol, policy discovery, verifiable receipts, PEAC-Receipt, compliance, JWS, agent commerce, .well-known",
  openGraph: {
    title: "PEAC Protocol - Policy, Evidence, Access, Compliance",
    description: "Open protocol for policy discovery and verifiable receipts. Enables agents to discover terms and prove compliance.",
    type: "article",
    url: "https://www.originary.xyz/glossary/peac/",
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: "summary_large_image",
    title: "PEAC Protocol - Policy, Evidence, Access, Compliance",
    description: "Open protocol for policy discovery and verifiable receipts. Enables agents to discover terms and prove compliance.",
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originary',
    creator: '@originary',
  },
  robots: 'index,follow',
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "PEAC Protocol",
    "alternateName": "Policy, Evidence, Access, Compliance",
    "description": "An open protocol for file-based policy discovery and verifiable receipts. Agents discover policies via .well-known/peac.txt and present PEAC-Receipt JWS tokens as proof of compliance.",
    "inDefinedTermSet": "https://www.originary.xyz/glossary/",
    "url": "https://www.originary.xyz/glossary/peac/"
  };

  return (
    <div className="wrap">
      <NavigationHeader />
      <main className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', color: 'var(--gray-600)' }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Home</Link>
          {' '}/{' '}
          <Link href="/glossary/" style={{ textDecoration: 'none', color: 'var(--gray-600)' }}>Glossary</Link>
          {' '}/{' '}
          <span style={{ color: 'var(--gray-900)' }}>PEAC</span>
        </nav>

        <div style={{
          display: 'inline-flex',
          background: 'rgba(99, 91, 255, 0.1)',
          border: '1px solid rgba(99, 91, 255, 0.2)',
          borderRadius: 'var(--radius-full)',
          padding: 'var(--space-2) var(--space-4)',
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          color: 'var(--brand-primary)',
          marginBottom: 'var(--space-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          GLOSSARY TERM
        </div>

        <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: 'var(--space-6)', lineHeight: 1.1, color: 'var(--gray-900)' }}>
          PEAC Protocol
        </h1>

        <div style={{ fontSize: 'var(--text-base)', lineHeight: 1.8, color: 'var(--gray-700)' }}>
          <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--gray-600)' }}>
            <strong>PEAC</strong> (Policy, Evidence, Access, Compliance) is an open protocol for file-based policy discovery and verifiable receipts. Agents discover policies via <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code> and present cryptographic PEAC-Receipt tokens as auditable proof of compliance.
          </p>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            What PEAC stands for
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-4)' }}>
                <strong style={{ color: 'var(--brand-primary)' }}>P</strong>olicy - Machine-readable terms published at <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code>
              </li>
              <li style={{ marginBottom: 'var(--space-4)' }}>
                <strong style={{ color: 'var(--brand-primary)' }}>E</strong>vidence - Cryptographic receipts proving compliance with policies
              </li>
              <li style={{ marginBottom: 'var(--space-4)' }}>
                <strong style={{ color: 'var(--brand-primary)' }}>A</strong>ccess - Verifiable proof of payment or authorization for resource access
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong style={{ color: 'var(--brand-primary)' }}>C</strong>ompliance - Auditable trail for regulatory and business requirements
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            How PEAC works
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ol style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Policy discovery</strong> - Agent fetches <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code> to discover pricing, terms, and payment methods
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Payment flow</strong> - Agent makes payment through specified method (HTTP 402, x402, Stripe, etc.)
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Receipt generation</strong> - Payment provider issues a PEAC-Receipt as a signed JWS token
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Receipt presentation</strong> - Agent presents receipt in <code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>PEAC-Receipt</code> header for verified access
              </li>
            </ol>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            PEAC-Receipt format
          </h2>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            A PEAC-Receipt is a JWS (JSON Web Signature) token containing payment proof, access rights, and compliance metadata. It can be verified offline using the issuer&rsquo;s public key.
          </p>
          <div style={{
            background: 'var(--gray-900)',
            color: 'var(--gray-100)',
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'auto',
            fontSize: 'var(--text-sm)',
            marginBottom: 'var(--space-8)'
          }}>
            <pre style={{ margin: 0 }}>
              <code>{`# Example PEAC-Receipt header
PEAC-Receipt: eyJhbGciOiJFZERTQSIsImtpZCI6IjIwMjUtMDktMS...

# Decoded payload (example)
{
  "iss": "originary.xyz",
  "sub": "client-agent-123",
  "iat": 1699564800,
  "exp": 1699568400,
  "resource": "/api/content",
  "amount": "1.00",
  "currency": "USD",
  "payment_id": "pay_xyz789"
}`}</code>
            </pre>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            PEAC vs x402
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              PEAC and <Link href="/glossary/x402/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>x402</Link> are complementary protocols:
            </p>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>PEAC</strong> - File-based policy discovery (<code style={{ background: 'var(--gray-100)', padding: '2px 6px', borderRadius: 'var(--radius-sm)' }}>/.well-known/peac.txt</code>) and receipt format (PEAC-Receipt JWS)
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>x402</strong> - HTTP 402-based payment flow with challenge-response pattern for inline payment negotiation
              </li>
            </ul>
            <p style={{ marginTop: 'var(--space-4)', marginBottom: 0 }}>
              Many implementations use both: PEAC for policy discovery and x402 for payment enforcement.
            </p>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Why verifiable receipts matter
          </h2>
          <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
            <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Audit trails</strong> - Cryptographic proof of payment and access for compliance
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Offline verification</strong> - JWS signatures can be verified without calling issuer APIs
              </li>
              <li style={{ marginBottom: 'var(--space-3)' }}>
                <strong>Chargeback protection</strong> - Signed receipts prevent payment disputes
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Attribution proof</strong> - Agents can prove they paid for content usage rights
              </li>
            </ul>
          </div>

          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginTop: 'var(--space-12)', marginBottom: 'var(--space-4)', color: 'var(--gray-900)' }}>
            Learn more
          </h2>
          <ul style={{ paddingLeft: 'var(--space-6)', margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/products/peac/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>PEAC Protocol Overview</Link> - Full protocol documentation
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/verify/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Verify PEAC-Receipt</Link> - Offline signature verification tool
            </li>
            <li style={{ marginBottom: 'var(--space-3)' }}>
              <Link href="/glossary/http-402-payment-required/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>HTTP 402 Payment Required</Link> - Status code used with PEAC
            </li>
            <li style={{ marginBottom: 0 }}>
              <Link href="/glossary/agentic-web/" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Agentic Web</Link> - Infrastructure for autonomous agent commerce
            </li>
          </ul>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </div>
  );
}
