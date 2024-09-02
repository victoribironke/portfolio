import Link from "next/link";
import { IMAGES } from "@/constants/constants";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Projects = () => {
  const projects = [
    {
      name: "Babcock Tools",
      urls: {
        github: "https://github.com/victoribironke/babcock-tools",
        live: "https://babcock.tools/",
        image: IMAGES.project.babcock_tools.src,
      },
      desc: "This is a suite of tools for the students of Babcock University.",
    },
    {
      name: "Ventivo",
      urls: {
        github: "",
        live: "https://ventivo.co/",
        image: IMAGES.project.ventivo.src,
      },
      desc: "This is a tool for generating real-time charts around your Firebase data.",
    },
    {
      name: "FPL statistics",
      urls: {
        github: "https://github.com/victoribironke/fpl-stats",
        live: "https://fpl-statistics.vercel.app/",
        image: IMAGES.project.fpl_stats.src,
      },
      desc: "This is a tool that wraps around the fantasy premier league API and displays statistics and insights on your team.",
    },
    {
      name: "Github user search",
      urls: {
        github: "https://github.com/victoribironke/github-user-search",
        live: "https://userlookup.netlify.app/",
        image: IMAGES.project.github_user_search.src,
      },
      desc: "This is a simple website that allows you to get the information of any user on GitHub.",
    },
  ];

  return (
    <section className="w-full max-w-5xl gap-20 flex flex-col items-center justify-center pt-40 px-6">
      <p className="font-main text-4xl md:text-5xl lg:text-7xl text-center w-full">
        PROJECTS
      </p>

      <div className="w-full gap-12 flex items-center justify-center flex-col">
        {projects.map((p, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center justify-center gap-4 md:gap-12 w-full flex-col",
              i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            )}
          >
            <div className="flex items-start justify-center self-start flex-col w-full md:w-1/2 gap-4">
              <p className="font-sub text-2xl md:text-3xl lg:text-4xl font-bold">
                {p.name}
              </p>
              <p className="font-sub md:text-lg lg:text-xl">{p.desc}</p>

              <Link href="" className="w-full max-w-[10rem]">
                <Button className="text-white font-sub w-full bg-black hover:bg-black/90">
                  Read more
                </Button>
              </Link>
            </div>

            <div className="flex items-start justify-center flex-col w-full md:w-1/2 border-2 rounded-2xl overflow-hidden">
              <Image
                alt={p.name}
                src={p.urls.image}
                height={878}
                width={1561}
                className="hover:scale-125"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
