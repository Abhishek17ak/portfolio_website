import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealOnScroll width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A timeline of my professional journey in data science and analytics, delivering impactful results across industries.
            </p>
          </RevealOnScroll>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-zinc-800"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-black z-10"></div>

                {/* Content Wrapper */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                   <RevealOnScroll delay={index * 100} width="100%">
                     <div className={`bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <div className={`flex flex-col gap-1 mb-4 ${index % 2 === 0 ? 'items-start' : 'items-start md:items-end'}`}>
                           <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                           <div className="text-blue-400 font-medium flex items-center gap-2">
                             <Briefcase size={16} /> {exp.company}
                           </div>
                           <div className="flex items-center gap-4 text-sm text-zinc-400 mt-1">
                              <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                              <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                           </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {exp.highlights.map((point, i) => (
                            <li key={i} className={`text-zinc-300 text-sm leading-relaxed ${index % 2 !== 0 ? 'md:flex md:justify-end' : ''}`}>
                               <span className="inline-block">
                                 <span className="text-blue-500 mr-2">•</span>
                                 {point}
                               </span>
                            </li>
                          ))}
                        </ul>
                     </div>
                   </RevealOnScroll>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;