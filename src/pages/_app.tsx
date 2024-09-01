import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bricolage_Grotesque, Inter, Oswald } from "next/font/google";
import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react";

const os = Oswald({ subsets: ["latin"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });

// export const getStaticProps = async () => {
//   return {
//     props: {},
//   };
// };

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Analytics />
      <Header className={os.className} />
      <main
        className={cn(
          "flex min-h-screen flex-col items-center text-white px-6 gap-28",
          os.className
        )}
      >
        <Component {...pageProps} />
      </main>
      <Footer className={os.className} />
    </RecoilRoot>
  );
};

export default App;
