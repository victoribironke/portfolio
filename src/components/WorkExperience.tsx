const WorkExperience = () => {
  const experience = [
    {
      company: "Merjoh LTD",
      title: "website developer",
      start_date: "2023-03-01",
      end_date: "2023-07-31",
      desc: "i was tasked with using wordpress to build and manage websites for various clients.",
      image: "/merjoh-logo.jpeg",
      url: "https://merjoh.com/",
    },
    {
      company: "AfternoonPrep",
      title: "frontend developer",
      start_date: "2023-04-01",
      end_date: "2023-07-31",
      desc: "i was the second dev tasked with building out and maintaining the UI of the company's web app.",
      image: "/afternoon-prep-logo.png",
      url: "https://afternoonprep.com/",
    },
    {
      company: "Talanq",
      title: "full stack developer",
      start_date: "2023-11-01",
      end_date: "2024-06-30",
      desc: "i was tasked with rebuilding the company's website from scratch, complete with a web app and backend functions.",
      image: "/talanq-logo.png",
      url: "https://talanq.com/",
    },
  ];

  return (
    <section className="w-full text-white max-w-5xl relative gap-4 mb-4 grid md:grid-cols-2 grid-cols-1">
      <p className="w-fit max-w-5xl text-left font-mono text-blue bg-gray-100 bg-opacity-5 px-6 py-2 self-start backdrop-blur-sm rounded-xl absolute -top-12 left-0 z-0">
        work experience
      </p>

      {experience.map((e, i) => {
        const start_date = new Date(e.start_date).toDateString();
        const end_date = new Date(e.end_date).toDateString();

        return (
          <div
            key={i}
            className="w-full flex items-start lg:gap-x-6 gap-x-4 bg-gray-100 bg-opacity-5 backdrop-blur-sm rounded-2xl p-4"
          >
            <img
              src={e.image}
              alt={`${e.company} logo`}
              className="bg-gray-100 bg-opacity-5 backdrop-blur-sm rounded-md p-2 w-14 h-14"
            />
            <div className="flex flex-col items-start">
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="text-xl font-bold text-blue"
              >
                {e.company}
              </a>
              <p>{e.title}</p>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {start_date} - {end_date}
              </small>
              <p className="text-base text-zinc-400 mt-4">{e.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WorkExperience;
