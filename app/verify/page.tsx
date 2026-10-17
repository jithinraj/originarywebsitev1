import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { FACTS } from '@/lib/facts'
import { InkBand, InkHeading, InkButton, Terminal } from '@/components/specimens/parts'
import { Verifier } from '@/components/specimens/Verifier'

const TITLE = 'Verify an Ed25519 JWS signature online | Originary'
const DESCRIPTION =
  'Paste a compact JWS and a public key (JWK or JWKS) to check its Ed25519 signature in your browser. Nothing is uploaded. The PEAC CLI runs full offline checks.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/verify' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/verify',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary offline verification guide' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.originary.xyz/verify#webpage',
      url: 'https://www.originary.xyz/verify',
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': 'https://www.originary.xyz/#website' },
      breadcrumb: { '@id': 'https://www.originary.xyz/verify#breadcrumb' },
    },
  ],
}

const PROFILE: Array<{ name: string; ref: string; body: string }> = [
  { name: 'Offline, by public key', ref: 'no network', body: "Only the issuer's public key is needed. Nothing is fetched, and no account is required." },
  { name: 'Ed25519 over compact JWS', ref: 'RFC 8032 \u00B7 RFC 7515', body: 'Checked with a small-order key denylist. Runtimes without stable Ed25519 fail closed.' },
  { name: 'Deterministic input', ref: 'RFC 7493 (I-JSON)', body: 'Duplicate members, out-of-range numbers and invalid strings are rejected, so every verifier reads the same bytes the same way.' },
  { name: 'Optional replay guard', ref: 'opt-in', body: 'Classifies a verified record as fresh, replayed or outside its acceptance window.' },
  { name: 'HTTP Message Signatures', ref: 'RFC 9421 \u00B7 RFC 9530', body: 'For request-shaped flows, with content digests over the raw body bytes.' },
  { name: 'Inclusion proofs', ref: 'set commitment', body: 'Confirm a record belongs to a sealed run without re-checking every other record.' },
]

export default function VerifyPage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <PageShell>
      <Breadcrumbs current="Verify a record" href="/verify" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Verify a record"
        title="Verify a signed record in your browser."
        sub="Paste a PEAC record and the public key you expect. The signature is checked in your browser, and nothing is uploaded."
      />

      <PageSection paddingTop={8} paddingBottom={72}>
        <div id="console" style={{ scrollMarginTop: 96 }}>
          <Verifier />
        </div>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={72}>
        <div className="vf-cli">
          <SectionHeading
            eyebrow="Full verification"
            title="Run the full profile with the CLI."
            sub="The browser checks the signature. The PEAC CLI also checks the input rules and record structure, offline, under the key you supply."
          />
          <Terminal
            tone="ink"
            lines={[
              { kind: 'out', text: `$ pnpm dlx @peac/cli@${v} samples generate -o ./s` },
              { kind: 'out', text: `$ pnpm dlx @peac/cli@${v} verify ./s/valid/basic-record.jws --public-key ./s/bundles/sandbox-jwks.json` },
              { kind: 'ok', text: 'Signature valid (offline).' },
            ]}
          />
        </div>
      </PageSection>

      <PageSection paddingTop={0} paddingBottom={96}>
        <SectionHeading eyebrow="Verification profile" title={`What PEAC ${FACTS.currentVersion} checks.`} />
        <dl className="vf-profile">
          {PROFILE.map((c) => (
            <div key={c.name}>
              <dt>
                <span className="vf-profile-name">{c.name}</span>
                <span className="vf-profile-ref">{c.ref}</span>
              </dt>
              <dd>{c.body}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <InkBand>
        <InkHeading maxWidth="24ch">Send someone a record, and they can verify it here.</InkHeading>
        <div style={{ marginTop: 30, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <InkButton href="/contact" primary>
            Start a pilot
          </InkButton>
          <InkButton href="/records">Browse sample records</InkButton>
        </div>
      </InkBand>
    </PageShell>
  )
}
