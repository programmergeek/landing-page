import type { NextPage } from "next";
import Head from "next/head";
import { ContactMe, Navbar, Projects, About } from "../components";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        ></link>
        <title>Thato Will Joseph</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <Navbar />
      <About />
    </div>
  );
};

export default Home;
