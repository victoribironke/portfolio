import Footer from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BLOG_POSTS, MAILTO, PAGES, PROJECTS } from "@/constants/constants";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-medium">Victor Ibironke</h1>

      <Separator />

      <p className="md:text-lg">
        I&apos;m a full-stack developer with a passion for building high-quality
        web projects. I specialize in creating tools and applications that
        provide real value to users, with a strong emphasis on simplicity,
        efficiency, and usability.
      </p>

      <p>
        You can reach me here:
        <Link
          href={MAILTO}
          className="font-light ml-2 border-b border-dashed w-fit hover:border-b-blue text-sm md:text-base"
        >
          hello@victoribironke.com
        </Link>
      </p>

      <Separator />

      <h1 className="text-2xl font-medium">Projects</h1>

      <div className="w-full grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        {PROJECTS.map((p, i) => (
          <Link href={p.link} className="w-full" key={i}>
            <div className="md:text-lg flex items-center gap-4 w-full aspect-square relative">
              <Avatar className="w-full h-full p-6 rounded-lg bg-white">
                <AvatarImage src={p.image} alt={p.name} />
                <AvatarFallback className="rounded-lg bg-white text-black">
                  {p.name[0]}
                </AvatarFallback>
              </Avatar>

              <div className="text-black bg-white absolute top-2 left-2 border border-gray-400 shadow px-2 py-1 flex items-center justify-center text-xs gap-1 rounded-md font-medium w-fit whitespace-nowrap">
                {p.name}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Separator />

      <h1 className="text-2xl font-medium">Writing</h1>

      <ul className="text-zinc-300 list-disc pl-5 space-y-1">
        {BLOG_POSTS.map((b, i) => (
          <li key={i} className="pl-1 md:text-lg">
            <Link
              href={PAGES.post(b.slug)}
              className="font-light border-b border-dashed w-fit hover:border-b-blue"
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
