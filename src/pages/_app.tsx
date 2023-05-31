import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const magnat = localFont({
  src: [
    {
      path: "../../public/fonts/Magnat-TextExtraBold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Magnat-TextBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Magnat-TextSemiBold.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Magnat-TextMedium.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Magnat-TextRegular.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Magnat-TextLight.ttf",
      weight: "200",
    },
  ],
  variable: "--font-magnat",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main
      className={`${magnat.variable} flex items-center justify-center flex-col w-full font-play`}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default App;
