import Footer from "@/components/general/Footer";
import HeaderAndHero from "@/components/general/HeaderAndHero";
import HeadTemplate from "@/components/general/HeadTemplate";
import PageLoader from "@/components/general/PageLoader";
import { BLOG_POSTS, IMAGES, PAGES } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BiSolidTime } from "react-icons/bi";
import { HiCalendar } from "react-icons/hi";

const Blog = ({ data }: { data: any[] }) => {
  const meta = {
    title: "Victor Ibironke ~ Blog",
    description: "Blog posts about my experiences and projects.",
    url: "https://www.victoribironke.com/blog",
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

      <section className="w-full max-w-5xl gap-20 flex flex-col items-center justify-center py-40 px-6">
        <p className="font-main text-4xl md:text-5xl lg:text-7xl text-center w-full">
          BLOG POSTS
        </p>

        <div className="w-full gap-8 flex items-center justify-center flex-col">
          {BLOG_POSTS.map((b, i) => {
            return (
              <article className="w-full" key={i}>
                <Link href={PAGES.blog_post(b.uid)}>
                  <div className="w-full flex lg:flex-row flex-col lg:items-center items-start gap-8 p-4 rounded-xl border-2 group">
                    <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-clip rounded-md">
                      <Image
                        src={b.image}
                        className="object-cover group-hover:scale-125"
                        alt={b.title + " cover"}
                        layout="fill"
                      />
                    </div>

                    <div className="max-w-lg w-full font-sub">
                      <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">
                        {b.title}
                      </h2>
                      <p className="text-zinc-600 text-[0.95rem]">{b.desc}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <div className="flex items-center gap-2">
                          <HiCalendar />
                          <p>{new Date(b.date_published).toDateString()}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <BiSolidTime />
                          <p>{b.read_time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
