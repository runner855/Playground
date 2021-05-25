import React from "react";
import "../styles/Weare.css";
import bannerweare from "../images/bannerweare.jpg";

const Weare = () => {
  return (
    <section class="weare_container">
      <div class="weare_left">
        <article className="weare_img_container">
          <h1>Left Half</h1>
          <p>
            Weekends don't count unless you spend them doing something
            completely pointless.
          </p>
        </article>
      </div>
      <div class="weare_right">
        <article className="weare_info_container">
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

export default Weare;
