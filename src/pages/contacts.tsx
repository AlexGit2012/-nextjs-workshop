import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import { getFonts } from "../utils/getFonts";
import ContactsPage from "../components/ContactsPage/ContactsPage";

const Contacts: NextPage = () => {
  return (
    <div>
      <Head>
        <style>{getFonts()}</style>
        <meta name="description" content="Wild life contacts" />
      </Head>
      <ContactsPage />
    </div>
  );
};

export default Contacts;
