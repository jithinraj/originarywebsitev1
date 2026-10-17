import type { Metadata } from 'next'
import DownloadsServer from './DownloadsServer'
import DownloadCardPEAC from '@/components/DownloadCardPEAC'
import { FACTS } from '@/lib/facts'
import { ORIGINARY_ORG_ID } from '@/lib/structured-data/entities'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { OriginaryWordmark } from '@/components/brand/OriginaryWordmark'
import { Terminal } from '@/components/specimens/parts'
import './downloads.css'

// The canonical Originary Organization (Poem, Inc.) is defined once, site-wide.
const publisher = { '@id': ORIGINARY_ORG_ID }

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PEAC Protocol',
  brand: { '@type': 'Brand', name: 'Originary' },
  publisher,
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
  publisher,
  codeRepository: 'https://github.com/peacprotocol/peac',
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  programmingLanguage: 'TypeScript',
  version: FACTS.currentVersion.slice(1),
}

export const metadata: Metadata = {
  title: { absolute: 'Originary Downloads | PEAC Protocol software' },
  description:
    'Originary Downloads: PEAC Protocol source code, CLI, SDK packages, MCP server and offline verification tools, published and maintained by Originary.',
  robots: 'index,follow',
  openGraph: {
    title: 'Originary Downloads',
    description:
      'Originary Downloads: PEAC Protocol, open-source software by Originary for portable verification of machine actions.',
    url: '/downloads',
    siteName: 'Originary',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary Downloads' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Downloads',
    description:
      'Originary Downloads: PEAC Protocol, open-source software by Originary for portable verification of machine actions.',
    images: ['/og'],
  },
  alternates: {
    canonical: '/downloads',
  },
}

export default function DownloadsPage() {
  const v = FACTS.currentVersion.replace(/^v/, '')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(peacSourceCodeJsonLd) }} />
      <PageShell>
        <Breadcrumbs current="Originary Downloads" href="/downloads" />
        <PageHero
          eyebrow="open source"
          title="Originary Downloads."
          qualifier="PEAC Protocol, open source."
          sub="Originary™, the software and developer-tools brand of Poem, Inc., publishes and maintains PEAC Protocol as open-source downloadable software. Get the source code, CLI, SDK packages, and verification tooling from the official GitHub repository and package registries."
          aside={<ReleaseCard />}
        >
          <div className="dl-ctas">
            <Button href="#distributions" primary>
              Download
            </Button>
            <Button href="https://github.com/peacprotocol/peac" external>
              View on GitHub
            </Button>
            <Button href="https://www.npmjs.com/package/@peac/cli" external>
              View on npm
            </Button>
          </div>
        </PageHero>

        <PageSection paddingTop={56} paddingBottom={56}>
          <div id="distributions" className="dl-anchor" />
          <SectionHeading
            eyebrow="Originary distributions"
            title="Source code, from the official repository."
            sub="The latest PEAC Protocol source tree and SDKs, as Originary publishes them on GitHub."
          />
          <DownloadsServer />
        </PageSection>

        <PageSection paddingTop={24} paddingBottom={56}>
          <SectionHeading
            eyebrow="install with your package manager"
            title="Or install the packages."
            sub={`Pinned to the current release, ${FACTS.currentVersion}, so what you install matches what is described here.`}
          />
          <div className="dl-install">
            <div>
              <p className="dl-k">Install</p>
              <Terminal
                tone="ink"
                lines={[
                  { kind: 'out', text: `$ npm i -g @peac/cli@${v}` },
                  { kind: 'out', text: `$ npm i @peac/protocol@${v} @peac/crypto@${v} @peac/schema@${v}` },
                  { kind: 'out', text: `$ npm i @peac/mcp-server@${v}` },
                ]}
              />
            </div>
            <div>
              <p className="dl-k">Verify a signed record locally</p>
              <Terminal
                tone="ink"
                lines={[
                  { kind: 'out', text: `$ npx -y @peac/cli@${v} verify ./record.jws \\` },
                  { kind: 'out', text: '    --public-key ./jwks.json' },
                ]}
              />
            </div>
          </div>
          <DownloadCardPEAC />
        </PageSection>

        <PageSection paddingTop={24} paddingBottom={112}>
          <div className="dl-pub">
            <OriginaryWordmark width={132} decorative />
            <div>
              <p className="dl-pub-lead">
                PEAC Protocol is published by Originary and distributed through GitHub under {FACTS.license}.
              </p>
              <p className="dl-pub-body">
                Originary maintains the protocol specification, reference implementation, CLI, SDK packages, and
                verification tooling listed above.
              </p>
              <p className="dl-pub-small">
                Published by Poem, Inc. Contact: <a href="mailto:contact@originary.xyz">contact@originary.xyz</a>.
              </p>
            </div>
          </div>
        </PageSection>
      </PageShell>
    </>
  )
}

/** Hero aside: who publishes the software, and what the current release is. */
function ReleaseCard() {
  const rows: Array<[string, string]> = [
    ['publisher', 'Originary (Poem, Inc.)'],
    ['primary distribution', 'GitHub'],
    ['license', FACTS.license],
    ['current release', `${FACTS.currentVersion} on npm ${FACTS.currentDistTag}`],
    ['current wire format', FACTS.stableWireFormat],
    ['legacy format', FACTS.legacyWireFormat],
  ]
  return (
    <div className="ha-card dl-release" aria-label="Originary Downloads: publisher and current release">
      <div className="dl-release-mark">
        <OriginaryWordmark width={118} />
        <span className="dl-release-tag">Downloads</span>
      </div>
      <dl className="ha-rows ha-rows-wide">
        {rows.map(([k, val]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{val}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
