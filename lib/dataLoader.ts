// lib/dataLoader.ts
import fs from 'fs';
import path from 'path';
import { Project } from '@/app/@types/project';
import { WorkExperience } from '@/app/@types/workexperience';

const dataDirectory = path.join(process.cwd(), 'data');

export function loadExperienceData(): WorkExperience[] {
  const filePath = path.join(dataDirectory, 'experience.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: WorkExperience[] = JSON.parse(fileContents);
  return data;
}

export function loadProjectsData(): Project[] {
  const filePath = path.join(dataDirectory, 'projects.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: Project[] = JSON.parse(fileContents);
  return data;
}
