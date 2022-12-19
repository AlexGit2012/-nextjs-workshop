import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import { getFonts } from "../utils/getFonts";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <style>{getFonts()}</style>
        <meta name="description" content="Wild life portal content" />
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
