'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (stored) {
      setTheme(stored)
      if (stored === 'light') {
        document.documentElement.setAttribute('data-theme', 'light')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }
    } else {
      // Respect system preference if no stored preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
      if (prefersLight) {
        setTheme('light')
        document.documentElement.setAttribute('data-theme', 'light')
      } else {
        // Default to dark mode
        setTheme('dark')
        document.documentElement.removeAttribute('data-theme')
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme" disabled>
        <span className="theme-icon" />
        <style jsx>{`
          .theme-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-default);
            background: var(--surface-card);
            cursor: pointer;
            transition: all var(--duration-200) ease;
          }
          .theme-icon {
            width: 18px;
            height: 18px;
            background: var(--text-tertiary);
            border-radius: 50%;
          }
        `}</style>
      </button>
    )
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg
          className="theme-icon sun"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          className="theme-icon moon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}

      <style jsx>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-default);
          background: var(--surface-card);
          cursor: pointer;
          transition: all var(--duration-200) ease;
          color: var(--text-secondary);
        }

        .theme-toggle:hover {
          border-color: var(--border-hover);
          background: var(--surface-card-hover);
          color: var(--text-primary);
          transform: scale(1.05);
        }

        .theme-toggle:active {
          transform: scale(0.95);
        }

        .theme-icon {
          transition: transform var(--duration-300) ease;
        }

        .theme-toggle:hover .theme-icon {
          transform: rotate(15deg);
        }

        .theme-toggle:hover .sun {
          transform: rotate(45deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .theme-toggle,
          .theme-icon {
            transition: none;
          }
          .theme-toggle:hover .theme-icon,
          .theme-toggle:hover .sun {
            transform: none;
          }
        }
      `}</style>
    </button>
  )
}
