import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import { BrandTiles } from '@/components/heroes/BrandTiles'
import { PALETTE } from '@/components/home/palette'
import { FACTS } from '@/lib/facts'
import { PUBLIC_IDENTITY } from '@/lib/public-identity'
import { DataTable, MarkerList } from '@/components/specimens/parts'
import { CopyButton } from './CopyButton'
import './press.css'

const TITLE = 'Press kit | Originary'
const DESCRIPTION =
  'Originary press kit: quotable boilerplate, fast facts, current release metrics, founder appearances, brand assets, and media contact.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/press' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.originary.xyz/press',
    type: 'website',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary press kit' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og'] },
}

const BOILERPLATE_50 =
  `Originary™ is Poem, Inc.'s software and developer-tools brand. Through Originary, Poem publishes and maintains PEAC Protocol and develops Originary Verify, software for issuing, verifying, and packaging signed records of machine actions across organizational boundaries.`

const BOILERPLATE_120 =
  'Originary develops verifiable infrastructure for machine actions. Originary Verify helps teams issue, inspect, and package signed records when APIs, agents, MCP tools, gateways, payment flows, and provisioning systems act. Those records can be verified by another party without access to the original private logs or dashboards. Originary Verify is built on PEAC Protocol, an Apache-2.0 open-source protocol project published and maintained by Originary. Originary™ is the software and developer-tools brand of Poem, Inc., a Delaware corporation.'

function DL({ items }: { items: Array<[string, string]> }) {
  return (
    <span className="pr-dl">
      {items.map(([label, href]) => (
        <a key={href} className="pr-a" href={href} download aria-label={`${label}, download`}>
          {label}
        </a>
      ))}
    </span>
  )
}

const WM = '/brand/wordmark/originary-wordmark'
const WMR = '/brand/wordmark/originary-wordmark-reverse'
const AI = '/brand/app-icon/originary-app-icon'
const sizes = [240, 800, 1200, 2400, 3840]

export default function PressPage() {
  return (
    <PageShell>
      <Breadcrumbs current="Press kit" href="/press" />
      <PageHero
        eyebrow="Press"
        title="Press kit"
        sub="Working on a story about verifiable records for AI and agents? You can quote the descriptions, use the current facts and download the logo below. We are glad to fact-check a draft before you publish."
        aside={<BrandTiles />}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="mailto:contact@originary.xyz?subject=Press" primary>
            Email the team
          </Button>
          <Button href="/brand/originary-brand-kit-v17-2026-10-12-cobalt.zip">Download the brand kit</Button>
        </div>
      </PageHero>

      <PageSection paddingTop={48} paddingBottom={56}>
        <SectionHeading eyebrow="At a glance" title="The fast facts." />
        <DataTable
          head={['Fact', 'Detail']}
          rows={[
            ['What it is', 'Verifiable, portable signed records of machine actions across organizational boundaries.'],
            [
              'On the web',
              <>
                <a className="pr-a" href={`https://${FACTS.domain}`}>
                  {FACTS.domain}
                </a>
                {' and '}
                <a className="pr-a" href={`https://${FACTS.protocolDomain}`}>
                  {FACTS.protocolDomain}
                </a>
              </>,
            ],
            [
              'Press contact',
              <a key="m" className="pr-a" href="mailto:contact@originary.xyz?subject=Press">
                contact@originary.xyz
              </a>,
            ],
          ]}
        />
      </PageSection>

      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading
          eyebrow="Who is who"
          title="Originary and PEAC Protocol."
          sub="The short version, so the names in your story land right. Poem, Inc. is the Delaware corporation; Originary is its software and developer-tools brand. Through Originary, Poem publishes PEAC Protocol and develops Originary Verify. PEAC Protocol is Apache-2.0, independently implementable, and self-hostable; verification does not depend on an Originary-hosted service."
        />
        <DataTable
          head={['Name', 'Role', 'Status']}
          rows={[
            [
              PUBLIC_IDENTITY.legalEntity,
              'Legal entity that owns and operates the Originary business',
              'Delaware corporation',
            ],
            [
              `${PUBLIC_IDENTITY.brand}™`,
              'Software and developer-tools brand through which Poem publishes PEAC and offers Originary Verify',
              `Trademark of ${PUBLIC_IDENTITY.legalEntity}`,
            ],
            [
              PUBLIC_IDENTITY.product,
              'Commercial software offering under the Originary brand',
              'Supported/self-hosted offering',
            ],
            [
              PUBLIC_IDENTITY.protocol,
              'Open-source software and protocol project published and maintained by Originary',
              `${PUBLIC_IDENTITY.protocolLicense}; independently implementable`,
            ],
          ]}
        />
      </PageSection>

      <PageSection paddingBottom={56}>
        <SectionHeading
          eyebrow="Boilerplate"
          title="Descriptions you can quote."
          sub="Copy either straight into your piece. No permission needed, no attribution required."
        />
        <div className="pr-bp">
          <div>
            <p className="pr-cap" style={{ marginTop: 0, marginBottom: 8 }}>Short</p>
            <p>{BOILERPLATE_50}</p>
          </div>
          <CopyButton text={BOILERPLATE_50} label="short" />
        </div>
        <div className="pr-bp">
          <div>
            <p className="pr-cap" style={{ marginTop: 0, marginBottom: 8 }}>Extended</p>
            <p>{BOILERPLATE_120}</p>
          </div>
          <CopyButton text={BOILERPLATE_120} label="extended" />
        </div>
      </PageSection>

      <PageSection paddingBottom={56}>
        <SectionHeading
          eyebrow="Appearances"
          title="Founder talks and media."
          sub="The Originary founder is available for interviews and comment."
        />
        <MarkerList
          marker="number"
          items={[
            <>
              <b style={{ fontWeight: 600 }}>CNBC-TV18, India AI Impact Summit 2026:</b>{' '}
              <a className="pr-a" href="https://www.youtube.com/watch?v=jaNuIGwAges">
                In conversation with the founder of Originary
              </a>{' '}
              (February 2026).
            </>,
            <>
              <b style={{ fontWeight: 600 }}>MCP Dev Summit Mumbai 2026:</b>{' '}
              <a className="pr-a" href="https://mcpmumbai26.sched.com/event/2PGqX/when-logs-arent-enough-portable-signed-records-for-mcp-tool-calls-jithin-raj-originary">
                Originary founder&rsquo;s talk, When Logs Aren&rsquo;t Enough: Portable Signed Records for MCP Tool Calls
              </a>{' '}
              (June 2026).
            </>,
            <>
              <b style={{ fontWeight: 600 }}>KubeCon + CloudNativeCon India 2026:</b>{' '}
              <a className="pr-a" href="https://kccncind2026.sched.com/event/2IW34/cl-lightning-talk-one-header-portable-proof-peac-receipts-for-k8s-apis-jithin-raj-originary">
                Originary founder&rsquo;s lightning talk, One Header, Portable Proof: PEAC Receipts for K8s APIs
              </a>{' '}
              (June 2026).
            </>,
          ]}
        />
      </PageSection>

      <PageSection paddingBottom={56}>
        <SectionHeading
          eyebrow="Current metrics"
          title={'As of PEAC ' + FACTS.currentVersion + '.'}
          sub="Generated from the release facts registry; they update with each public release."
        />
        <DataTable
          head={['Metric', 'Value']}
          rows={[
            ['Current release', FACTS.currentVersion + ' "' + FACTS.releaseName + '" (' + FACTS.currentReleaseDate + ')'],
            ['Tests', FACTS.testsCount.toLocaleString('en-US') + ' across ' + FACTS.testFilesCount + ' files'],
            ['Conformance checks', String(FACTS.conformanceRequirements)],
            ['Packages on npm', String(FACTS.publishedPackageCount)],
            ['License', FACTS.license],
            ['Wire format', FACTS.currentTyp + ' (Wire 0.2)'],
          ]}
        />
      </PageSection>

      <PageSection paddingBottom={96}>
        <SectionHeading
          eyebrow="Brand"
          title="Names and the logo."
          sub="Write Originary with a capital O, and spell out PEAC Protocol on first mention. The wordmark is the primary mark."
        />
        <div className="pr-specimens">
          <figure>
            {/* A specimen of the wordmark on light: stays white in both themes. */}
            <div className="pr-spec" style={{ background: 'var(--grey-0)', border: '1px solid var(--grey-100)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${WM}.svg`} alt="The Originary wordmark" width={200} height={51} />
            </div>
            <figcaption className="pr-cap">On light</figcaption>
          </figure>
          <figure>
            <div className="pr-spec" style={{ background: PALETTE.surfaceDark, border: `1px solid ${PALETTE.surfaceDark}` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${WMR}.svg`} alt="The Originary wordmark for dark backgrounds" width={200} height={51} />
            </div>
            <figcaption className="pr-cap">On dark</figcaption>
          </figure>
        </div>
        <DataTable
          head={['Asset', 'Vector', 'PNG (width in px)']}
          labelColumnsOnMobile
          rows={[
            [
              'Wordmark',
              <DL key="a" items={[['SVG', `${WM}.svg`]]} />,
              <DL key="b" items={sizes.map((n): [string, string] => [String(n), `${WM}-${n}w.png`])} />,
            ],
            [
              'Wordmark, dark backgrounds',
              <DL key="a" items={[['SVG', `${WMR}.svg`]]} />,
              <DL key="b" items={sizes.map((n): [string, string] => [String(n), `${WMR}-${n}w.png`])} />,
            ],
            [
              'App icon',
              <DL key="a" items={[['SVG', `${AI}.svg`]]} />,
              <DL
                key="b"
                items={[16, 32, 64, 128, 180, 192, 256, 512, 1024].map((n): [string, string] => [String(n), `${AI}-${n}.png`])}
              />,
            ],
            [
              'Social',
              '',
              <DL
                key="b"
                items={[
                  ['Avatar 400', '/brand/social/originary-avatar-400.png'],
                  ['Link preview 1200x630', '/brand/social/originary-link-preview-1200x630.png'],
                  ['X header 1500x500', '/brand/social/originary-x-header-1500x500.png'],
                  ['LinkedIn banner 1584x396', '/brand/social/originary-linkedin-banner-1584x396.png'],
                ]}
              />,
            ],
            [
              'Everything',
              <DL key="a" items={[['ZIP', '/brand/originary-brand-kit-v17-2026-10-12-cobalt.zip']]} />,
              '',
            ],
          ]}
        />
        <p className="pr-small">
          Use the wordmark in ink on white or light greys, and the reverse file on ink or dark greys; never recolour,
          retype or re-space it. Keep it at least 120 px wide (96 px at the very least) with one x-height of clear
          space, and use the app icon below that. Need a quote, an interview, another size, or a fact-check? Email{' '}
          <a className="pr-a" href="mailto:contact@originary.xyz?subject=Press">
            contact@originary.xyz
          </a>{' '}
          with the subject &ldquo;Press&rdquo;. Full <a className="pr-a" href="/trademark">brand and trademark policy</a>.
        </p>
      </PageSection>
    </PageShell>
  )
}
