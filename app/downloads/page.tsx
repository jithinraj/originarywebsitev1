import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'
import Script from 'next/script'
import DownloadsServer from './DownloadsServer'
import DownloadCardPEAC from '@/components/DownloadCardPEAC'

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
  version: '0.9.14'
}

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Download the Originary CLI and PEAC policy templates. Verify policy files and implement receipts.',
  keywords: 'downloads, CLI, PEAC templates, policy verification, receipts implementation',
  robots: 'index,follow',
  openGraph: {
    title: 'Downloads : Originary',
    description: 'Download the Originary CLI and PEAC policy templates. Verify policy files and implement receipts.',
    url: 'https://www.originary.xyz/downloads',
    siteName: 'Originary',
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: 'Originary Downloads - CLI and PEAC templates'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downloads : Originary',
    description: 'Download the Originary CLI and PEAC policy templates. Verify policy files and implement receipts.',
    images: ['/og.jpg']
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
        <section className="section" style={{ background: 'var(--white)', paddingTop: 'var(--space-24)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1 style={{
                fontSize: 'clamp(var(--text-4xl), 6vw, var(--text-6xl))',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-4)',
                color: 'var(--gray-900)'
              }}>
                ORIGINARY <span style={{ fontSize: '0.5em', verticalAlign: 'super' }}>™</span> Downloads
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-4)'
              }}>
                Official <strong>Originary</strong> CLI builds. Use to integrate access control, consent, attribution, provenance and cryptographic receipts into your apps.
              </p>

              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-500)',
                marginBottom: 'var(--space-6)',
                display: 'flex',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                paddingBottom: 'var(--space-4)',
                borderBottom: '1px solid var(--gray-200)'
              }}>
                <span><strong>Publisher:</strong> Poem, Inc.</span>
                <span>•</span>
                <span><strong>License:</strong> Open source</span>
                <span>•</span>
                <span><strong>Latest release:</strong> v1.0.0</span>
              </div>

              <p style={{
                fontSize: 'var(--text-base)',
                lineHeight: 1.6,
                color: 'var(--gray-700)',
                marginBottom: 'var(--space-12)'
              }}>
                <strong>Get the software:</strong>{' '}
                <a href="#downloads" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>macOS (.dmg)</a> •{' '}
                <a href="#downloads" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>Windows (.zip)</a> •{' '}
                <a href="#downloads" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>Linux (.zip)</a> •{' '}
                <a href="https://github.com/peacprotocol/peac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>View source on GitHub</a>
              </p>

              <div id="downloads">
                <DownloadsServer />
              </div>
              <DownloadCardPEAC />

              <div style={{
                marginTop: 'var(--space-12)',
                padding: 'var(--space-4)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                color: 'var(--gray-600)'
              }}>
                <strong>Originary</strong> artifacts are first-party and supported by us. <strong>PEAC</strong> packages are upstream community releases; we link for convenience and compatibility.
              </div>

              <div style={{
                marginTop: 'var(--space-8)',
                padding: 'var(--space-4)',
                textAlign: 'center',
                fontSize: 'var(--text-xs)',
                color: 'var(--gray-500)',
                borderTop: '1px solid var(--gray-200)',
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