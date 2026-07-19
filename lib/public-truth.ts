/**
 * Public deployment and verification truth.
 *
 * The single typed source for what Originary does and does not offer today, and
 * for what verification does and does not establish. Public surfaces (Product,
 * Pricing, Trust, Security, Press) and the truth gate consume this so the
 * negative claims cannot drift.
 *
 * Changing any `false` to `true` here is a product-posture change: it MUST be
 * accompanied by updates to every Trust / Security / Privacy / Terms surface in
 * the same commit. Do not invent availability.
 *
 * Identity strings mirror lib/facts.ts (legalEntity / brand). Poem, Inc. is the
 * Delaware legal entity; Originary is a brand of Poem, Inc.; Originary Verify is
 * the commercial product; PEAC Protocol is the Apache-2.0 open-source project.
 */
export const PUBLIC_TRUTH = {
  legalEntity: 'Poem, Inc.',
  brand: 'Originary',
  product: 'Originary Verify',
  protocol: 'PEAC Protocol',
  protocolLicense: 'Apache-2.0',

  /** What Originary offers as a deployment model today. */
  deployment: {
    ossSelfHosted: true,
    supportedSelfHosted: true,
    originaryHostedVerification: false,
    managedSigningOrKeyCustody: false,
    originaryRecordStorage: false,
    hostedDashboard: false,
  },

  /** What verifying a signed record does and does not establish. */
  verification: {
    strictOfflineSuppliedKey: true,
    originaryCallbackRequired: false,
    establishesExternalTruth: false,
    establishesCompleteness: false,
    establishesPolicyCorrectness: false,
  },
} as const

export type PublicTruth = typeof PUBLIC_TRUTH
