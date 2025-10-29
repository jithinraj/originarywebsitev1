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
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--space-1)'
              }}>
                {file.platform === 'Templates'
                  ? 'Ready-to-use policy templates for different use cases'
                  : 'Command-line tool for verifying PEAC policy files'
                }
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--gray-500)',
                fontWeight: 500
              }}>
                {file.filename}
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
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}