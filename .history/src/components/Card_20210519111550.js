import React from "react";
import PropTypes from "prop-types";
import cardplayharder from "../images/cardplayharder.png";
import cardinnovation from "../images/cardinnovation.png";
import cardsimplicity from "../images/cardsimplicity.png";

import "../styles/Card.css";

const Card = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="cards_container">
      <div className="myCard" data-testid="property-card">
        <div className="Card__header">
          <img src={cardplayharder} alt="house-logo" />
        </div>
        <div className="Property-Card__title">{title}</div>
        <div className="Card__text">
          Aenean mollis dolor a mattis viverra. In hac habitasse platea
          dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.
        </div>

        <div className="Card__button">
          <a>Read More</a>
        </div>
        <br></br>
        <div className="Card__header">
          <img src={cardinnovation} alt="house-logo" />
        </div>
        <div className="Property-Card__title">{title}</div>
        <div className="Card__text">
          Donec vitae augue tellus. Proin et urna sit amet metus fermentum
          dapibus non quis urna.
        </div>

        <div className="Card__button">
          <a>Read More</a>
          <br></br>
        </div>
        <br></br>
        <div className="Card__header">
          <img src={cardsimplicity} alt="house-logo" />
        </div>
        <div className="Property-Card__title">{title}</div>
        <div className="Card__text">
          Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida
          lacus.
        </div>

        <div className="Card__button">
          <a>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
