import type { Metadata } from 'next'
import Script from 'next/script'
import DownloadsServer from './DownloadsServer'
import DownloadCardPEAC from '@/components/DownloadCardPEAC'
import { FACTS } from '@/lib/facts'
import {
  PageShell,
  PageHero,
  PageSection,
  Card,
  Button,
  PALETTE,
} from '@/components/home'
import { Mono } from '@/components/home/atoms/Mono'

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PEAC Protocol',
  operatingSystem: 'Windows, macOS, Linux',
  applicationCategory: 'DeveloperApplication',
  downloadUrl: 'https://www.originary.xyz/downloads/',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

const peacSourceCodeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'PEAC Protocol',
  codeRepository: 'https://github.com/peacprotocol/peac',
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  programmingLanguage: 'TypeScript',
  version: FACTS.currentVersion.slice(1),
}

export const metadata: Metadata = {
  title: { absolute: 'Downloads | Originary' },
  description:
    'Download PEAC Protocol by Originary: open-source software for portable verification of machine actions. Source code, CLI, SDK packages, and tooling.',
  robots: 'index,follow',
  openGraph: {
    title: 'Downloads | Originary',
    description:
      'Download PEAC Protocol by Originary: open-source software for portable verification of machine actions.',
    url: '/downloads',
    siteName: 'Originary',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Downloads | Originary' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downloads | Originary',
    description:
      'Download PEAC Protocol by Originary: open-source software for portable verification of machine actions.',
    images: ['/og'],
  },
  alternates: {
    canonical: '/downloads',
  },
}

const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'
const mono = 'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, monospace'

export default function DownloadsPage() {
  return (
    <>
      <Script
        id="software-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(softwareJsonLd)}
      </Script>
      <Script
        id="peac-source-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(peacSourceCodeJsonLd)}
      </Script>
      <PageShell>
        <PageHero
          eyebrow="open source"
          title="Download PEAC Protocol"
          byline="by Originary"
          sub="PEAC Protocol is open-source downloadable software published and maintained by Originary. Get the source code, CLI, SDK packages, and verification tooling from the public GitHub repository and package registries."
          align="center"
        >
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button href="https://github.com/peacprotocol/peac" external primary>
              View on GitHub
            </Button>
            <Button href="https://www.npmjs.com/package/@peac/cli" external>
              View on npm
            </Button>
          </div>
        </PageHero>

        <PageSection paddingTop={16} paddingBottom={48}>
          <div
            style={{
              maxWidth: 760,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 0,
              border: `1px solid ${PALETTE.hairline}`,
              background: PALETTE.paper,
            }}
          >
            <DownloadFact label="publisher" value="Originary (Poem, Inc.)" />
            <DownloadFact label="primary distribution" value="GitHub" border />
            <DownloadFact label="license" value={FACTS.license} border />
          </div>
          <div
            style={{
              maxWidth: 760,
              margin: '20px auto 0 auto',
              padding: '16px 20px',
              fontFamily: mono,
              fontSize: 12,
              color: PALETTE.muted,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 18,
              borderTop: `1px solid ${PALETTE.hairline}`,
            }}
          >
            <span>
              <strong style={{ color: PALETTE.ink }}>Current release:</strong>{' '}
              {FACTS.currentVersion} on npm {FACTS.currentDistTag}
            </span>
            <span style={{ color: PALETTE.faint }}>·</span>
            <span>
              <strong style={{ color: PALETTE.ink }}>Current wire format:</strong>{' '}
              {FACTS.stableWireFormat}
            </span>
            <span style={{ color: PALETTE.faint }}>·</span>
            <span>
              <strong style={{ color: PALETTE.ink }}>Legacy format:</strong>{' '}
              {FACTS.legacyWireFormat}
            </span>
          </div>
        </PageSection>

        <PageSection paddingBottom={48}>
          <Card padding={32} style={{ maxWidth: 760, margin: '0 auto' }}>
            <Mono
              size={11}
              color={PALETTE.muted}
              style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              install with your package manager
            </Mono>
            <pre className="home-code" style={{ marginTop: 12, marginBottom: 0 }}>
{`npm i -g @peac/cli
npm i @peac/protocol @peac/crypto @peac/schema
npm i @peac/mcp-server`}
            </pre>
            <div
              style={{
                marginTop: 18,
                fontFamily: sans,
                fontSize: 13,
                lineHeight: 1.6,
                color: PALETTE.muted,
              }}
            >
              Verify a signed record locally:
            </div>
            <pre className="home-code" style={{ marginTop: 8, marginBottom: 0 }}>
{`npx -y @peac/cli@0.16.2 verify ./record.jws --public-key ./jwks.json`}
            </pre>
          </Card>
        </PageSection>

        <PageSection paddingBottom={48}>
          <div
            className="home-downloads-scope"
            style={{ maxWidth: 760, margin: '0 auto' }}
          >
            <Mono
              size={11}
              color={PALETTE.muted}
              style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              available distributions
            </Mono>
            <div style={{ marginTop: 16 }}>
              <DownloadsServer />
            </div>
            <div style={{ marginTop: 16 }}>
              <DownloadCardPEAC />
            </div>
          </div>
        </PageSection>

        <PageSection paddingBottom={112}>
          <Card padding={28} style={{ maxWidth: 760, margin: '0 auto' }}>
            <p
              style={{
                fontFamily: sans,
                fontSize: 14,
                lineHeight: 1.65,
                color: PALETTE.muted,
                margin: 0,
              }}
            >
              <strong style={{ color: PALETTE.ink }}>
                PEAC Protocol is published by Originary and distributed through GitHub under {FACTS.license}.
              </strong>{' '}
              Originary maintains the protocol specification, reference implementation, CLI, SDK packages, and verification tooling listed above.
            </p>
            <p
              style={{
                fontFamily: sans,
                fontSize: 13,
                lineHeight: 1.65,
                color: PALETTE.faint,
                margin: '18px 0 0 0',
              }}
            >
              Published by Poem, Inc. Contact:{' '}
              <a
                href="mailto:contact@originary.xyz"
                style={{
                  color: PALETTE.ink,
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(20, 17, 10, 0.30)',
                  textUnderlineOffset: 3,
                }}
              >
                contact@originary.xyz
              </a>
              .
            </p>
          </Card>
        </PageSection>
      </PageShell>
    </>
  )
}

function DownloadFact({
  label,
  value,
  border,
}: {
  label: string
  value: string
  border?: boolean
}) {
  return (
    <div
      style={{
        padding: '20px 24px',
        borderLeft: border ? `1px solid ${PALETTE.hairline}` : 'none',
      }}
    >
      <Mono
        size={10}
        color={PALETTE.faint}
        style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
      >
        {label}
      </Mono>
      <div
        style={{
          fontFamily: sans,
          fontSize: 16,
          fontWeight: 500,
          color: PALETTE.ink,
          marginTop: 8,
          letterSpacing: '-0.005em',
        }}
      >
        {value}
      </div>
    </div>
  )
}
