import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={32} />,
      link: 'https://www.linkedin.com/in/abhishek-kalugade-7185a8199/',
      display: 'Connect on LinkedIn',
      color: 'hover:text-blue-500',
      bg: 'group-hover:bg-blue-500/10',
      border: 'group-hover:border-blue-500/50'
    },
    {
      name: 'GitHub',
      icon: <Github size={32} />,
      link: 'https://github.com/Abhishek17ak',
      display: 'View Repositories',
      color: 'hover:text-purple-500',
      bg: 'group-hover:bg-purple-500/10',
      border: 'group-hover:border-purple-500/50'
    },
    {
      name: 'Email',
      icon: <Mail size={32} />,
      link: 'mailto:kalugadeabhishek@gmail.com',
      display: 'kalugadeabhishek@gmail.com',
      color: 'hover:text-green-500',
      bg: 'group-hover:bg-green-500/10',
      border: 'group-hover:border-green-500/50'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactLinks.map((item, index) => (
            <RevealOnScroll key={item.name} delay={index * 150} width="100%">
              <a
                href={item.link}
                target={item.name === 'Email' ? '_self' : '_blank'}
                rel="noreferrer"
                className={`group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center h-full ${item.border}`}
              >
                <div className={`p-4 rounded-full bg-zinc-800 text-zinc-300 mb-6 transition-colors duration-300 ${item.color} ${item.bg}`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                
                <p className="text-zinc-400 group-hover:text-white transition-colors flex items-center gap-2 mt-auto">
                  {item.display}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </p>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;