import React from "react";
import styles from "./TopMenu.module.css";

export default function TopMenu() {
  return (
    <div className={styles.headerTopMenu}>
      <button className={`${styles.menuButton} ${styles.firstButton}`}>
        Cars
      </button>
      <button className={styles.menuButton}>Turners Subscription</button>
      <button className={styles.menuButton}>Trucks and Machinery</button>
      <button className={styles.menuButton}>Damaged & End of Life</button>
      <button className={styles.menuButton}>Motorcycles</button>
      <button className={styles.menuButton}>General Goods</button>
      <button className={`${styles.menuButton} ${styles.lastButton}`}>
        Buses, Caravans & Motorhomes
      </button>
    </div>
  );
}
