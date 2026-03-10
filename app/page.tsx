import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import NewHero from '@/components/NewHero'
import WhatThisSolves from '@/components/WhatThisSolves'
import HowItWorksNew from '@/components/HowItWorksNew'
import ProofSection from '@/components/ProofSection'
import StandardsCompatibility from '@/components/StandardsCompatibility'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: 'Originary | Verifiable Interaction Records for AI Agents and APIs'
  },
  description: 'Turn API calls, tool runs, and agent handoffs into portable signed records you can verify independently, offline. Open-source packages built on the PEAC Protocol open standard. Apache-2.0.',
  keywords: [
    'verifiable interaction records',
    'PEAC Protocol',
    'agent receipts',
    'open standard',
    'Ed25519',
    'MCP',
    'A2A',
    'HTTP 402',
    'AI infrastructure',
    'open source',
  ],
  authors: [{ name: 'Originary', url: 'https://www.originary.xyz' }],
  creator: 'Originary',
  publisher: 'Originary',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Originary | Verifiable Interaction Records for AI Agents and APIs',
    description: 'Turn API calls, tool runs, and agent handoffs into portable signed records you can verify independently, offline. Open-source packages built on the PEAC Protocol open standard.',
    url: 'https://www.originary.xyz',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Originary — Verifiable interaction records for AI agents and APIs' }],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary | Verifiable Interaction Records for AI Agents and APIs',
    description: 'Turn API calls, tool runs, and agent handoffs into portable signed records you can verify independently, offline. Built on PEAC Protocol. Apache-2.0.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.originary.xyz/#org',
  name: 'Originary',
  legalName: 'Poem, Inc.',
  url: 'https://www.originary.xyz',
  logo: 'https://www.originary.xyz/logo.svg',
  sameAs: [
    'https://x.com/originaryx',
    'https://github.com/peacprotocol/peac',
    'https://www.linkedin.com/company/originary',
    'https://bsky.app/profile/originary.bsky.social',
  ],
  description: 'Originary builds open-source infrastructure for verifiable interaction records. Steward of the PEAC Protocol open standard. Apache-2.0.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Originary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Originary builds infrastructure and tools for the AI and agentic web.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Originary do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Originary helps teams build trustworthy automated systems with open standards, developer tooling, and verifiable interaction infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PEAC Protocol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PEAC is the open standard Originary stewards for verifiable interaction records across agents, APIs, and services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is Originary for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Originary is for developers, platforms, and companies building AI products, agents, APIs, and agentic workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the agentic web need new infrastructure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As AI agents interact across tools, services, and organizations, teams need better infrastructure for trust, verification, policy, and portable records.',
      },
    },
  ],
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.originary.xyz/#website',
  name: 'Originary',
  url: 'https://www.originary.xyz',
  description: 'Open-source infrastructure for verifiable interaction records, built on the PEAC Protocol open standard.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.originary.xyz/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavigationHeader />
      <main id="main-content" role="main">
        <NewHero />
        <WhatThisSolves />
        <HowItWorksNew />
        <ProofSection />
        <div style={{ textAlign: 'center', padding: 'var(--space-12) var(--space-6) var(--space-4)', background: 'var(--surface-base)' }}>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
            Originary doesn&apos;t replace your agent framework or payment rail. It makes interactions provable and portable.
          </p>
        </div>
        <StandardsCompatibility />
        <FinalCTA />

        <section className="faq-section">
          <div className="faq-inner">
            <h2 className="faq-heading">Frequently asked questions</h2>
            <p className="faq-subtitle">
              Frequently asked questions about Originary, PEAC Protocol, and infrastructure for the AI and agentic web.
            </p>
            <div className="faq-list">
              {[
                { q: 'What is Originary?', a: 'Originary builds infrastructure and tools for the AI and agentic web.' },
                { q: 'What does Originary do?', a: 'Originary helps teams build trustworthy automated systems with open standards, developer tooling, and verifiable interaction infrastructure.' },
                { q: 'What is PEAC Protocol?', a: 'PEAC is the open standard Originary stewards for verifiable interaction records across agents, APIs, and services.' },
                { q: 'Who is Originary for?', a: 'Originary is for developers, platforms, and companies building AI products, agents, APIs, and agentic workflows.' },
                { q: 'Why does the agentic web need new infrastructure?', a: 'As AI agents interact across tools, services, and organizations, teams need better infrastructure for trust, verification, policy, and portable records.' },
              ].map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary className="faq-question">
                    <span>{q}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq-answer">{a}</p>
                </details>
              ))}
            </div>
          </div>
          <style>{`
            .faq-section {
              background: var(--surface-base);
              border-top: 1px solid var(--border-default);
              padding: var(--space-20) var(--space-6);
            }
            .faq-inner {
              max-width: 720px;
              margin: 0 auto;
            }
            .faq-heading {
              font-size: clamp(var(--text-2xl), 4vw, var(--text-3xl));
              font-weight: 700;
              letter-spacing: -0.03em;
              color: var(--text-primary);
              margin: 0 0 var(--space-2);
            }
            .faq-subtitle {
              font-size: var(--text-base);
              color: var(--text-secondary);
              line-height: 1.6;
              margin: 0 0 var(--space-10);
            }
            .faq-list {
              display: flex;
              flex-direction: column;
              gap: var(--space-2);
            }
            .faq-item {
              border-radius: var(--radius-lg);
              border: 1px solid var(--border-default);
              background: var(--surface-elevated);
              overflow: hidden;
              transition: border-color 0.2s ease;
            }
            .faq-item[open] {
              border-color: var(--border-hover);
            }
            .faq-question {
              list-style: none;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: var(--space-4);
              padding: var(--space-5) var(--space-6);
              font-size: var(--text-base);
              font-weight: 600;
              color: var(--text-primary);
              cursor: pointer;
              user-select: none;
              min-height: 56px;
              -webkit-tap-highlight-color: transparent;
            }
            .faq-question::-webkit-details-marker { display: none; }
            .faq-question::marker { display: none; }
            .faq-question:hover { background: var(--surface-subtle); }
            .faq-icon {
              flex-shrink: 0;
              font-size: 20px;
              font-weight: 300;
              line-height: 1;
              color: var(--text-tertiary);
              transition: transform 0.2s ease, color 0.2s ease;
            }
            .faq-item[open] .faq-icon {
              transform: rotate(45deg);
              color: var(--accent-brand);
            }
            .faq-answer {
              margin: 0;
              padding: var(--space-4) var(--space-6) var(--space-5);
              font-size: var(--text-base);
              color: var(--text-secondary);
              line-height: 1.7;
              border-top: 1px solid var(--border-default);
            }
            @media (max-width: 640px) {
              .faq-section { padding: var(--space-14) var(--space-4); }
              .faq-question { padding: var(--space-4) var(--space-4); font-size: var(--text-sm); }
              .faq-answer { padding: var(--space-3) var(--space-4) var(--space-4); font-size: var(--text-sm); }
            }
            @media (prefers-reduced-motion: reduce) {
              .faq-icon { transition: none; }
              .faq-item { transition: none; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  )
}
