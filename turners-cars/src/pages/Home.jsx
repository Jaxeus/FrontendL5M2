import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import CarAnalysis from "./CarAnalysis";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);
  const [carImage, setCarImage] = useState(null);

  const analyzeImage = async () => {
    const apiKey = process.env.REACT_APP_AZURE_API_KEY;
    const endpoint = process.env.REACT_APP_AZURE_ENDPOINT;
    try {
      console.log(imageUrl);
      const response = await axios.post(
        `${endpoint}`,
        { url: imageUrl },
        {
          headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": apiKey,
          },
          // params,
        }
      );

      //-----------------FUNCTIONAL CODE-----------------//
      // Andrew helped with the below
      const tagResults = response.data.tagsResult;
      const carFilter = tagResults
        ? tagResults.values.filter((item) => item.name === "car")
        : [];

      console.log(response.data);
      if (carFilter.length > 0) {
        //Andrew helped with the above
        console.log("This is a car");
        setResult(
          `This is indeed a ${
            response.data.tagsResult.values.filter(
              (item) => item.name === "car"
            )[0].name
          }`
        );
        setCarImage(
          <img width="300px" height="auto" alt="car" src={imageUrl} />
        );
      } else {
        console.log(
          "The Azure API hasn't recognised that this image contains a car ⛔🚗"
        );
        setResult(
          `This image doesn't appear to contain a 🚗 - Either the Azure Computer Vision has failed, or you should have gone to Specsavers`
        );
        setCarImage(
          <img width="300px" height="auto" alt="car" src={imageUrl} />
        );
      }
    } catch (error) {
      console.error("Error analyzing image:", error);
    }
  };

  return (
    <div>
      <TopMenu />
      <Header />
      <MainMenu />
      <div className={styles.azureContainer}>
        <div className={styles.formContainer}>
          <h2>Analyse your car!</h2>
          <input
            type="text"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={analyzeImage}>Analyse Image</button>
        </div>

        {result && (
          <div>
            <h3 className={styles.resultHeading}>Analysis Result:</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
        <div>{carImage}</div>
      </div>
      <CarAnalysis />
    </div>
  );
}

// https://www.seat.co.nz/content/dam/public/seat-website/models/tarraco/exterior-colours/tarracocclite-blueatlantic.png (working URL for API)

// https://ichef.bbci.co.uk/news/976/cpsprodpb/178D6/production/_129407469_gettyimages-1248218509.jpg (working URL for API but of a cat)
