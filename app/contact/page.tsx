import type { Metadata } from 'next'
import { PageShell, PageHero, PageSection, DemoRequestForm } from '@/components/home'
import { Breadcrumbs } from '@/components/home/Breadcrumbs'
import './contact.css'

export const metadata: Metadata = {
  title: { absolute: 'Contact us to start a Verification Pilot | Originary' },
  description:
    'Tell us which agent, API, MCP or gateway workflow needs signed records and who has to verify them. We reply within two business days to scope a pilot.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <PageShell>
      <Breadcrumbs current="Contact" href="/contact" />
      <PageHero
        eyebrow="contact"
        title="Tell us which action needs a record."
        sub="Describe the workflow and who needs to verify it, and we will scope a pilot with you."
      />

      <PageSection paddingTop={24} paddingBottom={96}>
        <div className="ct-grid">
          <div className="ct-form">
            <DemoRequestForm destinationEmail="contact@originary.xyz" compact submitLabel="Start a pilot" />
          </div>

          <div className="ct-side">
            <p className="ct-k">What happens next</p>
            <ol className="ct-steps">
              <li>
                <strong>We reply</strong>
                <span>Within two business days.</span>
              </li>
              <li>
                <strong>Workflow review</strong>
                <span>We go through the workflow with you, sketch the record and agree the smallest useful next step.</span>
              </li>
              <li>
                <strong>Scoped pilot</strong>
                <span>One API, MCP server, gateway, payment flow, or agent handoff.</span>
              </li>
            </ol>
            <p className="ct-small">
              Prefer email?{' '}
              <a className="ct-a" href="mailto:contact@originary.xyz">
                contact@originary.xyz
              </a>
              {' · '}
              <a className="ct-a" href="tel:+14157070402">
                +1 415-707-0402
              </a>
            </p>
            <p className="ct-small" style={{ marginTop: 6 }}>
              Security reports:{' '}
              <a className="ct-a" href="mailto:security@originary.xyz?subject=Security%20Inquiry">
                security@originary.xyz
              </a>
              . Press:{' '}
              <a className="ct-a" href="mailto:contact@originary.xyz?subject=Press">
                press enquiries
              </a>
              .
            </p>
          </div>
        </div>
      </PageSection>
    </PageShell>
  )
}
