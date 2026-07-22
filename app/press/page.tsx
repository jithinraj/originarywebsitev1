import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, PullLine, Button } from '@/components/home/page-kit'
import { PALETTE } from '@/components/home/palette'
import { FACTS } from '@/lib/facts'
import { PUBLIC_IDENTITY } from '@/lib/public-identity'
import { DataTable, MarkerList, StepLabel, CodeBlock } from '@/components/specimens/parts'

const TITLE = 'Originary press kit and company information'
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

export default function PressPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Press"
        title="Press kit."
        sub="Working on a story about verifiable records for AI and agents? Everything here is yours to use. Quote the descriptions directly, pull the current facts, grab the logo. We are glad to help, and happy to fact-check a draft before you publish."
        strip={['Fast facts', 'Boilerplate', 'Metrics as of ' + FACTS.currentReleaseDate, 'Contact']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="mailto:contact@originary.xyz?subject=Press" primary>
            Email the team
          </Button>
          <Button href="/about">About Originary</Button>
        </div>
      </PageHero>

      <PullLine accent="made verifiable.">
        Machine actions,
      </PullLine>

      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading
          index="01"
          eyebrow="At a glance"
          title="The fast facts."
          sub="The quickest reference for a story. Every line is drawn from public releases and company records."
        />
        <DataTable
          head={['Fact', 'Detail']}
          rows={[
            ['What it is', 'Verifiable, portable signed records of machine actions across organizational boundaries.'],
            ['Product', `${PUBLIC_IDENTITY.product}: software for issuing, verifying, and packaging those records.`],
            ['Protocol', `${PUBLIC_IDENTITY.protocol}: open source under ${PUBLIC_IDENTITY.protocolLicense}.`],
            ['Company', `${PUBLIC_IDENTITY.legalEntity}, a Delaware corporation. Originary is its software brand.`],
            ['Founder', 'Jithin Raj.'],
            ['Current release', `PEAC ${FACTS.currentVersion} "${FACTS.releaseName}" (${FACTS.currentReleaseDate}).`],
            ['On the web', `${FACTS.domain} . ${FACTS.protocolDomain}`],
            ['Press contact', 'contact@originary.xyz'],
          ]}
        />
      </PageSection>

      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading
          index="02"
          eyebrow="Boilerplate"
          title="Descriptions you can quote."
          sub="Copy either of these straight into your piece. No permission needed, no attribution required."
        />
        <StepLabel>Short</StepLabel>
        <blockquote style={{ borderLeft: `2px solid ${PALETTE.ink}`, margin: '0 0 28px', padding: '4px 0 4px 22px' }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PALETTE.ink, maxWidth: '64ch', margin: 0 }}>{BOILERPLATE_50}</p>
        </blockquote>
        <StepLabel>Extended</StepLabel>
        <blockquote style={{ borderLeft: `2px solid ${PALETTE.hairline}`, margin: 0, padding: '4px 0 4px 22px' }}>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: PALETTE.muted, maxWidth: '72ch', margin: 0 }}>{BOILERPLATE_120}</p>
        </blockquote>
      </PageSection>

      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading
          index="03"
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

      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading
          index="04"
          eyebrow="Current metrics"
          title={'As of PEAC ' + FACTS.currentVersion + '.'}
          sub="Generated from the release facts registry, so they update with each public release. You can cite the current numbers with confidence."
        />
        <DataTable
          head={['Metric', 'Value']}
          rows={[
            ['Current release', FACTS.currentVersion + ' "' + FACTS.releaseName + '"'],
            ['Tests', FACTS.testsCount.toLocaleString('en-US') + ' across ' + FACTS.testFilesCount + ' files'],
            ['Conformance checks', String(FACTS.conformanceRequirements)],
            ['Packages on npm', String(FACTS.publishedPackageCount)],
            ['License', FACTS.license],
            ['Wire format', FACTS.currentTyp + ' (Wire 0.2)'],
          ]}
        />
        <p style={{ fontSize: 13, lineHeight: 1.6, color: PALETTE.faint, marginTop: 14, maxWidth: '62ch' }}>
          Metrics are generated from the release facts registry and update with each public release.
        </p>
      </PageSection>

      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading
          index="05"
          eyebrow="Appearances"
          title="Founder talks and media."
          sub="Founder Jithin Raj on the record. Happy to arrange an interview or a comment for your piece."
        />
        <MarkerList
          marker="number"
          items={[
            <>
              <b style={{ fontWeight: 600 }}>CNBC-TV18:</b>{' '}
              <a href="https://x.com/CNBCTV18News/status/2024805869775421702" style={{ color: PALETTE.ink }}>
                Jithin Raj, Founder, Originary on CNBC-TV18
              </a>{' '}
              (February 2026).
            </>,
            <>
              <b style={{ fontWeight: 600 }}>India AI Impact Summit 2026:</b>{' '}
              <a href="https://www.youtube.com/watch?v=jaNuIGwAges" style={{ color: PALETTE.ink }}>
                In conversation with Jithin Raj, Founder of Originary
              </a>{' '}
              (February 2026).
            </>,
            <>
              <b style={{ fontWeight: 600 }}>MCP Dev Summit and KubeCon India 2026:</b> talks on portable signed
              records for MCP tool calls.
            </>,
          ]}
        />
      </PageSection>

      <PageSection paddingTop={56} paddingBottom={80} background={PALETTE.paper}>
        <SectionHeading
          index="06"
          eyebrow="Brand"
          title="Names and the logo."
          sub="Two small things that help a story read right: write Originary with a capital O, and spell out PEAC Protocol on first mention. The wordmark is the primary mark. Anything you are unsure about, just ask."
        />
        <StepLabel>Download the logo</StepLabel>
        <ul
          style={{
            listStyle: 'none',
            margin: '4px 0 0',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '10px 24px',
          }}
        >
          {[
            ['Wordmark (primary)', '/originary-logo.svg'],
            ['Wordmark with trademark symbol', '/originary-logo-tm.svg'],
            ['Wordmark for dark backgrounds', '/originary-logo-reverse.svg'],
            ['Compact mark', '/originary-logo-mark.svg'],
            ['Compact mark for dark backgrounds', '/originary-logo-mark-reverse.svg'],
          ].map(([label, href]) => (
            <li key={href} style={{ fontFamily: 'var(--font-plex-sans)', fontSize: 14, lineHeight: 1.55 }}>
              <a href={href} download style={{ color: PALETTE.ink }}>
                {label}
              </a>{' '}
              <span style={{ color: PALETTE.faint, fontFamily: 'var(--font-plex-mono)', fontSize: 11.5 }}>SVG</span>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: 13, lineHeight: 1.65, color: PALETTE.faint, marginTop: 14, maxWidth: '64ch' }}>
          Scalable vector files, so they stay sharp at any size. Use the trademark version where the logo stands on its
          own; the plain wordmark is fine inside an article. Minimum width 112 px, or use the compact mark below that.
          Need a raster or a specific size? Ask and we will send it.
        </p>
        <div style={{ marginTop: 26 }}>
          <StepLabel>Press contact</StepLabel>
          <CodeBlock>{`contact@originary.xyz - subject line "Press"`}</CodeBlock>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: PALETTE.muted, marginTop: 20, maxWidth: '64ch' }}>
          Need a quote, an interview, a specific asset, or a quick fact-check before you publish? Email us and we will
          usually reply fast.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
          <Button href="/trademark">Full brand and trademark policy</Button>
        </div>
      </PageSection>
    </PageShell>
  )
}
