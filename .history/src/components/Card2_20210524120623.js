import React from "react";
import cardplayharder from "../images/cardplayharder.png";
import cardinnovation from "../images/cardinnovation.png";
import cardsimplicity from "../images/cardsimplicity.png";
import "../styles/Card2.css";

const Card2 = () => {
  return (
    <div className="main">
      <h1>Responsive Card Grid Layout</h1>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={cardplayharder} alt="play"></img>
            </div>
            <div className="card_content">
              <p className="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <button class="btn card_btn">Read More</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card2;
