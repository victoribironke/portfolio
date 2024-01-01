import Link from "next/link";
import { SiBuymeacoffee } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const linkClassname = "text-lg rs:text-xl cursor-pointer hover:scale-105";

  return (
    <footer className="w-full max-w-xl flex flex-col items-center justify-center rs:flex-row rs:justify-between gap-6 mb-6">
      <div className="font-medium rs:text-lg mr-auto w-full text-center rs:text-left">
        VICTOR IBIRONKE
      </div>

      <div className="flex items-center justify-center gap-6">
        <Link
          href="https://twitter.com/victoribironke_"
          className={linkClassname}
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://linkedin.com/in/victor-ibironke"
          className={linkClassname}
          target="_blank"
        >
          <ImLinkedin />
        </Link>
        <Link
          href="https://github.com/victoribironke"
          className={linkClassname}
          target="_blank"
        >
          <BsGithub />
        </Link>

        <Link
          href="https://www.buymeacoffee.com/victoribironke"
          className={`${linkClassname} text-xl rs:text-2xl`}
          target="_blank"
        >
          <SiBuymeacoffee />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
