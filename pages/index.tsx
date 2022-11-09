import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero.tsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Premier Limos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}
