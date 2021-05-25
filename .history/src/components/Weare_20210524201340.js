import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <div className="weare_container">
      <div className="weare_img_container">
        <img src={bannerweare} alt="office"></img>
      </div>
    </div>
  );
};

export default Weare;
