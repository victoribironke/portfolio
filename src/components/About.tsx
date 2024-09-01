import HeroSvg from "./HeroSvg";

const About = () => {
  return (
    <section className="w-full mt-52 max-w-5xl sticky flex gap-4 items-center bg-gray-100 bg-opacity-5 p-6 backdrop-blur-sm rounded-2xl">
      <p className="w-fit max-w-5xl text-left font-sub text-blue bg-gray-100 bg-opacity-5 px-6 py-2 self-start backdrop-blur-sm rounded-xl absolute -top-12 left-0 z-0">
        abouty
      </p>

      <div className="flex flex-col h-full gap-8">
        <p className="text-xl max-w-xl md:max-w-2xl z-10">
          Hello! I am Victor Ibironke
        </p>

        <p className="text-2xl md:text-3xl max-w-2xl z-10">
          I am a full-stack developer with an enthusiastic drive for building
          high-quality web projects.
        </p>
      </div>

      <div className="absolute w-full md:w-[50%] right-0 overflow-hidden h-full rounded-2xl">
        <HeroSvg />
      </div>
    </section>
  );
};

export default About;
