/**
 * Evidence-backed facts registry.
 *
 * Every numeric or version claim on the site MUST import from here.
 * Each fact links to a verifiable source so stale numbers and
 * unverifiable claims are structurally prevented.
 */
export const FACTS = {
  /** See github.com/peacprotocol/peac/releases */
  protocolVersion: 'v0.10.13',

  /** Frozen until v1.0 -- see docs/specs/PROTOCOL-BEHAVIOR.md */
  wireFormat: 'peac-receipt/0.1',

  /** 22 packages in @peac/* org on npm */
  packagesCount: 22,

  /** pnpm test -- 4014 as of v0.10.13 */
  testsCount: 4014,

  /** pnpm build -- 75 as of v0.10.13 */
  buildTargets: 75,

  license: 'Apache-2.0',

  /** https://github.com/coinbase/x402/pull/1003 */
  x402PR: 'https://github.com/coinbase/x402/pull/1003',

  /** /.well-known/peac.txt on this site */
  peacTxtUrl: '/.well-known/peac.txt',

  releasesUrl: 'https://github.com/peacprotocol/peac/releases',
  npmOrgUrl: 'https://www.npmjs.com/org/peac',
  repoUrl: 'https://github.com/peacprotocol/peac',
  licenseUrl: 'https://github.com/peacprotocol/peac/blob/main/LICENSE',
} as const
