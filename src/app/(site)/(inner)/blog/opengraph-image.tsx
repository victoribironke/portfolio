import { PAGES, SITE } from "@/lib/constants";
import { OG_SIZE, renderPageImage } from "@/lib/og";
import { getPosts } from "@/sanity/queries";

export const revalidate = 43200;

export const alt = `Writing · ${SITE.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

const Image = async () => {
  const posts = await getPosts();

  return renderPageImage({
    title: "Writing",
    description:
      "Notes, essays and things I've learned along the way. Mostly about software, sometimes about everything else.",
    path: PAGES.blog,
    count: posts.length,
  });
};

export default Image;
