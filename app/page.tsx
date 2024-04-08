"use client";

import Image from "next/image";
import ExperienceComponent from "./components/experience";
import ProjectComponent from "./components/project";
import SocialMediaIcons from "./components/social";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTheme } from "./contexts/ThemeContext";
import { experience } from "@/lib/experience";
import { WorkExperience } from "./@types/workexperience";
import { projects } from "@/lib/projects";
import { Project } from "./@types/project";

export default function Home() {
  const { isDarkMode } = useTheme() ?? {};

  const name = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    const typedName = new Typed(name.current, {
      strings: ["Kevin Toh"],
      typeSpeed: 50,
      showCursor: false,
    });

    const typedTitle = new Typed(title.current, {
      strings: ["Computer Science Undergraduate"],
      typeSpeed: 50,
    });

    return () => {
      typedName.destroy();
      typedTitle.destroy();
    };
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
          I dive into the intricate details of software development, gaining
          hands-on experience that extends across various platforms.
        </div>
        <SocialMediaIcons />
      </div>
      {/* Right Half */}
      <div className="flex flex-col overflow-y-auto px-6 py-6 sm:px-8 lg:px-6 lg:py-12 xl:p-12 lg:w-3/5">
        {/* About */}
        <section id="about">
          <header className="font-bold uppercase mb-4 text-lg">About</header>
          <div className="mb-6">
            Hello there! I’m a sophomore at National University of Singapore
            immersing myself in the world of Computer Science with a minor in
            Data Science and Analytics. My passion lies in creating innovative
            software solutions that contribute to the evolution of our digital
            landscape.
          </div>
        </section>
        {/* Experience */}
        <section id="experience">
          <header className="font-bold uppercase mb-4 text-lg">
            Experience
          </header>
          {experience.map((experience: WorkExperience) => (
            <ExperienceComponent
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
