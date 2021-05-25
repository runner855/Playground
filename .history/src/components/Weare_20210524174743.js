import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <div id="Weare" className="weare_container">
      <div className="img_container">
        <img className="weareimg" src={bannerweare} alt="office"></img>

        <div className="info_container">
          <h1>We are.</h1>
          <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
          <div className="button_container">
            <button>THE PLAYERS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weare;
