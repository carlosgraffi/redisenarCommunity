
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from './RotatingText';

export default function Header() {
  return (
    <header className="relative py-12 md:py-16 lg:py-20" role="banner">
      <div className="flex flex-col items-start justify-center min-h-[40vh] md:min-h-[50vh]">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thunder leading-tight mb-6">
            Carlos Graffi
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            <RotatingText 
              texts={[
                "Product Designer focused on climate tech",
                "Building AI tools for climate action", 
                "Designing systems that accelerate change",
                "Maker who learns what's needed to build"
              ]}
              interval={3000}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Over 10+ years designing products at the intersection of technology and climate action. 
            I lead design at Open Earth Foundation, where I've helped create tools used by 50+ cities 
            across Latin America to track emissions and plan climate action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View portfolio projects"
            >
              View Projects
            </motion.a>
            <motion.a
              href="https://redisenar.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Read my publication Rediseñar"
            >
              Read Rediseñar
            </motion.a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
