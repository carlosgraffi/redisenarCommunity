
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import { getProjects, Project } from '../lib/projects';

interface ProjectsListProps {
  showAll?: boolean;
  limit?: number;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const content = (
    <div className="flex flex-col gap-4 group">
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="inline-flex items-center gap-1 text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
          <Calendar size={14} className="text-gray-400" />
          {project.year}
        </span>
        <span className="inline-flex items-center gap-1 text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
          <MapPin size={14} className="text-gray-400" />
          {project.organization}
        </span>
        {project.impact && (
          <span className="inline-flex items-center gap-1 text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
            <Users size={14} className="text-gray-400" />
            {project.impact}
          </span>
        )}
      </div>

      <h3 className="text-4xl font-thunder font-bold leading-[1em] transition-transform duration-300 group-hover:-translate-x-2 pt-2 break-words">
        {project.title}
      </h3>
      
      <div className="space-y-4">
        <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
          {project.role}
        </div>
        
        <div 
          className="text-base text-gray-300 transition-colors duration-300 group-hover:text-white/80"
        >
          {project.description}
        </div>

        {/* Technologies */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center bg-white text-black border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`View details for ${project.title}`}
          >
            View Project
          </Link>

          {project.projectUrl && (
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-white border-2 py-3 px-6 font-bold text-sm tracking-wider hover:bg-white hover:text-black hover:rounded-br-2xl hover:rounded-tl-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={`Visit live project: ${project.title}`}
            >
              <ExternalLink size={16} className="mr-2" />
              Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div 
      className="block transition-all duration-300 hover:scale-[1.01] rounded-lg p-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {content}
    </motion.div>
  );
};

export default function ProjectsList({ showAll = false, limit = 3 }: ProjectsListProps) {
  const projects = getProjects();
  const displayProjects = showAll ? projects : projects.slice(0, limit);

  return (
    <section 
      className={showAll ? "" : ""}
      aria-labelledby={showAll ? undefined : "projects-list-title"}
    >
      {!showAll && (
        <h2 
          id="projects-list-title" 
          className="text-xl mb-24 text-center sm:text-md"
        >
          Selected Projects
        </h2>
      )}

      <div 
        className="space-y-24 max-w-4xl mx-auto"
        role="feed"
        aria-label="Portfolio projects"
      >
        {displayProjects.length > 0 ? (
          displayProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-400">
            No projects available at the moment.
          </div>
        )}
      </div>

      
    </section>
  );
}
