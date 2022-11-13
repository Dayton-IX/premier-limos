import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Premier Limos</title>
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
}
