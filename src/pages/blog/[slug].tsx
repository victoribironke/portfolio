import Footer from "@/components/general/Footer";
import HeaderAndHero from "@/components/general/HeaderAndHero";
import HeadTemplate from "@/components/general/HeadTemplate";
import { BLOG_POSTS, IMAGES, PAGES } from "@/constants/constants";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const owner = "victoribironke";
  const repo = "hashnode-blog-backup";
  const uid = BLOG_POSTS.find((p) => p.slug === slug)?.uid;

  if (!uid) {
    return {
      props: {},
      notFound: true,
    };
  }

  const path = `${uid}.md`;
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

const BlogPost = ({ data }: { data: string }) => {
  const d = data.split("---")[1].split("\n").filter(Boolean);
  const title = d[1].split(' "')[1].split('"')[0];
  const desc = d[2].split(' "')[1].split('"')[0];
  const og_image = d.at(-1)?.split(" ")[1] || "";

  const {
    query: { slug },
  } = useRouter();

  const meta = {
    title,
    description: desc,
    url: `https://www.victoribironke.com/blog/${slug}`,
    og_image,
    logo: IMAGES.logo.src,
  };

  return (
    <>
      <HeadTemplate meta={meta} />

      <HeaderAndHero desc={desc} title="Blog post" />

      <section className="w-full max-w-6xl relative flex items-start justify-center flex-col lg:flex-row py-40 px-10 gap-10">
        <div className=" w-full lg:w-2/3">
          <Link href={PAGES.blog}>
            <Button className="text-white font-sub w-full bg-black hover:bg-black/90 mb-8 max-w-[10rem] flex  items-center justify-center gap-2 hover:gap-4 transition-all duration-200">
              <IoIosArrowBack /> Back
            </Button>
          </Link>

          <p className="font-blog-heading font-semibold text-2xl md:text-3xl lg:text-4xl mb-8">
            {title}
          </p>

          <Markdown className="markdown font-sub">
            {data.split("---")[2].replaceAll(' align="center"', "")}
          </Markdown>
        </div>

        <div className="w-full p-4 border lg:w-1/3 sticky top-8"></div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;
