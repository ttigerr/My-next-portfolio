import React from "react";
import styles from "./page.module.css";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <div >
      <main className={styles.container}>
        <NavBar/>
      </main>
    </div>
  );
}
