import { ProjectProps } from "@/types/general";
import Project from "./Project";

const projects: ProjectProps[] = [
  {
    name: "Stylistic",
    startDate: "April 17, 2023",
    url: "https://stylistic.vercel.app",
    desc: "Stylistic is an AI-powered outfit picker app. It helps you figure out what to wear anytime you need it by analyzing your existing wardrobe, the weather and the occasion.",
  },
  {
    name: "Ted-Ed Summarized",
    startDate: "August 23, 2023",
    url: "https://ted-ed-summarized.vercel.app",
    desc: "This is a website to keep track of the generated summaries of Ted-Ed videos on twitter.",
  },
];

const Projects = () => {
  return (
    <section className="mb-16 w-full max-w-xl flex flex-col gap-6">
      <h1 className="font-medium text-xl w-full text-center rs:text-left">
        What I have been working on
      </h1>

      {projects.map((project, i) => (
        <Project
          desc={project.desc}
          name={project.name}
          startDate={project.startDate}
          url={project.url}
          key={i}
        />
      ))}
    </section>
  );
};

export default Projects;
