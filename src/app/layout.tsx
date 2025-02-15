import type { Metadata } from "next";
import "./globals.css";
import { IMAGES } from "@/constants/constants";

export const metadata: Metadata = {
  title: "Victor Ibironke",
  description:
    "Victor Ibironke is a full-stack developer with an enthusiastic drive for building high-quality web projects.",
  openGraph: {
    title: "Victor Ibironke",
    description:
      "Victor Ibironke is a full-stack developer with an enthusiastic drive for building high-quality web projects.",
    type: "article",
    url: "https://www.victoribironke.com",
    images: [
      {
        url: IMAGES.seo.home.src,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Ibironke",
    description:
      "Victor Ibironke is a full-stack developer with an enthusiastic drive for building high-quality web projects.",
    images: [
      {
        url: IMAGES.seo.home.src,
      },
    ],
    creator: "@victoribironke",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="antialiased dark flex items-center justify-center flex-col px-6 py-12">
        <main className="max-w-3xl w-full flex flex-col gap-6">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
