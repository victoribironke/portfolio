import Footer from "@/components/general/Footer";
import HeaderAndHero from "@/components/general/HeaderAndHero";
import HeadTemplate from "@/components/general/HeadTemplate";
import { IMAGES, PAGES } from "@/constants/constants";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import SharePost from "@/components/blog/SharePost";
import { BLOG_POSTS } from "@/constants/blog-posts";

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
  const og_image = d.find((a) => a.includes("ogImage"))?.split(" ")[1] || "";
  const date_published =
    d.find((a) => a.includes("datePublished"))?.split(": ")[1] || "";

  const markdown = data.split("---")[2].replaceAll(' align="center"', "");

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
            <Button className="text-white font-sub w-full bg-black hover:bg-black/90 max-w-[10rem] flex  items-center justify-center gap-2 hover:gap-4 transition-all duration-200">
              <IoIosArrowBack /> Back
            </Button>
          </Link>

          <Image
            src={og_image}
            alt="blog post cover"
            className="rounded-xl my-8"
            width={1280}
            height={720}
          />

          <p className="font-blog-heading font-semibold text-2xl md:text-3xl lg:text-4xl mb-8">
            {title}
          </p>

          <Markdown className="markdown font-sub">{markdown}</Markdown>
        </div>

        <div className="w-full py-4 lg:w-1/3 sticky top-8">
          <section className="border-b-2 pb-4">
            <p className="text-gray-400 font-sub text-sm">Written By</p>

            <address className="flex items-center gap-3 mt-4">
              <div className="relative w-12 h-12">
                <Image
                  src={IMAGES.logo.src}
                  alt="Logo"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <div rel="author">
                <h3 className="font-semibold text-lg font-blog-heading">
                  Victor Ibironke
                </h3>
                <a
                  href="https://twitter.com/victoribironke_"
                  className="text-blue text-sm font-sub"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  @victoribironke_
                </a>
              </div>
            </address>
          </section>

          <section className="border-b-2 py-4">
            <h3 className="font-semibold text-lg font-blog-heading mb-4">
              Published on:
            </h3>

            <p className="w-full font-sub">
              {new Date(date_published).toLocaleString()}
            </p>
          </section>

          <SharePost title={title} slug={slug as string} desc={desc} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPost;
