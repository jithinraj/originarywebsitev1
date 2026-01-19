import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = '3730f721449c4243aba46af9a7c18d71'
const SITE_HOST = 'www.originary.xyz'
const SITEMAP_URL = `https://${SITE_HOST}/sitemap.xml`

// Ping all search engines
async function pingSearchEngines() {
  const results: Record<string, boolean> = {}

  // 1. Google - Sitemap ping
  try {
    const googleResponse = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
    )
    results.google = googleResponse.ok
  } catch {
    results.google = false
  }

  // 2. Bing - Sitemap ping (in addition to IndexNow)
  try {
    const bingResponse = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
    )
    results.bing_sitemap = bingResponse.ok
  } catch {
    results.bing_sitemap = false
  }

  return results
}

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

    // Also ping Google and Bing sitemaps
    const sitemapResults = await pingSearchEngines()

    return NextResponse.json({
      success: true,
      message: 'URLs submitted to search engines',
      urlCount: urls.length,
      engines: {
        indexnow: indexNowSuccess, // Bing, Yandex, Seznam, Naver
        ...sitemapResults
      }
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
    // 1. IndexNow for Bing, Yandex, Seznam, Naver
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

    // 2. Google and Bing sitemap pings
    const sitemapResults = await pingSearchEngines()

    return NextResponse.json({
      success: true,
      message: 'Submitted to all search engines',
      urls: keyUrls,
      engines: {
        indexnow: indexNowSuccess,
        ...sitemapResults
      }
    })
  } catch (error) {
    console.error('Search engine ping error:', error)
    return NextResponse.json(
      { error: 'Failed to submit to search engines' },
      { status: 500 }
    )
  }
}
