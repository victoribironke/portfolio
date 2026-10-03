import type { Metadata } from "next";
import IndexList from "@/components/index-list";
import PageIntro from "@/components/page-intro";
import { PAGES } from "@/lib/constants";
import { getProjects } from "@/sanity/queries";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Projects",
  description: "Things Victor has built, is building, or keeps coming back to.",
  alternates: { canonical: PAGES.projects },
};

const Projects = async () => {
  const projects = await getProjects();

  return (
    <>
      <PageIntro title="Projects">
        Things I&apos;ve built, things I&apos;m building, and things I keep
        coming back to.
      </PageIntro>

      {projects.length === 0 ? (
        <p className="text-muted">Nothing here yet.</p>
      ) : (
        <IndexList
          items={projects.map((project, i) => ({
            key: project._id,
            href: project.link,
            label: String(i + 1).padStart(2, "0"),
            title: project.name,
            description: project.description,
            external: true,
          }))}
        />
      )}
    </>
  );
};

export default Projects;
