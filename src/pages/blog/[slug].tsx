import Footer from "@/components/general/Footer";
import HeaderAndHero from "@/components/general/HeaderAndHero";
import HeadTemplate from "@/components/general/HeadTemplate";
import { BLOG_POSTS, IMAGES } from "@/constants/constants";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = BLOG_POSTS.map((post) => ({
    params: { slug: post.uid },
  }));

  return { paths, fallback: true }; // `true` allows new posts to be dynamically generated
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const owner = "victoribironke";
  const repo = "hashnode-blog-backup";
  const path = `${slug}.md`;

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

      <HeaderAndHero desc={desc} title={title} />

      {/* <section className="w-full max-w-5xl py-40 px-6">
        <Markdown className="markdown font-sub">{data}</Markdown>
      </section> */}

      <Footer />
    </>
  );
};

export default BlogPost;
