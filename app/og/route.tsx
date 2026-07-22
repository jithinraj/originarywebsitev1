import { ImageResponse } from '@vercel/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'

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
const PAPER = '#fbf9f4'
const INK = '#14110a'
const FAINT = '#6e6759'
const SAGE = '#4a7459'
const HAIRLINE = 'rgba(20,17,10,0.18)'

const ROWS: Array<[string, string]> = [
  ['ISSUER', 'https://api.vendor.example'],
  ['ACTION', 'POST /v1/market-data/search'],
  ['RESULT', '200 · sha256:9a3c1d...'],
  ['TIME', '2026-07-08T14:08:11Z'],
  ['SIGNATURE', 'Ed25519 b2c1a4e8...'],
]

export async function GET() {
  const fontData = await getFont()
  const wordmark = await readFile(join(process.cwd(), 'public', 'og-wordmark.png'))
  const wordmarkSrc = `data:image/png;base64,${wordmark.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: BG,
          padding: '36px',
        }}
      >
        {/* Datasheet plate: hairline frame around the whole card */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            border: `1px solid ${HAIRLINE}`,
            backgroundColor: BG,
            padding: '52px 60px',
            alignItems: 'center',
            gap: '56px',
          }}
        >
          {/* Left: brand + headline + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1.25 }}>
            {/* 182 x 47 preserves the canonical wordmark aspect ratio (7487:1918). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wordmarkSrc} width={182} height={47} alt="Originary" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '46px',
              }}
            >
              <span style={{ fontSize: '44px', fontWeight: 600, color: INK, lineHeight: 1.14, letterSpacing: '-0.02em' }}>
                Verify agent, API, and
              </span>
              <span style={{ fontSize: '44px', fontWeight: 600, color: INK, lineHeight: 1.14, letterSpacing: '-0.02em' }}>
                gateway actions across
              </span>
              <span style={{ fontSize: '44px', fontWeight: 600, color: INK, lineHeight: 1.14, letterSpacing: '-0.02em' }}>
                company boundaries
              </span>
            </div>
            <div style={{ display: 'flex', marginTop: '38px', fontSize: '21px', color: SAGE, letterSpacing: '0.02em' }}>
              Logs stay local. Signed records travel.
            </div>
            <div style={{ display: 'flex', marginTop: '14px', fontSize: '19px', color: FAINT }}>
              originary.xyz
            </div>
          </div>

          {/* Right: the record artifact */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: PAPER,
              border: `1px solid ${HAIRLINE}`,
              padding: '26px 28px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '19px', fontWeight: 600, color: INK }}>signed-record</span>
              <span
                style={{
                  display: 'flex',
                  fontSize: '14px',
                  color: SAGE,
                  border: `1px solid ${SAGE}`,
                  padding: '5px 10px',
                  letterSpacing: '0.08em',
                }}
              >
                VERIFIED OFFLINE
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '18px' }}>
              {ROWS.map(([label, value], i) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    gap: '18px',
                    padding: '12px 0',
                    borderTop: i === 0 ? 'none' : `1px solid ${HAIRLINE}`,
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontSize: '13px', color: FAINT, letterSpacing: '0.08em', width: '104px' }}>{label}</span>
                  <span style={{ fontSize: '16px', color: INK }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
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
