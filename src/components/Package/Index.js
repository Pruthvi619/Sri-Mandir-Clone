import React, { useState, useEffect } from "react";
import "./index.css";

const Package = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-07-21T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="container">
      <header className="header">
        <h1>Sri Mandir</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/puja">Puja</a>
          <a href="/panchang">Panchang</a>
          <a href="/temples">Temples</a>
          <a href="/library">Library</a>
        </nav>
        <button className="language-button">English</button>
      </header>

      <main>
        <div className="breadcrumbs">
          <a href="/">Home</a> &gt; <a href="/puja">Sri Mandir Puja Seva</a>{" "}
          &gt; Mahavidya Purnima Special Maa Bagalamukhi Tantra Yukta Havan for
          Victory in Court Cases and Victory over Enemies
        </div>

        <section className="main-content">
          <img
            src="/path-to-image.jpg"
            alt="Maa Bagalamukhi"
            className="main-image"
          />
          <div className="content">
            <h2>Maa Bagalamukhi Tantra Yukta Havan</h2>
            <p>for Victory in Court Cases and Victory over Enemies</p>
            <div className="details">
              <p>Maa Bagalamukhi Temple, Haridwar, Uttarakhand</p>
              <p>21 July, Sunday, Ashadha Shukla Chaturdashi</p>
            </div>
            <div className="countdown">
              <p>Puja booking will close in:</p>
              <div className="timer">
                <span>{days} Days </span>
                <span>{hours} Hours </span>
                <span>{minutes} Mins </span>
                <span>{seconds} Secs</span>
              </div>
            </div>
            <p>
              2,00,000+ Devotees have participated in Pujas conducted by Sri
              Mandir Puja Seva.
            </p>
            <button className="select-package">Select puja package</button>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-nav">
          <a href="#about">About Puja</a>
          <a href="#benefits">Benefits</a>
          <a href="#process">Process</a>
          <a href="#temple">Temple Details</a>
          <a href="#packages">Packages</a>
          <a href="#reviews">Reviews</a>
          <a href="#faqs">FAQs</a>
        </div>
      </footer>
    </div>
  );
};

export default Package;
