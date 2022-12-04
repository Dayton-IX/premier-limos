import Head from "next/head";
import Image from "next/image";
import Contact from "../components/contact";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Premier Limos</title>
      </Head>

      <main>
        <Hero />
        <Contact />
      </main>
    </div>
  );
}
