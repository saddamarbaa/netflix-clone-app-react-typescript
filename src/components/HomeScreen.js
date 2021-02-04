import React from "react";
import "./HomeScreen.css";
import Banner from "./Banner";
import NAV from "./NAV";

// HomeScreen component

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <NAV />
      <Banner />
    </div>
  );
};

export default HomeScreen;
