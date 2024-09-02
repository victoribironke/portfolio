import { IMAGES } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const WorkExperience = () => {
  const experience = [
    {
      company: "Merjoh LTD",
      title: "Website developer",
      start_date: "2023-03-01",
      end_date: "2023-07-31",
      desc: "I was tasked with using wordpress to build and manage websites for various clients.",
      image: IMAGES.company.merjoh.src,
      url: "https://merjoh.com/",
    },
    {
      company: "AfternoonPrep",
      title: "Frontend developer",
      start_date: "2023-04-01",
      end_date: "2023-07-31",
      desc: "I was the second dev tasked with building out and maintaining the UI of the company's web app.",
      image: IMAGES.company.afternoonprep.src,
      url: "https://afternoonprep.com/",
    },
    {
      company: "Talanq",
      title: "Full stack developer",
      start_date: "2023-11-01",
      end_date: "2024-06-30",
      desc: "I was tasked with rebuilding the company's website from scratch, complete with a web app and backend functions.",
      image: IMAGES.company.talanq.src,
      url: "https://talanq.com/",
    },
  ];

  return (
    <section className="w-full max-w-5xl gap-20 flex flex-col items-center justify-center py-40 px-6">
      <p className="font-main text-4xl md:text-5xl lg:text-7xl text-center w-full">
        WORK EXPERIENCE
      </p>

      <div className="w-full gap-12 flex items-center justify-center flex-col">
        {experience.map((e, i) => {
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
                <p className="font-sub text-2xl md:text-3xl lg:text-4xl font-bold">
                  {e.company}
                </p>
                <p className="font-sub text-xs text-gray-400 uppercase md:text-sm lg:text-base">
                  {e.title}, {start_date} - {end_date}
                </p>
                <p className="font-sub md:text-lg lg:text-xl">{e.desc}</p>

                <Link href={e.url} target="_blank">
                  <Button className="text-white font-sub bg-black hover:bg-black/90">
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
