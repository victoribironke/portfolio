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
          content="victor ibironke is a full stack developer with an ethusiastic drive for building high-quality web projects."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.victoribironke.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Victor Ibironke ~ full stack developer"
        />
        <meta
          property="og:description"
          content="victor ibironke is a full stack developer with an ethusiastic drive for building high-quality web projects."
        />
        <meta
          property="og:image"
          content="https://www.victoribironke.com/og-image.png"
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.victoribironke.com" />
        <meta property="twitter:url" content="https://www.victoribironke.com" />
        <meta
          name="twitter:title"
          content="Victor Ibironke ~ full stack developer"
        />
        <meta
          name="twitter:description"
          content="victor ibironke is a full stack developer with an ethusiastic drive for building high-quality web projects."
        />
        <meta
          name="twitter:image"
          content="https://www.victoribironke.com/og-image.png"
        />
      </Head>

      <About />
      <WorkExperience />
      <Projects />
      <ContributionGraph />
      <Contact />
    </>
  );
};

export default Home;
