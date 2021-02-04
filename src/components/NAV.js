import React, { useEffect, useState } from "react";
import "./NAV.css";
import logo from "../images/logo.png";
import profile from "../images/profile__logo.png";

// App NavBar(child  component)

const NAV = () => {
  // blow  for hide and show functionality

  const [show, handleShowNav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShowNav(true);
    } else {
      handleShowNav(false);
    }
  };

  // add scroll EventListener and call transitionNavBar() function
  // (Show/hide scrollbar)
  // the code will run only when the component found

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      // cleanup after done clean up
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    // (add or render nav__black to the webside) only if the show variable is true
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={logo} alt="logo" />
        <img className="nav__profile" src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default NAV;
