"use client";

import Image from "next/image";
import ExperienceComponent from "./components/experience";
import ProjectComponent from "./components/project";
import SocialMediaIcons from "./components/social";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTheme } from "./contexts/ThemeContext";
import { WorkExperience } from "./@types/workexperience";
import { Project } from "./@types/project";

export default function Home() {
  const { isDarkMode } = useTheme() ?? {};

  const name = useRef(null);
  const title = useRef(null);

  const [experience, setExperience] = React.useState<WorkExperience[]>([]);
  const [projects, setProjects] = React.useState<Project[]>([]);

  useEffect(() => {
    const typedName = new Typed(name.current, {
      strings: ["Kevin Toh"],
      typeSpeed: 50,
      showCursor: false,
    });

    const typedTitle = new Typed(title.current, {
      strings: ["Associate AI Engineer"],
      typeSpeed: 50,
    });

    return () => {
      typedName.destroy();
      typedTitle.destroy();
    };
  }, []);

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const res = await fetch("/api/experience");
        if (res.ok) {
          const experienceData: WorkExperience[] = await res.json();
          setExperience(experienceData);
        } else {
          throw new Error("Failed to fetch experience data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProjectsData = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const projectData: Project[] = await res.json();
          setProjects(projectData);
        } else {
          throw new Error("Failed to fetch projects data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchExperienceData();
    fetchProjectsData();
  }, []);

  return (
    <main className="flex flex-row flex-wrap lg:px-20">
      {/* Left Half */}
      <div className="flex flex-col px-6 py-12 sm:px-8 lg:px-6 lg:py-12 xl:p-12 lg:w-2/5 lg:sticky lg:top-0 lg:max-h-screen lg:-mt-20 lg:pt-32 xl:pt-32">
        <Image
          priority
          className="rounded-full mb-6"
          src="/images/profile/kevin.jpg"
          height={160}
          width={160}
          alt={"Kevin"}
        />
        <div className="text-4xl lg:text-3xl xl:text-4xl font-bold mb-3">
          <span ref={name} />
        </div>
        <div className="text-lg xl:text-xl mb-3">
          <span ref={title} />
        </div>
        <div
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } 'lg:text-sm xl:text-base font-light mb-3`}
        >
          I’m fascinated by how any form of data, be it text, images, or sound, can
          be transformed into representations that machines can understand. What
          once began as abstract theories has steadily evolved into reality,
          powered by advances in computing and clever architectural design.
        </div>
        <SocialMediaIcons />
      </div>
      {/* Right Half */}
      <div className="flex flex-col overflow-y-auto px-6 py-6 sm:px-8 lg:px-6 lg:py-12 xl:p-12 lg:w-3/5">
        {/* About */}
        <section id="about">
          <header className="font-bold uppercase mb-4 text-lg">About</header>
          <div className="mb-6">
            I’m driven by how different modalities can be encoded, aligned, and fused to model and make predictions of the world. I love exploring these architectures and using them creatively to build systems that serve a greater purpose where technology not only performs well but contributes meaningfully to people's lives.

            As an Associate AI Engineer at AI Singapore and a Computer Science graduate from NUS, I focus on bridging deep learning research with practical applications, transforming ideas into working systems that push the boundaries of how machines perceive and reason.
          </div>
        </section>
        {/* Experience */}
        <section id="experience">
          <header className="font-bold uppercase mb-4 text-lg">
            Experience
          </header>
          {experience.map((experience: WorkExperience) => (
            <ExperienceComponent
              key={experience.role}
              organization={experience.organization}
              role={experience.role}
              start={experience.start}
              end={experience.end}
              description={experience.description}
              tags={experience.tags}
            />
          ))}
        </section>
        {/* Projects */}
        <section id="projects">
          <header className="font-bold uppercase mb-4 text-lg">Projects</header>
          {projects.map((project: Project) => (
            <ProjectComponent
              key={project.name}
              name={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
              imageWidth={project.imageWidth}
              imageHeight={project.imageHeight}
              url={project.url}
              tags={project.tags}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
