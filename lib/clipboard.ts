/**
 * Safe clipboard utilities with fallback support
 * Works across all browsers including older mobile browsers
 */

/**
 * Copy text to clipboard with fallback for browsers without Clipboard API
 * @param text - Text to copy to clipboard
 * @returns Promise that resolves when copy is complete
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // Modern browsers: Use Clipboard API
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(text)
      return true
    }

    // Fallback: Create temporary textarea element
    const textArea = document.createElement('textarea')
    textArea.value = text

    // Prevent scrolling to bottom of page
    textArea.style.cssText = 'position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent;'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    // Execute copy command
    const successful = document.execCommand('copy')
    document.body.removeChild(textArea)

    return successful
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}

/**
 * Check if running in browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

/**
 * Safe matchMedia wrapper with SSR support
 * @param query - Media query string
 * @returns MediaQueryList or null if not available
 */
export function safeMatchMedia(query: string): MediaQueryList | null {
  if (!isBrowser() || typeof window.matchMedia !== 'function') {
    return null
  }
  return window.matchMedia(query)
}

/**
 * Check if user prefers reduced motion
 * @returns true if user prefers reduced motion, false otherwise
 */
export function prefersReducedMotion(): boolean {
  const mq = safeMatchMedia('(prefers-reduced-motion: reduce)')
  return mq?.matches ?? false
}

/**
 * Check if user prefers dark color scheme
 * @returns true if user prefers dark mode, false otherwise
 */
export function prefersDarkMode(): boolean {
  const mq = safeMatchMedia('(prefers-color-scheme: dark)')
  return mq?.matches ?? false
}

/**
 * Check if device is touch-capable
 * @returns true if device supports touch, false otherwise
 */
export function isTouchDevice(): boolean {
  if (!isBrowser()) return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}
