import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-10-29.clover',
    })
  : null

export async function POST(request: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: 'Payment system not configured' },
      { status: 503 }
    )
  }

  try {
    const { plan } = await request.json()

    let priceId: string
    let mode: 'payment' | 'subscription'

    if (plan === 'dev1' || plan === 'start') {
      priceId = process.env.PRICE_DEV1!
      mode = 'payment'
    } else if (plan === 'pro') {
      priceId = process.env.PRICE_PRO!
      mode = 'subscription'
    } else {
      return NextResponse.json(
        { error: 'Invalid plan specified' },
        { status: 400 }
      )
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.originary.xyz'

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/checkout/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
      metadata: {
        product: 'Originary',
        seller: 'Poem, Inc.',
        plan,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
