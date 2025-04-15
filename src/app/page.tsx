import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { BLOG_POSTS, MAILTO, PAGES, PROJECTS } from "@/constants/constants";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-medium">Victor Ibironke</h1>

      <Separator />

      <p>
        I&apos;m a full-stack developer with a passion for building high-quality
        web projects. I specialize in creating tools and applications that
        provide real value to users, with a strong emphasis on simplicity,
        efficiency, and usability.
      </p>

      <p>
        You can reach me here:
        <Link
          href={MAILTO}
          className="ml-2 border-b border-dashed w-fit hover:border-b-blue text-sm md:text-base"
        >
          hello@victoribironke.com
        </Link>
      </p>

      <Separator />

      <h1 className="md:text-xl font-medium">Projects</h1>

      <ul className="text-muted-foreground space-y-1">
        {PROJECTS.map((p, i) => (
          <li key={i} className="pl-1 flex list-outside items-center gap-2">
            <span className="text-black dark:text-white mr-2">•</span>
            <Link
              href={p.link}
              className="border-b border-dashed w-fit hover:border-b-blue"
            >
              {p.name}
            </Link>
            <span>/</span>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>

      <Separator />

      <h1 className="md:text-xl font-medium">Writing</h1>

      <ul className="text-muted-foreground space-y-1">
        {BLOG_POSTS.map((b, i) => (
          <li key={i} className="pl-1 flex list-outside items-center gap-2">
            <span className="text-black dark:text-white mr-2">•</span>
            <Link
              href={PAGES.post(b.slug)}
              className="border-b border-dashed w-fit hover:border-b-blue"
            >
              {b.title}
            </Link>
          </li>
        ))}
      </ul>

      <Footer />
    </>
  );
};

export default Home;
