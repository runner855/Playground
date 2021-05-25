// import React, { useState } from "react";
import React, { useState } from "react";
import "../styles/Contactus.css";

const initialState = {
  fields: {
    name: "",
    lastname: "",
    email: "",
    message: "",
  },
};

const Contactus = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div class="container">
      <div class="row">
        <h1>contact us</h1>
      </div>
      <div class="row">
        <h4 style="text-align:center">We'd love to hear from you!</h4>
      </div>
      <div class="row input-container">
        <div class="col-xs-12">
          <div class="styled-input wide">
            <input type="text" required />
            <label>Name</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="styled-input">
            <input type="text" required />
            <label>Email</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="styled-input" style="float:right;">
            <input type="text" required />
            <label>Phone Number</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="btn-lrg submit-btn">Send Message</div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
