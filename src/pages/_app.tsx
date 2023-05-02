import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main
      className={`${playfair.variable} flex items-center justify-center flex-col w-full font-play`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default App;
