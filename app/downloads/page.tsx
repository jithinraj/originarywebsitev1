import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import Footer from '@/components/Footer'
import Mark from '@/components/Mark'
import Script from 'next/script'
import DownloadsClient from './DownloadsClient'
import DownloadsServer from './DownloadsServer'
import { Suspense } from 'react'

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Originary CLI',
  operatingSystem: 'Windows, macOS, Linux',
  applicationCategory: 'DeveloperApplication',
  downloadUrl: 'https://originary.xyz/downloads/',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
}

export const metadata: Metadata = {
  title: 'Downloads : Originary',
  description: 'Download the Originary CLI and PEAC policy templates. Verify policy files and implement receipts.',
  robots: 'index,follow',
}

export default function Downloads() {
  return (
    <div className="wrap">
      <Script id="software-json-ld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(softwareJsonLd)}
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}