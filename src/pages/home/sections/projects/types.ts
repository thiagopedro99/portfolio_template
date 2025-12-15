// src/pages/home/sections/projects/types.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl: string;
    featured?: boolean;
}

export interface ProjectsData {
    title: string;
    projects: Project[];
}

export interface ProjectsProps {
    data: ProjectsData;
}