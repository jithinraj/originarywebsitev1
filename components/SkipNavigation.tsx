'use client'

export default function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="skip-nav"
      onFocus={(e) => e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })}
    >
      Skip to main content
    </a>
  )
}