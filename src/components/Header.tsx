"use client";
import React from "react";
import { motion } from "framer-motion";
import RotatingText from "./RotatingText";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Header() {
  const { t } = useTranslation();
  
  return (
    <header className="relative py-12 md:py-16 lg:py-20" role="banner">
      <div className="flex flex-col items-start justify-center min-h-[40vh] md:min-h-[50vh]">
        {/* Main heading */}
        <span className="flex gap-2 text-lg md:text-xl text-gray-300 leading-none">
          <p className="line-through">{t('hero.crossedOut')}</p>
        </span>
        <RotatingText />
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center bg-white text-black border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={t('hero.viewProjects')}
            >
              {t('hero.viewProjects')}
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
