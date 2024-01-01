import { profilePic } from "@/helpers/image-paths";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const linkClassname =
    "flex items-center justify-center gap-2 font-light cursor-pointer hover:scale-105";

  return (
    <section className="w-full max-w-xl flex flex-col rs:flex-row gap-4 items-center justify-center mb-16">
      <Image
        src={profilePic}
        alt="profile-image"
        className="rounded-xl border-[3px] border-blue"
        width={96}
        height={96}
      />
      <div className="w-full flex flex-col gap-5 rs:gap-3">
        <p className="font-normal text-xl text-center rs:text-left">
          Hey, I am Victor.{" "}
          <span className="opacity-70">
            I am a software engineer and full stack developer.
          </span>
        </p>

        <div className="flex flex-wrap items-center justify-center rs:justify-start gap-4">
          <Link
            href="https://twitter.com/victoribironke_"
            className={linkClassname}
            target="_blank"
          >
            <FaTwitter />
            Twitter
          </Link>
          <Link
            href="https://linkedin.com/in/victor-ibironke"
            className={linkClassname}
            target="_blank"
          >
            <ImLinkedin />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/victoribironke"
            className={linkClassname}
            target="_blank"
          >
            <BsGithub />
            Github
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
