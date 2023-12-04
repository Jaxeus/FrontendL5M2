import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <div>This is the Home page</div>
      <Link to="/turners-subscription">Turners Subscription</Link>
      <Link to="/trucks-and-machinery">Trucks and Machinery</Link>
    </div>
  );
}
