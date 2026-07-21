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

  /** Latest public release tag. */
  currentVersion: 'v0.16.3',

  /** Public release date for currentVersion. */
  currentReleaseDate: '2026-07-21',

  /** npm dist-tag used for currentVersion. */
  currentDistTag: 'latest',

  /** Stable release on the npm `latest` dist-tag */
  stableVersion: 'v0.16.3',

  /** Current stable wire format. JWS typ: interaction-record+jwt. */
  stableWireFormat: 'interaction-record+jwt',

  /** Legacy wire format. JWS typ: peac-receipt/0.1. */
  legacyWireFormat: 'peac-receipt/0.1',


  // ---------------------------------------------------------------------------
  // Package counts
  // ---------------------------------------------------------------------------

  /** Packages published to npm for the current release. */
  publishedPackageCount: 36,

  /** Public packages in the monorepo. */
  publicPackageCount: 36,

  /** Total workspace packages. */
  workspacePackageCount: 68,

  // ---------------------------------------------------------------------------
  // Quality metrics
  // ---------------------------------------------------------------------------

  /** Release public name. */
  releaseName: 'Gateway Decision Evidence',

  /** Test file count. */
  testFilesCount: 489,

  /** Current Wire 0.2 JWS typ. */
  currentTyp: 'interaction-record+jwt',

  /** Legacy wire identifier, compatibility contexts only. */
  legacyTyp: 'peac-receipt/0.1',

  /** Test count. */
  testsCount: 12729,

  /** Build targets. */
  buildTargets: 113,

  /** Conformance requirement IDs. */
  conformanceRequirements: 290,

  /** Minimum Node.js version required */
  nodeMinVersion: '22.13.0',

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

  primaryCategory: 'Signed, portable interaction records',
  primaryTagline: 'Verify what agents reported.',
  plainSentence: 'Portable signed records for agent, API, MCP, and cross-runtime interactions.',

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
