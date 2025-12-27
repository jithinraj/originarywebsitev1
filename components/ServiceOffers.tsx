import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Zap, Users } from 'lucide-react'

export default function ServiceOffers() {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-16)'
        }}>
          <h2 style={{ marginBottom: 'var(--space-6)' }}>Originary solutions</h2>
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Implementation and compliance help for Receipts and HTTP 402
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
          <ServiceCard
            icon={<CheckCircle size={32} style={{ color: 'var(--brand-primary)' }} />}
            title="Pay per AI agent transaction"
            description="Publishers and APIs that need verifiable access and usage proof and want to gate high value traffic with HTTP 402."
            deliverables={[
              'Authored /.well-known/peac.txt',
              'x402 hookup (primary) with optional adapters (i402, Stripe, Razorpay, USDC, on chain)',
              'Edge verification middleware (Cloudflare/Vercel)',
              'Staging receipt samples and a go-live checklist'
            ]}
            outcome="Compliant calls carry a verifiable PEAC receipt. Non compliant calls can be blocked, flagged, or priced differently."
            ctaText="Contact"
            ctaLink="/contact"
            secondaryText="Email us"
            secondaryLink="mailto:contact@originary.xyz"
          />

          <ServiceCard
            icon={<Zap size={32} style={{ color: 'var(--brand-secondary)' }} />}
            title="Managed 402 rails"
            description="Teams that want multi-rail payments without running the plumbing."
            deliverables={[
              'Deployment and monitoring for x402 and i402',
              'Adapters for Stripe, Razorpay, USDC, and on chain settlement',
              'Key/JWKS rotation',
              'Alerts and dashboards'
            ]}
            outcome="Managed settlement with a single Receipt format across payment rails."
            ctaText="Request Enterprise Pilot"
            ctaLink="/contact"
            secondaryText="Email us"
            secondaryLink="mailto:contact@originary.xyz"
          />

          <ServiceCard
            icon={<Shield size={32} style={{ color: 'var(--brand-accent)' }} />}
            title="Compliance & Audits"
            description="Legal and engineering teams with consent, attribution, or retention duties."
            deliverables={[
              'Receipt schema review',
              'Purpose and retention mapping',
              'Conformance test run',
              'Remediation plan and executive read-out'
            ]}
            outcome="Evidence ready receipts aligned to your documented policy and mapped to AI transparency obligations such as the EU AI Act."
            ctaText="Contact"
            ctaLink="/contact"
            secondaryText="Email us"
            secondaryLink="mailto:contact@originary.xyz"
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  deliverables,
  outcome,
  ctaText,
  ctaLink,
  secondaryText,
  secondaryLink
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
  outcome: string;
  ctaText: string;
  ctaLink: string;
  secondaryText: string;
  secondaryLink: string;
}) {
  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        {icon}
      </div>

      <h3 style={{
        fontSize: 'var(--text-xl)',
        fontWeight: 600,
        marginBottom: 'var(--space-3)'
      }}>
        {title}
      </h3>

      <p style={{
        color: 'var(--gray-600)',
        marginBottom: 'var(--space-4)',
        lineHeight: 1.6
      }}>
        <strong>Who:</strong> {description}
      </p>

      <div style={{ marginBottom: 'var(--space-4)' }}>
        <p style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 500,
          marginBottom: 'var(--space-2)',
          color: 'var(--gray-900)'
        }}>
          What you get:
        </p>
        <ul style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--gray-600)',
          lineHeight: 1.6,
          paddingLeft: 'var(--space-4)',
          margin: 0
        }}>
          {deliverables.map((item, index) => (
            <li key={index} style={{ marginBottom: 'var(--space-1)' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        padding: 'var(--space-3)',
        background: 'var(--gray-50)',
        borderRadius: 'var(--radius-md)',
        marginBottom: 'var(--space-6)'
      }}>
        <p style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 500,
          marginBottom: 'var(--space-1)',
          color: 'var(--gray-900)'
        }}>
          Outcome:
        </p>
        <p style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--gray-700)',
          margin: 0,
          lineHeight: 1.5
        }}>
          {outcome}
        </p>
      </div>

      <div style={{
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }}>
        <Link href={ctaLink} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
          <span>{ctaText}</span>
          <ArrowRight size={16} />
        </Link>
        <a
          href={secondaryLink}
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--brand-primary)',
            textDecoration: 'underline',
            textAlign: 'center'
          }}
        >
          {secondaryText}
        </a>
      </div>
    </div>
  )
}