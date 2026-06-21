// lib/dataLoader.ts
import fs from 'fs';
import path from 'path';
import { Project } from '@/types/project';
import { WorkExperience } from '@/types/workexperience';
import { Module } from '@/types/module';

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

export function loadModuleData(): Module[] {
  const filePath = path.join(dataDirectory, "modules.json");
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: Module[] = JSON.parse(fileContents);
  return data
}
