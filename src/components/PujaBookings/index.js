import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Header from "../Header";

const PujaBookings = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleBookPoojaClick = () => {
    navigate("/PujaPackage"); // Ensure this path matches the route in App.js
  };

  return (
    <>
      <Header />
      <div className="puja-container">
        <button className="back-button" onClick={handleBackClick}>
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fback_arrow.bcf3db22.svg&w=48&q=75"
            alt="back"
            className="back-icon"
          />
        </button>
        <p>Puja History</p>
        <div className="no-puja-booked">
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty_stack.d683b244.svg&w=256&q=75"
            alt="Puja Logo"
            className="puja-logo"
          />
          <h1>No Puja has been booked yet</h1>
          <p>
            Book your Puja online at Popular Temples of India.
            <br />
            Panditji will take sankalp with your name and gotra
            <br /> during the Puja.
          </p>
          <button className="book-pooja-button" onClick={handleBookPoojaClick}>
            Book Puja Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PujaBookings;
