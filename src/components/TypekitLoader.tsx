
'use client';

import { useEffect } from 'react';

export default function TypekitLoader() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    try {
      const script = document.createElement('script');
      script.src = 'https://use.typekit.net/zox1ndp.js';
      script.async = true;
      script.onload = () => {
        if (window.Typekit) {
          window.Typekit.load();
        }
      };
      document.head.appendChild(script);
    } catch (e) {
      console.warn('TypeKit loading failed:', e);
    }
  }, []);

  return null;
}

declare global {
  interface Window {
    Typekit?: {
      load: () => void;
    };
  }
}
