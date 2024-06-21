import { imageSrc } from "@/atoms/atoms";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ContributionGraph from "@/components/ContributionGraph";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Home = () => {
  const [src, setSrc] = useRecoilState(imageSrc);

  useEffect(() => {
    (async () => {
      const url = `https://profile-picture-automation.vercel.app/api/get-latest-image-seed?password=${process.env.NEXT_PUBLIC_PASSWORD}`;

      const res = await (await fetch(url)).json();

      setSrc(
        `https://api.dicebear.com/8.x/lorelei/svg?seed=${res.data.seed}&flip=true`
      );
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Victor Ibironke ~ full stack developer</title>
        <link rel="shortcut-icon" href={src} type="image/x-icon" />
        <link rel="icon" href={src} type="image/x-icon" />
        <meta
          name="description"
          content="victor ibironke is an enthusiastic full stack developer"
        />
      </Head>

      <About />
      <WorkExperience />
      <Projects />
      <ContributionGraph />
      <Contact />

      {/* work on an images for seo for when your link on social media */}
      {/* work experience-victor eke
projects-victor eke
 */}
    </>
  );
};

export default Home;
