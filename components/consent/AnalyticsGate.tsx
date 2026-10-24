'use client'

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { Analytics } from '@vercel/analytics/next'
import {
  CHOICES_EVENT,
  browserOptOut,
  readStoredConsent,
  subscribeConsent,
  writeConsent,
  type Consent,
} from '@/lib/consent'
import { ConsentPanel } from './ConsentPanel'

/**
 * The only place analytics load. Google Analytics, Amplitude, Microsoft Clarity and Vercel Analytics
 * start after the reader allows them, never under Global Privacy Control or Do Not Track, and
 * Clarity never records /verify, which promises that nothing pasted there leaves the browser.
 */
const GA_ID = 'G-FPG3HTSN2R'
const CLARITY_ID = 'u5xxnbz8pn'
const AMPLITUDE_KEY = '45962ad6d2c1acb615d7aa4e01920ec0'

const clarityOff = (path: string) => path === '/verify' || path.startsWith('/verify/')

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  clarity?: (...args: unknown[]) => void
}

function loadGoogle() {
  const w = window as AnalyticsWindow
  if (w.dataLayer) return
  w.dataLayer = []
  // gtag.js reads Arguments objects from the data layer, so this stays a plain function.
  w.gtag = function gtag() {
    w.dataLayer!.push(arguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', GA_ID)
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

function loadAmplitude() {
  import('@amplitude/analytics-browser')
    .then((amplitude) =>
      amplitude.init(AMPLITUDE_KEY, {
        autocapture: false,
        defaultTracking: { pageViews: true, sessions: true, formInteractions: false, fileDownloads: false },
      }),
    )
    .catch(() => {})
}

function loadClarity() {
  import('@microsoft/clarity').then((m) => m.default.init(CLARITY_ID)).catch(() => {})
}

/** First-party cookies and storage the analytics tools set; cleared when the reader withdraws. */
const ANALYTICS_NAME = /^(_ga|_gid|_gat|_clck|_clsk|AMP_|amp_)/

function clearAnalyticsData() {
  const host = location.hostname
  const site = host.split('.').slice(-2).join('.')
  for (const pair of document.cookie.split(';')) {
    const name = pair.split('=')[0].trim()
    if (!ANALYTICS_NAME.test(name)) continue
    for (const domain of ['', host, `.${host}`, `.${site}`]) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
  try {
    Object.keys(localStorage)
      .filter((k) => ANALYTICS_NAME.test(k))
      .forEach((k) => localStorage.removeItem(k))
  } catch {
    // Storage blocked: nothing was stored there either.
  }
}

const noSubscribe = () => () => {}

export default function AnalyticsGate() {
  const pathname = usePathname() ?? '/'
  // Server and first client render agree on "no choice yet"; the stores then report the browser's.
  const optOut = useSyncExternalStore(noSubscribe, browserOptOut, () => false)
  const stored = useSyncExternalStore(subscribeConsent, readStoredConsent, () => null)
  const consent: Consent | null = optOut ? 'denied' : stored
  const [open, setOpen] = useState(false)
  const [asked, setAsked] = useState(false)
  const loaded = useRef({ base: false, clarity: false, clarityPaused: false })

  // Ask once the page has painted, so the question never competes with the content.
  useEffect(() => {
    if (consent !== null || asked) return
    const t = window.setTimeout(() => {
      setAsked(true)
      setOpen(true)
    }, 700)
    return () => window.clearTimeout(t)
  }, [consent, asked])

  useEffect(() => {
    const onChoices = () => setOpen(true)
    window.addEventListener(CHOICES_EVENT, onChoices)
    return () => window.removeEventListener(CHOICES_EVENT, onChoices)
  }, [])

  useEffect(() => {
    if (consent !== 'granted') return
    const l = loaded.current
    if (!l.base) {
      l.base = true
      loadGoogle()
      loadAmplitude()
    }
    const w = window as AnalyticsWindow
    if (clarityOff(pathname)) {
      if (l.clarity && !l.clarityPaused) {
        w.clarity?.('pause')
        l.clarityPaused = true
      }
      return
    }
    if (!l.clarity) {
      l.clarity = true
      loadClarity()
    } else if (l.clarityPaused) {
      w.clarity?.('resume')
      l.clarityPaused = false
    }
  }, [consent, pathname])

  const choose = useCallback((next: Consent) => {
    setOpen(false)
    writeConsent(next)
    if (next === 'denied' && loaded.current.base) {
      // Scripts that already ran cannot be unloaded: clear what they stored and start a clean page.
      clearAnalyticsData()
      window.location.reload()
    }
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      {consent === 'granted' ? <Analytics /> : null}
      {open ? <ConsentPanel consent={consent} optOut={optOut} onChoose={choose} onClose={close} /> : null}
    </>
  )
}
