'use client'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>React with Nextjs</h1>
        <h1>Event,Function and State</h1>
        <button onClick={alert("Hello")}>Click me</button>
      </main>
    </div>
  );
}
