import { loadExperienceData } from '@/lib/dataLoader';
import { NextResponse } from 'next/server';

export async function GET() {
  const experience = loadExperienceData();
  return NextResponse.json(experience);
}
