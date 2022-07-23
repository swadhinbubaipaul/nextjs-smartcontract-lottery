import Head from "next/head";
import Image from "next/image";
import ManualHeader from "../components/ManualHeader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header / Connect button / Navbar */}
      <ManualHeader />
      Heloooo!!!
    </div>
  );
}
