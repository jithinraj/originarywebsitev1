/**
 * Legacy route redirects.
 *
 * The single definition of the legacy-URL redirect map, consumed by
 * next.config.js (emits the permanent redirects), scripts/check-redirects.mjs
 * (static hygiene + required assertion), and
 * scripts/check-redirects-integration.mjs (built-server assertions). Do not
 * duplicate this map elsewhere. Each entry becomes a permanent (308) redirect
 * from a legacy URL to its current canonical page.
 */
export const LEGACY_ROUTE_REDIRECTS = [
  { source: '/ai', destination: '/product' },
  { source: '/system-of-record', destination: '/how-it-works' },
  { source: '/originary-ai', destination: '/product' },
]
