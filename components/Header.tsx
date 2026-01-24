'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link className="brand" href="/" aria-label="Originary - Go to homepage">
          <div className="brand-icon"></div>
          <div className="brand-label">
            <strong>Originary</strong>
            <span>Proof for the agentic web</span>
          </div>
        </Link>

        <button
          className="mobile-menu-button md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="main-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="nav-links">
            <Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="/solutions" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
            <Link href="/developers" onClick={() => setIsMenuOpen(false)}>Developers</Link>
            <Link href="/resources" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="/company" onClick={() => setIsMenuOpen(false)}>Company</Link>
          </div>

          <div className="nav-actions">
            <Link href="/contact" className="btn secondary" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/signin" className="btn primary" onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Link>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div
            className="mobile-overlay md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  )
}
