import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <div id="Weare" className="container">
      <div className="weare_img_container">
        <img src={bannerweare} alt="office"></img>
      </div>
      <div className="weare_info_container">
        <h1>We are.</h1>
        <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
        <div className="weare_button_container">
          <button>THE PLAYERS</button>
        </div>
      </div>
    </div>
  );
};

export default Weare;
