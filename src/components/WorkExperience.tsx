import { EXPERIENCE } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const WorkExperience = () => {
  return (
    <section className="w-full max-w-5xl gap-20 flex flex-col items-center justify-center py-40 px-6">
      <p className="font-main text-4xl md:text-5xl lg:text-7xl text-center w-full">
        WORK EXPERIENCE
      </p>

      <div className="w-full gap-12 flex items-center justify-center flex-col">
        {EXPERIENCE.map((e, i) => {
          const start_date = new Date(e.start_date)
            .toDateString()
            .split(" ")
            .slice(1)
            .join(" ");
          const end_date = new Date(e.end_date)
            .toDateString()
            .split(" ")
            .slice(1)
            .join(" ");

          return (
            <div
              key={i}
              className={cn(
                "flex items-center justify-center gap-4 md:gap-12 w-full flex-col",
                i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              )}
            >
              <div className="flex items-start justify-center self-start flex-col w-full md:w-1/2 gap-3">
                <p className="font-blog-heading text-xl md:text-2xl lg:text-3xl font-bold">
                  {e.company}
                </p>
                <p className="font-sub text-xs text-gray-400 uppercase md:text-sm">
                  {e.title}, {start_date} - {end_date}
                </p>
                <p className="font-sub lg:text-lg">{e.desc}</p>

                <Link
                  href={e.url}
                  target="_blank"
                  className="w-full max-w-[10rem]"
                >
                  <Button className="text-white w-full font-sub bg-black hover:bg-black/90">
                    Visit
                  </Button>
                </Link>
              </div>

              <div className="flex items-start justify-center flex-col w-full md:w-1/2 border-2 rounded-2xl  overflow-hidden">
                <Image
                  alt={e.company}
                  src={e.image}
                  height={878}
                  width={1561}
                  className="hover:scale-125"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;
