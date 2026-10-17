import type { Metadata } from 'next'
import Link from 'next/link'
import { FACTS } from '@/lib/facts'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home'
import { DataTable } from '@/components/specimens/parts'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { TrustGlance } from '@/components/heroes/HeroArtifacts'
import './trust.css'

export const metadata: Metadata = {
  title: { absolute: 'Trust center: keys, data and security | Originary' },
  description:
    'Where Originary stands today on key custody, hosting, data processing, retention, subprocessors, supply chain, certifications and vulnerability disclosure.',
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

const REPO_TREE = `https://github.com/peacprotocol/peac/tree/${FACTS.currentVersion}/`
const REPO_BLOB = `https://github.com/peacprotocol/peac/blob/${FACTS.currentVersion}/`
// Files link to /blob/, folders to /tree/, so no link goes through a redirect.
const repoHref = (p: string) => (/\.[a-z0-9]+$/i.test(p) ? REPO_BLOB : REPO_TREE) + p

function Evidence({ paths }: { paths: string[] }) {
  return (
    <span className="tr-mono">
      {paths.map((p, i) => (
        <span key={p}>
          {i > 0 ? <br /> : null}
          <a className="tr-a" href={repoHref(p)} target="_blank" rel="noopener noreferrer">
            {p}
          </a>
        </span>
      ))}
    </span>
  )
}

function L({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return external ? (
    <a className="tr-a" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link className="tr-a" href={href}>
      {children}
    </Link>
  )
}

const interop: Array<[string, string, string[]]> = [
  ['MCP', 'Shipped mapping', ['packages/mappings/mcp', 'packages/mcp-server', 'examples/mcp-gateway-receipts']],
  ['x402', 'Shipped adapter', ['packages/adapters/x402', 'examples/x402-paid-resource-records']],
  ['OpenTelemetry', 'Shipped adapter', ['packages/telemetry-otel', 'docs/guides/telemetry-otel-correlation.md']],
  ['A2A', 'Shipped mapping', ['packages/mappings/a2a', 'examples/a2a-gateway-pattern']],
  ['MPP / paymentauth', 'Shipped mapping', ['packages/mappings/paymentauth', 'examples/mpp-payment-record']],
  ['UCP', 'Shipped mapping', ['packages/mappings/ucp', 'examples/ucp-webhook-express']],
  ['ACP', 'Shipped mapping', ['packages/mappings/acp', 'examples/acp-session-lifecycle']],
  ['AP2', 'Written composition', ['docs/specs/AP2-COMPOSITION.md', 'specs/conformance/interop/ap2-open-mandate-hash']],
  ['Stripe', 'Written composition', ['docs/interop/SIGNED-RECORDS-INTEROP-MATRIX.md', 'integrator-kits/stripe-projects']],
  ['Cloudflare', 'Example', ['surfaces/workers/cloudflare', 'examples/cf-policy-x402-terms']],
]

export default function TrustPage() {
  return (
    <PageShell>
      <Breadcrumbs current="Trust center" href="/trust" />
      <PageHero
        eyebrow="trust center"
        title="Where your keys, data and records live."
        sub="Key custody, network, data, retention and support, stated as current positions rather than roadmap."
        aside={
          <TrustGlance
            items={[
              ['Hosting', 'None', 'Self-hosted. Originary runs no verification service.'],
              ['Key custody', 'Yours', 'Local or your KMS. Originary never holds signing keys.'],
              ['Certifications', 'None claimed', 'No SOC 2 or ISO 27001 audit has been completed.'],
              ['Disclosure', '5 business days', 'To acknowledge a security report.'],
            ]}
          />
        }
      >
        <Button href="/contact" primary>
          Start a pilot
        </Button>
      </PageHero>


      <PageSection paddingBottom={64}>
        <SectionHeading eyebrow="procurement" title="Answers your review team will ask for." />
        <DataTable
          head={['Procurement fact', 'Current position']}
          rows={[
            [
              'Hosting mode',
              <>
                Self-hosted. The software runs in your infrastructure; Originary operates no hosted verification
                service. <L href="/pricing">Deployment options</L>.
              </>,
            ],
            [
              'Key custody',
              <>
                Yours. The issuer generates and holds its Ed25519 keys locally or in your KMS. Originary never holds
                signing keys. <L href="/security">Key management</L>.
              </>,
            ],
            [
              'Data processed by Originary',
              <>
                None from verification, which runs in your environment. Website only: consent-gated analytics and what
                you send through the contact form. <L href="/privacy">Privacy policy</L>.
              </>,
            ],
            [
              'Retention',
              <>
                Website data is kept only as long as needed for the stated purpose and legal obligations, then deleted
                or anonymized. <L href="/privacy">Privacy policy</L>.
              </>,
            ],
            [
              'Subprocessors',
              <>
                Processors for hosting, payments, and support under contractual safeguards. Some support operations are
                performed by an India affiliate under SCCs and DPAs. <L href="/privacy">Privacy policy</L>.
              </>,
            ],
            [
              'Data residency',
              <>
                Not applicable to verification, which never leaves your environment. Website processing may occur
                outside your country with the safeguards described in the <L href="/privacy">privacy policy</L>.
              </>,
            ],
            [
              'Supply chain',
              <>
                npm packages use OIDC trusted publishing and SLSA build provenance; releases carry SSH-signed annotated
                tags. <L href="/security">Supply-chain posture</L>.
              </>,
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
              <>
                Report to <L href="mailto:security@originary.xyz">security@originary.xyz</L>. Reports are acknowledged
                within 5 business days and triaged by severity. <L href="/security">Disclosure policy</L>,{' '}
                <L href="/.well-known/security.txt" external>
                  security.txt
                </L>
                .
              </>,
            ],
            [
              'Responsible contact',
              <>
                <L href="mailto:security@originary.xyz">security@originary.xyz</L> for security,{' '}
                <L href="mailto:privacy@originary.xyz">privacy@originary.xyz</L> for data requests,{' '}
                <L href="mailto:contact@originary.xyz">contact@originary.xyz</L> for everything else.
              </>,
            ],
            [
              'Evidence',
              <>
                <L href="/security">Security</L>, <L href="/privacy">privacy policy</L>, and the{' '}
                <L href="https://github.com/peacprotocol/peac" external>
                  public repository
                </L>
                .
              </>,
            ],
          ]}
        />
        <p className="tr-small">
          Each row states the current position, not a roadmap commitment. If your review needs something not listed
          here, <L href="/contact">contact us</L> and we will answer it directly.
        </p>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="interoperability"
          title="What composes with PEAC, and how far it goes."
          sub={`Each row states what exists in the open repository at ${FACTS.currentVersion}. A shipped adapter or mapping is code you can read and run; a written composition is a mapping with conformance vectors; an example is a runnable demonstration.`}
        />
        <DataTable
          head={['System', 'Status', 'Evidence in the repository']}
          labelColumnsOnMobile
          rows={interop.map(([name, status, paths]) => [name, status, <Evidence key={name} paths={paths} />])}
        />
        <p className="tr-small">
          <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>
            No partnership, certification, or endorsement is implied.
          </strong>{' '}
          These are interoperability surfaces PEAC composes with, not relationships with the organizations behind them.
          Product names, logos, and brands belong to their respective owners. Dated per-row detail lives in the
          repository&apos;s interop matrix.
        </p>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading eyebrow="verification" title="How verification works." />
        <div className="tr-cols">
          <div>
            <h3 className="tr-h3">Verifying a record</h3>
            <p className="tr-p">
              Every interaction record is a signed JSON Web Signature (JWS). The issuer signs the claims with a private
              key; any verifier checks the signature against the issuer&apos;s public key. Any conforming JOSE
              implementation can check the signature; full PEAC validation also checks the record profile and required
              fields.
            </p>
            <p className="tr-p">
              Verification does not call Originary. In strict offline mode the key is supplied and there is no network
              request. In explicit-resolution mode the caller authorizes a single JWKS fetch, then validates locally.
              Verification also depends on trusted issuer key material and on the verifier&apos;s cache, expiry, and
              revocation policy.
            </p>
          </div>
          <div>
            <h3 className="tr-h3">Cryptography and keys</h3>
            <p className="tr-p">
              Ed25519 only, standardized in RFC 8032, with compact 32-byte public keys. You bring your own keys, under
              infrastructure you control, using an Ed25519-compatible KMS or HSM where appropriate. In the self-hosted
              workflow Originary does not receive or store private signing keys.
            </p>
            <p className="tr-p">
              Records are standard JWS tokens, not stored in a proprietary database or tied to an Originary account. You
              can export, archive and move them. The protocol is designed for multiple independent implementations.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading
          eyebrow="data boundaries"
          title="What stays with you, and what you publish."
          sub="The signing libraries, verification functions and SDK run in your environment. They do not send interaction data, record contents or business payloads to Originary."
        />
        <div className="tr-cols">
          <div>
            <h3 className="tr-h3">Stays in your environment</h3>
            <ul className="tr-list">
              <li>Private signing keys</li>
              <li>Interaction payloads and business data</li>
              <li>Record contents and claims</li>
              <li>Verification results and decisions</li>
            </ul>
          </div>
          <div>
            <h3 className="tr-h3">Published by you</h3>
            <ul className="tr-list">
              <li>Public keys (JWKS endpoint)</li>
              <li>Issuer configuration (peac-issuer.json)</li>
              <li>Policy metadata (peac.txt)</li>
              <li>Signed records you choose to share</li>
            </ul>
          </div>
        </div>
        <p className="tr-small">
          Originary does not run hosted verification, dashboards, or record storage. Data handling for a scoped pilot or
          supported self-host is covered in the <L href="/privacy">Privacy Policy</L>.
        </p>
      </PageSection>

      <PageSection paddingBottom={64}>
        <SectionHeading eyebrow="stewardship" title="Legal identity and stewardship." />
        <p className="tr-p">
          Originary&trade; is the software and developer-tools brand of {FACTS.legalEntity}, a Delaware corporation.
          Originary publishes and maintains PEAC Protocol, not its gatekeeper. The protocol specification, reference
          implementation, conformance suite, and all core tooling are published under the {FACTS.license} license.
        </p>
        <p className="tr-p">
          Stewardship means we maintain the specification, publish test vectors, and ensure interoperability. It
          does not mean we control who can implement, extend, or build on the protocol. Anyone can build a
          conformant implementation without permission, payment, or partnership with Originary.
        </p>
      </PageSection>

      <PageSection paddingBottom={96}>
        <SectionHeading eyebrow="resources" title="Policies and specifications." />
        <ul className="tr-links">
          <li><L href="/security">Security</L></li>
          <li><L href="/privacy">Privacy</L></li>
          <li><L href="/terms">Terms</L></li>
          <li><L href="/trademark">Trademark</L></li>
          <li><L href="/verify">Verify locally</L></li>
          <li><L href="/records">Record gallery</L></li>
          <li><L href="/peac">PEAC Protocol</L></li>
          <li><L href="/.well-known/peac.txt" external>peac.txt</L></li>
          <li><L href="/.well-known/aipref.json" external>aipref.json</L></li>
          <li>
            <L href="https://github.com/peacprotocol/peac/tree/main/specs/conformance" external>
              Conformance suite
            </L>
          </li>
          <li>
            <L href="https://github.com/peacprotocol/peac/security" external>
              GitHub Security Advisories
            </L>
          </li>
        </ul>
        <p className="tr-small">
          Questions about security, compliance or verification: <L href="mailto:contact@originary.xyz">contact@originary.xyz</L>
        </p>
      </PageSection>
    </PageShell>
  )
}
