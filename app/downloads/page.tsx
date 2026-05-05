import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Script from 'next/script'
import DownloadsServer from './DownloadsServer'
import DownloadCardPEAC from '@/components/DownloadCardPEAC'
import { FACTS } from '@/lib/facts'

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Originary CLI',
  operatingSystem: 'Windows, macOS, Linux',
  applicationCategory: 'DeveloperApplication',
  downloadUrl: 'https://www.originary.xyz/downloads/',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
}

const peacSourceCodeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'PEAC Protocol',
  codeRepository: 'https://github.com/peacprotocol/peac',
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  programmingLanguage: 'TypeScript',
  version: FACTS.currentVersion.slice(1)
}

export const metadata: Metadata = {
  title: 'Downloads | Originary',
  description: 'Download the Originary and PEAC tools for signed records, including the CLI, MCP Server, Agent Auditor, and source packages.',
  keywords: 'downloads, CLI, MCP server, PEAC templates, npm packages, policy verification',
  robots: 'index,follow',
  openGraph: {
    title: 'Downloads | Originary',
    description: 'Download the Originary and PEAC tools for signed records, including the CLI, MCP Server, Agent Auditor, and source packages.',
    url: '/downloads',
    siteName: 'Originary',
    images: [{
      url: '/og',
      width: 1200,
      height: 630,
      alt: 'Originary Downloads'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downloads | Originary',
    description: 'Download the Originary and PEAC tools for signed records, including the CLI, MCP Server, Agent Auditor, and source packages.',
    images: ['/og']
  },
  alternates: {
    canonical: '/downloads'
  }
}

export default function Downloads() {
  return (
    <div className="wrap">
      <Script id="software-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(softwareJsonLd)}
      </Script>
      <Script id="peac-source-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(peacSourceCodeJsonLd)}
      </Script>
      <NavigationHeader />
      <main style={{ paddingTop: '80px' }}>
        <section className="section" style={{ background: 'var(--surface-elevated)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-4)',
                color: 'var(--text-primary)'
              }}>
                Downloads
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-3)'
              }}>
                Official Originary tools and upstream PEAC packages for signed records, verification, and developer workflows.
              </p>
              <p style={{
                fontSize: 'var(--text-base)',
                lineHeight: 1.7,
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-4)'
              }}>
                Built for API publishers, MCP developers, agent builders, and teams evaluating verification in browser, CLI, middleware, or self-hosted deployments.
              </p>

              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-6)',
                display: 'flex',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                paddingBottom: 'var(--space-4)',
                borderBottom: '1px solid var(--border-default)'
              }}>
                <span><strong>Publisher:</strong> Originary (Poem, Inc.)</span>
                <span>•</span>
                <span><strong>Current PEAC release:</strong> {FACTS.currentVersion} on npm next</span>
                <span>•</span>
                <span><strong>npm latest:</strong> v0.13.0</span>
                <span>•</span>
                <span><strong>License:</strong> Apache-2.0</span>
                <span>•</span>
                <span><strong>Current taught format:</strong> interaction-record+jwt</span>
                <span>•</span>
                <span><strong>Legacy format:</strong> peac-receipt/0.1</span>
              </div>

              <div style={{
                marginBottom: 'var(--space-6)',
                padding: 'var(--space-5)',
                background: 'var(--surface-card)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-default)'
              }}>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-3)'
                }}>
                  Choose your distribution
                </p>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: '0 0 var(--space-4) 0'
                }}>
                  Most users should start with Agent Auditor or Proof Check before installing packages.
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-2)'
                }}>
                  <a
                    href="https://github.com/peacprotocol/peac"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-2) var(--space-4)',
                      background: 'var(--accent-brand)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href={`https://github.com/peacprotocol/peac/archive/refs/tags/${FACTS.currentVersion}.zip`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-2) var(--space-4)',
                      background: 'var(--surface-subtle)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      border: '1px solid var(--border-default)'
                    }}
                  >
                    Source (.zip)
                  </a>
                  <a
                    href={`https://github.com/peacprotocol/peac/archive/refs/tags/${FACTS.currentVersion}.tar.gz`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-2) var(--space-4)',
                      background: 'var(--surface-subtle)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      border: '1px solid var(--border-default)'
                    }}
                  >
                    Source (.tar.gz)
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@peac/cli"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-2) var(--space-4)',
                      background: 'var(--surface-subtle)',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                      border: '1px solid var(--border-default)'
                    }}
                  >
                    npm
                  </a>
                </div>
              </div>

              <div style={{
                marginBottom: 'var(--space-12)',
                padding: 'var(--space-4)',
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-default)'
              }}>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-2)'
                }}>
                  Install with your package manager:
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)'
                }}>
                  <pre style={{ background: 'var(--surface-card)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', overflowX: 'auto', margin: 0, lineHeight: 1.7 }}>{`npm i -g @peac/cli
npm i @peac/protocol @peac/crypto @peac/schema
npm i @peac/mcp-server`}</pre>
                </div>
              </div>

              <div id="downloads">
                <DownloadsServer />
              </div>
              <DownloadCardPEAC />

              <div style={{
                marginTop: 'var(--space-12)',
                padding: 'var(--space-4)',
                background: 'var(--surface-subtle)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                color: 'var(--text-secondary)'
              }}>
                <strong>Originary</strong> artifacts are first-party and supported by us. <strong>PEAC</strong> packages are upstream community releases; we link for convenience and compatibility.
              </div>

              <div style={{
                marginTop: 'var(--space-8)',
                padding: 'var(--space-4)',
                textAlign: 'center',
                fontSize: 'var(--text-xs)',
                color: 'var(--text-tertiary)',
                borderTop: '1px solid var(--border-default)',
                paddingTop: 'var(--space-6)'
              }}>
                Published by Poem, Inc. Contact: contact@originary.xyz.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
