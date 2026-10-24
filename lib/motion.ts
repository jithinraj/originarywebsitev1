/**
 * The reader's motion choice. Pausing stops every looping animation on the site (the bit field, the
 * hero flow, the logo rows, the log stream, the /about constellation and marquee) and is remembered in
 * this browser. Looping motion needs a way to pause it (WCAG 2.2.2); the OS reduced-motion setting
 * already stops all of it.
 */
export const MOTION_STORAGE_KEY = 'originary-motion'

/** Inline in <head>: applies a saved pause before first paint. */
export const MOTION_INIT_SCRIPT = `(function(){try{if(localStorage.getItem('${MOTION_STORAGE_KEY}')==='paused')document.documentElement.setAttribute('data-motion','paused')}catch(e){}})()`

export function isMotionPaused(): boolean {
  return document.documentElement.getAttribute('data-motion') === 'paused'
}

/** True when nothing should loop: the OS asks for reduced motion, or the reader paused the site. */
export function prefersStill(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || isMotionPaused()
}

export function setMotionPaused(paused: boolean) {
  const root = document.documentElement
  if (paused) root.setAttribute('data-motion', 'paused')
  else root.removeAttribute('data-motion')
  try {
    if (paused) localStorage.setItem(MOTION_STORAGE_KEY, 'paused')
    else localStorage.removeItem(MOTION_STORAGE_KEY)
  } catch {
    // Storage blocked (private mode): the pause holds for this page view.
  }
}

/** Calls onChange when the pause or the OS setting changes; returns the unsubscribe. */
export function onMotionChange(onChange: () => void): () => void {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  const mo = new MutationObserver(onChange)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] })
  const onStorage = (e: StorageEvent) => {
    if (e.key === MOTION_STORAGE_KEY) setMotionPaused(e.newValue === 'paused')
  }
  mq.addEventListener?.('change', onChange)
  window.addEventListener('storage', onStorage)
  return () => {
    mo.disconnect()
    mq.removeEventListener?.('change', onChange)
    window.removeEventListener('storage', onStorage)
  }
}
