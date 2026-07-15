/**
 * Canonical structured-data entities. Originary is the single public
 * organization and source identity; Poem, Inc. appears only as legalName.
 * Every page graph references these @ids rather than redefining entities.
 */
export const ORIGINARY_ORG_ID = 'https://www.originary.xyz/#organization'
export const ORIGINARY_SITE_ID = 'https://www.originary.xyz/#website'
export const ORIGINARY_VERIFY_ID = 'https://www.originary.xyz/product#originary-verify'
export const PEAC_PROTOCOL_ID = 'https://www.originary.xyz/peac#protocol'
export const JITHIN_ID = 'https://www.originary.xyz/about#jithin-raj'

export const originaryOrganization = {
  '@type': 'Organization',
  '@id': ORIGINARY_ORG_ID,
  name: 'Originary',
  legalName: 'Poem, Inc.',
  url: 'https://www.originary.xyz',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.originary.xyz/logo/originary-wordmark.svg',
  },
  description:
    'Originary develops software for issuing, verifying, and packaging signed records of machine actions across organizational boundaries.',
  email: 'contact@originary.xyz',
  telephone: '+14157070402',
  sameAs: [
    'https://www.linkedin.com/company/originary',
    'https://x.com/originaryx',
    'https://github.com/originaryx',
    'https://originary.substack.com',
  ],
  founder: [{ '@id': JITHIN_ID }],
} as const

export const originaryWebsite = {
  '@type': 'WebSite',
  '@id': ORIGINARY_SITE_ID,
  url: 'https://www.originary.xyz',
  name: 'Originary',
  publisher: { '@id': ORIGINARY_ORG_ID },
} as const

export const originaryVerify = {
  '@type': 'SoftwareApplication',
  '@id': ORIGINARY_VERIFY_ID,
  name: 'Originary Verify',
  url: 'https://www.originary.xyz/product',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Cross-platform',
  description:
    'Software and support for issuing, verifying, and packaging signed interaction records in production workflows.',
  provider: { '@id': ORIGINARY_ORG_ID },
} as const

export const peacProtocol = {
  '@type': 'SoftwareSourceCode',
  '@id': PEAC_PROTOCOL_ID,
  name: 'PEAC Protocol',
  url: 'https://www.originary.xyz/peac',
  description:
    'Apache-2.0 open-source protocol for portable signed interaction records, maintained by Originary.',
  codeRepository: 'https://github.com/peacprotocol/peac',
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  programmingLanguage: ['TypeScript', 'JavaScript'],
  maintainer: { '@id': ORIGINARY_ORG_ID },
} as const

/** The root graph rendered once in the layout. */
export const rootGraph = {
  '@context': 'https://schema.org',
  '@graph': [originaryOrganization, originaryWebsite],
} as const
