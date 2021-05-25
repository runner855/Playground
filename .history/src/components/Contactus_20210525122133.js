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

const Contactus = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      message: "",
    },
    validate: validateFields,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const handleFieldChange = (event) => {};
  return (
    <div className="contact-form" value="AddProperty">
      <form onSubmit={formik.handleSubmit}>
        <div className="name">
          Name:
          <br />
          <input
            id="name"
            name="name"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          ) : null}
        </div>
        <div className="lastname">
          Last name:
          <br />
          <input
            id="lastname"
            name="lastname"
            placeholder="last name"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <span style={{ color: "red" }}>{formik.errors.lastname}</span>
          ) : null}
        </div>
        <div className="email">
          email
          <br />
          <input
            id="email"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          ) : null}
        </div>
        <div div className="message">
          message: <br />
          <textarea
            id="message"
            name="message"
            placeholder="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message ? (
            <span style={{ color: "red" }}>{formik.errors.message}</span>
          ) : null}
        </div>

        <button type="send">Send</button>
      </form>
    </div>
  );
};

export default Contactus;
