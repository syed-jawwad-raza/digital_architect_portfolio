
import type { Project, Skill, Experience, SkillRelation } from './types';

export const MY_NAME = "Syed Jawwad Raza";
export const MY_TITLE = "Senior Software Engineer";

export const PROJECTS: Project[] = [
  { id: 1, name: "Project Cygnus", description: "A distributed backend system for real-time data processing, built with microservices architecture on AWS.", technologies: ["Python", "AWS Lambda", "Kafka", "DynamoDB"] },
  { id: 2, name: "Project Orion", description: "A machine learning pipeline for predictive analytics, containerized with Docker and orchestrated by Kubernetes.", technologies: ["TensorFlow", "Kubernetes", "Docker", "GCP"] },
  { id: 3, name: "Project Andromeda", description: "A high-performance game engine core developed in C++ with a focus on multithreading and memory optimization.", technologies: ["C++", "Vulkan", "Physics Engine"] },
  { id: 4, name: "Project Pegasus", description: "A serverless data lake solution for analyzing petabytes of data using AWS Glue and Athena.", technologies: ["AWS Glue", "S3", "Athena", "Terraform"] },
];

export const SKILLS: Skill[] = [
  { id: 1, name: "Python", level: 95, position: [0, 0, 0] },
  { id: 2, name: "AWS", level: 90, position: [2, 1, 0] },
  { id: 3, name: "C++", level: 85, position: [-2, 1, 0] },
  { id: 4, name: "Kubernetes", level: 80, position: [0, 2, 0] },
  { id: 5, name: "Terraform", level: 88, position: [3.5, 1.8, 0] },
  { id: 6, name: "SQL", level: 92, position: [-1.5, -1.5, 0] },
  { id: 7, name: "React", level: 75, position: [1.5, -1.5, 0] },
  { id: 8, name: "Machine Learning", level: 82, position: [-3.5, -0.5, 0] },
];

export const SKILL_RELATIONS: SkillRelation[] = [
    { from: 1, to: 2 },
    { from: 1, to: 8 },
    { from: 2, to: 5 },
    { from: 2, to: 4 },
    { from: 3, to: 8 },
    { from: 6, to: 1 },
    { from: 7, to: 2 }
];

export const EXPERIENCES: Experience[] = [
  { id: 1, role: "Senior Backend Engineer", company: "Stellar Solutions Inc.", period: "2020 - Present", description: "Led the development of scalable cloud infrastructure and backend services, improving system efficiency by 40%." },
  { id: 2, role: "Software Engineer", company: "Quantum Computing Co.", period: "2018 - 2020", description: "Developed and maintained machine learning models and data pipelines for large-scale data analysis." },
  { id: 3, role: "Junior Developer", company: "Digital Dreams Studio", period: "2016 - 2018", description: "Worked on game logic and engine performance optimization for AAA titles using C++ and proprietary tools." },
];
