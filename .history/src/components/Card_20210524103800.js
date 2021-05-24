import React from "react";
import PropTypes from "prop-types";
import cardplayharder from "../images/cardplayharder.png";
import cardinnovation from "../images/cardinnovation.png";
import cardsimplicity from "../images/cardsimplicity.png";
import "../styles/Card.css";

const Card = (props) => {
  const { title, text, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <img className="img-card" src={cardplayharder} alt="house-logo" />
        </div>

        <p>
          Aenean mollis dolor a mattis viverra. In hac habitasse platea
          dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.
        </p>

        <a>Read More</a>
      </div>
      <br></br>
      <div className="myCard" data-testid="property-card">
        <div className="Card__header">
          <img className="img-card" src={cardplayharder} alt="house-logo" />
        </div>
        <div className="Property-Card__title">{title}</div>
        <div className="Card__text">
          Aenean mollis dolor a mattis viverra. In hac habitasse platea
          dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.
        </div>

        <div className="Card__button">
          <a>Read More</a>
        </div>
      </div>
      <br></br>
      <div className="myCard" data-testid="property-card">
        <div className="Card__header">
          <img className="img-card" src={cardplayharder} alt="house-logo" />
        </div>
        <div className="Property-Card__title">{title}</div>
        <div className="Card__text">
          Aenean mollis dolor a mattis viverra. In hac habitasse platea
          dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.
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
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
