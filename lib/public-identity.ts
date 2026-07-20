import { FACTS } from './facts'

/**
 * Shared public identity labels used across website surfaces.
 *
 * Poem, Inc. (Delaware legal entity), Originary (its software and
 * developer-tools brand), Originary Verify (product), and PEAC Protocol
 * (Apache-2.0 open-source project). legalEntity, brand, and protocolLicense
 * derive from the canonical facts registry (lib/facts.ts) so there is a single
 * definition.
 */
export const PUBLIC_IDENTITY = {
  legalEntity: FACTS.legalEntity,
  brand: FACTS.companyName,
  product: 'Originary Verify',
  protocol: 'PEAC Protocol',
  protocolLicense: FACTS.license,
} as const

export type PublicIdentity = typeof PUBLIC_IDENTITY
