import React from "react";
import cardplayharder from "../images/cardplayharder.png";
import cardinnovation from "../images/cardinnovation.png";
import cardsimplicity from "../images/cardsimplicity.png";
import "../styles/Card2.css";

const Card2 = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <div className="Card__header">
            <img className="img-card" src={cardplayharder} alt="house-logo" />
          </div>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <div className="Card__header">
            <img className="img-card" src={cardplayharder} alt="house-logo" />
          </div>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <div className="Card__header">
            <img className="img-card" src={cardplayharder} alt="house-logo" />
          </div>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
