/**
 * Capability registry: the single source of truth for what Originary offers
 * today, and the claims each surface is allowed to make about it.
 *
 * Every public page's claims must be permitted by this registry. Anything not
 * yet backed by evidence is marked `not_offered` or `planned`, never implied.
 * The `check:claims` gate reads `prohibitedClaims` and fails the build if a
 * page renders a claim we cannot stand behind.
 */

export type CapabilityStatus =
  | 'available' // shipped and demonstrable today
  | 'limited_pilot' // offered case-by-case under a scoped engagement
  | 'planned' // on the roadmap, not yet offered
  | 'not_offered' // not offered; must not be implied as current

export interface Capability {
  id: string
  status: CapabilityStatus
  evidence: readonly string[]
  approvedClaims: readonly string[]
  prohibitedClaims: readonly string[]
  owner: string
  lastReviewedAt: string
}

const OWNER = 'Originary'
const REVIEWED = '2026-07-15'

export const CAPABILITIES: readonly Capability[] = [
  {
    id: 'local-verification',
    status: 'available',
    evidence: ['/verify', 'PEAC verifyLocal', '@peac/cli verify --public-key'],
    approvedClaims: [
      'Verify a signed record locally with the issuer public key.',
      'Verification runs offline; nothing is uploaded or stored.',
    ],
    prohibitedClaims: ['managed verification', 'hosted verification service'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'self-hosted-verifier',
    status: 'available',
    evidence: ['github.com/peacprotocol/peac', 'Apache-2.0'],
    approvedClaims: [
      'The verifier and protocol are open source and self-hostable.',
      'Run verification inside your own environment.',
    ],
    prohibitedClaims: ['fully managed deployment', 'we host the verifier for you'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'supported-self-hosting',
    status: 'limited_pilot',
    evidence: ['/pricing'],
    approvedClaims: [
      'Originary offers scoped implementation support for self-hosted deployments.',
    ],
    prohibitedClaims: ['24/7 support', 'formal support SLA', 'guaranteed response time'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'hosted-verification',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['hosted verification', 'verification as a service', 'managed verification'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'managed-signing',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['managed signing', 'we sign records for you', 'hosted signing service'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'kms-integrations',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['managed KMS', 'cloud KMS integration', 'built-in key management service'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'record-storage',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['managed record storage', 'we store your records', 'hosted record storage'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'dashboards',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['hosted dashboard', 'analytics dashboard', 'management console'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'exports',
    status: 'available',
    evidence: ['@peac/audit createDisputeBundle', '@peac/cli bundle'],
    approvedClaims: ['Export records and package them into a portable bundle.'],
    prohibitedClaims: [],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'evidence-bundles',
    status: 'available',
    evidence: ['@peac/audit', 'verifyBundle', 'readDisputeBundle'],
    approvedClaims: [
      'Package signed records into a portable, independently verifiable bundle.',
    ],
    prohibitedClaims: ['compliance bundle', 'procurement-grade evidence bundle'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'sla',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['formal SLA', 'uptime guarantee', 'guaranteed availability'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'security-review',
    status: 'limited_pilot',
    evidence: ['/trust', '/security'],
    approvedClaims: [
      'Originary will walk security teams through deployment and verification boundaries.',
    ],
    prohibitedClaims: ['SOC 2 Type II', 'ISO 27001 certified', 'independently audited controls'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'procurement-documents',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['procurement-grade evidence', 'standard procurement package'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'dpa',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['standard DPA', 'data processing agreement available'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'subprocessors',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['published subprocessor list'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'regional-hosting',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['regional hosting', 'data residency guarantees', 'in-region deployment'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
  {
    id: 'incident-support',
    status: 'not_offered',
    evidence: [],
    approvedClaims: [],
    prohibitedClaims: ['24/7 incident response', 'on-call incident support'],
    owner: OWNER,
    lastReviewedAt: REVIEWED,
  },
]

export const CAPABILITY_BY_ID: Readonly<Record<string, Capability>> = Object.freeze(
  Object.fromEntries(CAPABILITIES.map((c) => [c.id, c])),
)

/** Every phrase no public surface may render, flattened from the registry. */
export const PROHIBITED_CLAIMS: readonly string[] = Array.from(
  new Set(CAPABILITIES.flatMap((c) => c.prohibitedClaims)),
)

export function capabilityStatus(id: string): CapabilityStatus | undefined {
  return CAPABILITY_BY_ID[id]?.status
}
