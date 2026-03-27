import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Shield, Lock, CheckCircle, FileText, Server, Building2, ExternalLink, KeyRound, Wifi, WifiOff, Eye, Scale, ArrowRight } from 'lucide-react'
import { FACTS } from '@/lib/facts'

export const metadata: Metadata = {
  title: 'Trust Center',
  description: 'How Originary handles verification, cryptography, data boundaries, and portability. Ed25519 signatures, offline verification, no phone-home.',
  openGraph: {
    title: 'Trust Center ',
    description: 'Verification model, cryptography, data boundaries, and portability for Originary and the PEAC protocol.',
    type: 'website',
    url: '/trust',
    siteName: 'Originary',
    images: [{ url: '/og' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust Center ',
    description: 'Verification model, cryptography, data boundaries, and portability for Originary and the PEAC protocol.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: {
    canonical: '/trust',
  },
}

export default function TrustPage() {
  return (
    <div className="wrap">
      <NavigationHeader />
      <main id="main-content" role="main" style={{ paddingTop: '80px' }}>
        <section className="section" style={{
          background: 'linear-gradient(180deg, var(--surface-subtle) 0%, var(--surface-elevated) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                background: 'var(--accent-brand-subtle)',
                border: '1px solid var(--accent-brand-muted)',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-2) var(--space-6)',
                marginBottom: 'var(--space-8)',
                color: 'var(--accent-brand)',
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
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-6)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                Verify Everything Yourself
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                maxWidth: '720px',
                margin: '0 auto',
                lineHeight: 1.7
              }}>
                Every signed record is independently verifiable. No phone-home, no proprietary tooling, no Originary dependency. Here is exactly how the system works and what you can audit.
              </p>
            </div>

            {/* Assurance Sections */}
            <div style={{
              maxWidth: '880px',
              margin: '0 auto 96px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-12)'
            }}>
              {/* Verification Model */}
              <AssuranceSection
                icon={<CheckCircle size={22} />}
                title="Verification Model"
                anchor="verification-model"
              >
                <p style={proseStyle}>
                  Every interaction record is a signed JSON Web Signature (JWS). When a record is issued, the issuer signs the claims payload with their private key. Any verifier, your code, a third-party auditor, or an offline script, can verify the signature using the issuer's published public key.
                </p>
                <p style={proseStyle}>
                  Verification never calls home. There is no Originary API in the verification path. The verifier fetches the public key from the issuer's standard JWKS endpoint once, then validates signatures locally. If the issuer is offline, cached keys still work. The signed record carries all the evidence needed to confirm what happened, when, and who attested to it.
                </p>
                <KeyPoint>
                  Records are self-contained. Verification is local. No network dependency on Originary or any third party at verification time.
                </KeyPoint>
              </AssuranceSection>

              {/* Cryptography */}
              <AssuranceSection
                icon={<KeyRound size={22} />}
                title="Cryptography and Key Management"
                anchor="cryptography"
              >
                <p style={proseStyle}>
                  All signatures use Ed25519 (RFC 8032), a modern elliptic-curve algorithm with no known practical attacks and deterministic signing (no nonce reuse risk). Keys are compact (32-byte public keys) and verification is fast.
                </p>
                <p style={proseStyle}>
                  You bring your own keys. Generate them locally, store them in your KMS (AWS KMS, GCP Cloud KMS, Azure Key Vault, HashiCorp Vault), or use hardware security modules. Originary never holds or accesses your private signing keys. Public keys are published at standard JWKS endpoints (<code style={codeStyle}>/.well-known/jwks.json</code>) so any verifier can resolve them without proprietary tooling.
                </p>
                <KeyPoint>
                  Ed25519 only. Bring-your-own keys. Originary never touches your private key material.
                </KeyPoint>
              </AssuranceSection>

              {/* Portability and Offline Verification */}
              <AssuranceSection
                icon={<WifiOff size={22} />}
                title="Portability and Offline Verification"
                anchor="portability"
              >
                <p style={proseStyle}>
                  Signed records are standard JWS tokens. They are not stored in a proprietary database or locked to an Originary account. You can export them, archive them, move them between systems, or store them in your own infrastructure. Any system that understands JWS and Ed25519 can verify them.
                </p>
                <p style={proseStyle}>
                  Offline verification works by design. Once you have the issuer's public key (from their JWKS endpoint or cached locally), you can verify any record without network access. There is no license server, no token refresh, and no API call required to confirm a signature.
                </p>
                <p style={proseStyle}>
                  The PEAC protocol is designed for multiple independent implementations. Your records are not tied to Originary's software. Any conformant implementation can issue, verify, and process the same records.
                </p>
                <KeyPoint>
                  Standard JWS format. Verify offline with cached keys. No vendor lock-in. Records are yours.
                </KeyPoint>
              </AssuranceSection>

              {/* Data Handling Boundaries */}
              <AssuranceSection
                icon={<Eye size={22} />}
                title="Data Handling Boundaries"
                anchor="data-boundaries"
              >
                <p style={proseStyle}>
                  Originary's tooling operates locally by default. The signing libraries, verification functions, and protocol SDK run in your environment. They do not send interaction data, record contents, or business payloads to Originary servers.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 'var(--space-4)',
                  margin: 'var(--space-6) 0'
                }}>
                  <BoundaryCard
                    label="Stays in your environment"
                    items={[
                      'Private signing keys',
                      'Interaction payloads and business data',
                      'Record contents and claims',
                      'Verification results and decisions'
                    ]}
                    variant="local"
                  />
                  <BoundaryCard
                    label="Published by you (public endpoints)"
                    items={[
                      'Public keys (JWKS endpoint)',
                      'Issuer configuration (peac-issuer.json)',
                      'Policy metadata (peac.txt)',
                      'Signed records you choose to share'
                    ]}
                    variant="published"
                  />
                </div>
                <p style={proseStyle}>
                  If you use Originary's optional managed services (hosted verification, dashboards), those services process only the records you explicitly send to them. Managed service data handling is covered in our <Link href="/privacy" style={linkStyle}>Privacy Policy</Link>.
                </p>
              </AssuranceSection>

              {/* Responsible Disclosure */}
              <AssuranceSection
                icon={<Lock size={22} />}
                title="Responsible Disclosure"
                anchor="responsible-disclosure"
              >
                <p style={proseStyle}>
                  If you discover a security vulnerability in the PEAC protocol, any Originary product, or this website, please report it to{' '}
                  <a href="mailto:security@originary.xyz" style={linkStyle}>security@originary.xyz</a>.
                  We acknowledge reports within 5 business days and coordinate fixes before public disclosure.
                </p>
                <p style={proseStyle}>
                  Our machine-readable security policy is published at{' '}
                  <a href="/.well-known/security.txt" style={linkStyle}>/.well-known/security.txt</a>{' '}
                  per RFC 9116. The PEAC protocol repository accepts security reports through GitHub Security Advisories.
                </p>
                <KeyPoint>
                  Report vulnerabilities to security@originary.xyz. We follow responsible disclosure practices with coordinated timelines.
                </KeyPoint>
              </AssuranceSection>

              {/* Legal Identity and Stewardship */}
              <AssuranceSection
                icon={<Scale size={22} />}
                title="Legal Identity and Stewardship"
                anchor="stewardship"
              >
                <p style={proseStyle}>
                  Originary is a product of {FACTS.legalEntity}, a Delaware corporation. We are the current steward of the PEAC protocol, not its gatekeeper. The protocol specification, reference implementation, conformance suite, and all core tooling are published under the {FACTS.license} license.
                </p>
                <p style={proseStyle}>
                  Stewardship means we maintain the specification, publish test vectors, and ensure interoperability. It does not mean we control who can implement, extend, or build on the protocol. Anyone can build a conformant implementation without permission, payment, or partnership with Originary.
                </p>
                <p style={proseStyle}>
                  The protocol is designed to reach 1.0 with multiple independent implementations. Our goal is a standard that outlasts any single company, including ours.
                </p>
                <KeyPoint>
                  {FACTS.legalEntity}, Delaware. PEAC is open source ({FACTS.license}). Stewardship, not gatekeeping.
                </KeyPoint>
              </AssuranceSection>
            </div>

            {/* Divider */}
            <div style={{
              maxWidth: '880px',
              margin: '0 auto',
              borderTop: '1px solid var(--border-default)',
              marginBottom: '64px'
            }} />

            {/* Resources heading */}
            <div style={{
              textAlign: 'center',
              marginBottom: 'var(--space-12)',
              maxWidth: '600px',
              margin: '0 auto var(--space-12)'
            }}>
              <h2 style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-3)',
                letterSpacing: '-0.01em'
              }}>
                Resources and Policies
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}>
                Direct links to policies, specifications, verification endpoints, and corporate information.
              </p>
            </div>

            {/* Trust Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-8)',
              marginBottom: '80px'
            }}>
              <TrustCard
                icon={<Lock size={24} />}
                title="Security"
                description="Responsible disclosure policy and security reporting guidelines."
                links={[
                  { href: '/security', label: 'Security Disclosure Policy' },
                  { href: '/.well-known/security.txt', label: 'security.txt (RFC 9116)', external: true }
                ]}
              />

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

              <TrustCard
                icon={<CheckCircle size={24} />}
                title="Verification"
                description="Public endpoints for receipt validation and policy verification."
                links={[
                  { href: '/verify', label: 'Receipt Verification Tool' },
                  { href: '/demo', label: 'Interactive Demo' }
                ]}
              />

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

              <TrustCard
                icon={<Server size={24} />}
                title="Security Architecture"
                description="How the system is built to keep your data and keys safe."
                links={[
                  { href: '/enterprise', label: 'Deployment options and security model' },
                  { href: '/.well-known/security.txt', label: 'security.txt (RFC 9116)', external: true },
                  { href: 'https://github.com/peacprotocol/peac/security', label: 'GitHub Security Advisories', external: true }
                ]}
              />

              <TrustCard
                icon={<Building2 size={24} />}
                title="Company"
                description="Corporate information and brand guidelines."
                links={[
                  { href: '/about', label: 'About Originary' },
                  { href: '/trademark', label: 'Trademark Guidelines' },
                  { href: '/contact', label: 'Contact Us' }
                ]}
              />

              <TrustCard
                icon={<KeyRound size={24} />}
                title="Portability"
                description="Export and interoperability guarantees for your records and keys."
                links={[
                  { href: '/peac', label: 'Protocol Overview' },
                  { href: '/conformance', label: 'Conformance Suite' },
                  { href: '/governance', label: 'Governance Model' }
                ]}
              />
            </div>

            {/* Contact Section */}
            <div style={{
              maxWidth: '640px',
              margin: '0 auto',
              textAlign: 'center',
              marginBottom: 'var(--space-16)'
            }}>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-3)'
              }}>
                Questions about security, compliance, or verification?
              </p>
              <a
                href="mailto:contact@originary.xyz"
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--accent-brand)',
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

/* ------------------------------------------------------------------ */
/*  Shared styles                                                      */
/* ------------------------------------------------------------------ */

const proseStyle: React.CSSProperties = {
  fontSize: 'var(--text-base)',
  color: 'var(--text-secondary)',
  lineHeight: 1.75,
  margin: '0 0 var(--space-4) 0'
}

const codeStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono, monospace)',
  fontSize: '0.9em',
  background: 'var(--surface-subtle)',
  padding: '2px 6px',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)'
}

const linkStyle: React.CSSProperties = {
  color: 'var(--accent-brand)',
  textDecoration: 'none',
  fontWeight: 500
}

/* ------------------------------------------------------------------ */
/*  Assurance Section                                                  */
/* ------------------------------------------------------------------ */

function AssuranceSection({
  icon,
  title,
  anchor,
  children
}: {
  icon: React.ReactNode
  title: string
  anchor: string
  children: React.ReactNode
}) {
  return (
    <div id={anchor} style={{
      scrollMarginTop: '120px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        marginBottom: 'var(--space-5)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--accent-brand-subtle)',
          color: 'var(--accent-brand)',
          flexShrink: 0
        }}>
          {icon}
        </div>
        <h2 style={{
          margin: 0,
          fontSize: 'var(--text-xl)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em'
        }}>
          {title}
        </h2>
      </div>
      <div style={{ paddingLeft: '52px' }}>
        {children}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Key Point callout                                                  */
/* ------------------------------------------------------------------ */

function KeyPoint({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'var(--accent-brand-faint, var(--surface-subtle))',
      border: '1px solid var(--accent-brand-muted, var(--border-default))',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-4) var(--space-5)',
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)',
      fontWeight: 500,
      lineHeight: 1.6
    }}>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Data Boundary Card                                                 */
/* ------------------------------------------------------------------ */

function BoundaryCard({
  label,
  items,
  variant
}: {
  label: string
  items: string[]
  variant: 'local' | 'published'
}) {
  return (
    <div style={{
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)'
    }}>
      <h4 style={{
        margin: '0 0 var(--space-3) 0',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: 'var(--text-primary)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em'
      }}>
        {label}
      </h4>
      <ul style={{
        margin: 0,
        padding: '0 0 0 var(--space-4)',
        listStyle: 'none'
      }}>
        {items.map((item) => (
          <li key={item} style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            position: 'relative',
            paddingLeft: 'var(--space-1)'
          }}>
            <span style={{
              position: 'absolute',
              left: 'calc(-1 * var(--space-4))',
              color: 'var(--accent-brand)',
              fontWeight: 600
            }}>
              {variant === 'local' ? '\u2022' : '\u2022'}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Trust Card (link directory)                                        */
/* ------------------------------------------------------------------ */

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
        background: 'var(--surface-elevated)',
        border: '1px solid var(--border-default)',
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
          background: 'var(--accent-brand-subtle)',
          color: 'var(--accent-brand)'
        }}>
          {icon}
        </div>
        <h3 style={{
          margin: 0,
          fontSize: 'var(--text-xl)',
          fontWeight: 600,
          color: 'var(--text-primary)'
        }}>
          {title}
        </h3>
      </div>

      <p style={{
        color: 'var(--text-secondary)',
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
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                transition: 'gap 0.2s'
              }}
            >
              {'\u2192'} {link.label}
              <ExternalLink size={14} style={{ opacity: 0.6 }} />
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'var(--accent-brand)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                transition: 'gap 0.2s',
                gap: 'var(--space-2)'
              }}
            >
              {'\u2192'} {link.label}
            </Link>
          )
        ))}
      </div>
    </div>
  )
}
