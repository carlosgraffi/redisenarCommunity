
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    // In Next.js App Router, you can use headers to get forwarded IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    
    // Log bot detection
    console.log(`Bot detected via honeypot: ${ip} - ${data.userAgent || 'Unknown UA'}`);
    
    // Here you could add more sophisticated tracking, like storing IPs
    // in a database to block them permanently
    
    // Return a successful response (even to bots)
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in bot reporting:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
