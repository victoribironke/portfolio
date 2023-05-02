import Head from "next/head";
import { Logo } from "@/helpers/image-paths";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Mid from "@/components/Mid";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home — Victor Ibironke</title>
        <link rel="shortcut icon" href={Logo} type="image/x-icon" />
      </Head>
      <Header />
      <Hero />
      <Mid />
      <Footer />
    </>
  );
};

export default Home;
