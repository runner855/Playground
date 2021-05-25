import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <div className="flex-container">
      <div className="main-content">
        <img className="img-weare" src={bannerweare} alt="office"></img>
      </div>
      <div class="sidebar">
        <h2>We are.</h2>
        <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
        <a href="#">THE PLAYERS</a>
      </div>
    </div>
  );
};

export default Weare;
