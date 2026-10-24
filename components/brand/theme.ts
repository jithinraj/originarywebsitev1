import { BRAND } from '@/lib/brand-tokens'

/**
 * Theme choice shared by the root layout (server) and ThemeToggle (client).
 * Light is the default for every reader, whatever their system setting. Dark applies
 * only after the reader picks it with the theme toggle (founder decision, 24 Oct 2026;
 * replaces the v17 guide's follow-the-system rule).
 */
export const THEME_STORAGE_KEY = 'originary-theme'

/** Browser UI colour per theme; mirrors --bg in app/originary-tokens.css. */
export const THEME_COLOR = { light: BRAND.bg, dark: BRAND.surfaceDark } as const

/**
 * Inline and render-blocking in <head>: applies a saved dark choice before first paint,
 * so a reader who picked dark never sees a light flash. Everyone else gets light.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var d=document.documentElement;var saved=function(){try{return localStorage.getItem('${THEME_STORAGE_KEY}')==='dark'?'dark':'light'}catch(e){return 'light'}};var apply=function(){var t=saved();d.setAttribute('data-theme',t);d.style.colorScheme=t;var c=t==='dark'?'${THEME_COLOR.dark}':'${THEME_COLOR.light}';document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute('content',c)})};apply();document.addEventListener('DOMContentLoaded',apply)}catch(e){}})()`
