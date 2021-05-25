import React from "react";
import bannercareers from "../images/bannercareers.jpg";
import "../styles/Careers.css";

const Careers = () => {
  return (
    <div id="Careers" className="careers_container">
      <div className="careers_img_container">
        <img
          className="img_careers"
          src={bannercareers}
          alt="table_football"
        ></img>
      </div>
      <div class="text_container">
        <h1 className="careers-h1">Careers.</h1>
        <p className="careers-p">
          Consectetur adipiscing elit.<br></br>
          Nulla condimentum tortor sem.
        </p>
        <div className="careers-btn-container">
          <a className="careers-button" href="#">
            THE POSITIONS &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
