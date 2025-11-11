import type { Metadata } from 'next'
import NavigationHeader from '@/components/NavigationHeader'
import TraceHeroSection from '@/components/TraceHeroSection'
import PEACBand from '@/components/PEACBand'
import VerifySection from '@/components/VerifySection'
import SocialProofSection from '@/components/SocialProofSection'
import ControlPlaneSection from '@/components/ControlPlaneSection'
import StandardsIntegrations from '@/components/StandardsIntegrations'
import WorldClassHomePage from '@/components/WorldClassHomePage'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Originary Trace | AI crawler analytics and PEAC compliance',
  description: 'See which AI crawlers access your site, what they took, and generate verifiable evidence. Built on the open PEAC Protocol.',
  keywords: 'Originary Trace, AI crawler analytics, PEAC Protocol, GPTBot, ClaudeBot, compliance evidence, crawler tracking, HTTP 402, verifiable receipts',
  alternates: {
    canonical: 'https://www.originary.xyz/'
  },
  openGraph: {
    title: 'Originary Trace | AI crawler analytics and PEAC compliance',
    description: 'See which AI crawlers access your site, what they took, and generate verifiable evidence. Built on the open PEAC Protocol.',
    url: 'https://www.originary.xyz/',
    type: 'website',
    images: ['https://www.originary.xyz/og.jpg'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originary Trace | AI crawler analytics',
    description: 'See which AI crawlers access your site, what they took, and generate verifiable evidence.',
    images: ['https://www.originary.xyz/og.jpg'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

export default function Page() {
  return (
    <>
      <NavigationHeader />
      <main id="main-content" role="main">
        <TraceHeroSection />
        <PEACBand />
        <VerifySection />
        <SocialProofSection />
        <ControlPlaneSection />
        <StandardsIntegrations />
        <WorldClassHomePage />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Originary Trace",
            "applicationCategory": "SecurityApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "softwareVersion": "0.1.0",
            "operatingSystem": "Any",
            "url": "https://www.originary.xyz/trace",
            "description": "AI crawler analytics and compliance evidence for your website",
            "publisher": {
              "@type": "Organization",
              "name": "Originary"
            }
          })
        }}
      />
    </>
  )
}