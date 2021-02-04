import React from "react";
import "./NAV.css";
import logo from "../images/logo.png";
import profile from "../images/profile__logo.png";

// App NavBar(child  component)

const NAV = () => {
  return (
    <div className="nav nav__black">
      <div className="nav__contents">
        <img className="nav__logo" src={logo} alt="logo" />
        <img className="nav__profile" src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default NAV;
