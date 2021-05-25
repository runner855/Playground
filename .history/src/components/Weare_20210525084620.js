import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <div className="weare-flex-container">
      <div className="weare-main-content">
        <img className="img-weare" src={bannerweare} alt="office"></img>
      </div>
      <div class="weare-sidebar">
        <h1 className="weare-h1">We are.</h1>
        <p className="weare-p">
          Consectetur adipiscing elit.<br></br>
          Nulla condimentum tortor sem.
        </p>
        <div className="weare-btn-container">
          <a className="weare-button" href="#">
            THE PLAYERS &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Weare;
