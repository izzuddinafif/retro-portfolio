const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export interface Links {
  go?: string;
  python?: string;
  overthewire?: string;
  hackthebox?: string;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  type: string;
  link?: string;
  doi?: string;
  links?: Links;
  created_at: string;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getProject(id: number): Promise<Project> {
  try {
    const response = await fetch(`${API_URL}/projects/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}
