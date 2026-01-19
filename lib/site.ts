/**
 * Site-wide constants for Originary
 * Single source of truth for URLs and configuration
 */

export const SITE_URL = 'https://www.originary.xyz'

export const SITE_NAME = 'Originary'

export const TWITTER_HANDLE = '@originaryx'

/**
 * Convert a relative path to absolute URL
 * Use sparingly - prefer relative paths with metadataBase
 */
export function absUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}
