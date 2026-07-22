import type { Metadata } from 'next'
import Link from 'next/link'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, Card, PALETTE } from '@/components/home'
import { Mono } from '@/components/home/atoms/Mono'
import { DataTable, StepLabel, VerificationBoundary } from '@/components/specimens/parts'

export const metadata: Metadata = {
  title: { absolute: 'Originary deployment, verification, and security boundaries' },
  description:
    'Review current key-custody, network, data, retention, telemetry, supply-chain, and support boundaries.',
  openGraph: {
    title: 'Trust Center | Originary',
    description:
      'See how Originary handles verification, keys, portability, and offline validation for signed records across agent, API, MCP, and automated workflows.',
    type: 'website',
    url: '/trust',
    siteName: 'Originary',
    images: [{ url: '/og' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust Center | Originary',
    description:
      'See how Originary handles verification, keys, portability, and offline validation for signed records across agent, API, MCP, and automated workflows.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
  alternates: { canonical: '/trust' },
}

const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'
const mono = 'var(--font-plex-mono), "IBM Plex Mono", monospace'

const linkStyle = {
  color: PALETTE.ink,
  textDecoration: 'underline',
  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
  textUnderlineOffset: 3,
}

const proseStyle = {
  fontFamily: sans,
  fontSize: 15,
  lineHeight: 1.7,
  color: PALETTE.muted,
  margin: '0 0 14px 0',
  textWrap: 'pretty' as const,
}

const codeStyle = {
  fontFamily: mono,
  fontSize: '0.92em',
  background: 'rgba(20, 17, 10, 0.04)',
  padding: '2px 5px',
  border: `1px solid rgba(20, 17, 10, 0.10)`,
  color: PALETTE.ink,
}

const headStyle = {
  fontFamily: sans,
  fontSize: 20,
  lineHeight: 1.2,
  fontWeight: 500,
  letterSpacing: '-0.01em',
  color: PALETTE.ink,
  margin: '0 0 14px 0',
}

const cardTitleStyle = {
  fontFamily: sans,
  fontSize: 17,
  fontWeight: 500,
  letterSpacing: '-0.01em',
  color: PALETTE.ink,
  margin: '0 0 8px 0',
}

const cardDescStyle = {
  fontFamily: sans,
  fontSize: 14,
  lineHeight: 1.6,
  color: PALETTE.muted,
  margin: '0 0 16px 0',
}

const artifactGridItems: Array<{ label: string; href: string; external?: boolean }> = [
  { label: 'Security', href: '/security' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'GitHub', href: 'https://github.com/peacprotocol/peac', external: true },
  { label: 'Deployment model', href: '/pricing' },
  { label: 'PEAC protocol', href: '/peac' },
  { label: 'security.txt', href: '/.well-known/security.txt', external: true },
  { label: 'Contact', href: '/contact' },
]

const trustCards: Array<{
  label: string
  title: string
  description: string
  links: Array<{ href: string; label: string; external?: boolean }>
}> = [
  {
    label: 'security',
    title: 'Security',
    description: 'Responsible disclosure policy and security reporting guidelines.',
    links: [
      { href: '/security', label: 'Security Disclosure Policy' },
      { href: '/.well-known/security.txt', label: 'security.txt (RFC 9116)', external: true },
    ],
  },
  {
    label: 'protocol',
    title: 'Protocol',
    description: 'PEAC protocol specifications and AI preference frameworks.',
    links: [
      { href: '/.well-known/peac.txt', label: 'peac.txt Specification', external: true },
      { href: '/.well-known/aipref.json', label: 'aipref.json (AI Preferences)', external: true },
      { href: '/robots.txt', label: 'robots.txt (RFC 9309)', external: true },
    ],
  },
  {
    label: 'verification',
    title: 'Verification',
    description: 'Tools and services for signature validation and evidence verification.',
    links: [
      { href: '/verify', label: 'Online Verification Tool' },
      { href: '/records', label: 'Record Gallery' },
    ],
  },
  {
    label: 'legal',
    title: 'Legal',
    description: 'Terms, privacy policy, and compliance documentation.',
    links: [
      { href: '/terms', label: 'Terms of Service' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/copyright', label: 'Copyright Policy' },
    ],
  },
  {
    label: 'architecture',
    title: 'Security architecture',
    description: 'How the system is built to keep your data and keys safe.',
    links: [
      { href: '/pricing', label: 'Deployment options and pricing' },
      { href: '/.well-known/security.txt', label: 'security.txt (RFC 9116)', external: true },
      { href: 'https://github.com/peacprotocol/peac/security', label: 'GitHub Security Advisories', external: true },
    ],
  },
  {
    label: 'company',
    title: 'Company',
    description: 'Corporate information and brand guidelines.',
    links: [
      { href: '/about', label: 'About Originary' },
      { href: '/trademark', label: 'Trademark Guidelines' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    label: 'portability',
    title: 'Portability',
    description: 'Export and interoperability guarantees for your records and keys.',
    links: [
      { href: '/peac', label: 'Protocol Overview' },
      {
        href: 'https://github.com/peacprotocol/peac/tree/main/specs/conformance',
        label: 'Conformance Suite',
        external: true,
      },
      { href: '/verify', label: 'Offline Verification' },
    ],
  },
]

function KeyPoint({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: 16,
        padding: '14px 18px',
        background: PALETTE.bg,
        border: `1px solid ${PALETTE.hairline}`,
        fontFamily: sans,
        fontSize: 14,
        lineHeight: 1.6,
        color: PALETTE.ink,
      }}
    >
      {children}
    </div>
  )
}

function BoundaryCard({ label, items }: { label: string; items: string[] }) {
  return (
    <div
      style={{
        background: PALETTE.bg,
        border: `1px solid ${PALETTE.hairline}`,
        padding: 20,
      }}
    >
      <Mono
        size={11}
        color={PALETTE.faint}
        style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}
      >
        {label}
      </Mono>
      <ul
        style={{
          margin: '12px 0 0 0',
          padding: '0 0 0 18px',
          fontFamily: sans,
          fontSize: 14,
          lineHeight: 1.7,
          color: PALETTE.muted,
        }}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function TrustPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="trust center"
        title="Clear deployment and verification boundaries."
        sub="Review current key-custody, network, data, retention, telemetry, supply-chain, and support boundaries. Every claim links to the artifact that backs it."
        strip={['Deployment modes', 'Key custody', 'Data boundaries', 'PEAC ' + FACTS.currentVersion]}
      >
        <p
          style={{
            fontFamily: sans,
            fontSize: 14,
            lineHeight: 1.6,
            color: PALETTE.faint,
            margin: '8px 0 0',
            maxWidth: 620,
            textWrap: 'pretty',
          }}
        >
          Relevant for AI agent workflows, APIs, MCP systems, enterprise reviews, and any workflow where verification
          must survive beyond the original vendor boundary.
        </p>
      </PageHero>

      <PageSection paddingTop={16} paddingBottom={32}>
        <div
          className="home-trust-chips"
          style={{
            maxWidth: 880,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
            gap: 12,
          }}
        >
          {artifactGridItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 16px',
                  background: PALETTE.paper,
                  border: `1px solid ${PALETTE.hairline}`,
                  fontFamily: sans,
                  fontSize: 13,
                  fontWeight: 500,
                  color: PALETTE.ink,
                  textDecoration: 'none',
                  textAlign: 'center',
                  minHeight: 44,
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 16px',
                  background: PALETTE.paper,
                  border: `1px solid ${PALETTE.hairline}`,
                  fontFamily: sans,
                  fontSize: 13,
                  fontWeight: 500,
                  color: PALETTE.ink,
                  textDecoration: 'none',
                  textAlign: 'center',
                  minHeight: 44,
                }}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </PageSection>

      <PageSection paddingBottom={48}>
        <div
          style={{
            maxWidth: 880,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              the matrix
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>What runs where, and who holds what.</h2>
            <div style={{ marginTop: 18 }}>
              <DataTable
                head={['', 'Open source', 'Supported self-host']}
                rows={[
                  ['Where it runs', 'Your infrastructure', 'Your infrastructure'],
                  ['Key custody', 'You. Local or your KMS.', 'You. Local or your KMS.'],
                  ['Interaction data', 'Processed in your environment (self-hosted)', 'Processed in your environment (under agreement)'],
                  ['Support', 'Community (GitHub)', 'Under agreement'],
                  ['Verification', 'Offline, no callback', 'Offline, no callback'],
                ]}
              />
            </div>
            <p style={{ ...proseStyle, fontSize: 13, marginTop: 12 }}>
              Originary does not host verification, custody keys, or store your records. Anything not listed here is not
              offered. Verification never requires Originary to be online in any mode.
            </p>
          </div>

          <div>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              procurement
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>Answers your review team will ask for.</h2>
            <div style={{ marginTop: 18 }}>
              <DataTable
                head={['Procurement fact', 'Current position']}
                rows={[
                  [
                    'Hosting mode',
                    'Self-hosted. The software runs in your infrastructure; Originary operates no hosted verification service.',
                  ],
                  [
                    'Key custody',
                    'Yours. The issuer generates and holds its Ed25519 keys locally or in your KMS. Originary never holds signing keys.',
                  ],
                  [
                    'Data processed by Originary',
                    'None from verification, which runs in your environment. Website only: consent-gated analytics and what you send through the contact form.',
                  ],
                  [
                    'Retention',
                    'Website data is kept only as long as needed for the stated purpose and legal obligations, then deleted or anonymized.',
                  ],
                  [
                    'Subprocessors',
                    'Processors for hosting, payments, and support under contractual safeguards. Some support operations are performed by an India affiliate under SCCs and DPAs.',
                  ],
                  [
                    'Data residency',
                    'Not applicable to verification, which never leaves your environment. Website processing may occur outside your country with the safeguards described in the privacy policy.',
                  ],
                  [
                    'Certifications held',
                    'None. No SOC 2, ISO 27001, or comparable third-party audit has been completed, and none is claimed.',
                  ],
                  [
                    'SLA and support',
                    'No SLA on the open-source protocol; support there is community-based via GitHub. Support scope and response commitments apply only where set out in a written agreement.',
                  ],
                  [
                    'Incident process',
                    'Report to security@originary.xyz. Reports are acknowledged within 5 business days and triaged by severity.',
                  ],
                  [
                    'Responsible contact',
                    'security@originary.xyz for security, privacy@originary.xyz for data requests, contact@originary.xyz for everything else.',
                  ],
                  [
                    'Evidence',
                    'The security page, the privacy policy, and the public repository at github.com/peacprotocol/peac.',
                  ],
                ]}
              />
            </div>
            <p style={{ ...proseStyle, fontSize: 13, marginTop: 12 }}>
              Each row states the current position rather than a roadmap commitment. If your review needs something not
              listed here, contact us and we will answer it directly.
            </p>
          </div>

          <div>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              interoperability
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>What composes with PEAC, and how far it goes.</h2>
            <p style={{ ...proseStyle, marginTop: 10 }}>
              Each row states what actually exists in the open repository at {FACTS.currentVersion}. A shipped adapter or
              mapping is code you can read and run; a documented composition is a written mapping with conformance
              vectors; an example is a runnable demonstration. Nothing is listed without an artifact behind it.
            </p>
            <div style={{ marginTop: 18 }}>
              <DataTable
                head={['System', 'Status', 'Evidence in the repository']}
                rows={[
                  ['MCP', 'shipped_mapping', 'packages/mappings/mcp, packages/mcp-server, examples/mcp-gateway-receipts'],
                  ['x402', 'shipped_adapter', 'packages/adapters/x402, examples/x402-paid-resource-records'],
                  ['OpenTelemetry', 'shipped_adapter', 'packages/telemetry-otel, docs/guides/telemetry-otel-correlation.md'],
                  ['A2A', 'shipped_mapping', 'packages/mappings/a2a, examples/a2a-gateway-pattern'],
                  ['MPP / paymentauth', 'shipped_mapping', 'packages/mappings/paymentauth, examples/mpp-payment-record'],
                  ['UCP', 'shipped_mapping', 'packages/mappings/ucp, examples/ucp-webhook-express'],
                  ['ACP', 'shipped_mapping', 'packages/mappings/acp, examples/acp-session-lifecycle'],
                  ['AP2', 'documented_composition', 'docs/specs/AP2-COMPOSITION.md, specs/conformance/interop/ap2-open-mandate-hash'],
                  ['Stripe', 'documented_composition', 'docs/interop/SIGNED-RECORDS-INTEROP-MATRIX.md, integrator-kits/stripe-projects'],
                  ['Cloudflare', 'example', 'surfaces/workers/cloudflare, examples/cf-policy-x402-terms'],
                ]}
              />
            </div>
            <p style={{ ...proseStyle, fontSize: 13, marginTop: 12 }}>
              <strong style={{ color: PALETTE.ink }}>
                No partnership, certification, or endorsement is implied.
              </strong>{' '}
              These are interoperability surfaces PEAC composes with, not relationships with the organizations behind
              them. Product names, logos, and brands belong to their respective owners. Each row is verifiable at{' '}
              <a
                href="https://github.com/peacprotocol/peac"
                style={{ color: PALETTE.ink, textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                github.com/peacprotocol/peac
              </a>
              , and the dated per-row detail lives in that repository&apos;s interop matrix.
            </p>
          </div>

          <Card padding={28}>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              verification model
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>Verification model</h2>
            <p style={proseStyle}>
              Every interaction record is a signed JSON Web Signature (JWS). When a record is issued, the issuer signs
              the claims payload with their private key. Any verifier, your code, a third-party auditor, or an offline
              script, can verify the signature using the issuer&apos;s published public key.
            </p>
            <p style={proseStyle}>
              Verification does not call Originary. After issuer key resolution, records can be verified locally or
              offline according to the verifier&apos;s cache, expiry, and revocation policy. In explicit-resolution mode
              the verifier retrieves the issuer&apos;s published JWKS once, only when the caller authorizes it, then
              validates signatures locally; strict offline mode takes a supplied key and performs no network request. If the
              issuer is temporarily unreachable, verifiers may use previously cached public keys. The signed record
              carries the fields needed to confirm what happened, when, and who attested to it.
            </p>
            <KeyPoint>
              Records are portable; verification also requires trusted issuer key material. In strict offline mode
              that key is supplied and there is no network request; in explicit-resolution mode the caller authorizes
              the JWKS fetch. No mode calls back to Originary.
            </KeyPoint>
          </Card>

          <div>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              the boundary
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12, marginBottom: 20 }}>
              What a verified record does and does not establish.
            </h2>
            <VerificationBoundary />
          </div>

          <Card padding={28}>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              cryptography
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>Cryptography and key management</h2>
            <p style={proseStyle}>
              PEAC uses Ed25519, a widely deployed modern signature scheme standardized in RFC 8032. Keys are compact
              (32-byte public keys) and verification is fast.
            </p>
            <p style={proseStyle}>
              You bring your own keys. Generate and store signing keys under infrastructure you control, using an
              Ed25519-compatible KMS or HSM where appropriate. In the current self-hosted workflow, Originary does not
              receive or store private signing keys. Issuers distribute public keys through infrastructure they control
              or out of band; the documented Originary verification flow uses a public key supplied by the verifier.
            </p>
            <KeyPoint>Ed25519 only. Bring-your-own keys. In the self-hosted workflow, Originary does not receive your private signing keys.</KeyPoint>
          </Card>

          <Card padding={28}>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              portability
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>Portability and offline verification</h2>
            <p style={proseStyle}>
              Signed records are standard JWS tokens. They are not stored in a proprietary database or locked to an
              Originary account. You can export them, archive them, move them between systems, or store them in your
              own infrastructure. Any conforming JOSE implementation can check the Ed25519 signature; full PEAC
              validation also checks the PEAC record profile, required fields, and applicable semantic constraints.
            </p>
            <p style={proseStyle}>
              Offline verification works by design. Once you have the issuer&apos;s public key (from their JWKS endpoint
              or cached locally), you can verify any record without network access. There is no license server, no
              token refresh, and no API call required to confirm a signature.
            </p>
            <p style={proseStyle}>
              The PEAC protocol is designed for multiple independent implementations. Your records are not tied to
              Originary&apos;s software. Any conformant implementation can issue, verify, and process the same records.
            </p>
            <KeyPoint>Standard JWS format. Verify offline with cached keys. No vendor lock-in. Records are yours.</KeyPoint>
          </Card>

          <Card padding={28}>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              data boundaries
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>Data handling boundaries</h2>
            <p style={proseStyle}>
              Originary&apos;s tooling operates locally by default. The signing libraries, verification functions, and
              protocol SDK run in your environment. They do not send interaction data, record contents, or business
              payloads to Originary servers.
            </p>
            <div
              className="home-trust-boundary-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 16,
                margin: '24px 0',
              }}
            >
              <BoundaryCard
                label="Stays in your environment"
                items={[
                  'Private signing keys',
                  'Interaction payloads and business data',
                  'Record contents and claims',
                  'Verification results and decisions',
                ]}
              />
              <BoundaryCard
                label="Published by you"
                items={[
                  'Public keys (JWKS endpoint)',
                  'Issuer configuration (peac-issuer.json)',
                  'Policy metadata (peac.txt)',
                  'Signed records you choose to share',
                ]}
              />
            </div>
            <p style={proseStyle}>
              Originary does not run a hosted verification service, dashboards, or record storage. If you engage
              Originary for a scoped pilot or supported self-host, data handling for that engagement is covered in our{' '}
              <Link href="/privacy" style={linkStyle}>
                Privacy Policy
              </Link>
              .
            </p>
          </Card>

          <Card padding={28}>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              responsible disclosure
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>Responsible disclosure</h2>
            <p style={proseStyle}>
              If you discover a security vulnerability in the PEAC protocol, any Originary product, or this website,
              please report it to{' '}
              <a href="mailto:security@originary.xyz" style={linkStyle}>
                security@originary.xyz
              </a>
              . We acknowledge reports within 5 business days and coordinate fixes before public disclosure.
            </p>
            <p style={proseStyle}>
              Our machine-readable security policy is published at{' '}
              <a href="/.well-known/security.txt" style={linkStyle}>
                /.well-known/security.txt
              </a>{' '}
              per RFC 9116. The PEAC protocol repository accepts security reports through GitHub Security Advisories.
            </p>
            <KeyPoint>
              Report vulnerabilities to security@originary.xyz. We follow responsible disclosure practices with
              coordinated timelines.
            </KeyPoint>
          </Card>

          <Card padding={28}>
            <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              stewardship
            </Mono>
            <h2 style={{ ...headStyle, marginTop: 12 }}>Legal identity and stewardship</h2>
            <p style={proseStyle}>
              Originary&trade; is the software and developer-tools brand of {FACTS.legalEntity}, a Delaware corporation.
              Originary publishes and maintains PEAC Protocol, not its gatekeeper. The protocol specification, reference
              implementation, conformance suite, and all core tooling are published under the {FACTS.license} license.
            </p>
            <p style={proseStyle}>
              Stewardship means we maintain the specification, publish test vectors, and ensure interoperability. It
              does not mean we control who can implement, extend, or build on the protocol. Anyone can build a
              conformant implementation without permission, payment, or partnership with Originary.
            </p>
            <p style={proseStyle}>
              The protocol is designed to reach 1.0 with multiple independent implementations. Our goal is a standard
              that outlasts any single company, including ours.
            </p>
            <KeyPoint>
              {FACTS.legalEntity}, Delaware. PEAC is open source ({FACTS.license}). Stewardship, not gatekeeping.
            </KeyPoint>
          </Card>
        </div>
      </PageSection>

      <PageSection paddingBottom={32}>
        <div style={{ maxWidth: 880, margin: '0 auto 32px auto', textAlign: 'center' }}>
          <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            resources
          </Mono>
          <h2
            style={{
              fontFamily: sans,
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: PALETTE.ink,
              margin: '12px 0 12px 0',
              textWrap: 'balance',
            }}
          >
            Resources and policies
          </h2>
          <p
            style={{
              fontFamily: sans,
              fontSize: 15,
              lineHeight: 1.6,
              color: PALETTE.muted,
              margin: '0 auto',
              maxWidth: 600,
              textWrap: 'pretty',
            }}
          >
            Direct links to policies, specifications, verification endpoints, and corporate information.
          </p>
        </div>

        <div
          className="home-trust-cards"
          style={{
            maxWidth: 880,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: 24,
          }}
        >
          {trustCards.map((c) => (
            <Card key={c.label} padding={28} style={{ height: '100%' }}>
              <Mono size={11} color={PALETTE.faint} style={{ letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                {c.label}
              </Mono>
              <h3 style={{ ...cardTitleStyle, marginTop: 12 }}>{c.title}</h3>
              <p style={cardDescStyle}>{c.description}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {c.links.map((l) =>
                  l.external ? (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: sans,
                        fontSize: 13,
                        fontWeight: 500,
                        color: PALETTE.ink,
                        textDecoration: 'underline',
                        textDecorationColor: 'rgba(20, 17, 10, 0.30)',
                        textUnderlineOffset: 3,
                      }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      key={l.href}
                      href={l.href}
                      style={{
                        fontFamily: sans,
                        fontSize: 13,
                        fontWeight: 500,
                        color: PALETTE.ink,
                        textDecoration: 'underline',
                        textDecorationColor: 'rgba(20, 17, 10, 0.30)',
                        textUnderlineOffset: 3,
                      }}
                    >
                      {l.label}
                    </Link>
                  ),
                )}
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection paddingBottom={112}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: sans,
              fontSize: 15,
              lineHeight: 1.6,
              color: PALETTE.muted,
              margin: '0 0 12px 0',
            }}
          >
            Questions about security, compliance, or verification?
          </p>
          <a
            href="mailto:contact@originary.xyz"
            style={{
              fontFamily: sans,
              fontSize: 18,
              fontWeight: 500,
              color: PALETTE.ink,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(20, 17, 10, 0.30)',
              textUnderlineOffset: 4,
            }}
          >
            contact@originary.xyz
          </a>
        </div>
      </PageSection>
    </PageShell>
  )
}
