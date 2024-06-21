import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bricolage_Grotesque } from "next/font/google";
import { RecoilRoot } from "recoil";

const bg = Bricolage_Grotesque({ subsets: ["latin"], display: "swap" });

// export const getStaticProps = async () => {
//   return {
//     props: {},
//   };
// };

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Header className={bg.className} />
      <main
        className={cn(
          "flex min-h-screen flex-col items-center bg-black text-white px-6 gap-28",
          bg.className
        )}
      >
        <Component {...pageProps} />
      </main>
      <Footer className={bg.className} />
    </RecoilRoot>
  );
};

export default App;
