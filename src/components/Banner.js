import React from "react";
import "./Banner.css";

// Banner component

const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Move Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">this is the banner description</h1>
      </div>

      {/* this for fade effect in the bottom of the banner */}
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
