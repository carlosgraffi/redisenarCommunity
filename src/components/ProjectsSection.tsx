
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectsList from './ProjectsList';

export default function ProjectsSection() {
  return (
    <section 
      id="projects"
      className="py-16 md:py-24 lg:py-32"
      aria-labelledby="projects-title"
    >
      <ProjectsList limit={3} />

      
    </section>
  );
}
