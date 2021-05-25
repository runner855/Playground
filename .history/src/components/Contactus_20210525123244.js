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
    <div className="contact-form" value="AddProperty">
      <form>
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
        <div div className="message">
          <br />
          <textarea
            type="message"
            id="message"
            name="message"
            value={fields.message}
            onChange={handleFieldChange}
            placeholder="message"
          />
        </div>

        <button type="sumbit">Send</button>
      </form>
    </div>
  );
};

export default Contactus;
