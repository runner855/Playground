import React from "react";
import bannercareers from "../images/bannercareers.jpg";
import "../styles/Careers.css";

const Careers = () => {
  return (
    <div className="careers-container">
      <div className="careers-img-container">
        <img
          className="img-careers"
          src={bannercareers}
          alt="table-football"
        ></img>
      </div>
      <div class="text-container">
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
