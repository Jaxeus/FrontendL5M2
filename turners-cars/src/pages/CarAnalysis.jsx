import React from "react";
import styles from "./CarAnalysis.module.css";
import axios from "axios";

export default function CarAnalysis() {
  //   POST https://eastus.api.cognitive.microsoft.com/computervision/imageanalysis:analyze?api-version=2023-04-01-preview&features=tags HTTP/1.1
  // Host: eastus.api.cognitive.microsoft.com
  // Content-Type: application/json
  // Ocp-Apim-Subscription-Key:

  // {
  //   "url": "https://www.seat.co.nz/content/dam/public/seat-website/models/tarraco/exterior-colours/tarracocclite-blueatlantic.png"
  // }

  const apiEndpoint = process.env.REACT_APP_VISION_ENDPOINT;
  const apiKey = process.env.REACT_APP_VISION_KEY;

  const headers = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": apiKey,
  };

  const postData = {
    url: "https://www.seat.co.nz/content/dam/public/seat-website/models/tarraco/exterior-colours/tarracocclite-blueatlantic.png",
  };

  function postie() {
    axios
      .post(apiEndpoint, postData, { headers: headers })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // fetch(apiEndpoint, {
  //   method: "POST",
  //   headers,
  //   body: JSON.stringify(postData),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Response: ", data);
  //   })
  //   .catch((error) => {
  //     console.error("Error: ", error);
  //   });

  return (
    <div className={styles.carAnalysisContainer}>
      <div>
        <h1>Car Analysis</h1>
        <p>Car Analysis Page</p>
        <button onClick={postie}>Postie</button>
      </div>
    </div>
  );
}
