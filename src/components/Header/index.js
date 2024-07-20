import React, { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./index.css";

const imgUrl =
  "https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_sm_logo_en_dark.749d0244.svg&w=384&q=75";

function Header() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleMyPujaBookingsClick = () => {
    navigate("/PujaBookings");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <header className="Header">
      <div className="logo">
        <img src={imgUrl} alt="Sri Mandir" />
      </div>
      <nav>
        <ul>
          <li className="titles" onClick={handleHomeClick}>
            Home
          </li>
          <li className="list-titles">Puja</li>
          <li className="list-titles">Panchang</li>
          <li className="list-titles">Temples</li>
          <li className="list-titles">Library</li>
        </ul>
      </nav>
      <div className="language-selector">
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <img
          src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDefault%20Profile.619cb564.svg&w=96&q=75"
          alt="profile"
          className="profile"
          onClick={togglePopup}
        />
        {isPopupVisible && (
          <div className="popup">
            <p className="greetings">Hello, Sri Mandir Bhakt</p>
            <p className="greetings">Welcome to Sri Mandir Puja Seva</p>
            <hr />
            <p className="greetings title">Account Details</p>
            <div className="accounts-container">
              <div>
                <IoMdPerson />
                <span className="profile-text">My Profile</span>
              </div>
              <MdChevronRight />
            </div>
            <div
              className="accounts-container"
              onClick={handleMyPujaBookingsClick}
            >
              <div>
                <img
                  src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_history.69f033dd.svg&w=48&q=75"
                  alt="icons"
                />
                <span>My Puja Bookings</span>
              </div>
              <MdChevronRight />
            </div>
            <div className="accounts-container">
              <div>
                <img
                  src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_history.69f033dd.svg&w=48&q=75"
                  alt="icons"
                />
                <span>My Ramostav Bookings</span>
              </div>
              <MdChevronRight />
            </div>
            <div className="accounts-container">
              <div>
                <img
                  src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_explore_puja_seva.42f2f767.svg&w=48&q=75"
                  alt="icons"
                />
                <span>Book a Puja</span>
              </div>
              <span className="button">New</span>
              <MdChevronRight />
            </div>
            <hr />
            <p className="greetings title">Help & Support for Puja Booking</p>
            <div className="support-card">
              <div>
                <img
                  src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_call.858e9981.svg&w=48&q=75"
                  alt="call"
                  className="call-logo"
                />
              </div>
              <div>
                <p className="contact-text">080-711-74417</p>
                <p className="contact-text description">
                  You can call us from 10:30 AM - 7:30 PM
                </p>
              </div>
            </div>
            <div className="contact-card-container">
              <div className="contact-card">
                <img
                  src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_mail.adf10861.svg&w=48&q=75"
                  alt="email-logo"
                  className="contact-logo"
                />
                <p>Email us</p>
              </div>
              <div className="contact-card">
                <img
                  src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_whats_app.97e1ae15.svg&w=48&q=75"
                  alt="whatsapp-logo"
                  className="contact-logo"
                />
                <p>Whatsapp us</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
