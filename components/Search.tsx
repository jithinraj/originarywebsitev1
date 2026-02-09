'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react'

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

// Static search index - add more pages as needed
const searchIndex: SearchResult[] = [
  { title: 'Home', description: 'Infrastructure and tools for AI agents', href: '/', category: 'Pages' },
  { title: 'Pricing', description: 'Open source and cloud pricing plans', href: '/pricing', category: 'Pages' },
  { title: 'Developers', description: 'AI infrastructure tools and PEAC Protocol SDK', href: '/developers', category: 'Pages' },
  { title: 'Demo', description: 'PEAC Protocol transaction trace', href: '/demo', category: 'Pages' },
  { title: 'Verify', description: 'Verify PEAC-Receipts and signatures', href: '/verify', category: 'Tools' },
  { title: 'Trace', description: 'AI crawler analytics and compliance', href: '/trace', category: 'Products' },
  { title: 'Receipts', description: 'Cryptographic proof for AI interactions', href: '/receipts', category: 'Products' },
  { title: 'Gateway 402', description: 'HTTP 402 payment gateway for APIs', href: '/products/gateway-402', category: 'Products' },
  { title: 'Downloads', description: 'CLI and policy templates', href: '/downloads', category: 'Resources' },
  { title: 'Blog', description: 'Latest updates and articles', href: '/blog', category: 'Resources' },
  { title: 'Contact', description: 'Get in touch with us', href: '/contact', category: 'Company' },
  { title: 'About', description: 'About Originary and Poem, Inc.', href: '/about', category: 'Company' },
  { title: 'Status', description: 'System status and updates', href: '/status', category: 'Company' },
  { title: 'Terms', description: 'Terms of service', href: '/terms', category: 'Legal' },
  { title: 'Privacy', description: 'Privacy policy', href: '/privacy', category: 'Legal' },
  { title: 'HTTP 402', description: 'HTTP 402 Payment Required integration', href: '/integrations/http-402', category: 'Integrations' },
  { title: 'x402', description: 'x402 protocol integration', href: '/integrations/x402', category: 'Integrations' },
  { title: 'PEAC Protocol', description: 'Open protocol specification', href: '/peac', category: 'Protocol' },
  { title: 'Declare', description: 'PEAC Policy Kit', href: '/declare', category: 'Products' },
  { title: 'Cloud', description: 'Originary Cloud platform', href: '/cloud', category: 'Products' },
]

interface SearchProps {
  placeholder?: string
  className?: string
}

export default function Search({ placeholder = 'Search...', className = '' }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const search = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([])
      return
    }

    const lower = q.toLowerCase()
    const filtered = searchIndex.filter(
      item =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    )
    setResults(filtered.slice(0, 8))
    setSelectedIndex(-1)
  }, [])

  useEffect(() => {
    search(query)
  }, [query, search])

  useEffect(() => {
    // Guard against SSR
    if (typeof document === 'undefined') return

    const handleClickOutside = (e: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node) &&
        !inputRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && results[selectedIndex]) {
        router.push(results[selectedIndex].href)
        setIsOpen(false)
        setQuery('')
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleResultClick = (href: string) => {
    router.push(href)
    setIsOpen(false)
    setQuery('')
  }

  return (
    <div className={`search-wrapper ${className}`}>
      <SearchIcon size={18} className="search-icon" />
      <input
        ref={inputRef}
        type="text"
        className="search-input focus-ring"
        placeholder={placeholder}
        value={query}
        onChange={e => {
          setQuery(e.target.value)
          setIsOpen(true)
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        aria-label="Search"
        aria-expanded={isOpen && results.length > 0}
        aria-controls="search-results"
      />
      {query && (
        <button
          onClick={() => {
            setQuery('')
            inputRef.current?.focus()
          }}
          style={{
            position: 'absolute',
            right: 'var(--space-3)',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            padding: 'var(--space-1)'
          }}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}

      {isOpen && results.length > 0 && (
        <div ref={resultsRef} className="search-results" id="search-results" role="listbox">
          {results.map((result, index) => (
            <div
              key={result.href}
              className="search-result-item"
              role="option"
              aria-selected={index === selectedIndex}
              onClick={() => handleResultClick(result.href)}
              style={{
                background: index === selectedIndex ? 'var(--surface-subtle)' : undefined
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {result.title}
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)' }}>
                    {result.description}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--accent-brand)',
                    background: 'var(--accent-brand-subtle)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {result.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="search-results" style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-tertiary)', margin: 0 }}>
            No results found for &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </div>
  )
}
