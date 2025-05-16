import React from "react";
import "./Loader.css";
import logo from "../assets/st_newlogo.png";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner">
        <img src={logo} alt="Logo" className="loader-logo-inside" />
      </div>
    </div>
  );
};

export default Loader;
