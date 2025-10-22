import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Shield, Lock, CheckCircle, FileText, Server, Building2, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trust & Compliance : Originary',
  description: 'Security, compliance, and transparency resources for Originary - PEAC protocol orchestration platform',
  openGraph: {
    title: 'Trust & Compliance : Originary',
    description: 'Security, compliance, and transparency resources for Originary',
    type: 'website',
    url: 'https://www.originary.xyz/trust',
  },
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.originary.xyz/trust',
  },
}

export default function TrustPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        <section className="section" style={{
          background: 'linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decorative elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,91,255,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '0',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-8)',
                color: 'var(--brand-primary)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                <Shield size={16} />
                Trust Center
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: 'var(--gray-900)',
                marginBottom: 'var(--space-6)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                Built on Open Standards
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--gray-600)',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.7
              }}>
                Originary operates with full transparency. Our policies, standards, and verification endpoints are publicly accessible and auditable.
              </p>
            </div>

            {/* Trust Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-8)',
              marginBottom: '80px'
            }}>
              {/* Security Card */}
              <TrustCard
                icon={<Lock size={24} />}
                title="Security"
                description="Responsible disclosure policy and security reporting guidelines."
                links={[
                  { href: '/security', label: 'Security Disclosure Policy' },
                  { href: '/.well-known/security.txt', label: 'security.txt (RFC 9116)', external: true }
                ]}
              />

              {/* Protocol Card */}
              <TrustCard
                icon={<FileText size={24} />}
                title="Protocol"
                description="PEAC protocol specifications and AI preference frameworks."
                links={[
                  { href: '/.well-known/peac.txt', label: 'peac.txt Specification', external: true },
                  { href: '/.well-known/aipref.json', label: 'aipref.json (AI Preferences)', external: true },
                  { href: '/robots.txt', label: 'robots.txt (RFC 9309)', external: true }
                ]}
              />

              {/* Verification Card */}
              <TrustCard
                icon={<CheckCircle size={24} />}
                title="Verification"
                description="Public endpoints for receipt validation and policy verification."
                links={[
                  { href: '/verify', label: 'Receipt Verification Tool' },
                  { href: '/demo', label: 'Interactive Demo' }
                ]}
              />

              {/* Legal Card */}
              <TrustCard
                icon={<FileText size={24} />}
                title="Legal"
                description="Terms, privacy policy, and compliance documentation."
                links={[
                  { href: '/terms', label: 'Terms of Service' },
                  { href: '/privacy', label: 'Privacy Policy' },
                  { href: '/copyright', label: 'Copyright Policy' }
                ]}
              />

              {/* Infrastructure Card */}
              <TrustCard
                icon={<Server size={24} />}
                title="Infrastructure"
                description="Service metadata and infrastructure information."
                links={[
                  { href: '/sitemap-main.xml', label: 'Sitemap (XML)', external: true },
                  { href: '/humans.txt', label: 'humans.txt', external: true },
                  { href: '/status', label: 'Service Status' }
                ]}
              />

              {/* Company Card */}
              <TrustCard
                icon={<Building2 size={24} />}
                title="Company"
                description="Corporate information and brand guidelines."
                links={[
                  { href: '/company/about', label: 'About Originary' },
                  { href: '/trademark', label: 'Trademark Guidelines' },
                  { href: '/company/contact', label: 'Contact Us' }
                ]}
              />
            </div>

            {/* Open Source Commitment Section */}
            <div style={{
              maxWidth: '900px',
              margin: '0 auto 80px',
              background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.05) 0%, rgba(0, 212, 170, 0.05) 100%)',
              border: '1px solid rgba(99, 91, 255, 0.15)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-12)',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                color: 'var(--gray-900)',
                marginBottom: 'var(--space-4)'
              }}>
                Open Source Commitment
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-8)',
                lineHeight: 1.7
              }}>
                The PEAC protocol is an open standard. Originary provides commercial orchestration and tooling built on these open foundations. All protocol specifications and verification endpoints remain publicly accessible.
              </p>
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link href="/docs/receipts" className="btn btn-secondary" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  Protocol Documentation
                  <ExternalLink size={16} />
                </Link>
                <Link href="/pricing" className="btn btn-primary">
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-3)'
              }}>
                Questions about security, compliance, or our trust practices?
              </p>
              <a
                href="mailto:contact@originary.xyz"
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--brand-primary)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'opacity 0.2s'
                }}
              >
                contact@originary.xyz
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function TrustCard({
  icon,
  title,
  description,
  links
}: {
  icon: React.ReactNode
  title: string
  description: string
  links: Array<{ href: string; label: string; external?: boolean }>
}) {
  return (
    <div
      className="card"
      style={{
        background: 'var(--white)',
        border: '1px solid var(--gray-200)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
        textAlign: 'left',
        height: '100%'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        marginBottom: 'var(--space-4)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(99, 91, 255, 0.1)',
          color: 'var(--brand-primary)'
        }}>
          {icon}
        </div>
        <h3 style={{
          margin: 0,
          fontSize: 'var(--text-xl)',
          fontWeight: 600,
          color: 'var(--gray-900)'
        }}>
          {title}
        </h3>
      </div>

      <p style={{
        color: 'var(--gray-600)',
        marginBottom: 'var(--space-6)',
        lineHeight: 1.6,
        fontSize: 'var(--text-base)'
      }}>
        {description}
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)'
      }}>
        {links.map((link) => (
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                transition: 'gap 0.2s'
              }}
            >
              → {link.label}
              <ExternalLink size={14} style={{ opacity: 0.6 }} />
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                transition: 'gap 0.2s',
                gap: 'var(--space-2)'
              }}
            >
              → {link.label}
            </Link>
          )
        ))}
      </div>
    </div>
  )
}
