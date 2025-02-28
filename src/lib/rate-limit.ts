
// Basic in-memory rate limiter for Next.js
// For production, consider Redis-based solutions for multi-instance deployments

interface RateLimitData {
  count: number;
  timestamp: number;
}

const rateLimitMap = new Map<string, RateLimitData>();

export function rateLimit(
  ip: string, 
  maxRequests: number = 60, 
  windowMs: number = 60000 // 1 minute
): { limited: boolean; remaining: number } {
  const now = Date.now();
  const rateLimitData = rateLimitMap.get(ip) || { count: 0, timestamp: now };
  
  // Reset count if window has passed
  if (now - rateLimitData.timestamp > windowMs) {
    rateLimitData.count = 0;
    rateLimitData.timestamp = now;
  }
  
  // Increment count
  rateLimitData.count += 1;
  rateLimitMap.set(ip, rateLimitData);
  
  // Clean up old entries periodically
  if (rateLimitMap.size > 10000) { // Prevent memory leaks
    const outdatedTime = now - windowMs;
    for (const [key, data] of rateLimitMap.entries()) {
      if (data.timestamp < outdatedTime) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  return {
    limited: rateLimitData.count > maxRequests,
    remaining: Math.max(0, maxRequests - rateLimitData.count)
  };
}
