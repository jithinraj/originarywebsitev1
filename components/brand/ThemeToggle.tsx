'use client'

import { useSyncExternalStore } from 'react'
import { DARK_QUERY, THEME_COLOR, THEME_STORAGE_KEY } from './theme'

/**
 * Light / dark theme switch. Light is the default; dark follows the reader's
 * system setting until they pick a theme here. A pick that differs from the
 * system is remembered in localStorage; picking the system's own theme clears it,
 * so the site follows the system again.
 *
 * THEME_INIT_SCRIPT (./theme.ts) in the root layout applies the saved choice or the
 * system setting before first paint, so a dark-theme reader never sees a light flash.
 * Both themes use the same token roles (app/originary-tokens.css).
 */

type Theme = 'light' | 'dark'

function readTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  const onStorage = (e: StorageEvent) => {
    if (e.key !== THEME_STORAGE_KEY) return
    const v = e.newValue
    applyTheme(v === 'dark' || v === 'light' ? v : systemTheme(), false)
  }
  window.addEventListener('storage', onStorage)
  return () => {
    mo.disconnect()
    window.removeEventListener('storage', onStorage)
  }
}

function applyTheme(next: Theme, persist = true) {
  const root = document.documentElement
  root.setAttribute('data-theme', next)
  root.style.colorScheme = next
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', THEME_COLOR[next]))
  if (!persist) return
  try {
    if (next === systemTheme()) localStorage.removeItem(THEME_STORAGE_KEY)
    else localStorage.setItem(THEME_STORAGE_KEY, next)
  } catch {
    // Storage blocked (private mode): the switch still works for this page view.
  }
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  )
}

export function ThemeToggle({ className }: { className?: string }) {
  // Server render and first client render agree on light; the store then reports the real attribute.
  const theme = useSyncExternalStore<Theme>(subscribe, readTheme, () => 'light')
  const dark = theme === 'dark'
  // A toggle button keeps one name and reports its state through aria-pressed;
  // a name that flips as well reads as "Switch to light theme, pressed".
  const title = dark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      type="button"
      className={className}
      onClick={() => applyTheme(dark ? 'light' : 'dark')}
      aria-label="Dark theme"
      aria-pressed={dark}
      title={title}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeToggle
