import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <div id="Weare" className="weare_container">
      <div className="weare_img_container">
        <img className="weare_img" src={bannerweare} alt="office"></img>

        <div className="weare_info_container">
          <h1>We are.</h1>
          <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
          <div className="weare_button_container">
            <button>THE PLAYERS &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weare;
