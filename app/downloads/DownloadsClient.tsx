'use client'

import { useState, useEffect } from 'react'
import { Download, Copy, Check } from 'lucide-react'

export default function DownloadsClient() {
  const [manifest, setManifest] = useState<any>(null)
  const [copiedHash, setCopiedHash] = useState<string | null>(null)

  useEffect(() => {
    fetch('/downloads/manifest.json')
      .then(res => res.json())
      .then(data => setManifest(data))
      .catch(console.error)
  }, [])

  const copyToClipboard = (text: string, hash: string) => {
    navigator.clipboard.writeText(text)
    setCopiedHash(hash)
    setTimeout(() => setCopiedHash(null), 2000)
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  if (!manifest) {
    return null
  }

  return (
    <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
      {manifest.files.map((file: any) => (
        <div
          key={file.filename}
          style={{
            border: '1px solid var(--gray-200)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6)',
            background: 'var(--white)'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-4)'
          }}>
            <div>
              <h3 style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                marginBottom: 'var(--space-2)'
              }}>
                {file.platform === 'Templates' ? 'PEAC Templates' : `Originary CLI - ${file.platform}`}
              </h3>
              <p style={{
                color: 'var(--gray-600)',
                fontSize: 'var(--text-sm)'
              }}>
                {file.platform === 'Templates'
                  ? 'Ready-to-use policy templates for different use cases'
                  : 'Command-line tool for verifying PEAC policy files'
                }
              </p>
            </div>
            <a
              href={`/downloads/${file.filename}`}
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-3) var(--space-4)',
                background: 'var(--brand-primary)',
                color: 'var(--white)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <Download size={16} />
              Download
            </a>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
            alignItems: 'center',
            fontSize: 'var(--text-sm)',
            color: 'var(--gray-600)'
          }}>
            <span>v{manifest.version}</span>
            <span>·</span>
            <span>{formatBytes(file.size)}</span>
            <span>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span>SHA-256:</span>
              <code style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                background: 'var(--gray-100)',
                padding: '2px 4px',
                borderRadius: 'var(--radius-sm)',
                wordBreak: 'break-all'
              }}>
                {file.sha256}
              </code>
              <button
                onClick={() => copyToClipboard(file.sha256, file.sha256)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px',
                  background: 'var(--gray-100)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  color: 'var(--gray-600)'
                }}
                title="Copy hash"
              >
                {copiedHash === file.sha256 ? (
                  <Check size={12} style={{ color: 'var(--success)' }} />
                ) : (
                  <Copy size={12} />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}