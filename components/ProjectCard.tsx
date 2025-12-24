
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
          <div className="flex gap-3">
            <a 
              href={project.githubUrl} 
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href={project.demoUrl} 
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className="text-zinc-400 text-sm mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
