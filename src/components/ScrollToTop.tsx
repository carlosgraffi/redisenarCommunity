'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Home') {
        event.preventDefault();
        scrollToTop();
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-white/10 hover:bg-white/20
                 backdrop-blur-sm rounded-full transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-white/50
                 z-50 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
      aria-label="Volver al inicio de la página"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      title="Presiona 'Home' o haz clic para volver al inicio"
    >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
    </button>
  );
}