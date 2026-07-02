'use client';

import { useEffect, useRef, useState } from 'react';

// Reemplazo liviano de framer-motion para el patrón fade-in-up al entrar en viewport.
// Los estilos viven en globals.css (.fade-in-up / .in-view).
export default function FadeIn({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-up ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  );
}
