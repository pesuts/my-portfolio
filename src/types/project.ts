export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'fullstack' | 'backend' | 'frontend' | 'mobile' | 'data-engineering' | 'other';
  githubUrl: string;
  liveUrl?: string;
  screenshots: string[];
  features?: string[];
  year: number;
}

export type ProjectCategory = Project['category'] | 'all';
