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
          <h2 style={{ marginBottom: 'var(--space-6)' }}>Our services</h2>
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--gray-600)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Get up and running with Receipts faster
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: 'var(--space-8)' }}>
          <ServiceCard
            icon={<CheckCircle size={32} style={{ color: 'var(--brand-primary)' }} />}
            title="Implement Receipts"
            description="Publishers/APIs needing lawful access proof."
            deliverables={[
              'Authored /.well-known/peac.txt',
              'x402 hookup (primary) + optional adapters (Stripe/USDC/on-chain)',
              'Edge verification middleware (Cloudflare/Vercel)',
              'Staging receipt samples, go-live checklist'
            ]}
            outcome="Non-compliant calls blocked; compliant calls carry a verifiable Receipt."
            ctaText="Contact Sales"
            ctaLink="/company/contact"
            secondaryText="Email Sales"
            secondaryLink="mailto:sales@originary.xyz"
          />

          <ServiceCard
            icon={<Zap size={32} style={{ color: 'var(--brand-secondary)' }} />}
            title="Managed Adapters"
            description="Teams that want payments without owning the glue."
            deliverables={[
              'Deploy & monitor x402',
              'Adapters for Stripe/USDC/on-chain',
              'Key/JWKS rotation',
              'Alerts; dashboards'
            ]}
            outcome="Reliable settlement; single Receipt format across rails."
            ctaText="Request Enterprise Pilot"
            ctaLink="/company/contact"
            secondaryText="Email Sales"
            secondaryLink="mailto:sales@originary.xyz"
          />

          <ServiceCard
            icon={<Shield size={32} style={{ color: 'var(--brand-accent)' }} />}
            title="Compliance & Audits"
            description="Legal/ENG teams with consent/attribution/retention duties."
            deliverables={[
              'Receipt schema review',
              'Purposes/retention mapping',
              'Conformance test run',
              'Remediation plan; exec read-out'
            ]}
            outcome="Evidence-ready receipts aligned to policy."
            ctaText="Talk to an Expert"
            ctaLink="/company/contact"
            secondaryText="Email Sales"
            secondaryLink="mailto:sales@originary.xyz"
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