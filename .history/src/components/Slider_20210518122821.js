import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const fadeImages = ["images/slidehello.jpg", "images/slide_6.jpg"];

  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} />
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-fade">
            <p>Second Slide</p>
            <div>
              <img src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} />
            </div>
            <p>Third Slide</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Slider;
