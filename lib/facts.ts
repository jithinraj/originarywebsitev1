/**
 * Evidence-backed facts registry.
 *
 * Every numeric, version, or status claim on the site MUST import from here.
 * Each fact links to a verifiable source so stale numbers and
 * unverifiable claims are structurally prevented.
 *
 * Vocabulary mirrors the PEAC release-state docs exactly.
 */
export const FACTS = {
  // ---------------------------------------------------------------------------
  // Release state (see github.com/peacprotocol/peac/releases)
  // ---------------------------------------------------------------------------

  /** Stable release on `latest` npm dist-tag */
  stableVersion: 'v0.12.0',

  /**
   * Current stable wire format (Wire 0.2).
   * Introduced in v0.12.0. JWS typ: interaction-record+jwt.
   */
  stableWireFormat: 'interaction-record+jwt',

  /**
   * Legacy wire format (Wire 0.1). Frozen; decoded but not issued.
   * JWS typ: peac-receipt/0.1.
   */
  legacyWireFormat: 'peac-receipt/0.1',

  /**
   * @deprecated Use stableWireFormat or legacyWireFormat.
   * Retained for backward compatibility with existing references.
   */
  wireFormat: 'peac-receipt/0.1',

  // ---------------------------------------------------------------------------
  // Package counts (see publish-manifest.json + pnpm ls --depth 0)
  // ---------------------------------------------------------------------------

  /** Packages in the npm publish manifest (@peac/* on npm) */
  publishedPackageCount: 28,

  /** Public packages in the monorepo (published + internal-public) */
  publicPackageCount: 46,

  /** Total workspace packages (public + private + examples + apps) */
  workspacePackageCount: 85,

  // ---------------------------------------------------------------------------
  // Quality metrics (see CI output for latest tag)
  // ---------------------------------------------------------------------------

  /** pnpm test -- passing test count as of v0.12.0 */
  testsCount: 5675,

  /** pnpm build -- build targets as of v0.12.0 */
  buildTargets: 84,

  // ---------------------------------------------------------------------------
  // Licensing and identity
  // ---------------------------------------------------------------------------

  license: 'Apache-2.0',
  protocolName: 'PEAC',
  companyName: 'Originary',
  legalEntity: 'Poem, Inc.',
  domain: 'originary.xyz',
  protocolDomain: 'peacprotocol.org',

  // ---------------------------------------------------------------------------
  // Category (governs all site copy)
  // ---------------------------------------------------------------------------

  primaryCategory: 'Verifiable interaction records',
  primaryTagline: 'The production stack for verifiable interaction records.',

  // ---------------------------------------------------------------------------
  // External links
  // ---------------------------------------------------------------------------

  repoUrl: 'https://github.com/peacprotocol/peac',
  releasesUrl: 'https://github.com/peacprotocol/peac/releases',
  npmOrgUrl: 'https://www.npmjs.com/org/peac',
  licenseUrl: 'https://github.com/peacprotocol/peac/blob/main/LICENSE',
  peacTxtUrl: '/.well-known/peac.txt',
  x402PR: 'https://github.com/coinbase/x402/pull/1003',
} as const
