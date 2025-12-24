
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  githubUrl: string;
  demoUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface TechItem {
  name: string;
  icon: string;
}
