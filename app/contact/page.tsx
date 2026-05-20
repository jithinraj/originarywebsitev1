import Link from 'next/link'
import type { Metadata } from 'next'
import {
  PageShell,
  PageHero,
  PageSection,
  Card,
  DemoRequestForm,
  PALETTE,
} from '@/components/home'
import { Mono } from '@/components/home/atoms/Mono'

export const metadata: Metadata = {
  title: { absolute: 'Contact | Originary' },
  description:
    'Tell us the workflow, the system that emits it, who needs to verify it, and why logs are not enough.',
  alternates: { canonical: '/contact' },
}

const sans = 'var(--font-plex-sans), "IBM Plex Sans", system-ui, sans-serif'

const helpItems = [
  {
    title: 'I want to review a workflow where logs are not enough.',
    desc: 'Workflow review, record design, and the smallest useful next step',
    mailto: 'contact@originary.xyz?subject=Workflow%20Review',
  },
  {
    title: 'I want to add signed records to one workflow.',
    desc: 'One API, MCP server, gateway, payment flow, or agent handoff',
    mailto: 'contact@originary.xyz?subject=One%20Workflow%20Pilot',
  },
  {
    title: 'I want enterprise deployment or procurement review.',
    desc: 'Managed verification, signing operations, record exports, and rollout scope',
    mailto: 'contact@originary.xyz?subject=Enterprise%20Deployment',
  },
  {
    title: 'Partnership',
    desc: 'Standards collaboration, ecosystem integration, research',
    mailto: 'contact@originary.xyz?subject=Partnership',
  },
  {
    title: 'Security and privacy',
    desc: 'Vulnerability reports, privacy inquiries, and responsible disclosure.',
    mailto: 'security@originary.xyz?subject=Security%20Inquiry',
  },
]

const socialLinks: Array<{ label: string; href: string }> = [
  { label: 'GitHub', href: 'https://github.com/peacprotocol/peac' },
  { label: 'X / Twitter', href: 'https://x.com/originaryx' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/originary' },
]

const bestFirstMessage = [
  'What action happened',
  'Who needs to verify it',
  'Why logs are not enough',
  'Whether you need hosted or self-hosted verification',
]

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="contact"
        title="Talk to Originary."
        sub="Tell us the workflow, the system that emits it, who needs to verify it, and why logs are not enough."
        align="center"
      />

      <PageSection paddingBottom={48}>
        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          <a
            href="mailto:contact@originary.xyz"
            className="home-card"
            style={{
              display: 'block',
              padding: 28,
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.hairline}`,
              textDecoration: 'none',
            }}
          >
            <Mono
              size={11}
              color={PALETTE.faint}
              style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              email
            </Mono>
            <div
              style={{
                fontFamily: sans,
                fontSize: 20,
                fontWeight: 500,
                color: PALETTE.ink,
                marginTop: 10,
                letterSpacing: '-0.01em',
              }}
            >
              contact@originary.xyz
            </div>
            <div style={{ fontFamily: sans, fontSize: 13, color: PALETTE.muted, marginTop: 8 }}>
              We reply during business hours.
            </div>
          </a>

          <a
            href="tel:+14157070402"
            className="home-card"
            style={{
              display: 'block',
              padding: 28,
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.hairline}`,
              textDecoration: 'none',
            }}
          >
            <Mono
              size={11}
              color={PALETTE.faint}
              style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              phone
            </Mono>
            <div
              style={{
                fontFamily: sans,
                fontSize: 20,
                fontWeight: 500,
                color: PALETTE.ink,
                marginTop: 10,
                letterSpacing: '-0.01em',
              }}
            >
              +1 415-707-0402
            </div>
            <div style={{ fontFamily: sans, fontSize: 13, color: PALETTE.muted, marginTop: 8 }}>
              Dover, DE, USA.
            </div>
          </a>
        </div>
      </PageSection>

      {/* Demo request form, 2-column with "best first message" on the left */}
      <PageSection paddingBottom={48}>
        <div
          className="home-card home-demo-grid"
          style={{
            maxWidth: 960,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 0,
            background: PALETTE.paper,
            border: `1px solid ${PALETTE.hairline}`,
          }}
        >
          <div style={{ padding: '36px 36px 40px 36px' }}>
            <Mono
              size={11}
              color={PALETTE.muted}
              style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              best first message
            </Mono>
            <h2
              style={{
                fontFamily: sans,
                fontSize: 26,
                fontWeight: 500,
                color: PALETTE.ink,
                margin: '14px 0 0 0',
                letterSpacing: '-0.02em',
                textWrap: 'balance',
              }}
            >
              Tell us the workflow that needs verification.
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0' }}>
              {bestFirstMessage.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 0',
                    fontFamily: sans,
                    fontSize: 15,
                    color: PALETTE.ink,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: PALETTE.accent,
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontFamily: sans,
                fontSize: 13,
                color: PALETTE.muted,
                lineHeight: 1.6,
                margin: '24px 0 0 0',
              }}
            >
              The form opens an email draft so you can send the workflow directly to our team.
            </p>
          </div>
          <div
            style={{
              padding: '36px 36px 40px 36px',
              borderLeft: `1px solid ${PALETTE.hairline}`,
              background: PALETTE.bg,
            }}
          >
            <DemoRequestForm destinationEmail="contact@originary.xyz" />
          </div>
        </div>
      </PageSection>

      <PageSection paddingBottom={48}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Card padding={32}>
            <Mono
              size={11}
              color={PALETTE.muted}
              style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              how we can help
            </Mono>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 18 }}>
              {helpItems.map((item, idx) => (
                <a
                  key={item.title}
                  href={`mailto:${item.mailto}`}
                  style={{
                    display: 'block',
                    padding: '18px 4px',
                    borderTop: idx === 0 ? `1px solid ${PALETTE.hairline}` : 'none',
                    borderBottom: `1px solid ${PALETTE.hairline}`,
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: sans,
                      fontSize: 15,
                      fontWeight: 500,
                      color: PALETTE.ink,
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: sans,
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: PALETTE.muted,
                      marginTop: 4,
                    }}
                  >
                    {item.desc}
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </PageSection>

      <PageSection paddingBottom={48}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Card padding={32} style={{ textAlign: 'center' }}>
            <Mono
              size={11}
              color={PALETTE.muted}
              style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              connect with us
            </Mono>
            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: 18,
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: 44,
                    padding: '10px 16px',
                    fontFamily: sans,
                    fontSize: 13,
                    color: PALETTE.ink,
                    textDecoration: 'none',
                    border: `1px solid ${PALETTE.rule}`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </PageSection>

      <PageSection paddingBottom={112}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <Mono size={12} color={PALETTE.muted}>
            Looking for something specific?
          </Mono>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 14 }}>
            <Link
              href="/downloads"
              style={{
                fontFamily: sans,
                fontSize: 13,
                color: PALETTE.ink,
                textDecoration: 'none',
                padding: '10px 16px',
                minHeight: 44,
                display: 'inline-flex',
                alignItems: 'center',
                border: `1px solid ${PALETTE.rule}`,
              }}
            >
              Downloads
            </Link>
            <Link
              href="/pricing"
              style={{
                fontFamily: sans,
                fontSize: 13,
                color: PALETTE.ink,
                textDecoration: 'none',
                padding: '10px 16px',
                minHeight: 44,
                display: 'inline-flex',
                alignItems: 'center',
                border: `1px solid ${PALETTE.rule}`,
              }}
            >
              Pricing
            </Link>
            <Link
              href="/peac"
              style={{
                fontFamily: sans,
                fontSize: 13,
                color: PALETTE.ink,
                textDecoration: 'none',
                padding: '10px 16px',
                minHeight: 44,
                display: 'inline-flex',
                alignItems: 'center',
                border: `1px solid ${PALETTE.rule}`,
              }}
            >
              PEAC Protocol
            </Link>
          </div>
        </div>
      </PageSection>
    </PageShell>
  )
}
