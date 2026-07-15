/**
 * Public claims: the approved and prohibited claim vocabulary, derived from the
 * capability registry. Components and the `check:claims` gate both read from
 * here so there is one place that decides what the site is allowed to say.
 */
import { CAPABILITIES, PROHIBITED_CLAIMS } from './capabilities'

export const APPROVED_CLAIMS: readonly string[] = Array.from(
  new Set(CAPABILITIES.flatMap((c) => c.approvedClaims)),
)

export { PROHIBITED_CLAIMS }

/**
 * Returns the prohibited phrases present in a block of rendered text, if any.
 * Matching is case-insensitive and whitespace-normalized so that reflowed or
 * multi-line copy cannot slip a prohibited claim past the check.
 */
export function findProhibitedClaims(text: string): string[] {
  const haystack = text.toLowerCase().replace(/\s+/g, ' ')
  return PROHIBITED_CLAIMS.filter((claim) => haystack.includes(claim.toLowerCase().replace(/\s+/g, ' ')))
}
