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
          backgroundColor: '#ffffff',
          padding: '60px 80px',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 256 256"
            style={{ marginRight: '20px' }}
          >
            <rect width="256" height="256" rx="64" fill="#ffffff" />
            <circle cx="128" cy="128" r="78" fill="#000000" />
            <circle cx="128" cy="128" r="48" fill="#ffffff" />
          </svg>
          <span
            style={{
              fontSize: '42px',
              fontWeight: 600,
              color: '#000000',
              letterSpacing: '-0.02em',
            }}
          >
            ORIGINARY
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
              fontSize: '72px',
              fontWeight: 700,
              color: '#000000',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            System of record
          </span>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#635bff',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            for agent interactions
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            fontSize: '24px',
            color: '#52525b',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Open standards for managing AI interaction terms and issuing proofs
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#a1a1aa',
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
