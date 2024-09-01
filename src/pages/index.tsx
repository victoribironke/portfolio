import About from "@/components/About";
import Contact from "@/components/Contact";
import ContributionGraph from "@/components/ContributionGraph";
import Footer from "@/components/general/Footer";
import HeaderAndHero from "@/components/general/HeaderAndHero";
import HeadTemplate from "@/components/general/HeadTemplate";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import { IMAGES } from "@/constants/constants";

const Home = () => {
  const meta = {
    title: "Victor Ibironke",
    description:
      "Victor Ibironke is a full-stack developer with an enthusiastic drive for building high-quality web projects.",
    url: "https://www.victoribironke.com",
    og_image: "https://www.victoribironke.com/og-image.png",
    logo: IMAGES.logo.src,
  };

  return (
    <>
      <HeadTemplate meta={meta} />

      <HeaderAndHero />

      <Footer />
      {/* <About />
      <WorkExperience />
      <Projects />
      <ContributionGraph />
      <Contact /> */}
    </>
  );
};

export default Home;
