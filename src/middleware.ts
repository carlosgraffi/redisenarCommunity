
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from './lib/rate-limit';
import { detectBot } from './lib/bot-detection';

// Define blocked countries (ISO country codes)
const BLOCKED_COUNTRIES = [
  'RO', // Romania
  'RU', // Russia
  'CN', // China
  'NG', // Nigeria
  'UA', // Ukraine
  'BY', // Belarus
  'IR', // Iran
  'KP', // North Korea
  'PK', // Pakistan
  'VN', // Vietnam
  'ID', // Indonesia
  'IN', // India
  'BR'  // Brazil
];

// Rate limiting configuration
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per minute
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

export function middleware(request: NextRequest) {
  const ip = request.ip || 'unknown';
  const userAgent = request.headers.get('user-agent');
  const country = request.geo?.country || '';
  const isProtectedRoute = !request.nextUrl.pathname.match(/^\/(_next|public|fonts|static|favicon\.ico)/);

  // Skip security checks for static assets
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // 1. Bot Detection
  const botDetection = detectBot(userAgent, request.headers);
  if (botDetection.isBot) {
    console.log(`Bot blocked: ${ip} - ${userAgent} - Reason: ${botDetection.reason}`);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Access denied: Bot traffic is not allowed',
      }),
      {
        status: 403,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }

  // 2. Geo-restriction
  if (BLOCKED_COUNTRIES.includes(country)) {
    console.log(`Blocked access attempt from restricted country: ${country} - IP: ${ip}`);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Access denied: This service is not available in your region',
      }),
      {
        status: 403,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }

  // 3. Rate Limiting
  const { limited, remaining } = rateLimit(ip, RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW_MS);
  if (limited) {
    console.log(`Rate limited: ${ip} - Exceeded ${RATE_LIMIT_MAX_REQUESTS} requests per minute`);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Too many requests, please try again later',
      }),
      {
        status: 429, // Too Many Requests
        headers: {
          'content-type': 'application/json',
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': (Math.floor(Date.now() / 1000) + 60).toString(),
        },
      }
    );
  }

  // Add rate limit headers to the response
  const response = NextResponse.next();
  response.headers.set('X-RateLimit-Limit', RATE_LIMIT_MAX_REQUESTS.toString());
  response.headers.set('X-RateLimit-Remaining', remaining.toString());
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public directory files
     */
    '/((?!_next/static|_next/image|favicon.ico|fonts|svg).*)',
  ],
};
