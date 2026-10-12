import { BRAND } from '@/lib/brand-tokens'

/**
 * Theme choice shared by the root layout (server) and ThemeToggle (client).
 * Light is the default for every visitor; dark is only the reader's explicit choice.
 */
export const THEME_STORAGE_KEY = 'originary-theme'

/** Browser UI colour per theme; mirrors --bg in app/originary-tokens.css. */
export const THEME_COLOR = { light: BRAND.bg, dark: BRAND.surfaceDark } as const

/** Inline and render-blocking in <head>: applies the saved choice before first paint. */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}')==='dark'?'dark':'light';var d=document.documentElement;d.setAttribute('data-theme',t);d.style.colorScheme=t;var c=t==='dark'?'${THEME_COLOR.dark}':'${THEME_COLOR.light}';var s=function(){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',c)};s();document.addEventListener('DOMContentLoaded',s)}catch(e){}})()`
