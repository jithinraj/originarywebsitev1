import { FACTS } from './facts'

/**
 * Public identity — the single typed source for the entity hierarchy:
 * Poem, Inc. (Delaware legal entity) -> Originary (brand/trademark) ->
 * Originary Verify (product) -> PEAC Protocol (Apache-2.0 open-source project).
 *
 * legalEntity, brand, and protocolLicense derive from lib/facts.ts so there is a
 * single definition. Consumed by the Press page today; About, Imprint, Footer,
 * and structured data will adopt it as they are revised.
 *
 * Deployment- and verification-availability truth intentionally lives in a
 * later PR that wires every relevant page and adds a claims gate, rather than an
 * unused "truth" model that only looks authoritative here.
 */
export const PUBLIC_IDENTITY = {
  legalEntity: FACTS.legalEntity,
  brand: FACTS.companyName,
  product: 'Originary Verify',
  protocol: 'PEAC Protocol',
  protocolLicense: FACTS.license,
} as const

export type PublicIdentity = typeof PUBLIC_IDENTITY
