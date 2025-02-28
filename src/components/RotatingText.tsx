'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ['solver', 'utilizar', 'generar', 'ciclar', 'diseñar'];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isPaused && !prefersReducedMotion) {
      const timer = setInterval(() => {
        setIndex((current) => (current + 1) % words.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % words.length);
      } else if (e.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + words.length) % words.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div 
      className="inline-flex items-baseline whitespace-nowrap overflow-hidden"
      role="region"
      aria-label="Texto rotativo"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
    >
      <span 
        className="text-6xl md:text-[6rem] font-tostada leading-relaxed transition-all"
        aria-hidden="true"
      >
        re
      </span>
      <div 
        className="inline-block"
        role="timer"
        aria-label={`Palabra actual: ${words[index]}`}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-[6rem] font-tostada leading-relaxed inline-block"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}