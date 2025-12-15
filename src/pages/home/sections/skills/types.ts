// src/pages/home/sections/skills/types.ts
export interface Technology {
  name: string;
  icon: string; // Nome do ícone do lucide-react
  category: string;
  description: string;
}

export interface SkillsData {
  title: string;
  subtitle?: string;
  technologies: Technology[];
}

export interface SkillsProps {
  data: SkillsData;
}