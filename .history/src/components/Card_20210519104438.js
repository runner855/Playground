import React from "react";
import PropTypes from "prop-types";
import cardplayharder from "../images/cardplayharder.png";
import "../styles/Card.css";

const Card = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;

  return (
    <div className="PropertyCard" data-testid="property-card">
      <div className="Property-Card__header">
        <img src={cardplayharder} alt="house-logo" />
      </div>
      <div className="Property-Card__title">{title}</div>
      <div className="Property-Card__type">
        Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst.
        Curabitur tempus dui tortor, et bibendum lacus eleifend ut.
      </div>

      <div className="Card__button">
        <a>Read More</a>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
