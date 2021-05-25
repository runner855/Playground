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
    <div className="contactus">
      <div className="address">
        <h1>Contact us.</h1>
        <p>
          Playground srl <br></br>Via G. Mazzini 3/C, <br></br>Cernusco Sul
          Naviglio (Milano) <br></br>-<br></br> T +39 0240706003
        </p>
      </div>
      <div className="contact-form">
        <div className="name-lastname">
          <div className="name">
            <br />
            <input
              id="name"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
              placeholder="name"
            />
          </div>
          <div className="lastname">
            <br />
            <input
              id="lastname"
              name="lastname"
              value={fields.lastname}
              onChange={handleFieldChange}
              placeholder="last name"
            />
          </div>
        </div>
        <div className="email-container">
          <div className="email">
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="email"
            />
          </div>
        </div>

        <div div className="message">
          <br />
          <div className="message_container">
            <textarea
              type="message"
              id="message"
              name="message"
              value={fields.message}
              onChange={handleFieldChange}
              placeholder="message"
            />
          </div>
        </div>
        <div className="button_container">
          <button type="send">SEND&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
