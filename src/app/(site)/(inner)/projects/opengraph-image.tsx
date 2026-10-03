import { PAGES, SITE } from "@/lib/constants";
import { OG_SIZE, renderPageImage } from "@/lib/og";
import { getProjects } from "@/sanity/queries";

export const revalidate = 43200;

export const alt = `Projects · ${SITE.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

const Image = async () => {
  const projects = await getProjects();

  return renderPageImage({
    title: "Projects",
    description:
      "Things I've built, things I'm building, and things I keep coming back to.",
    path: PAGES.projects,
    count: projects.length,
  });
};

export default Image;
