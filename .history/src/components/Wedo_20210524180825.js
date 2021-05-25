import React from "react";
import "../styles/Wedo.css";
import bannerwedo from "../images/bannerwedo.jpg";

const Wedo = () => {
  return (
    <div id="Wedo" className="wedo_container">
      <div className="wedo_img_container">
        <img className="wedo_img" src={bannerwedo} alt="vans-sign"></img>
      </div>
      <div className="wedo_info_container">
        <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
        <button>THE PROJECTS</button>
      </div>
    </div>
  );
};

export default Wedo;
