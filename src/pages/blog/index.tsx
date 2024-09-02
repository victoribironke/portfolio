import Footer from "@/components/general/Footer";
import HeaderAndHero from "@/components/general/HeaderAndHero";
import HeadTemplate from "@/components/general/HeadTemplate";
import { IMAGES } from "@/constants/constants";

const Projects = () => {
  const meta = {
    title: "Victor Ibironke ~ Blog",
    description: "Blog posts about my experiences and projects.",
    url: "https://www.victoribironke.com/projects",
    og_image: IMAGES.seo.blog.src,
    logo: IMAGES.logo.src,
  };

  return (
    <>
      <HeadTemplate meta={meta} />

      <HeaderAndHero
        desc="Blog posts about my experiences and projects."
        title="Blog"
      />

      <Footer />
    </>
  );
};

export default Projects;
