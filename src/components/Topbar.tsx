'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Topbar() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLightThemeClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  return (
    <header 
      className="w-full bg-background border-b border-white/10"
      role="banner"
    >
      <div className="container px-4 py-3 flex items-center">
        <Link 
          href="/"
          className="font-tostada text-2xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2"
          aria-label="rediseñar - Ir al inicio"
        >
          <h1>
            <span className="text-lg uppercase font-thunder tracking-normal">
              Carlos Graffi
            </span>
          </h1>
        </Link>
        
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <button
              onClick={handleLightThemeClick}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Toggle light theme"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                />
              </svg>
            </button>
            
            {showTooltip && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white text-black p-3 rounded-lg shadow-lg text-sm z-50">
                <div className="absolute -top-1 right-4 w-2 h-2 bg-white transform rotate-45"></div>
                Hey, it's better for the planet –and your eyes– if we keep the lights off. Thanks!
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}