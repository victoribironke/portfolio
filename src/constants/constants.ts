export const MAILTO = "mailto:hello@victoribironke.com";

export const PAGES = {
  home: "/",
  post: (slug: string) => `/blog/${slug}`,

  github: "https://github.com/victoribironke",
  twitter: "https://twitter.com/victoribironke_",
  instagram: "https://instagram.com/victor.ibironke_",
  linkedin: "https://linkedin.com/in/victor-ibironke",
};

export const PROJECTS = [
  {
    name: "Postra",
    link: "https://postra.app",
    desc: "Schedule your posts to multiple social media platforms",
  },
  {
    name: "Ventivo",
    link: "https://ventivo.co",
    desc: "Get realtime charts from your data",
  },
  {
    name: "Willow",
    link: "https://willow-frontend.vercel.app",
    desc: "E-commerce platform for eco-friendly products",
  },
];

export const IMAGES = {
  logo: { src: "/logo.png", w: 600, h: 600 },

  seo: {
    home: { src: "/open-graph-images/home.png", w: 1280, h: 720 },
  },
};

export const BLOG_POSTS = [
  {
    title: "7 days of Codewars and Leetcode challenges",
    desc: "Summary of a 7-day challenge focused on solving Codewars and Leetcode problems, detailing daily progress, obstacles, and final statistics.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1725316899299/b52e0c1d-1646-49a2-80d2-52d9a82e6c4c.png",
    date_published: "2023-01-29T21:09:02.000Z",
    uid: "clcfebmd8000408ma70p73mqw",
    slug: "7-days-of-codewars-and-leetcode-challenges",
  },
  {
    title:
      "Visualizing Firebase Data: Unlocking the Power of Real-Time Insights",
    desc: "Unlock real-time Firebase insights with Looker Studio and Ventivo to enhance app performance and user experience.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1725316590330/80c18af6-f167-4ed7-861b-0de39feec861.png",
    date_published: "2024-08-16T12:21:22.000Z",
    uid: "clzwohpcg00040ajp34388pab",
    slug: "visualizing-firebase-data-unlocking-the-power-of-real-time-insights",
  },
  {
    title: "Every React Hook and How to Use Them",
    desc: "Guide to React Hooks: Learn how to use every built-in React Hook effectively to enhance your functional components and improve your React projects.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1726173032445/f8a25c60-1577-4e11-8e5b-6a4ae8ab25d5.png",
    date_published: "2024-09-12T20:31:11.000Z",
    uid: "cm0zqvlyw000w09md8lblbux3",
    slug: "every-react-hook-and-how-to-use-them",
  },
  {
    title: "Every Array Method in JavaScript and How to Use Them",
    desc: "Comprehensive guide on JavaScript's array methods and their usage for efficient data manipulation.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1726427805639/bd0a2de0-abec-4b01-a1ba-c29bd691006d.png",
    date_published: "2024-09-15T19:17:23+00:00",
    uid: "cm13yk9n7001x0ajz8f70a32e",
    slug: "every-array-method-in-javascript-and-how-to-use-them",
  },
  {
    title: "I Typed Everyday for 50 Days",
    desc: "Documenting my experience and progress from 50 days of consistent typing practice, including tips, resources, and challenges faced.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1727622803623/64ef1d14-d8a8-4540-8812-b45ab9a6d599.jpeg",
    date_published: "2024-09-29T15:15:37+00:00",
    uid: "cm1nq39za000509l864pp70ee",
    slug: "i-typed-everyday-for-50-days",
  },
  {
    title: "My Chess Journey",
    desc: "Follow my chess journey as I aim for 2000 ELO online, sharing strategies, progress, and learning resources.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1740651882212/2c30e74c-4d87-46ca-971c-d2d3c4d153c8.png",
    date_published: "2025-02-27T10:26:38Z",
    uid: "cm7n79a20000i0al4b12k5opl",
    slug: "my-chess-journey",
  },
].sort((a, b) => (a.date_published < b.date_published ? 1 : -1));
