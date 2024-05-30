import { loadProjectsData } from '@/lib/dataLoader';
import { NextResponse } from 'next/server';

export async function GET() {
  const projects = loadProjectsData();
  return NextResponse.json(projects);
}
