import { ProjectProps } from "@/types/general";
import Link from "next/link";
import Project from "./Project";

const projects: ProjectProps[] = [
  {
    name: "Stylistic",
    startDate: "April 17, 2023",
    url: "https://stylistic.vercel.app",
    desc: "Stylistic is an AI-powered outfit picker app. It helps you figure out what to wear anytime you need it by analyzing your existing wardrobe, the weather and the occasion.",
  },
  {
    name: "Todo App",
    startDate: "January 21, 2023",
    url: "https://victoribironke.github.io/todo-app/",
    desc: "This is a basic todo app created with HTML, CSS and TypeScript. It has all the basic features of a standard todo app, including filtering and a theme switcher.",
  },
];

const Projects = () => {
  return (
    <section className="mb-16 w-full max-w-xl flex flex-col gap-6">
      <h1 className="font-magnat font-medium text-xl w-full text-center rs:text-left">
        What I've been working on
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
