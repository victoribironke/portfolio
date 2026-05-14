export const MAILTO = "mailto:hello@victoribironke.com";
export const RESUME_URL = "/resume.pdf";

export const PAGES = {
  home: "/",
  post: (slug: string) => `/blog/${slug}`,

  github: "https://github.com/victoribironke",
  twitter: "https://twitter.com/victoribironke_",
  instagram: "https://instagram.com/victor.ibironke_",
  linkedin: "https://linkedin.com/in/victor-ibironke",
};

export const IMAGES = {
  logo: { src: "/logo.png", w: 600, h: 600 },

  seo: {
    home: { src: "/open-graph-images/home.png", w: 1280, h: 720 },
  },
};

export const CREDENTIALS = {
  sanity_project_id: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  sanity_dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  upstash_redis_rest_url: process.env.UPSTASH_REDIS_REST_URL!,
  upstash_redis_rest_token: process.env.UPSTASH_REDIS_REST_TOKEN!,

  spotify_client_id: process.env.SPOTIFY_CLIENT_ID!,
  spotify_client_secret: process.env.SPOTIFY_CLIENT_SECRET!,

  cron_secret: process.env.CRON_SECRET!,
};
