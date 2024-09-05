import Footer from "@/components/general/Footer";
import HeaderAndHero from "@/components/general/HeaderAndHero";
import HeadTemplate from "@/components/general/HeadTemplate";
import { IMAGES } from "@/constants/constants";
import { GetServerSideProps } from "next";
import Markdown from "react-markdown";

export const getServerSideProps: GetServerSideProps = async () => {
  const owner = "victoribironke";
  const repo = "victoribironke";

  const path = "README.md";
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const token = process.env.GITHUB_TOKEN;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const res = await req.json();

  const markdown = Buffer.from(res.content, "base64").toString("utf-8");

  return {
    props: {
      data: markdown,
    },
  };
};

const Home = ({ data }: { data: string }) => {
  console.log(data);

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

      <section className="w-full max-w-5xl gap-20 flex flex-col items-center justify-center py-40 px-6">
        <p className="font-main text-4xl md:text-5xl lg:text-7xl text-center w-full">
          ABOUT ME
        </p>

        <div className="w-full max-w-3xl">
          <Markdown className="markdown font-sub">{data}</Markdown>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
