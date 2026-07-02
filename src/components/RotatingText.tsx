"use client";

import { useState, useEffect } from "react";

const words = [
  "solver",
  "utilizar",
  "generar",
  "ciclar",
  "pensar",
  "clamar",
  "ubicar",
  "escribir",
  "diseñar",
];

const EXIT_MS = 250;

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isPaused && !prefersReducedMotion) {
      const timer = setInterval(() => {
        setIsLeaving(true);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, prefersReducedMotion]);

  // Cuando termina la animación de salida, cambia la palabra y anima la entrada
  useEffect(() => {
    if (!isLeaving) return;
    const timeout = setTimeout(() => {
      setIndex((current) => (current + 1) % words.length);
      setIsLeaving(false);
    }, EXIT_MS);
    return () => clearTimeout(timeout);
  }, [isLeaving]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setIndex((current) => (current + 1) % words.length);
      } else if (e.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + words.length) % words.length);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      className="inline-flex items-baseline whitespace-nowrap overflow-y-hidden"
      role="region"
      aria-label="Texto rotativo"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
    >
      <span
        className="text-[4rem] lg:text-[6rem] md:text-[4rem] xs:text-[2rem] font-bricolage font-black leading-relaxed tracking-tighter transition-all"
        aria-hidden="true"
      >
        Re
      </span>
      <div
        className="inline-block"
        role="timer"
        aria-label={`Palabra actual: ${words[index]}`}
      >
        <span
          key={words[index]}
          className={`text-[4rem] lg:text-[6rem] md:text-[6rem] xs:text-[2rem] font-bricolage font-black leading-relaxed tracking-tighter inline-block word-rotate ${isLeaving ? "word-out" : "word-in"}`}
        >
          {words[index]}
        </span>
      </div>
    </div>
  );
}
