import React from "react";
import { Fade } from "react-slideshow-image";
import NavBar from "../components/NavBar";
import slidehello from "../images/slidehello.jpg";
import slideplay from "../images/slideplay.jpg";
import slidecircle from "../images/slidecircle.jpg";
import "react-slideshow-image/dist/styles.css";
import Navbar from "../components/NavBar";

const Slider = () => {
  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={slidehello} />
            </div>
            {/* <p>First Slide</p> */}
          </div>
          <div className="each-fade">
            {/* <p>Second Slide</p> */}
            <div>
              <img src={slideplay} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={slidecircle} />
            </div>
            {/* <p>Third Slide</p> */}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Slider;
