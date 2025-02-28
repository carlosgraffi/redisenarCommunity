'use client';

import Link from 'next/link';

export default function Topbar() {
  return (
    <header 
      className="w-full bg-background border-b border-white/10"
      role="banner"
    >
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        <Link 
          href="/"
          className="font-tostada text-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2"
          aria-label="rediseñar - Ir al inicio"
        >
          <h1>rediseñar</h1>
        </Link>
      </div>
    </header>
  );
}