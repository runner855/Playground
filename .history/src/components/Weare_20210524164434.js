import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <div id="Weare" className="container">
      <div className="image_container">
        <img src={bannerweare} alt="office"></img>
      </div>
      <div className="info_container">
        <h1>We are.</h1>
        <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>

        <button>THE PLAYERS</button>
      </div>
    </div>
  );
};

export default Weare;
