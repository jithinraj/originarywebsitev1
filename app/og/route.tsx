import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
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
          backgroundColor: '#FAFAF7',
          padding: '60px 80px',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '48px',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: '#161614',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#FAFAF7',
              }}
            >
              O
            </span>
          </div>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#161614',
              letterSpacing: '-0.02em',
            }}
          >
            Originary
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
              color: '#161614',
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
              color: '#5C5B56',
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
            color: '#9D9C96',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Portable signed records for APIs, tools, and MCP servers. Built on PEAC. Self-hostable.
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#C9C7C1',
          }}
        >
          originary.xyz
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
