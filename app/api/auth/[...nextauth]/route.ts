import { NextRequest, NextResponse } from 'next/server'

// Placeholder auth endpoint for static builds
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Auth endpoint placeholder' }, { status: 200 })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Auth endpoint placeholder' }, { status: 200 })
}