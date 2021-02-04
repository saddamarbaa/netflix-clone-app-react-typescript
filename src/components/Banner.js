import React from "react";
import "./Banner.css";

// Banner component

const Banner = () => {
  /**
   * function to truncate(cut) the string if the length of given string bigger    than  given number(n)
   *  @param {string}  given string
   *  @param {n}  given number
			* 
		   if (string.length > n) {
      return string.substr(0, n - 1) + `....`;
    } else {
      return string;
    }
   *
   */

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " ...." : string;
  };

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
        <h1 className="banner__description">
          {truncate(
            `this is thefade effect in the bottom of the bannerfade effect in the
          bottom of the bannerfade effect in the bottom of the bannerfade effect
          in the bottom of the bannerfade effect in the bottom of the bannerfade
          effect in the bottom of the bannerfade effect in the bottom of the
          bannerfade effect in the bottom of the bannerfade effect in the bottom
          of the bannerfade effect in the bottom of the bannerfade effect in the
          bottom of the bannerfade effect in the bottom of the banner banner
          description`,
            100
          )}
        </h1>
      </div>

      {/* this for fade effect in the bottom of the banner */}
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
