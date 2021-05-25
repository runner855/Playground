import React from "react";
import bannercareers from "../images/bannercareers.jpg";

const Careers = () => {
  return (
    <div id="Careers" className="careers_container">
      <div className="careers_img">
        <img src={bannercareers} alt="table-football"></img>
      </div>
      <div className="info_container">
        <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
        <button>THE POSITIONS</button>
      </div>
    </div>
  );
};

export default Careers;
