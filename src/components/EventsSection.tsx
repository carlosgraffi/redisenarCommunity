'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import EventsList from './EventsList';

export default function EventsSection() {
  return (
    <section 
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="events-title"
    >


      <EventsList limit={2} />

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/events"
          className="inline-flex items-center justify-center bg-transparent text-white border-2 py-3 px-8 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Ver todos los eventos y workshops"
        >
          Ver todos los eventos
        </Link>
      </motion.div>
    </section>
  );
}