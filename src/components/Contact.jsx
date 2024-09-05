/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>please contact me </h3>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go to home section{" "}
      </button>
    </div>
  );
};

export default Contact;
