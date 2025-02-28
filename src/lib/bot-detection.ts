
// Bot detection utility

export interface BotDetectionResult {
  isBot: boolean;
  reason?: string;
}

export function detectBot(userAgent: string | null, headers: Headers): BotDetectionResult {
  if (!userAgent) {
    return { isBot: true, reason: 'missing-user-agent' };
  }
  
  // Check common bot user agents
  const botPatterns = [
    /bot/i, 
    /crawl/i, 
    /spider/i, 
    /archiv/i,
    /scraper/i,
    /headless/i,
    /phantom/i,
    /puppeteer/i,
    /selenium/i,
    /chrome-lighthouse/i
  ];
  
  for (const pattern of botPatterns) {
    if (pattern.test(userAgent)) {
      return { isBot: true, reason: 'bot-user-agent' };
    }
  }
  
  // Check for missing or suspicious headers
  const acceptLanguage = headers.get('accept-language');
  const acceptHeader = headers.get('accept');
  
  if (!acceptLanguage) {
    return { isBot: true, reason: 'missing-accept-language' };
  }
  
  if (!acceptHeader) {
    return { isBot: true, reason: 'missing-accept-header' };
  }
  
  // Additional checks could be added here (e.g., checking for cookies, etc.)
  
  return { isBot: false };
}
