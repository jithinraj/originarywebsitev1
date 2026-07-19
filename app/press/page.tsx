import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, PullLine, Button } from '@/components/home/page-kit'
import { PALETTE } from '@/components/home/palette'
import { FACTS } from '@/lib/facts'
import { PUBLIC_TRUTH } from '@/lib/public-truth'
import { DataTable, MarkerList, StepLabel, CodeBlock } from '@/components/specimens/parts'

const TITLE = 'Originary press kit and company information'
const DESCRIPTION =
  'Approved Originary boilerplates, founder biography, current metrics, appearances, logos, screenshots, and media contact.'

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
  'Originary develops software for issuing, verifying, and packaging signed records of machine actions across organizational boundaries. Originary Verify is built on PEAC Protocol, an Apache-2.0 open-source project.'

const BOILERPLATE_120 =
  'Originary develops verifiable infrastructure for machine actions. Originary Verify helps teams issue, inspect, and package signed records when APIs, agents, MCP tools, gateways, payment flows, and provisioning systems act. Those records can be verified by another party without access to the original private logs or dashboards. Originary Verify is built on PEAC Protocol, an Apache-2.0 open-source protocol project maintained by Originary. Originary is a brand of Poem, Inc., a Delaware corporation.'

export default function PressPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Press"
        title="Originary press kit."
        sub="Approved company language, current metrics, brand assets, and how to reach us. The boilerplate section may be quoted verbatim."
        strip={['Boilerplate', 'Metrics as of ' + FACTS.currentReleaseDate, 'Brand', 'Contact']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="mailto:contact@originary.xyz?subject=Press" primary>
            Press contact
          </Button>
          <Button href="/about">About the company</Button>
        </div>
      </PageHero>

      <PullLine accent="made verifiable.">
        Machine actions,
      </PullLine>

      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="01" eyebrow="Boilerplate" title="Approved company descriptions." />
        <StepLabel>Short</StepLabel>
        <blockquote style={{ borderLeft: `2px solid ${PALETTE.ink}`, margin: '0 0 28px', padding: '4px 0 4px 22px' }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: PALETTE.ink, maxWidth: '64ch', margin: 0 }}>{BOILERPLATE_50}</p>
        </blockquote>
        <StepLabel>Extended</StepLabel>
        <blockquote style={{ borderLeft: `2px solid ${PALETTE.hairline}`, margin: 0, padding: '4px 0 4px 22px' }}>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: PALETTE.muted, maxWidth: '72ch', margin: 0 }}>{BOILERPLATE_120}</p>
        </blockquote>
      </PageSection>

      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading
          index="02"
          eyebrow="The relationship"
          title="Originary and PEAC Protocol."
          sub="Poem, Inc. is the Delaware corporation. Originary is a brand of Poem, Inc. Originary Verify is the commercial product; PEAC Protocol is the Apache-2.0 open-source project Originary maintains. The protocol works without Originary, and records verify without asking us."
        />
        <DataTable
          head={['Name', 'What it is', 'License and model']}
          rows={[
            [PUBLIC_TRUTH.legalEntity, 'The company: the Delaware corporation behind Originary', 'Legal entity'],
            [PUBLIC_TRUTH.brand, 'The brand: verifiable infrastructure for machine actions', `A brand of ${PUBLIC_TRUTH.legalEntity}`],
            [PUBLIC_TRUTH.product, 'The product: issue, verify, and bundle signed records in production', 'Commercial, self-hostable'],
            [PUBLIC_TRUTH.protocol, 'The open-source protocol: record format and verification model', `${PUBLIC_TRUTH.protocolLicense}, open source`],
          ]}
        />
      </PageSection>

      <PageSection paddingTop={56} paddingBottom={56}>
        <SectionHeading index="03" eyebrow="Current metrics" title={'As of PEAC ' + FACTS.currentVersion + ' (' + FACTS.currentReleaseDate + ').'} />
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

      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading index="04" eyebrow="Appearances" title="Talks and media." />
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

      <PageSection paddingTop={56} paddingBottom={80}>
        <SectionHeading
          index="05"
          eyebrow="Brand"
          title="Names, marks, and usage."
          sub="Write Originary with a capital O; PEAC Protocol in full on first mention. The wordmark is the primary mark. Do not modify, recolor, or combine marks with other logos."
        />
        <StepLabel>Press contact</StepLabel>
        <CodeBlock>{`contact@originary.xyz - subject line "Press"`}</CodeBlock>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
          <Button href="/trademark">Trademark policy</Button>
          <Button href="/downloads">Logo and assets</Button>
        </div>
      </PageSection>
    </PageShell>
  )
}
