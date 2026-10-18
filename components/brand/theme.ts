import { BRAND } from '@/lib/brand-tokens'

/**
 * Theme choice shared by the root layout (server) and ThemeToggle (client).
 * Light is the default. Dark follows the reader's system setting, and the theme
 * toggle overrides the system with an explicit choice (brand guidelines v17, dark theme).
 */
export const THEME_STORAGE_KEY = 'originary-theme'

/** Browser UI colour per theme; mirrors --bg in app/originary-tokens.css. */
export const THEME_COLOR = { light: BRAND.bg, dark: BRAND.surfaceDark } as const

export const DARK_QUERY = '(prefers-color-scheme: dark)'

/**
 * Inline and render-blocking in <head>: applies the saved choice, or else the system
 * setting, before first paint, and follows system changes while no choice is saved.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var d=document.documentElement,q=window.matchMedia('${DARK_QUERY}');var saved=function(){try{var v=localStorage.getItem('${THEME_STORAGE_KEY}');return v==='dark'||v==='light'?v:null}catch(e){return null}};var apply=function(){var t=saved()||(q.matches?'dark':'light');d.setAttribute('data-theme',t);d.style.colorScheme=t;var c=t==='dark'?'${THEME_COLOR.dark}':'${THEME_COLOR.light}';document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.setAttribute('content',c)})};apply();document.addEventListener('DOMContentLoaded',apply);var f=function(){if(!saved())apply()};if(q.addEventListener)q.addEventListener('change',f);else q.addListener(f)}catch(e){}})()`
