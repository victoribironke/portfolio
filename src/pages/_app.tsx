import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bricolage_Grotesque, Inter, Oswald } from "next/font/google";
import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const main = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main",
});
const blog_heading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-blog-heading",
});
const sub = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sub",
});

// const name = "Victor"; // unused variable to break a new deployment

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Analytics />
      <Head>
        <title>Victor Ibironke</title>
      </Head>

      <main
        className={cn(
          "flex w-full min-h-screen flex-col items-center",
          main.variable,
          sub.variable,
          blog_heading.variable
        )}
      >
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
};

export default App;
