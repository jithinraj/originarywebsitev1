import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    paymentButtonId: process.env.NEXT_PUBLIC_RAZORPAY_BUTTON_ID || "pl_RWPNPmgUVQGQXC",
    isProduction: process.env.NODE_ENV === 'production'
  })
}