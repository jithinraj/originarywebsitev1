import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = '3730f721449c4243aba46af9a7c18d71'
const SITE_HOST = 'www.originary.xyz'

// IndexNow supports: Bing, Yandex, Seznam, Naver
// Google: Use Search Console + lastmod in sitemap (ping deprecated June 2023)

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array required' },
        { status: 400 }
      )
    }

    // Ping IndexNow (Bing, Yandex, Seznam, Naver)
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.map((url: string) =>
          url.startsWith('http') ? url : `https://${SITE_HOST}${url}`
        ),
      }),
    })

    const indexNowSuccess = indexNowResponse.ok || indexNowResponse.status === 202

    return NextResponse.json({
      success: true,
      message: 'URLs submitted to IndexNow (Bing, Yandex, Seznam, Naver)',
      urlCount: urls.length,
      indexnow: indexNowSuccess,
      note: 'Google: submit sitemap via Search Console'
    })
  } catch (error) {
    console.error('Search engine ping error:', error)
    return NextResponse.json(
      { error: 'Failed to submit to search engines' },
      { status: 500 }
    )
  }
}

// GET endpoint to manually trigger full submission
export async function GET() {
  const keyUrls = [
    'https://www.originary.xyz/',
    'https://www.originary.xyz/platform',
    'https://www.originary.xyz/peac',
    'https://www.originary.xyz/products',
    'https://www.originary.xyz/developers',
    'https://www.originary.xyz/declare',
    'https://www.originary.xyz/blog',
    'https://www.originary.xyz/verify',
    'https://www.originary.xyz/about',
  ]

  try {
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: keyUrls,
      }),
    })

    const indexNowSuccess = indexNowResponse.ok || indexNowResponse.status === 202

    return NextResponse.json({
      success: true,
      message: 'URLs submitted to IndexNow (Bing, Yandex, Seznam, Naver)',
      urls: keyUrls,
      indexnow: indexNowSuccess,
      note: 'Google: submit sitemap via Search Console'
    })
  } catch (error) {
    console.error('Search engine ping error:', error)
    return NextResponse.json(
      { error: 'Failed to submit to search engines' },
      { status: 500 }
    )
  }
}
