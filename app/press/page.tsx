import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, SectionHeading, Button } from '@/components/home/page-kit'
import { PALETTE } from '@/components/home/palette'
import { FACTS } from '@/lib/facts'
import { DataTable, MarkerList, StepLabel, CodeBlock } from '@/components/specimens/parts'

const TITLE = 'Press | Originary'
const DESCRIPTION =
  'Company boilerplate, brand assets, current metrics, and press contact for Originary, the company behind PEAC Protocol.'

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
  'Originary turns machine actions into portable signed records that customers, partners, and auditors can verify without access to private logs. It builds Originary Verify, the commercial verification product, and stewards PEAC Protocol, the Apache-2.0 open standard for verifiable interaction records.'

const BOILERPLATE_120 =
  'Originary is verifiable infrastructure for machine actions. As agents, APIs, gateways, payments, and provisioning workflows act across company boundaries, internal logs stop being usable proof: they cannot be handed to a customer, auditor, or counterparty. Originary turns those actions into portable signed records that verify offline, without access to the systems that produced them. The company builds Originary Verify, the commercial product for issuing, verifying, and bundling records in production, and stewards PEAC Protocol, the Apache-2.0 open standard that defines the record format and verification model. Records are signed with the issuer\'s own keys, travel in existing carriers, and verify anywhere: no account, no callback, no vendor dependency.'

export default function PressPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Press"
        title="Originary press kit."
        sub="Approved company language, current metrics, brand assets, and how to reach us. Everything on this page may be quoted."
        strip={['Boilerplate', 'Metrics as of ' + FACTS.currentReleaseDate, 'Brand', 'Contact']}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button href="mailto:contact@originary.xyz?subject=Press" primary>
            Press contact
          </Button>
          <Button href="/about">About the company</Button>
        </div>
      </PageHero>

      <PageSection paddingBottom={56}>
        <SectionHeading index="01" eyebrow="Boilerplate" title="Approved company descriptions." />
        <StepLabel>50 words</StepLabel>
        <p style={{ fontSize: 15.5, lineHeight: 1.7, color: PALETTE.ink, maxWidth: '68ch', margin: '0 0 26px' }}>{BOILERPLATE_50}</p>
        <StepLabel>120 words</StepLabel>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: PALETTE.muted, maxWidth: '72ch', margin: 0 }}>{BOILERPLATE_120}</p>
      </PageSection>

      <PageSection paddingTop={56} paddingBottom={56} background={PALETTE.paper}>
        <SectionHeading
          index="02"
          eyebrow="The relationship"
          title="Originary and PEAC Protocol."
          sub="Originary is the company. Originary Verify is the commercial product. PEAC Protocol is the Apache-2.0 open standard Originary publishes and stewards; it works without Originary, and records verify without asking us."
        />
        <DataTable
          head={['Name', 'What it is', 'License and model']}
          rows={[
            ['Originary', 'The company: verifiable infrastructure for machine actions', 'Commercial (a brand of Poem, Inc.)'],
            ['Originary Verify', 'The product: issue, verify, and bundle signed records in production', 'Commercial, self-hostable'],
            ['PEAC Protocol', 'The open standard: record format and verification model', 'Apache-2.0, open source'],
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
