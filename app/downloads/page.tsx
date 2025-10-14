import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'
import Script from 'next/script'
import DownloadsClient from './DownloadsClient'
import DownloadsServer from './DownloadsServer'
import DownloadCardPEAC from '@/components/DownloadCardPEAC'
import { Suspense } from 'react'

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
  version: '0.9.13'
}

export const metadata: Metadata = {
  title: 'Downloads : Originary',
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
    canonical: 'https://www.originary.xyz/downloads'
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
                marginBottom: 'var(--space-6)',
                color: 'var(--gray-900)'
              }}>
                <Mark>Originary</Mark> Downloads
              </h1>

              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: 1.7,
                color: 'var(--gray-600)',
                marginBottom: 'var(--space-12)'
              }}>
                Download the Originary CLI and peac.txt templates. Each build includes a checksum for verification.
              </p>

              <Suspense fallback={<DownloadsServer />}>
                <DownloadsClient />
              </Suspense>
              <DownloadsServer />
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}