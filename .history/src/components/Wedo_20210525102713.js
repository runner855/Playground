import React from "react";
import bannerwedo from "../images/bannerwedo.jpg";
import "../styles/Wedo.css";

const Wedo = () => {
  return (
    <div id="Wedo" className="wedo_flex-container">
      <div className="wedo_main-content">
        <h1 className="wedo-h1">We do.</h1>
        <p className="wedo-p">
          Consectetur adipiscing elit.<br></br>
          Nulla condimentum tortor sem.
        </p>
        <div className="wedo-btn-container">
          <a className="wedo-button" href="#">
            THE PROJECTS &gt;
          </a>
        </div>
      </div>
      <div class="wedo_sidebar">
        <img className="img-wedo" src={bannerwedo} alt="vans-sign"></img>
      </div>
    </div>
  );
};

export default Wedo;
