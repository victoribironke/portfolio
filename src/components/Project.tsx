import { ProjectProps } from "@/types/general";
import Link from "next/link";

const Project = ({ name, startDate, url, desc }: ProjectProps) => {
  return (
    <div className="project-bg p-4 flex flex-col gap-2">
      <h2 className="font-magnat text-lg">{name}</h2>
      <div className="flex items-center justify-start">
        <p className="font-magnat text-sm font-light">{startDate}</p>
        <span className="mx-2">•</span>
        <Link
          href={url}
          className="font-magnat text-sm text-blue hover:underline hover:scale-105"
          target="_blank"
        >
          {url.split("https://")[1]}
        </Link>
      </div>
      <p className="font-magnat font-light">{desc}</p>
    </div>
  );
};

export default Project;
