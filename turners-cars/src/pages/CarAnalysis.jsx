import React from "react";
import styles from "./CarAnalysis.module.css";
// import axios from "axios";

export default function CarAnalysis() {
  //   POST https://eastus.api.cognitive.microsoft.com/computervision/imageanalysis:analyze?api-version=2023-04-01-preview&features=tags HTTP/1.1
  // Host: eastus.api.cognitive.microsoft.com
  // Content-Type: application/json
  // Ocp-Apim-Subscription-Key: 89c663d4e00c430bab4db0272f4f785f

  // {
  //   "url": "https://www.seat.co.nz/content/dam/public/seat-website/models/tarraco/exterior-colours/tarracocclite-blueatlantic.png"
  // }

  return (
    <div className={styles.carAnalysisContainer}>
      <div>
        <h1>Car Analysis</h1>
        <p>Car Analysis Page</p>
      </div>
    </div>
  );
}
