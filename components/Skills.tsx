import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILL_DATA, SKILL_CATEGORIES } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-zinc-700 p-3 rounded-lg shadow-xl">
        <p className="text-zinc-200 font-bold">{label}</p>
        <p className="text-blue-400 text-sm">
          Proficiency: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text & Tags */}
          <div>
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical Expertise</h2>
              <p className="text-zinc-400 mb-10 text-lg">
                A robust toolset covering the full data lifecycle—from ingestion and engineering to advanced modeling and deployment.
              </p>
            </RevealOnScroll>

            <div className="space-y-8">
              {SKILL_CATEGORIES.map((cat, index) => (
                <RevealOnScroll key={cat.title} delay={index * 100} width="100%">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                        {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded bg-zinc-900/50 backdrop-blur-sm text-zinc-300 text-sm border border-white/10 hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all cursor-default hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right: Chart */}
          <RevealOnScroll delay={300} width="100%">
            <div className="h-[400px] w-full bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-4 relative hover:border-blue-500/30 transition-colors">
              <div className="absolute top-4 left-6 z-10">
                  <h3 className="text-white font-semibold">Skill Proficiency</h3>
                  <p className="text-zinc-500 text-xs">Relative strength across domains</p>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_DATA}>
                  <PolarGrid gridType="polygon" stroke="#27272a" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Abhishek"
                    dataKey="A"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fill="#3b82f6"
                    fillOpacity={0.3}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Skills;