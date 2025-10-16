import { create } from 'zustand';
import type { Project, Experience } from '../types';
import { PROJECTS } from '../constants';

interface AppState {
  projects: Project[];
  selectedProject: Project | null;
  selectProject: (project: Project | null) => void;
  selectedExperience: Experience | null;
  selectExperience: (experience: Experience | null) => void;
}

export const useStore = create<AppState>((set) => ({
  projects: PROJECTS,
  selectedProject: null,
  selectProject: (project) => set({ selectedProject: project }),
  selectedExperience: null,
  selectExperience: (experience) => set({ selectedExperience: experience }),
}));