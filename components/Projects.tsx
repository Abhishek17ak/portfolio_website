import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, GitBranch, Database, Zap, ArrowRight, X, ArrowLeft, Filter } from 'lucide-react';
import { Project } from '../types';
import RevealOnScroll from './RevealOnScroll';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full overflow-hidden">
    
    {/* Hover Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10 flex justify-between items-start mb-4">
       <div className="p-3 bg-zinc-800 rounded-xl text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
          {project.category === 'ML' ? <Database size={24} /> : 
           project.category === 'Engineering' ? <Zap size={24} /> : <GitBranch size={24} />}
       </div>
       {project.link && (
         <a href={project.link} target="_blank" rel="noreferrer">
            <ExternalLink size={20} className="text-zinc-600 group-hover:text-white transition-colors cursor-pointer hover:scale-110" />
         </a>
       )}
    </div>

    <div className="relative z-10 mb-2">
        <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">{project.category}</span>
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mt-1">{project.title}</h3>
    </div>
    
    <p className="relative z-10 text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
      {project.description}
    </p>

    <div className="relative z-10 bg-black/50 rounded-lg p-3 mb-6 border border-white/10 group-hover:border-zinc-700 transition-colors">
      <p className="text-xs font-mono text-green-400 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        {project.metrics}
      </p>
    </div>

    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
      {project.tech.slice(0, 3).map((tech) => (
        <span key={tech} className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700 group-hover:border-blue-500/30 transition-colors">
          {tech}
        </span>
      ))}
      {project.tech.length > 3 && (
        <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-500 text-xs font-medium border border-zinc-700">
            +{project.tech.length - 3}
        </span>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<string>('All');
  
  // Filter explicitly for the 3 requested projects for main view
  const featuredIds = ['churnguard', 'streammetrics', 'finsum'];
  const featuredProjects = PROJECTS.filter(p => featuredIds.includes(p.id));

  const categories = ['All', 'ML', 'NLP/GenAI', 'CV', 'Engineering', 'App Dev'];
  
  const filteredAllProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  useEffect(() => {
    if (showAll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showAll]);

  return (
    <>
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <RevealOnScroll width="100%">
               <div className="flex justify-between items-end w-full">
                 <div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Projects</h2>
                   <p className="text-zinc-400">Showcasing end-to-end data pipelines and ML models.</p>
                 </div>
                 <a href="https://github.com/Abhishek17ak" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    View GitHub <ExternalLink size={16} />
                 </a>
               </div>
             </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <RevealOnScroll key={project.id} delay={index * 150} width="100%">
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <RevealOnScroll delay={200}>
              <button 
                onClick={() => setShowAll(true)}
                className="group px-8 py-3 bg-zinc-900 hover:bg-blue-600 text-white rounded-full font-semibold transition-all flex items-center gap-2 border border-zinc-800 hover:border-blue-500 shadow-lg hover:shadow-blue-500/25"
              >
                View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Full Page Overlay for All Projects */}
      {showAll && (
        <div className="fixed inset-0 z-[60] bg-black overflow-y-auto animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 sticky top-0 bg-black/95 backdrop-blur-sm py-4 z-10 border-b border-zinc-800">
              <div className="mb-4 md:mb-0 w-full md:w-auto flex justify-between md:block">
                <div>
                    <button 
                    onClick={() => setShowAll(false)}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group mb-2 text-sm"
                    >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                    </button>
                    <h2 className="text-2xl font-bold text-white">All Projects</h2>
                </div>
                <button 
                    onClick={() => setShowAll(false)}
                    className="md:hidden p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white"
                >
                    <X size={20} />
                </button>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                            filter === cat 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                            : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
              </div>

              <button 
                onClick={() => setShowAll(false)}
                className="hidden md:block p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-red-500/20 transition-colors ml-4"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
              {filteredAllProjects.map((project, index) => (
                 // No RevealOnScroll here because animations inside a fixed modal can be tricky with scroll positions
                 // Standard fade-in is handled by parent container class
                <div key={project.id} className="animate-fade-in" style={{animationDelay: `${index * 50}ms`}}>
                    <ProjectCard project={project} />
                </div>
              ))}
            </div>
            
            {filteredAllProjects.length === 0 && (
                <div className="text-center text-zinc-500 py-20">
                    <p>No projects found in this category.</p>
                </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;