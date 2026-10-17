import type { Metadata } from 'next'
import Script from 'next/script'
import { PageShell, PageHero, PageSection, SectionHeading } from '@/components/home'
import { FACTS } from '@/lib/facts'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { ReportCard } from '@/components/heroes/HeroArtifacts'
import { DataTable } from '@/components/specimens/parts'
import './security.css'

export const metadata: Metadata = {
  title: { absolute: 'Security and vulnerability disclosure | Originary' },
  description:
    'Report a vulnerability in Originary software or PEAC Protocol. We acknowledge within 5 business days. Also covers key handling, supply chain and scope.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: '/security' },
  openGraph: {
    title: 'Security | Originary',
    description:
      'Report a vulnerability in Originary software or PEAC Protocol. We acknowledge within 5 business days. Also covers key handling, supply chain and scope.',
    url: '/security',
    siteName: 'Originary',
    images: [{ url: '/og' }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Security | Originary',
    description:
      'Report a vulnerability in Originary software or PEAC Protocol. We acknowledge within 5 business days. Also covers key handling, supply chain and scope.',
    site: '@originaryx',
    creator: '@originaryx',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Security and vulnerability disclosure',
  url: 'https://www.originary.xyz/security',
  dateModified: FACTS.currentReleaseDate,
}

export default function Security() {
  return (
    <>
      <Script id="security-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageJsonLd)}
      </Script>
      <PageShell>
        <Breadcrumbs current="Security" href="/security" />
        <PageHero
          eyebrow="security"
          title="Report a vulnerability."
          sub="Email security@originary.xyz with details and reproduction steps. We acknowledge within 5 business days."
          aside={<ReportCard />}
        />

        <PageSection paddingTop={32} paddingBottom={56}>
          <p className="sec-small">
            Include a description, steps to reproduce, impact, and any proof-of-concept code. We keep you updated and
            agree disclosure timing with you. We will not pursue legal action against researchers who follow this
            policy, act in good faith, avoid privacy harm, and access or modify no more data than testing needs.
          </p>
        </PageSection>

        <PageSection paddingBottom={56}>
          <SectionHeading eyebrow="supported versions" title="Fixes go to the current release." />
          <DataTable
            head={['Version', 'Status']}
            rows={[
              [`PEAC ${FACTS.currentVersion}`, 'Current. Security fixes applied.'],
              ['Earlier releases', 'Not supported. Upgrade to the current release.'],
              ['Runtime', `Node.js ${FACTS.nodeMinVersion} or newer, required for stable Ed25519 in Web Crypto.`],
            ]}
          />
          <p className="sec-small">
            Release history and status are in the{' '}
            <a className="sec-a" href={FACTS.releasesUrl} target="_blank" rel="noopener noreferrer">
              release notes
            </a>
            .
          </p>
        </PageSection>

        <PageSection paddingBottom={56}>
          <SectionHeading
            eyebrow="severity"
            title="Triage by impact."
            sub="Every severity is acknowledged within 5 business days. Fix timelines are set at triage and sent to the reporter."
          />
          <DataTable
            head={['Severity', 'Examples', 'Handling']}
            labelColumnsOnMobile
            rows={[
              ['Critical', 'Signature or verification bypass, key exposure', 'Prioritized immediately at triage.'],
              ['High', 'Integrity or confidentiality impact on a supported path', 'Scheduled promptly.'],
              ['Medium and low', 'Limited or edge-case impact', 'Addressed in a subsequent release.'],
            ]}
          />
        </PageSection>

        <PageSection paddingBottom={56}>
          <SectionHeading eyebrow="posture" title="How it is built." />
          <dl className="sec-rows">
            <div className="sec-row">
              <dt>Verification</dt>
              <dd>
                Offline by design. Signed records use Ed25519 (RFC 8032) and compact JWS (RFC 7515). The supported path
                is strict offline verification: a record plus a supplied public key or JWKS, with no network. Originary
                publishes no issuer key for its own domain and resolves no keys on your behalf.
              </dd>
            </div>
            <div className="sec-row">
              <dt>Keys</dt>
              <dd>
                The self-hosting issuer generates and holds its own Ed25519 keys; custody, rotation and revocation are
                the issuer&apos;s responsibility. Originary runs no signing, verification, key custody or record storage
                as a hosted service today.
              </dd>
            </div>
            <div className="sec-row">
              <dt>Supply chain</dt>
              <dd>
                Packages are published to npm with OIDC trusted publishing and SLSA build provenance. Releases carry
                SSH-signed annotated tags in the public history. Dependency advisories are tracked in the open
                repository, and the build fails on unresolved high-severity advisories in production paths.
              </dd>
            </div>
            <div className="sec-row">
              <dt>Network</dt>
              <dd>
                The supplied-key verification path performs no network fetch and does not dereference URLs in the
                record; URL fields are locator hints. The reference implementation, including its MCP server, is open
                source at github.com/peacprotocol/peac.
              </dd>
            </div>
            <div className="sec-row">
              <dt>Data</dt>
              <dd>
                Examples on this site use selected facts and digests rather than raw request payloads. The documented
                CLI flow runs locally, and the /verify page does not accept record uploads.
              </dd>
            </div>
          </dl>
        </PageSection>

        <PageSection paddingBottom={96}>
          <SectionHeading eyebrow="scope" title="What this policy covers." />
          <div className="sec-cols">
            <div>
              <h3 className="sec-h3">In scope</h3>
              <ul className="sec-list">
                <li>
                  <strong style={{ fontWeight: 500 }}>originary.xyz</strong> and its subdomains
                </li>
                <li>The CLI, packages and code samples Originary publishes</li>
                <li>Infrastructure directly under Originary&apos;s control</li>
              </ul>
            </div>
            <div>
              <h3 className="sec-h3">Acknowledgments</h3>
              <p className="sec-p">
                No reports have been credited yet. Reporters who follow this policy and agree to be named will be listed
                here.
              </p>
            </div>
          </div>
          <p className="sec-small">
            Originary runs no hosted signing, verification, key-custody or record-storage service; those run in the
            issuer&apos;s or verifier&apos;s own environment.{' '}
            <a className="sec-a" href="/trust">
              Trust center
            </a>
            {' · '}
            <a className="sec-a" href="/terms">
              Terms
            </a>
          </p>
        </PageSection>
      </PageShell>
    </>
  )
}
