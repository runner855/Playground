import React from "react";
import "../styles/Careers.css";
import bannercareers from "../images/bannercareers.jpg";

const Careers = () => {
  return (
    

<div class='split-pane col-xs-12 col-sm-6 uiux-side'>
  
    <img src='https://bit.ly/BCR-design'></img>
    <div class='text-content'>
      <div class="bold">You want</div>
      <div class='big'>UI/UX?</div>
    </div>
    <button>
      SHOW ME THE DESIGN
    </button>
  </div>

<div class='split-pane col-xs-12 col-sm-6 frontend-side'>
  <div>
    <img src='https://bit.ly/bcr-dev'>
    <div class='text-content'>
      <div class="bold">You want</div>
      <div class='big'>FRONT-END?</div>
    </div>
    <a class='button'>
      SHOW ME THE CODE
    </a>
  </div>
</div>
<div id='split-pane-or'>
  <div>
    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/74452/bcr-white.png'>
  </div>
</div>

Run Pen


  );
};

export default Careers;
