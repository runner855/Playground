import React from "react";
import bannerwedo from "../images/bannerwedo.jpg";
import "../styles/Wedo.css";

const Wedo = () => {
  return (
    <div className="flex-container">
      <div className="main-content">
        <img className="img-wedo" src={bannerwedo} alt="vans-sign"></img>
      </div>
      <div class="sidebar">
        <h1 className="wedo-h1">We do.</h1>
        <p className="wedo-p">
          Consectetur adipiscing elit.<br></br>
          Nulla condimentum tortor sem.
        </p>
        <div className="wedo-btn-container">
          <a className="wedo-button" href="#">
            THE PLAYERS &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
