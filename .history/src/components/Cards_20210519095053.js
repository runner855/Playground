import React from "react";
import "../styles/Cards.css";
import cardsimplicity from "../images/cardsimplicity.png";
import cardinnovation from "../images/cardinnovation.png";
import cardplayharder from "../images/cardplayharder.png";

const Cards = () => {
  return (
    <div className="Card">
      <div className="Card__header">
        <img
          src={cardplayharder}
          alt="play_harder"
        />
      </div>
      
      <div className="Property-Card__type">{type}</div>
      <div className="Property-Card__bathrooms">Bathrooms: {bathrooms}</div>
      <div className="Property-Card__bedrooms">Bedrooms:{bedrooms}</div>
      <div className="Property-Card__price">£{price}</div>
      <div className="Property-Card__city">{city}</div>
      <div className="Property-Card__email">
        <a> Read more</a>
      </div>
    </div>
  );
};

    
           
             
    
  );
};

export default Cards;
