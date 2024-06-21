import { Github, Instagram, LinkedIn, Twitter } from "@/components/FooterIcons";
import Link from "next/link";

const Contact = () => {
  const footerLinks = [
    { text: "Github", icon: Github, url: "https://github.com/victoribironke" },
    {
      text: "Linkedin",
      icon: LinkedIn,
      url: "https://linkedin.com/in/victor-ibironke",
    },
    {
      text: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/victoribironke_",
    },
    {
      text: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/victor.ibironke_",
    },
  ];

  return (
    <section className="w-full text-white mb-20 max-w-5xl relative flex flex-col lg:flex-row gap-4 justify-center">
      <p className="w-fit max-w-5xl text-left font-mono text-blue bg-gray-100 bg-opacity-5 px-6 py-2 self-start backdrop-blur-sm rounded-xl absolute -top-12 left-0 z-0">
        contact
      </p>
      <div className="w-full lg:w-3/5 bg-gray-100 bg-opacity-5 p-6 backdrop-blur-sm rounded-2xl flex flex-col gap-4">
        <p className="text-xl max-w-xl md:max-w-2xl z-10">
          Want to get in touch?
        </p>

        <p className="text-lg md:text-xl max-w-2xl z-10">
          Shoot me an email @{" "}
          <Link
            href="mailto:victoribironke2019@gmail.com"
            className="text-blue"
          >
            victoribironke2019@gmail.com
          </Link>
        </p>
      </div>
      <div className="w-full lg:w-2/5 grid grid-cols-2 grid-rows-2 gap-4">
        {footerLinks.map((f, i) => (
          <Link
            href={f.url}
            target="_blank"
            key={i}
            className="w-full flex gap-4 rounded-2xl bg-gray-100 bg-opacity-5 p-4 md:p-6 backdrop-blur-sm border border-transparent hover:border-zinc-700 text-sm md:text-base"
          >
            <f.icon />
            {f.text}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
