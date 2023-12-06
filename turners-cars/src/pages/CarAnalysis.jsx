import React from "react";
import styles from "./CarAnalysis.module.css";
import axios from "axios";
import { useState } from "react";

export default function CarAnalysis() {
  const [imageURL, setImageURL] = useState("");

  async function analyseImage(e) {
    e.preventDefault();
    console.log(typeof imageURL);

    try {
      const response = await axios.post("http://localhost:4000/azure", {
        imageURL,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error, "Server failed");
    }
  }

  return (
    <div className={styles.carAnalysisContainer}>
      <div>
        <h1>Car Analysis</h1>
        <p>Car Analysis Page</p>
      </div>
      <div>
        <form id="form">
          <h2>Analyse your car 🐣</h2>
          <input
            type="text"
            placeholder="Enter image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button onClick={(e) => analyseImage(e)}>Analyse Image</button>
        </form>
      </div>
    </div>
  );
}
