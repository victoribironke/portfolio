export type Meta = {
  title: string;
  description: string;
  url: string;
  og_image: string;
  logo: string;
};

export type HeaderAndHeroProps = {
  title: string;
  desc: string;
};

export type PageLoaderProps = {
  type: "full" | "small";
};

export type SharePostProps = {
  title: string;
  slug: string;
  desc: string;
};
