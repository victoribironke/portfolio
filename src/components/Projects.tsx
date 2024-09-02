import Link from "next/link";
import { PROJECTS } from "@/constants/constants";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Projects = () => {
  return (
    <section className="w-full max-w-5xl gap-20 flex flex-col items-center justify-center pt-40 px-6">
      <p className="font-main text-4xl md:text-5xl lg:text-7xl text-center w-full">
        PROJECTS
      </p>

      <div className="w-full gap-12 flex items-center justify-center flex-col">
        {PROJECTS.map((p, i) => (
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

              <Link href={p.urls.live} className="w-full max-w-[10rem]">
                <Button className="text-white font-sub w-full bg-black hover:bg-black/90">
                  Visit
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
