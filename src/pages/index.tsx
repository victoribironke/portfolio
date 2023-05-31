import Head from "next/head";
import { mainLogo } from "@/helpers/image-paths";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home — Victor Ibironke</title>
        <link rel="shortcut icon" href={mainLogo} type="image/x-icon" />
      </Head>
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
