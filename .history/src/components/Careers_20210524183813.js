import React from "react";
import bannercareers from "../images/bannercareers.jpg";

const Careers = () => {
  return (
    <div id="Careers" className="careers_container">
      <div className="careers_img_container">
        <img
          className="careers_im"
          src={bannercareers}
          alt="table-football"
        ></img>
        <div className="careers_info_container">
          <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
          <button>THE POSITIONS</button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
