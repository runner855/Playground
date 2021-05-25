import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <div class="split left">
    <div class="centered">
      <img src="img_avatar2.png" alt="Avatar woman">
      <h2>Jane Flex</h2>
      <p>Some text.</p>
    </div>
  </div>
  
  <div class="split right">
    <div class="centered">
      <img src="img_avatar.png" alt="Avatar man">
      <h2>John Doe</h2>
      <p>Some text here too.</p>
    </div>
  </div> 
  );
};

export default Weare;
