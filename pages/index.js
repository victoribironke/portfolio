import Head from "next/head";
import About from "../comps/About";
import Header from "../comps/Header";
import SendMessage from "../comps/SendMessage";
import Footer from "../comps/Footer";
import Script from "next/script";

const Home = () => {
  return (
    <>
      <Head>
        <title>Victor Ibironke | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://kit.fontawesome.com/2024398ef7.js"
          crossorigin="anonymous"
        />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        {/* <Script src="/script.js" defer /> */}
      </Head>
      <Header />
      <About />
      <SendMessage location="home" />
      <Footer />
    </>
  );
};

export default Home;
