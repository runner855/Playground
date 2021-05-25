import React from "react";
import "../styles/Wedo.css";
import bannerwedo from "../images/bannerwedo.jpg";

const Wedo = () => {
  return (
    <div id="Wedo" className="container">
      <div className="wedoimg_container">
        <img className="wedoimg" src={bannerwedo} alt="vans-sign"></img>
      </div>
    </div>
  );
};

export default Wedo;
