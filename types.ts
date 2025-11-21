export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  metrics: string;
  link?: string;
  category: 'ML' | 'NLP/GenAI' | 'CV' | 'Engineering' | 'App Dev';
}

export interface SkillCategory {
  name: string;
  skills: string[];
  level: number; // 0-100 for chart
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
}

export enum ChatSender {
  USER = 'user',
  BOT = 'bot',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  timestamp: Date;
  isStreaming?: boolean;
}