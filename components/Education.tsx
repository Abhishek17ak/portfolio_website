import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { EDUCATION_LIST } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <RevealOnScroll width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Academic background and qualifications.</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION_LIST.map((edu, index) => (
            <RevealOnScroll key={edu.id} delay={index * 200} width="100%">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/5 h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-900/20 rounded-xl text-blue-400 border border-blue-900/50">
                    <GraduationCap size={28} />
                  </div>
                  <span className="text-zinc-400 text-sm border border-zinc-700 px-3 py-1 rounded-full flex items-center gap-2 bg-black">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-blue-400 font-medium mb-4 text-lg">{edu.school}</p>
                
                <div className="flex items-center text-zinc-400 text-sm mb-4">
                  <MapPin size={16} className="mr-2 text-zinc-500" />
                  {edu.location}
                </div>
                
                <p className="text-zinc-300 text-sm leading-relaxed border-t border-zinc-800 pt-4">
                  {edu.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;