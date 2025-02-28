'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Initiative {
  title: string;
  author: string;
  description: string;
  url: string;
}

const initiatives: Initiative[] = [
  {
    title: "Ayuda Patagonia.ar",
    author: "Carlos O. Graffi",
    description: "Proyecto abierto y gratuito que unifica, valida e informa sobre las campañas de donación y fuentes de noticias verificadas para ayudar a las organizaciones, familias y comunidades afectadas por los incendios en la Patagonia Argentina.",
    url: "https://ayudapatagonia.ar"
  }
] as const;

const InitiativeCard = ({ initiative }: { initiative: Initiative }) => {
  const content = (
    <div className="flex flex-col gap-4 group ">
      <h3 className="text-5xl font-tostada transition-transform duration-300 group-hover:-translate-x-2 py-2 break-word">
        {initiative.title}
      </h3>
      <div className="space-y-2">
        <div className="text-lg font-bold transition-colors duration-300 group-hover:text-white/90">
          <span className="text-gray-300">Por</span> {initiative.author}
        </div>
        <div 
          className="text-base text-gray-300 transition-colors duration-300 group-hover:text-white/80"
          role="article"
        >
          {initiative.description}
        </div>
      </div>
    </div>
  );

  return (
    <motion.a 
      href={initiative.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label={`Ver iniciativa: ${initiative.title} por ${initiative.author}`}
    >
      {content}
    </motion.a>
  );
};

export default function InitiativesSection() {
  return (
    <section 
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="initiatives-title"
    >
      <h2 
        id="initiatives-title" 
        className="text-xl mb-24 text-center sm:text-md"
      >
        Iniciativas y proyectos
      </h2>
      <div 
        className="space-y-24 max-w-2xl mx-auto"
        role="feed"
        aria-label="Lista de iniciativas y proyectos"
      >
        {initiatives.map((initiative, index) => (
          <InitiativeCard key={index} initiative={initiative} />
        ))}
      </div>
    </section>
  );
}