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
    og_image: IMAGES.seo.home.src,
    logo: IMAGES.logo.src,
  };

  return (
    <>
      <HeadTemplate meta={meta} />

      <HeaderAndHero desc="Full stack developer" title="Victor Ibironke" />

      <Projects />
      <WorkExperience />

      <Footer />
    </>
  );
};

export default Home;
