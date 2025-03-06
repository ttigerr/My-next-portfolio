import React from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div >
      <main className={styles.container}>
        <Navbar/>
      </main>
    </div>
  );
}
