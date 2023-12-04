import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/turners-logo.png";
import language from "../assets/language-image.png";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <img alt="Turners Logo" src={logo} className={styles.headerLogo} />
      <div className={styles.buttonContainer}>
        <button className={styles.firstButton}>
          <svg
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <p className={styles.linkedParagraph}>
            <strong>LOGIN</strong>
          </p>
          <p className={styles.regularParagraph}>
            <em>OR</em>
          </p>
          <p className={styles.linkedParagraph}>
            <strong>REGISTER</strong>
          </p>
        </button>
        <button className={styles.secondButton}>
          <svg
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <p>0800 887 637</p>
        </button>
        <button className={styles.thirdButton}>
          <svg
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <p>Find Us</p>
        </button>
        <img
          width="35px"
          height="auto"
          alt="language"
          src={language}
          className={styles.languageLogo}
        />
      </div>
    </div>
  );
}
