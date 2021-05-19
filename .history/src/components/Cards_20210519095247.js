import React from "react";
import "../styles/Cards.css";
import cardsimplicity from "../images/cardsimplicity.png";
import cardinnovation from "../images/cardinnovation.png";
import cardplayharder from "../images/cardplayharder.png";

const Cards = () => {
  return (
    <div className="Card">
      <div className="Card__header">
        <img src={cardplayharder} alt="play_harder" />
      </div>

      <div className="Card__text">
        Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst.
        Curabitur tempus dui tortor, et bibendum lacus eleifend ut.
      </div>

      <div className="Property-Card__email">
        <a> Read more</a>
      </div>
    </div>
  );
};

export default Cards;
