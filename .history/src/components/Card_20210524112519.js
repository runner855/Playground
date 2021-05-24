import React from "react";
import PropTypes from "prop-types";
import cardplayharder from "../images/cardplayharder.png";
import cardinnovation from "../images/cardinnovation.png";
import cardsimplicity from "../images/cardsimplicity.png";

import "../styles/Card.css";

const Card = () => {
  return (
    <div className="card_container">
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={cardplayharder} alt="playharder"></img>
            </div>
            <div className="card_content">
              <p className="card_text">
                Aenean mollis dolor a mattis viverra. In hac habitasse platea
                dictumst. Curabitur tempus dui tortor, et bibendum lacus
                eleifend ut.
              </p>
              <button className="btncard_btn">Read More</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
