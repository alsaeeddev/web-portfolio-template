import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Briefcase className="inline-block w-10 h-10 mr-3 align-text-bottom" />
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-slate-800/70 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/30 border border-slate-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                className="w-full h-56 object-cover"
                alt={project.title}
               src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-sky-400">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-sky-700/50 text-sky-300 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild className="border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition-colors">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="text-slate-400 hover:text-sky-400 transition-colors">
                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;