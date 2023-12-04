import React from "react";
import styles from "./TopMenu.module.css";
import { Link } from "react-router-dom";
// import Trucks from "./Trucks";

export default function TopMenu() {
  return (
    <div className={styles.headerTopMenu}>
      <button className={`${styles.menuButton} ${styles.firstButton}`}>
        Cars
      </button>
      <button className={styles.menuButton}>
        <Link to="/turners-subscription" className={styles.link}>
          Turners Subscription
        </Link>
      </button>
      <button className={styles.menuButton}>
        <Link to="/trucks-and-machinery" className={styles.link}>
          Trucks and Machinery
        </Link>
      </button>
      <button className={styles.menuButton}>Damaged & End of Life</button>
      <button className={styles.menuButton}>Motorcycles</button>
      <button className={styles.menuButton}>General Goods</button>
      <button className={`${styles.menuButton} ${styles.lastButton}`}>
        Buses, Caravans & Motorhomes
      </button>
    </div>
  );
}
