import React, { useEffect, useState } from 'react';

interface ScrollProgressProps {
  progress: number; // 0 to 1
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({ progress }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show after a tiny bit of scrolling to avoid initial flash
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Calculate height as percentage string
  const heightPercent = `${Math.min(Math.max(progress * 100, 0), 100)}%`;

  const handleTrackClick = (e: React.MouseEvent) => {
    const track = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - track.top;
    const percentage = clickY / track.height;
    
    window.scrollTo({
      top: percentage * (document.documentElement.scrollHeight - window.innerHeight),
      behavior: 'smooth'
    });
  };

  return (
    <div 
        className={`fixed right-0 top-0 h-full w-3 z-[60] transition-opacity duration-500 group cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleTrackClick}
    >
      {/* Invisible Hit Area for easier clicking */}
      <div className="absolute inset-0 bg-transparent"></div>

      {/* Subtle Track Line */}
      <div className="absolute right-[2px] top-0 h-full w-[1px] bg-zinc-800/50 group-hover:bg-zinc-700 transition-colors"></div>

      {/* The Beam (Progress) */}
      <div 
        className="absolute right-[2px] top-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-white shadow-[0_0_10px_rgba(34,211,238,0.2)]"
        style={{ height: heightPercent, transition: 'height 0.1s linear' }}
      ></div>

      {/* The Flash / Flare (Head) */}
      <div 
        className="absolute right-[2px] w-0.5 h-0 flex items-center justify-center pointer-events-none"
        style={{ top: heightPercent, transition: 'top 0.1s linear' }}
      >
        {/* Vertical Lens Flare */}
        <div className="absolute bottom-0 w-[1px] h-8 bg-gradient-to-t from-transparent via-white to-transparent opacity-80"></div>
        
        {/* Horizontal Lens Flare */}
        <div className="absolute bottom-0 w-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"></div>
        
        {/* Central Glow */}
        <div className="absolute bottom-0 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,0.8)] blur-[1px]"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;