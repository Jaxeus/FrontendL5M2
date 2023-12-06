import React from "react";
import styles from "./CarAnalysis.module.css";
import axios from "axios";
import { useState } from "react";
import { carBody, carColour } from "../utilities/variables";

export default function CarAnalysis() {
  //useStates
  const [imageURL, setImageURL] = useState("");
  const [result, setResult] = useState(false);
  const [carImage, setCarImage] = useState(null);

  //Analyse image function
  async function analyseImage(e) {
    e.preventDefault();
    console.log(typeof imageURL);
    try {
      //Post request
      const response = await axios.post("http://localhost:4000/azure", {
        imageURL,
      });

      console.log("This is the reponse: ", response.data);
      //Dealing with the response
      // const tagResults = response.data.tagsResult;
      const carFilter = response.data
        ? response.data.filter((item) => item.name === "car")
        : [];

      if (carFilter.length > 0) {
        console.log("This is a car");
        setResult(
          `This is indeed a ${
            response.data.filter((item) => item.name === "car")[0].name
          }`
        );
        setCarImage(
          <img width="300px" height="auto" alt="car" src={imageURL} />
        );
      } else {
        console.log(
          "The Azure API hasn't recognised that this image contains a car ⛔🚗"
        );
        setResult(
          `This image doesn't appear to contain a 🚗 - Either the Azure Computer Vision has failed, or you should have gone to Specsavers`
        );
        setCarImage(
          <img width="300px" height="auto" alt="car" src={imageURL} />
        );
      }

      //Working space for finding stock similarities
      console.log("Show me response.data: ", response.data);

      //Finish working space

      //Catch
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
      {result && (
        <div>
          <h3 className={styles.resultHeading}>Analysis Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      <div>{carImage}</div>
    </div>
  );
}
