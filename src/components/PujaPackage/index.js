import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import Header from "../Header";
import Popup from "../Popup";
import "./index.css";

const PujaPackage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container">
      <Header />

      <main>
        <div className="breadcrumbs">
          <a href="/">Home</a> &gt; <a href="/puja">Sri Mandir Puja Seva</a>{" "}
          &gt; Mahavidya Purnima Special Maa Bagalamukhi Tantra Yukta Havan for
          Victory in Court Cases and Victory over Enemies
        </div>
        <hr />

        <section className="main-content">
          <img
            src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1721208697893.jpg&w=1920&q=75"
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
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_user_43.75388f47.webp&w=1920&q=75"
              alt="profiles"
            />
            <p>
              Till now{" "}
              <span className="Devotees-count">2,00,000+ Devotees </span>
              have participated in Pujas conducted
              <br /> by Sri Mandir Puja Seva.
            </p>
            <button className="select-package" onClick={handlePopupOpen}>
              Select puja package
              <GoArrowRight className="arrow" />
            </button>
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
      <div>
        <h1>
          Mahavidya Purnima Special Maa Bagalamukhi Tantra Yukta Havan for
          Victory in Court Cases and Victory over Enemies
        </h1>
        <p>
          Among the ten Mahavidyas, Maa Bagalamukhi is the eighth Mahavidya,
          known for controlling the minds and intellect of enemies. In the
          scriptures, she is also referred to as 'Shatru Vinashini' because she
          can destroy the evil intentions of enemies. It is believed that her
          worship can avert great calamities and threats from enemies.
          Performing a special puja of Maa Bagalamukhi at sacred pilgrimage
          sites like Haridwar, on the extremely auspicious day of Purnima brings
          blessings of victory in all aspects of life.
        </p>
        <p>
          One of the most sacred places to worship Mahavidya Maa Bagalamukhi is
          Haridwar. According to Hinduism, the pilgrimage site of Haridwar holds
          spiritual significance for pleasing the Goddess. It is one of the
          sacred cities of India where devotees come in search of divine
          knowledge and spiritual transformation. At the Maa Bagalamukhi temple
          in Haridwar, devotees seek the blessings of the Goddess to achieve
          victory in court cases and relief from enemies. Furthermore, the
          Goddess enshrined in this temple blesses her devotees with family
          happiness and peace, wealth, relief from all troubles, and success in
          government-related matters. Therefore, if you also want relief in your
          court cases and from enemies, participate in the Maa Bagalamukhi
          Tantra Yukta Havan that will be organised in Haridwar on the
          auspicious day of Purnima. Participate through Sri Mandir and receive
          blessings from Mahavidya Maa Bagalamukhi.
        </p>
      </div>
      <div>
        <h1>Maa Bagalamukhi Temple, Haridwar, Uttarakhand</h1>
        <div>
          <img
            src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1719511274442.jpg&w=1920&q=75"
            alt="haridwar"
            className="main-image"
          />
          <p>
            Haridwar, the world-renowned religious city, is home to many
            mythological sites whose antiquity is mentioned in religious texts.
            Haridwar is a pilgrimage site where people from different states of
            the country and from abroad come to visit. One of these sacred
            places is the Maa Baglamukhi Dham, which is dedicated to the eighth
            Mahavidya, Baglamukhi. Swami Ashok Rudra Ji Maharaj decided to build
            the first temple of Shri Baglamukhi Devi in Haridwar in Shyampur
            village, Haridwar district, Uttarakhand. The foundation stone of
            this temple was laid in 2012.
          </p>
          <p>
            Maa Baglamukhi is one of the ten Mahavidyas and is considered the
            goddess of stambhana shakti, which means she has the power to
            immobilise enemies. This temple in Haridwar is especially
            significant for devotees who are facing obstacles in life and seek
            power, victory, and protection. Special worship and rituals are
            performed for Maa Baglamukhi at this temple, including specific
            types of chants, tantric practices, and havans. Devotees also offer
            special prayers here to fulfil their desires. The temple's
            atmosphere is very serene and spiritual, providing inner peace to
            the devotees. It is believed that all the wishes of devotees are
            fulfilled here.
          </p>
        </div>
      </div>
      <div>
        <h1>Select puja package</h1>
        <div className="book-puja-cards-container">
          <div className="book-puja-cards">
            <h1 className="price">₹ 851</h1>
            <h1 className="puja-type">Individual Puja</h1>
            <h1 className="per-person">Puja for 1 Person</h1>
            <hr />
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Pandit ji will call out your name and gotra during the puja
                sankalp.
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Opt for additional offerings like Vastra Daan, Anna Daan, Gau
                Seva, or Deep Daan to be done in your name.
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Upon completion, a video of your puja and offering will be
                shared with you on your registered WhatsApp number or can be
                found in your booking history within 3-4 days. .
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Sacred tirth prasad will be sent to your address within 8-10
                days.
              </p>
            </div>
            <hr />
            <button type="button" className="button2" onClick={handlePopupOpen}>
              > PARTICIPATE
              <GoArrowRight className="arrow" />
            </button>
          </div>
          <div className="book-puja-cards">
            <h1 className="price">₹ 851</h1>
            <h1 className="puja-type">Individual Puja</h1>
            <h1 className="per-person">Puja for 1 Person</h1>
            <hr />
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Pandit ji will call out your name and gotra during the puja
                sankalp.
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Opt for additional offerings like Vastra Daan, Anna Daan, Gau
                Seva, or Deep Daan to be done in your name.
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Upon completion, a video of your puja and offering will be
                shared with you on your registered WhatsApp number or can be
                found in your booking history within 3-4 days. .
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Sacred tirth prasad will be sent to your address within 8-10
                days.
              </p>
            </div>
            <hr />
            <button type="button" className="button2" onClick={handlePopupOpen}>
              > PARTICIPATE
              <GoArrowRight className="arrow" />
            </button>
          </div>
          <div className="book-puja-cards">
            <h1 className="price">₹ 851</h1>
            <h1 className="puja-type">Individual Puja</h1>
            <h1 className="per-person">Puja for 1 Person</h1>
            <hr />
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Pandit ji will call out your name and gotra during the puja
                sankalp.
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Opt for additional offerings like Vastra Daan, Anna Daan, Gau
                Seva, or Deep Daan to be done in your name.
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Upon completion, a video of your puja and offering will be
                shared with you on your registered WhatsApp number or can be
                found in your booking history within 3-4 days. .
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Sacred tirth prasad will be sent to your address within 8-10
                days.
              </p>
            </div>
            <hr />
            <button type="button" className="button2" onClick={handlePopupOpen}>
              > PARTICIPATE
              <GoArrowRight className="arrow" />
            </button>
          </div>
          <div className="book-puja-cards">
            <h1 className="price">₹ 851</h1>
            <h1 className="puja-type">Individual Puja</h1>
            <h1 className="per-person">Puja for 1 Person</h1>
            <hr />
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Pandit ji will call out your name and gotra during the puja
                sankalp.
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Opt for additional offerings like Vastra Daan, Anna Daan, Gau
                Seva, or Deep Daan to be done in your name.
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Upon completion, a video of your puja and offering will be
                shared with you on your registered WhatsApp number or can be
                found in your booking history within 3-4 days. .
              </p>
            </div>
            <div className="circle-container">
              <img
                src="https://srm-cdn.a4b.io/yoda/1710916730304.webp"
                alt="circle"
                className="circle"
              />
              <p>
                Sacred tirth prasad will be sent to your address within 8-10
                days.
              </p>
            </div>
            <hr />
            <button type="button" className="button2" onClick={handlePopupOpen}>
              PARTICIPATE
              <GoArrowRight className="arrow" />
            </button>
          </div>

          {isPopupOpen && <Popup onClose={handlePopupClose} />}
        </div>
      </div>
    </div>
  );
};

export default PujaPackage;
