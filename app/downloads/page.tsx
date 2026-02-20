import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Script from 'next/script'
import DownloadsServer from './DownloadsServer'
import DownloadCardPEAC from '@/components/DownloadCardPEAC'

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Originary CLI',
  operatingSystem: 'Windows, macOS, Linux',
  applicationCategory: 'DeveloperApplication',
  downloadUrl: '/downloads/',
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
  version: '0.10.13'
}

export const metadata: Metadata = {
  title: 'Downloads | CLI, MCP Server, and Templates',
  description: 'Download the Originary CLI, MCP server, and PEAC policy templates. npm packages, source archives, and quickstart resources.',
  keywords: 'downloads, CLI, MCP server, PEAC templates, npm packages, policy verification',
  robots: 'index,follow',
  openGraph: {
    title: 'Downloads | CLI, MCP Server, and Templates',
    description: 'Download the Originary CLI, MCP server, and PEAC policy templates. npm packages, source archives, and quickstart resources.',
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
    title: 'Downloads | CLI, MCP Server, and Templates',
    description: 'Download the Originary CLI, MCP server, and PEAC policy templates. npm packages, source archives, and quickstart resources.',
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
                ORIGINARY <span style={{ fontSize: '0.5em', verticalAlign: 'super' }}>™</span> Downloads
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-4)'
              }}>
                Official <strong>Originary</strong> tools and PEAC Protocol SDKs. Implement access control, consent, attribution, provenance and verifiable receipts.
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
                <span><strong>Version:</strong> 0.10.13</span>
                <span>•</span>
                <span><strong>License:</strong> Apache 2.0</span>
                <span>•</span>
                <span><strong>Wire format:</strong> peac-receipt/0.1</span>
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
                  Get the software:
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
                    href="https://github.com/peacprotocol/peac/archive/refs/tags/v0.10.13.zip"
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
                    href="https://github.com/peacprotocol/peac/archive/refs/tags/v0.10.13.tar.gz"
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
                  Or install via package manager:
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-2)'
                }}>
                  <code style={{ background: 'var(--surface-card)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', overflowX: 'auto', display: 'block' }}>npm i -g @peac/cli</code>
                  <code style={{ background: 'var(--surface-card)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', overflowX: 'auto', display: 'block' }}>npm i @peac/mcp-server @peac/capture-node @peac/rails-openclaw @peac/rails-stripe</code>
                  <code style={{ background: 'var(--surface-card)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', overflowX: 'auto', display: 'block' }}>go get github.com/peacprotocol/peac/sdks/go@v0.10.13</code>
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
                Sold by Poem, Inc., 1111B S Governors Ave, STE 40987, Dover, DE 19904, USA • +1 415 707 0402
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}