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
