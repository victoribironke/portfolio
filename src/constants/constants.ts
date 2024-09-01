import {
  BiLinkExternal,
  BiLogoCodepen,
  BiLogoDevTo,
  BiLogoDribbble,
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoStackOverflow,
  BiLogoSteam,
  BiLogoUnsplash,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaFreeCodeCamp, FaProductHunt } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaHashnode, FaHashtag, FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const IMAGES = {
  logo: { src: "/logo.png", h: 600, w: 600 },
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
