/**
 * Single source of truth for the retired-route quarantine.
 *
 * Consumed by:
 *   - next.config.js            (generates the permanent redirects)
 *   - scripts/check-redirects.mjs            (static hygiene + required assertion)
 *   - scripts/check-redirects-integration.mjs (built-server assertions)
 *
 * Do not duplicate this map anywhere else. Each entry becomes a permanent (308)
 * redirect from an Originary-branded/earlier-generation URL to its current
 * canonical successor.
 */
export const RETIRED_ROUTES = [
  { source: '/ai', destination: '/product' },
  { source: '/system-of-record', destination: '/how-it-works' },
  { source: '/originary-ai', destination: '/product' },
]
