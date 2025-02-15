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
          className="font-light ml-2 border-b border-dashed w-fit hover:border-b-blue"
        >
          hello@victoribironke.com
        </Link>
      </p>

      <Separator />

      <h1 className="text-2xl font-medium">Projects</h1>

      <ul className="text-zinc-300 list-disc pl-5 space-y-1">
        {PROJECTS.map((p, i) => (
          <li key={i} className="pl-1 text-lg flex items-center gap-4">
            <Avatar className="h-6 w-6 rounded-sm">
              <AvatarImage src={p.image} alt={p.name} />
              <AvatarFallback className="rounded-lg">
                {p.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <Link
              href={p.link}
              className="font-light border-b border-dashed w-fit hover:border-b-blue"
            >
              {p.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* <div className="max-w-lg w-full flex gap-4">
        <Avatar className="h-20 w-20 rounded-lg">
          <AvatarImage
            src="https://www.ventivo.co/logo-transparent.png"
            alt="valse"
          />
          <AvatarFallback className="rounded-lg">VA</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-lg mb-2">Valse</p>
          <p className="font-light text-zinc-300">
            Valse is a tool that allows users to automatically sort their
            Spotify playlists by key.
          </p>
        </div>
      </div> */}

      <Separator />

      <h1 className="text-2xl font-medium">Writing</h1>

      <ul className="text-zinc-300 list-disc pl-5 space-y-1">
        {BLOG_POSTS.map((b, i) => (
          <li key={i} className="pl-1 text-lg">
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
