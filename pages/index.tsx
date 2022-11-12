import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Premier Limos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
}
