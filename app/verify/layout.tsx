import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inspector | Decode and Inspect Signed Interaction Records',
  description: 'Paste a compact JWS token, upload a file, or load a sample. Decodes JOSE header and claims instantly in the browser. For full cryptographic verification, use Agent Auditor.',
  keywords: 'JWS inspector, interaction record, PEAC receipt, Ed25519, JOSE header, token decoder',
  alternates: { canonical: '/verify' },
  openGraph: {
    title: 'Inspector | Decode and Inspect Signed Interaction Records',
    description: 'Browser-based JWS token inspector. Decodes JOSE header and claims instantly.',
    url: '/verify',
    type: 'website',
    images: ['/og'],
    siteName: 'Originary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inspector | Decode and Inspect Signed Interaction Records',
    description: 'Browser-based JWS token inspector. Decodes JOSE header and claims instantly.',
    images: ['/og'],
    site: '@originaryx',
    creator: '@originaryx',
  },
  robots: 'index,follow',
}

export default function VerifyLayout({ children }: { children: React.ReactNode }) {
  return children
}
