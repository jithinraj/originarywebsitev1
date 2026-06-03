import { ImageResponse } from '@vercel/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'

// Load Inter Display SemiBold for the brand wordmark
async function getFont() {
  try {
    const fontPath = join(process.cwd(), 'public', 'fonts', 'InterDisplay-SemiBold.otf')
    return await readFile(fontPath)
  } catch {
    const res = await fetch('https://rsms.me/inter/font-files/InterDisplay-SemiBold.otf')
    return Buffer.from(await res.arrayBuffer())
  }
}

// Colors mirror the homepage palette in components/home/palette.ts
const BG = '#f4f1ea'
const INK = '#14110a'
const ACCENT = '#4a627c'
const FAINT = '#6e6759'

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
          backgroundColor: BG,
          padding: '60px 80px',
        }}
      >
        {/* Brand wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '44px' }}>
          <span
            style={{
              fontSize: '44px',
              fontFamily: 'InterDisplay',
              fontWeight: 600,
              color: INK,
              letterSpacing: '-0.009em',
            }}
          >
            originary
          </span>
        </div>

        {/* Headline (matches homepage H1) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ fontSize: '56px', fontWeight: 700, color: INK, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Verify what agents and APIs did
          </span>
          <span style={{ fontSize: '56px', fontWeight: 700, color: ACCENT, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            across company boundaries
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            marginTop: '36px',
            fontSize: '24px',
            color: FAINT,
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Signed records for API calls, MCP tool use, runtime decisions, and payment events.
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', position: 'absolute', bottom: '40px', fontSize: '20px', color: FAINT }}>
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
