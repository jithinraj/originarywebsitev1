import { ImageResponse } from '@vercel/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'

// Load Inter Display SemiBold for the brand wordmark
async function getFont() {
  // Try loading from the user's local fonts first, fall back to system
  try {
    const fontPath = join(process.cwd(), 'public', 'fonts', 'InterDisplay-SemiBold.otf')
    return await readFile(fontPath)
  } catch {
    // Fallback: fetch from CDN
    const res = await fetch('https://rsms.me/inter/font-files/InterDisplay-SemiBold.otf')
    return Buffer.from(await res.arrayBuffer())
  }
}

// OG image renderer requires raw hex. Values must match design-system.css
export async function GET() {
  const fontData = await getFont()

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F7F9FC',
          padding: '60px 80px',
        }}
      >
        {/* Logo wordmark - rendered with actual Inter Display SemiBold */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              fontSize: '48px',
              fontFamily: 'InterDisplay',
              fontWeight: 600,
              color: '#0B0B0C',
              letterSpacing: '-0.009em',
            }}
          >
            originary
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#111827',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Verify agent requests.
          </span>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#475467',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Apply policy. Keep the record.
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            fontSize: '24px',
            color: '#667085',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Verifiable interaction records for APIs, tools, and MCP servers. Built on PEAC. Self-hostable.
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#98A2B3',
          }}
        >
          originary.xyz
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'InterDisplay',
          data: fontData,
          weight: 600,
          style: 'normal',
        },
      ],
    }
  )
}
