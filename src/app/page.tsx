import ExperienceComponent from "@/components/experience";
import HomeIntro from "@/components/home-intro";
import ProjectComponent from "@/components/project";
import SectionLabel from "@/components/section-label";
import { loadExperienceData, loadProjectsData } from "@/lib/dataLoader";
import { WorkExperience } from "@/types/workexperience";
import { Project } from "@/types/project";

export default function Home() {
  const experience = loadExperienceData();
  const projects = loadProjectsData();

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:flex-row lg:gap-16 lg:px-12">
      <HomeIntro />

      <div className="flex flex-col gap-20 py-10 lg:w-3/5 lg:py-28">
        <section id="about" className="animate-fade-up">
          <SectionLabel index="00">About</SectionLabel>
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl sm:leading-relaxed">
            I build systems that{" "}
            <span className="text-brand">perceive and reason</span> across
            modalities — encoding, aligning and fusing text, image and sound.
            Associate Software Engineer at Razer, CS graduate from NUS.
          </p>
        </section>

        <section id="experience">
          <SectionLabel index="01">Experience</SectionLabel>
          <div className="flex flex-col gap-4">
            {experience.map((item: WorkExperience) => (
              <ExperienceComponent
                key={item.role}
                organization={item.organization}
                role={item.role}
                start={item.start}
                end={item.end}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </section>

        <section id="projects">
          <SectionLabel index="02">Projects</SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2">
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
          </div>
        </section>
      </div>
    </main>
  );
}
