// CarbonBadge.tsx
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Add type definition for the WebsiteCarbonBadge
declare global {
  interface Window {
    WebsiteCarbonBadge?: {
      init: (params: { url: string; lang?: string }) => void;
    };
  }
}

export default function CarbonBadge() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if the badge is already initialized
    if (typeof window !== 'undefined' && !window.WebsiteCarbonBadge) {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.WebsiteCarbonBadge) {
        delete window.WebsiteCarbonBadge;
      }
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
        onLoad={() => {
          // Force recalculation after script loads
          if (window.WebsiteCarbonBadge) {
            window.WebsiteCarbonBadge.init({
              url: 'redisen.ar',
              lang: 'es'
            });
          }
        }}
      />
      <div id="wcb" className="carbonbadge wcb-d"></div>
    </>
  );
}