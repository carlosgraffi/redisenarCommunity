"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-background border-b border-white/10 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <Link
          href="/"
          className="font-bricolage text-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 antialiased"
          aria-label="Ir al inicio"
        >
          <h1 className="text-white flex items-center gap-2">
            <img
              src="/vector.svg"
              alt=""
              className="w-4 h-4"
              aria-hidden="true"
            />
            <span className="font-bricolage font-black tracking-tighter">
              Rediseñ.ar
            </span>
          </h1>
        </Link>

        {/* Desktop nav on the right */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/kevracho"
            className="text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-3 py-2"
          >
            Kevracho PRJCT
          </Link>
        </nav>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden p-2 text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-white/10 z-50 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <span className="font-bricolage font-semibold text-xl text-white">
              Menú
            </span>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-4">
            <Link
              href="/kevracho"
              className="block text-white hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-2"
              onClick={toggleMobileMenu}
            >
              Kevracho PRJCT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
