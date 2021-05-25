// import React, { useState } from "react";
import React, { useState } from "react";
import { useFormik } from "formik";
import "../styles/Contactus.css";

const validateFields = (empData) => {
  const errors = {};

  if (!empData.message) {
    errors.message = "message cannot be empty";
  } else if (empData.message.length < 20) {
    errors.name = " your message cannot exceed 200 characters";
  }

  if (!empData.EmailId) {
    errors.EmailId = "email cannot be empty";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)
  ) {
    errors.EmailId = "this is not the right email format";
  }

  return errors;
};

const initialState = {
  fields: {
    name: "",
    lastname: "",
    email: "",
    message: 1,
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
          Name:
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
          Last name:
          <br />
          <input
            id="lastname"
            name="lastname"
            value={fields.lastname}
            onChange={handleFieldChange}
          />
        </div>
        <div className="email">
          Email:
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
          message: <br />
          <textarea
            type="message"
            id="message"
            name="message"
            value={fields.message}
            onChange={handleFieldChange}
            placeholder="message"
          />
        </div>

        <button type="send">Send</button>
      </form>
    </div>
  );
};

export default Contactus;
