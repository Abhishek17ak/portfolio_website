import React, { useState, useEffect } from 'react';
import { MapPin, Activity, Cpu, Network, Sliders } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const ROLES = [
  "Data Scientist", 
  "Data Engineer", 
  "Machine Learning Engineer", 
  "AI/ML Engineer", 
  "Gen AI Enthusiast"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  // Interactive AI Card State
  const [learningRate, setLearningRate] = useState(50); // Affects frequency/jitter
  const [complexity, setComplexity] = useState(60);   // Affects amplitude
  const [epochs, setEpochs] = useState(75);           // Affects smoothness/accuracy
  const [phase, setPhase] = useState(0);

  // Typing Effect Logic
  useEffect(() => {
    const i = loopNum % ROLES.length;
    const fullText = ROLES[i];
    
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      } else {
        timer = setTimeout(() => {
          setText((prev) => fullText.substring(0, prev.length - 1));
        }, 50);
      }
    } else {
      if (text === fullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timer = setTimeout(() => {
          setText((prev) => fullText.substring(0, prev.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  // Animation Loop for Graph
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setPhase((prev) => prev + 0.1);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Generate Wave Path based on inputs
  const generateGraphPath = (width: number, height: number) => {
    const points = [];
    const amplitude = (complexity / 100) * (height / 3);
    const frequency = 0.02 + (learningRate / 1000);
    
    for (let x = 0; x <= width; x += 5) {
      // Combine sine waves for a "neural" look
      const y1 = Math.sin(x * frequency + phase) * amplitude;
      const y2 = Math.sin(x * frequency * 0.5 + phase * 1.5) * (amplitude * 0.5);
      
      // Add some "noise" based on learning rate (simulating stochastic gradient descent)
      const noise = (Math.random() - 0.5) * (learningRate / 10);
      
      const y = height / 2 + y1 + y2 + noise;
      points.push(`${x},${y}`);
    }
    return `M0,${height/2} L${points.join(' L')}`;
  };

  // Calculate simulated metrics
  const accuracy = Math.min(99.9, 85 + (epochs / 10) + (complexity / 20) - (Math.abs(learningRate - 50) / 10)).toFixed(1);
  const loss = Math.max(0.01, (100 - Number(accuracy)) / 100 + (Math.random() * 0.05)).toFixed(3);

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-black">
      {/* Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>
      
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="space-y-8 animate-fade-in-left">
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Abhishek Kalugade.
              </span>
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl text-zinc-300 font-medium h-[40px] flex items-center">
                I am a <span className="text-blue-400 ml-2">{text}</span>
                <span className="animate-pulse text-blue-400 ml-1">|</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                Transforming raw data into commercial insights and building scalable AI/ML solutions. 
                Specialized in predictive modeling, retention analytics, and real-time data pipelines.
              </p>
              <div className="flex items-center text-zinc-400 gap-2">
                <MapPin size={18} />
                <span>Austin, TX</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive AI Simulator */}
          <div className="hidden lg:block relative animate-fade-in-right">
            <div className="relative z-10 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                
                {/* Card Header */}
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                            <Activity size={20} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-sm">Neural Network Optimizer</h3>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-xs text-zinc-400">Live Training</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-white font-mono">{accuracy}%</div>
                        <div className="text-xs text-zinc-500">Validation Accuracy</div>
                    </div>
                </div>

                {/* Graph Visualizer */}
                <div className="relative h-48 bg-black/50 rounded-xl border border-white/5 mb-6 overflow-hidden">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    
                    {/* Dynamic Path */}
                    <svg className="absolute inset-0 w-full h-full preserve-3d">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#22d3ee" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <path 
                            d={generateGraphPath(600, 192)} 
                            fill="none" 
                            stroke="url(#lineGradient)" 
                            strokeWidth="3"
                            filter="url(#glow)"
                            className="transition-all duration-75 ease-linear"
                        />
                    </svg>

                    {/* Stats Overlay */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 rounded text-xs text-zinc-400 font-mono border border-white/10">
                        Loss: {loss}
                    </div>
                </div>

                {/* Interactive Controls */}
                <div className="space-y-5">
                    {/* Slider 1 */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-zinc-400 flex items-center gap-1"><Network size={12} /> Learning Rate</span>
                            <span className="text-blue-400 font-mono">{(learningRate/1000).toFixed(3)}</span>
                        </div>
                        <input 
                            type="range" min="1" max="100" value={learningRate} 
                            onChange={(e) => setLearningRate(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125"
                        />
                    </div>

                    {/* Slider 2 */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-zinc-400 flex items-center gap-1"><Sliders size={12} /> Complexity</span>
                            <span className="text-purple-400 font-mono">{complexity} layers</span>
                        </div>
                        <input 
                            type="range" min="1" max="100" value={complexity} 
                            onChange={(e) => setComplexity(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125"
                        />
                    </div>

                    {/* Slider 3 */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-zinc-400 flex items-center gap-1"><Cpu size={12} /> Epochs</span>
                            <span className="text-cyan-400 font-mono">{epochs}00</span>
                        </div>
                        <input 
                            type="range" min="1" max="100" value={epochs} 
                            onChange={(e) => setEpochs(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-cyan-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-125"
                        />
                    </div>
                </div>

            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-zinc-800 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;