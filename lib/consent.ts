/**
 * Analytics consent, as /privacy describes it: nothing runs until the reader opts in, the choice is
 * stored in this browser, and a Global Privacy Control or Do Not Track signal counts as a no.
 */
export const CONSENT_KEY = 'originary-consent'

/** Fired on window to open the choices panel (the footer's Privacy choices link). */
export const CHOICES_EVENT = 'originary:privacy-choices'

/** Fired on window after the stored choice changes. */
export const CONSENT_EVENT = 'originary:consent'

export type Consent = 'granted' | 'denied'

/** A stored choice is asked again after a year. */
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000

export function browserOptOut(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string }
  const win = window as Window & { doNotTrack?: string }
  return nav.globalPrivacyControl === true || nav.doNotTrack === '1' || win.doNotTrack === '1' || nav.msDoNotTrack === '1'
}

export function readConsent(): Consent | null {
  try {
    const [value, at] = (localStorage.getItem(CONSENT_KEY) ?? '').split(':')
    if (value !== 'granted' && value !== 'denied') return null
    return Date.now() - Number(at) < MAX_AGE_MS ? value : null
  } catch {
    return null
  }
}

/** Session fallback when storage is blocked (private mode): the choice holds for this page view. */
let unstored: Consent | null = null

export function readStoredConsent(): Consent | null {
  return readConsent() ?? unstored
}

export function writeConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, `${value}:${Date.now()}`)
  } catch {
    unstored = value
  }
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange)
    window.removeEventListener('storage', onChange)
  }
}

export function openPrivacyChoices() {
  window.dispatchEvent(new Event(CHOICES_EVENT))
}
