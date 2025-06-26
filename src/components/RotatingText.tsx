
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function RotatingText() {
  const words = ["Designer", "Builder", "Maker", "Creator"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block"
        >
          {words[currentWord]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
