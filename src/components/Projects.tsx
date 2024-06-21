import { imageSrc } from "@/atoms/atoms";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { ExternalLink, Github } from "./FooterIcons";

const Projects = () => {
  const src = useRecoilValue(imageSrc);

  const projects = [
    {
      name: "babcock tools",
      urls: {
        github: "https://github.com/victoribironke/babcock-tools",
        live: "https://babcock.tools/",
        image: "https://www.babcock.tools/images/logo.jpeg",
      },
      desc: "suite of tools for babcock university students",
    },
    {
      name: "github user search",
      urls: {
        github: "https://github.com/victoribironke/github-user-search",
        live: "https://userlookup.netlify.app/",
        image: "https://userlookup.netlify.app/icon-github.svg",
      },
      desc: "simple github user search app",
    },
    {
      name: "profile picture automation",
      urls: {
        github: "https://github.com/victoribironke/pp-automation/",
        live: "https://profile-picture-automation.vercel.app/",
        image: src,
      },
      desc: "script for changing my twitter profile picture",
    },
  ];

  return (
    <section className="w-full text-white max-w-5xl relative gap-4 justify-center grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <p className="w-fit max-w-5xl text-left font-mono text-blue bg-gray-100 bg-opacity-5 px-6 py-2 self-start backdrop-blur-sm rounded-xl absolute -top-12 left-0 z-0">
        projects
      </p>

      {projects.map((p, i) => (
        <div
          key={i}
          className="flex items-center justify-center flex-col gap-y-4 bg-gray-100 bg-opacity-5 backdrop-blur-sm p-4 rounded-2xl"
        >
          <div className="w-full flex items-center gap-x-4">
            <img
              src={p.urls.image}
              alt={p.name}
              className="bg-gray-100 bg-opacity-5 backdrop-blur-sm rounded-md p-2 w-14 h-14"
            />
            <div>
              <h2 className="font-semibold mb-1">{p.name}</h2>
              <div className="text-sm text-zinc-400">{p.desc}</div>
            </div>
          </div>

          <div className="w-full flex gap-x-4 items-center justify-center">
            <Link
              href={p.urls.github}
              target="_blank"
              className="w-full flex gap-2 rounded-md bg-gray-100 bg-opacity-5 p-3 backdrop-blur-sm border border-transparent hover:border-zinc-700"
            >
              <Github />
              github
            </Link>

            <Link
              href={p.urls.live}
              target="_blank"
              className="w-full flex gap-2 rounded-md bg-gray-100 bg-opacity-5 p-3 backdrop-blur-sm border border-transparent hover:border-zinc-700"
            >
              <ExternalLink />
              live
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
