import React from "react";
import "../styles/Careers.css";
import bannercareers from "../images/bannercareers.jpg";

const Careers = () => {
  return (
    <div id="Careers" className="careers_container">
      <div className="careers_img_container">
        <article>
          <img
            className="careers_im"
            src={bannercareers}
            alt="table-football"
          ></img>
        </article>
      </div>
      <div className="careers_info_container">
        <article>
          <h1>Careers.</h1>
          <p>Consectetur adipiscing elit. Nulla condimentum tortor sem.</p>
          <button>THE POSITIONS &gt;</button>
        </article>
      </div>
    </div>
  );
};

export default Careers;
