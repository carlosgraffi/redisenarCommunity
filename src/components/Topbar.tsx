
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Topbar() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="w-full bg-black text-white py-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="mx-4 md:mx-8 lg:mx-[8rem] flex justify-between items-center">
        {/* Logo/Name */}
        <motion.div 
          className="text-lg font-thunder"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="/" className="hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
            Carlos Graffi
          </a>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">
            About
          </a>
          <a href="#projects" className="hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1">
            Contact
          </a>
        </nav>

        {/* Dark mode notice */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Dark mode information"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
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
              <div className="absolute top-full right-0 mt-2 w-64 bg-black text-white p-3 rounded-lg shadow-lg text-sm z-50">
                <div className="absolute -top-1 right-4 w-2 h-2 bg-white transform rotate-45"></div>
                Hey, it's better for the planet –and for your eyes– if we keep the lights off. Thanks!
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
