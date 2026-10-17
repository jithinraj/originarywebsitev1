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

type ManifestFile = {
  filename: string
  platform: string
  description?: string
  url?: string
  size: number
  sha256?: string
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

  const version = manifest.version === 'latest' ? 'latest' : `v${manifest.version}`

  return (
    <div className="dl-files">
      {manifest.files.map((file: ManifestFile) => (
        <div key={file.filename} className="dl-file">
          <p className="dl-file-by">Originary</p>
          <h3 className="dl-file-t">
            {file.platform === 'Templates' ? 'PEAC Templates' : `PEAC Protocol, ${file.platform}`}
          </h3>
          <p className="dl-file-d">
            {file.description ||
              (file.platform === 'Templates'
                ? 'Ready-to-use policy templates for different use cases'
                : 'Command-line tool for verifying PEAC policy files')}
          </p>
          <p className="dl-file-name">{file.filename}</p>
          <p className="dl-file-meta">
            <span>{version}</span>
            {file.size > 0 && <span>{formatBytes(file.size)}</span>}
            {file.url && <span>from GitHub</span>}
          </p>
          {file.sha256 && (
            <p className="dl-file-sha">
              SHA-256: <code>{file.sha256}</code>
            </p>
          )}
          <a
            className="dl-file-btn"
            href={file.url || `/downloads/${file.filename}`}
            target={file.url ? '_blank' : undefined}
            rel={file.url ? 'noopener noreferrer' : undefined}
            download={!file.url}
            aria-label={`Download ${file.filename}`}
          >
            <Download size={16} aria-hidden />
            Download
          </a>
        </div>
      ))}
    </div>
  )
}
