import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./index.css";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Fill your details for Puja</h2>
        <hr />
        <h1>Enter Your Whatsapp Mobile Number</h1>
        <p>
          Your Puja booking updates like Puja Photos, Videos and other details
          will be sent on WhatsApp on below number.
        </p>
        <div className="input-group">
          <label>Your mobile Number</label>
          <input type="text" placeholder="+91" />
        </div>
        <div className="input-group">
          <label>Enter Your Name</label>
          <input type="text" placeholder="Your Full Name" />
        </div>
        <button onClick={onClose} className="close-button">
          Next
          <GoArrowRight className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
