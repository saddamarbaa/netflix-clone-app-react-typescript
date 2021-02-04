import React from "react";
import "./NAV.css";
import logo from "../images/logo.png";
import profile from "../images/profile__logo.png";

// App NavBar(child  component)

const NAV = () => {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <img src={profile} alt="profile" />
      <h1>this is the Nav</h1>
    </div>
  );
};

export default NAV;
