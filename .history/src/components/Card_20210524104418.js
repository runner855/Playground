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

          <p>
            Aenean mollis dolor a mattis viverra. In hac habitasse platea
            dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend
            ut.
          </p>

          <a>Read More</a>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img className="img-card" src={cardplayharder} alt="house-logo" />

          <p>
            Aenean mollis dolor a mattis viverra. In hac habitasse platea
            dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend
            ut.
          </p>

          <a>Read More</a>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img className="img-card" src={cardplayharder} alt="house-logo" />

          <p>
            Aenean mollis dolor a mattis viverra. In hac habitasse platea
            dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend
            ut.
          </p>

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
