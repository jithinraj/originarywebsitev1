import { Download } from 'lucide-react'
import fs from 'fs/promises'
import path from 'path'

async function getManifest() {
  try {
    const manifestPath = path.join(process.cwd(), 'public', 'downloads', 'manifest.json')
    const data = await fs.readFile(manifestPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Failed to read manifest:', error)
    return null
  }
}

export default async function DownloadsServer() {
  const manifest = await getManifest()

  if (!manifest) {
    return <div>Error loading downloads. Please try again later.</div>
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  return (
    <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
      {manifest.files.map((file: any) => (
        <div
          key={file.filename}
          style={{
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6)',
            background: 'var(--surface-elevated)'
          }}
        >
          <div style={{
            marginBottom: 'var(--space-4)'
          }}>
            <h3 style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 600,
              marginBottom: 'var(--space-2)'
            }}>
              {file.platform === 'Templates' ? 'PEAC Templates' : `PEAC Protocol - ${file.platform}`}
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-sm)',
              marginBottom: 'var(--space-1)'
            }}>
              {file.description || (file.platform === 'Templates'
                ? 'Ready-to-use policy templates for different use cases'
                : 'Command-line tool for verifying PEAC policy files')
              }
            </p>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-tertiary)',
              fontWeight: 500,
              marginBottom: 'var(--space-3)',
              wordBreak: 'break-all'
            }}>
              {file.filename}
            </p>
            <a
              href={file.url || `/downloads/${file.filename}`}
              target={file.url ? '_blank' : undefined}
              rel={file.url ? 'noopener noreferrer' : undefined}
              download={!file.url}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2) var(--space-3)',
                background: 'var(--accent-brand)',
                color: 'var(--white)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500
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
            color: 'var(--text-secondary)'
          }}>
            <span>v{manifest.version}</span>
            {file.size > 0 && (
              <>
                <span>·</span>
                <span>{formatBytes(file.size)}</span>
              </>
            )}
            {file.sha256 && (
              <>
                <span>·</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span>SHA-256:</span>
                  <code style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    background: 'var(--surface-card)',
                    padding: '2px 4px',
                    borderRadius: 'var(--radius-sm)',
                    wordBreak: 'break-all'
                  }}>
                    {file.sha256}
                  </code>
                </div>
              </>
            )}
            {file.url && (
              <>
                <span>·</span>
                <span>GitHub Release</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}