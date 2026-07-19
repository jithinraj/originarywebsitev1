import { FACTS } from './facts'

/**
 * Public deployment and verification truth.
 *
 * The typed source for what Originary does and does not offer today, and for
 * what verifying a signed record does and does not establish. Identity strings
 * are derived from lib/facts.ts so there is a single definition (Poem, Inc. is
 * the Delaware legal entity; Originary is its brand; Originary Verify is the
 * product; PEAC Protocol is the Apache-2.0 open-source project).
 *
 * Consumers today: the Press page uses the identity fields. Other public
 * surfaces (Product, Pricing, Trust, Security) still carry hand-authored
 * deployment/verification prose and will migrate onto this model as they are
 * revised; do not describe this as their single source until they do.
 *
 * `deployment` uses an availability status, not a bare boolean, so a future
 * page cannot silently turn a `true` into a broader commercial claim than
 * intended. Moving anything to 'available' is a product-posture change and MUST
 * update every Trust / Security / Privacy / Terms surface in the same commit.
 */
export type Availability = 'available' | 'scoped-engagement' | 'not-offered' | 'planned'

const deployment: Record<string, Availability> = {
  ossSelfHosted: 'available',
  supportedSelfHosted: 'scoped-engagement',
  originaryHostedVerification: 'not-offered',
  managedSigningOrKeyCustody: 'not-offered',
  originaryRecordStorage: 'not-offered',
  hostedDashboard: 'not-offered',
}

export const PUBLIC_TRUTH = {
  legalEntity: FACTS.legalEntity,
  brand: FACTS.companyName,
  product: 'Originary Verify',
  protocol: 'PEAC Protocol',
  protocolLicense: FACTS.license,
  deployment,
  verification: {
    strictOfflineSuppliedKey: true,
    originaryCallbackRequired: false,
    establishesExternalTruth: false,
    establishesCompleteness: false,
    establishesPolicyCorrectness: false,
  },
} as const

export type PublicTruth = typeof PUBLIC_TRUTH
