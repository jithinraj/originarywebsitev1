'use client'

import { useEffect } from 'react'

export default function HomeTheme() {
  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    let observer: IntersectionObserver | null = null

    // Intersection Observer for scroll animations
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      )

      document.querySelectorAll('.reveal, .stagger-reveal').forEach((el) => observer?.observe(el))
    } else {
      // Fallback: add class immediately for older browsers
      document.querySelectorAll('.reveal, .stagger-reveal').forEach((el) => el.classList.add('in-view'))
    }

    // 3D tilt effect for cards
    const cards = document.querySelectorAll('.tilt-card')

    cards.forEach((card) => {
      const cardEl = card as HTMLElement

      cardEl.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = cardEl.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 25
        const rotateY = (centerX - x) / 25

        cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
      })

      cardEl.addEventListener('mouseleave', () => {
        cardEl.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      })
    })

    return () => observer?.disconnect()
  }, [])

  return (
    <style jsx global>{`
      /* ============================================
         ORIGINARY DESIGN SYSTEM v4
         Light-first. Institutional. Protocol-grade.
         ============================================ */

      :root {
        /* Light Theme (Default) */
        --bg-0: #ffffff;
        --bg-1: #fafafa;
        --bg-2: #f5f5f5;
        --bg-3: #ebebeb;
        --bg-card: rgba(255, 255, 255, 0.8);
        --bg-elevated: #ffffff;

        --text-0: #0a0a0a;
        --text-1: #1a1a1a;
        --text-2: #525252;
        --text-3: #8a8a8a;

        /* Protocol-grade accent - deep blue */
        --accent: #0066ff;
        --accent-dim: rgba(0, 102, 255, 0.08);
        --accent-glow: rgba(0, 102, 255, 0.25);
        --accent-hover: #0052cc;

        /* Secondary accents */
        --success: #00a67e;
        --warning: #f59e0b;

        --border-subtle: rgba(0, 0, 0, 0.04);
        --border: rgba(0, 0, 0, 0.08);
        --border-strong: rgba(0, 0, 0, 0.12);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.08);
        --shadow-xl: 0 24px 60px rgba(0, 0, 0, 0.1);

        --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
        --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
        --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .home-shell {
        background: var(--bg-0);
        color: var(--text-1);
        font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }

      .home {
        position: relative;
        background: var(--bg-0);
        min-height: 100vh;
      }

      /* ============================================
         SUBTLE BACKGROUND PATTERN
         ============================================ */

      .home::before {
        content: '';
        position: fixed;
        inset: 0;
        background:
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 102, 255, 0.03) 0%, transparent 60%);
        pointer-events: none;
        z-index: 0;
      }

      /* Subtle dot pattern */
      .home::after {
        content: '';
        position: fixed;
        inset: 0;
        background-image: radial-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        background-size: 24px 24px;
        pointer-events: none;
        z-index: 0;
        opacity: 0.5;
      }

      /* ============================================
         LAYOUT
         ============================================ */

      .home-section {
        position: relative;
        padding: 140px 32px;
        z-index: 1;
      }

      .home-container {
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
      }

      /* ============================================
         TYPOGRAPHY - Clean, Institutional
         ============================================ */

      .home-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--accent);
      }

      .home-eyebrow::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--accent);
      }

      .home-title {
        font-family: var(--font-geist-sans), -apple-system, sans-serif;
        font-size: clamp(2.5rem, 5vw, 3.75rem);
        font-weight: 600;
        letter-spacing: -0.035em;
        line-height: 1.1;
        color: var(--text-0);
      }

      .home-title .dim {
        color: var(--text-3);
      }

      .home-title .accent {
        color: var(--accent);
      }

      .home-lede {
        font-size: 1.1875rem;
        line-height: 1.7;
        color: var(--text-2);
        max-width: 640px;
        font-weight: 400;
      }

      .home-mono {
        font-family: var(--font-jetbrains-mono), 'SF Mono', Consolas, monospace;
      }

      /* ============================================
         BUTTONS - Clean, Professional
         ============================================ */

      .home-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 14px 28px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 10px;
        text-decoration: none;
        cursor: pointer;
        border: none;
        transition: all 0.3s var(--ease-out-expo);
        overflow: hidden;
      }

      .home-btn-primary {
        background: var(--text-0);
        color: var(--bg-0);
      }

      .home-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
      }

      .home-btn-secondary {
        background: var(--bg-0);
        color: var(--text-0);
        border: 1px solid var(--border-strong);
      }

      .home-btn-secondary:hover {
        background: var(--bg-1);
        border-color: var(--text-3);
        transform: translateY(-2px);
      }

      .home-btn-ghost {
        background: transparent;
        color: var(--text-1);
        padding: 14px 20px;
      }

      .home-btn-ghost:hover {
        color: var(--accent);
      }

      /* ============================================
         CARDS - Clean with subtle depth
         ============================================ */

      .home-card {
        position: relative;
        background: var(--bg-elevated);
        border: 1px solid var(--border);
        border-radius: 16px;
        transition: all 0.4s var(--ease-out-expo);
        overflow: hidden;
      }

      .home-card:hover {
        border-color: var(--border-strong);
        box-shadow: var(--shadow-lg);
        transform: translateY(-4px);
      }

      .tilt-card {
        transition: transform 0.15s ease-out;
        transform-style: preserve-3d;
        will-change: transform;
      }

      /* ============================================
         CODE / TERMINAL
         ============================================ */

      .glass-terminal {
        background: var(--text-0);
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: var(--shadow-xl);
      }

      .terminal-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        background: rgba(255, 255, 255, 0.05);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .terminal-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }

      .terminal-dot.red { background: #ff5f57; }
      .terminal-dot.yellow { background: #febc2e; }
      .terminal-dot.green { background: #28c840; }

      .terminal-body {
        padding: 20px;
        font-family: var(--font-jetbrains-mono), monospace;
        font-size: 13px;
        line-height: 1.7;
        color: #e5e5e5;
      }

      /* ============================================
         PILL / TAG
         ============================================ */

      .home-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        border-radius: 6px;
        background: var(--accent-dim);
        color: var(--accent);
        border: 1px solid rgba(0, 102, 255, 0.15);
      }

      /* ============================================
         GRID BACKGROUND (subtle)
         ============================================ */

      .grid-bg {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(ellipse 60% 40% at 50% 0%, black 0%, transparent 70%);
        -webkit-mask-image: radial-gradient(ellipse 60% 40% at 50% 0%, black 0%, transparent 70%);
        pointer-events: none;
      }

      /* ============================================
         REVEAL ANIMATIONS
         ============================================ */

      .reveal {
        opacity: 0;
        transform: translateY(40px);
        transition:
          opacity 1s var(--ease-out-expo),
          transform 1s var(--ease-out-expo);
      }

      .reveal.in-view {
        opacity: 1;
        transform: translateY(0);
      }

      .reveal-delay-1 { transition-delay: 0.1s; }
      .reveal-delay-2 { transition-delay: 0.2s; }
      .reveal-delay-3 { transition-delay: 0.3s; }

      /* Stagger children */
      .stagger-reveal > * {
        opacity: 0;
        transform: translateY(30px);
        transition:
          opacity 0.8s var(--ease-out-expo),
          transform 0.8s var(--ease-out-expo);
      }

      .stagger-reveal.in-view > *:nth-child(1) { transition-delay: 0.05s; opacity: 1; transform: translateY(0); }
      .stagger-reveal.in-view > *:nth-child(2) { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
      .stagger-reveal.in-view > *:nth-child(3) { transition-delay: 0.15s; opacity: 1; transform: translateY(0); }
      .stagger-reveal.in-view > *:nth-child(4) { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }
      .stagger-reveal.in-view > *:nth-child(5) { transition-delay: 0.25s; opacity: 1; transform: translateY(0); }
      .stagger-reveal.in-view > *:nth-child(6) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }

      /* Hero entrance */
      .hero-enter {
        opacity: 0;
        transform: translateY(30px);
        animation: heroEnter 1s var(--ease-out-expo) forwards;
      }

      .hero-enter-1 { animation-delay: 0.1s; }
      .hero-enter-2 { animation-delay: 0.2s; }
      .hero-enter-3 { animation-delay: 0.3s; }
      .hero-enter-4 { animation-delay: 0.4s; }
      .hero-enter-5 { animation-delay: 0.5s; }

      @keyframes heroEnter {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* ============================================
         RESPONSIVE
         ============================================ */

      @media (max-width: 1024px) {
        .home-section {
          padding: 100px 24px;
        }
      }

      @media (max-width: 768px) {
        .home-section {
          padding: 80px 20px;
        }

        .home-title {
          font-size: clamp(2rem, 8vw, 2.75rem);
        }

        .home-lede {
          font-size: 1.0625rem;
        }
      }

      @media (max-width: 480px) {
        .home-section {
          padding: 64px 16px;
        }

        .home-btn {
          padding: 12px 24px;
          font-size: 14px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .reveal,
        .hero-enter,
        .stagger-reveal > * {
          animation: none !important;
          transition: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `}</style>
  )
}
