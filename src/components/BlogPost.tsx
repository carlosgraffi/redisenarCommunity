'use client';

import { motion } from 'framer-motion';

interface BlogPostProps {
  title: string;
  author: string;
  description: string;
  link?: string;
}

export default function BlogPost({ title, author, description, link }: BlogPostProps) {
  const decodeHtml = (html: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const cleanDescription = decodeHtml(description);
  const cleanTitle = decodeHtml(title);

  const content = (
    <div className="flex flex-col gap-4 group">
      <h3 className="text-5xl py-2 font-tostada transition-transform duration-300 group-hover:-translate-x-2">
        {cleanTitle}
      </h3>
      <div className="space-y-2">
        <div className="text-lg font-bold transition-colors duration-300 group-hover:text-white/90">
          <span className="text-gray-300">Por</span> {author}
        </div>
        <div 
          className="text-base text-gray-300 transition-colors duration-300 group-hover:text-white/80"
          role="article"
        >
          {cleanDescription}
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-label={`Leer artículo: ${cleanTitle} por ${author}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      role="article"
    >
      {content}
    </motion.div>
  );
}