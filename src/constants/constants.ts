import {
  BiLinkExternal,
  BiLogoDevTo,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";
import { FaHashnode, FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";

export const PAGES = {
  home: "/",
  blog: "/blog",
  blog_post: (slug: string) => `/blog/${slug}`,
};

export const IMAGES = {
  logo: { src: "/logo.png", w: 600, h: 600 },

  seo: {
    home: { src: "/open-graph-images/home.png", w: 1280, h: 720 },
    blog: { src: "/open-graph-images/blog.png", w: 1280, h: 720 },
  },
  // project: {
  //   github_user_search: {
  //     src: "/project-github-user-search.png",
  //     w: 1561,
  //     h: 878,
  //   },
  //   babcock_tools: { src: "/project-babcock-tools.png", w: 1561, h: 878 },
  //   fpl_stats: { src: "/project-fpl-stats.png", w: 1561, h: 878 },
  //   ventivo: { src: "/project-ventivo.png", w: 1561, h: 878 },
  // },
  // company: {
  //   talanq: { src: "/company-talanq.png", w: 1561, h: 878 },
  //   afternoonprep: { src: "/company-afternoonprep.png", w: 1561, h: 878 },
  //   merjoh: { src: "/company-merjoh.png", w: 1561, h: 878 },
  // },
};

// export const PROJECTS = [
//   {
//     name: "Babcock Tools",
//     urls: {
//       github: "https://github.com/victoribironke/babcock-tools",
//       live: "https://babcock.tools/",
//       image: IMAGES.project.babcock_tools.src,
//     },
//     desc: "This is a suite of tools for the students of Babcock University.",
//   },
//   {
//     name: "Ventivo",
//     urls: {
//       github: "",
//       live: "https://ventivo.co/",
//       image: IMAGES.project.ventivo.src,
//     },
//     desc: "This is a tool for generating real-time charts around your Firebase data.",
//   },
//   {
//     name: "FPL statistics",
//     urls: {
//       github: "https://github.com/victoribironke/fpl-stats",
//       live: "https://fpl-statistics.vercel.app/",
//       image: IMAGES.project.fpl_stats.src,
//     },
//     desc: "This is a tool that wraps around the fantasy premier league API and displays statistics and insights on your team.",
//   },
//   {
//     name: "Github user search",
//     urls: {
//       github: "https://github.com/victoribironke/github-user-search",
//       live: "https://userlookup.netlify.app/",
//       image: IMAGES.project.github_user_search.src,
//     },
//     desc: "This is a simple website that allows you to get the information of any user on GitHub.",
//   },
// ];

// export const EXPERIENCE = [
//   {
//     company: "Merjoh LTD",
//     title: "Website developer",
//     start_date: "2023-03-01",
//     end_date: "2023-07-31",
//     desc: "I was tasked with using wordpress to build and manage websites for various clients.",
//     image: IMAGES.company.merjoh.src,
//     url: "https://merjoh.com/",
//   },
//   {
//     company: "AfternoonPrep",
//     title: "Frontend developer",
//     start_date: "2023-04-01",
//     end_date: "2023-07-31",
//     desc: "I was the second dev tasked with building out and maintaining the UI of the company's web app.",
//     image: IMAGES.company.afternoonprep.src,
//     url: "https://afternoonprep.com/",
//   },
//   {
//     company: "Talanq",
//     title: "Full stack developer",
//     start_date: "2023-11-01",
//     end_date: "2024-06-30",
//     desc: "I was tasked with rebuilding the company's website from scratch, complete with a web app and backend functions.",
//     image: IMAGES.company.talanq.src,
//     url: "https://talanq.com/",
//   },
// ];

export const FOOTER_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/victoribironke",
    icon: BiLogoGithub,
  },
  {
    name: "X",
    url: "https://twitter.com/victoribironke_",
    icon: FaSquareXTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/victor-ibironke",
    icon: BiLogoLinkedinSquare,
  },
  {
    name: "Mail",
    url: "mailto:hello@victoribironke.com",
    icon: IoMail,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/victor.ibironke_",
    icon: BiLogoInstagram,
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/@victoribironke",
    icon: FaHashnode,
  },
  {
    name: "daily.dev",
    url: "https://app.daily.dev/victoribironke",
    icon: BiLinkExternal,
  },
  {
    name: "ProductHunt",
    url: "https://www.producthunt.com/@victoribironke",
    icon: FaProductHunt,
  },
  {
    name: "dev.to",
    url: "https://dev.to/victoribironke",
    icon: BiLogoDevTo,
  },
  {
    name: "Buy me a coffee",
    url: "https://buymeacoffee.com/victoribironke",
    icon: SiBuymeacoffee,
  },
];
