export const SITE = {
  name: "Victor Ibironke",
  url: "https://www.victoribironke.com",
  description:
    "Victor Ibironke's corner of the internet: things I build, things I write, and things I'm into.",
  twitter: "@victoribironke_",
  email: "hello@victoribironke.com",
};

export const PAGES = {
  home: "/",
  projects: "/projects",
  blog: "/blog",
  interests: "/interests",
  post: (slug: string) => `/blog/${slug}`,
  studio: "/studio",
};

export const NAV = [
  { label: "Projects", href: PAGES.projects },
  { label: "Writing", href: PAGES.blog },
  { label: "Interests", href: PAGES.interests },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/victoribironke" },
  { label: "X", href: "https://x.com/victoribironke_" },
  { label: "Instagram", href: "https://instagram.com/victor.ibironke_" },
  { label: "LinkedIn", href: "https://linkedin.com/in/victor-ibironke" },
];

export const CHESS_USERNAME = "boy_victor";

export const IMAGES = {
  seo: {
    home: { src: "/open-graph-images/home.png", w: 1280, h: 720 },
  },
};

export const CREDENTIALS = {
  sanity_project_id: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  sanity_dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  sanity_api_version: process.env.NEXT_PUBLIC_SANITY_API_VERSION,

  upstash_redis_rest_url: process.env.UPSTASH_REDIS_REST_URL!,
  upstash_redis_rest_token: process.env.UPSTASH_REDIS_REST_TOKEN!,

  spotify_client_id: process.env.SPOTIFY_CLIENT_ID!,
  spotify_client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
};
