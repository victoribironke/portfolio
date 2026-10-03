import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/sanity/queries";

type ProjectListProps = {
  projects: Project[];
};

const ProjectList = ({ projects }: ProjectListProps) => (
  <ul className="-mx-3 stagger">
    {projects.map((project, i) => (
      <li key={project._id}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-[2rem_1fr_auto] gap-x-2 rounded-xl px-3 py-4 transition-colors hover:bg-surface-hover"
        >
          <span className="pt-[3px] font-mono text-xs text-faint tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="font-medium tracking-tight">{project.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-pretty text-muted">
              {project.description}
            </p>
          </div>
          <ArrowUpRight
            size={16}
            aria-hidden
            className="mt-0.5 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </a>
      </li>
    ))}
  </ul>
);

export default ProjectList;
