
export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  id: number;
  name:string;
  level: number; // e.g., 0-100
  position: [number, number, number];
}

export interface SkillRelation {
    from: number;
    to: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}
