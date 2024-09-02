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

export const IMAGES = {
  logo: { src: "/logo.png", w: 600, h: 600 },

  project: {
    github_user_search: {
      src: "/project-github-user-search.png",
      w: 1561,
      h: 878,
    },
    babcock_tools: { src: "/project-babcock-tools.png", w: 1561, h: 878 },
    fpl_stats: { src: "/project-fpl-stats.png", w: 1561, h: 878 },
    ventivo: { src: "/project-ventivo.png", w: 1561, h: 878 },
  },

  company: {
    talanq: { src: "/company-talanq.png", w: 1561, h: 878 },
    afternoonprep: { src: "/company-afternoonprep.png", w: 1561, h: 878 },
    merjoh: { src: "/company-merjoh.png", w: 1561, h: 878 },
  },
};

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
    url: "https://victoribironke.hashnode.dev/",
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
];
