import React from "react";
import "../styles/Wedo.css";
import bannerwedo from "../images/bannerwedo.jpg";

const Wedo = () => {
  return (
    <section class="careers_container">
      <div class="careers_left">
        <article className="careers_img_container">
          <h1>Left Half</h1>
          <p>
            Weekends don't count unless you spend them doing something
            completely pointless.
          </p>
        </article>
      </div>
      <div class="careers_right">
        <article className="careers_info_container">
          <h1>Right Half</h1>
          <p>
            If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Wedo;
