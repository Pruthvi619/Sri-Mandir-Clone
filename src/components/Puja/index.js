import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { GoArrowRight } from "react-icons/go";
import "./index.css";
import Header from "../Header";

function Puja() {
  return (
    <>
      <Header />
      <main className="App-main">
        <section className="intro">
          <h1 className="heading">
            Perform your Puja as per Vedic rituals at Famous Hindu Temples in
            <br />
            India with Sri Mandir
          </h1>
          <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_devotees.0a33e17d.webp&w=3840&q=75"
                alt="Puja 1"
              />
            </div>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_puja.f8a35e8a.webp&w=3840&q=75"
                alt="Puja 2"
              />
            </div>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_review.c0435a90.webp&w=3840&q=75"
                alt="Puja 3"
              />
            </div>
          </Carousel>
        </section>
      </main>
      <section className="filters">
        <div className="filter-options">
          <select className="styled-select">
            <option className="options">Festivals</option>
          </select>
          <select className="styled-select">
            <option className="options">Diety</option>
          </select>
          <select className="styled-select">
            <option className="options">Tithis</option>
          </select>
          <select className="styled-select">
            <option className="options">Dosha</option>
          </select>
          <select className="styled-select">
            <option className="options">Benefits</option>
          </select>
          <select className="styled-select">
            <option className="options">Location</option>
          </select>
        </div>
      </section>
      <div>
        <h1 className="heading">Upcoming Pujas on Sri Mandir.</h1>
        <p className="description">
          Book online puja with Sri Mandir in more than 500+ temples across
          India. Receive video of the puja along with the Prasad and
          <br /> receive blessings from the divine for prosperity and well-being
          of you and your family
        </p>
      </div>
      <div className="book-puja-cards-container">
        <div className="book-puja-cards">
          <img
            src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720883338524.webp&w=1920&q=75"
            alt="Book Puja"
            className="book-puja"
          />
          <p className="special-puja">SATURDAY SHANI SHINGNAPUR SPECIAL</p>
          <hr className="hr-line" />
          <h1 className="name-puja">
            Shani Saade Saati Peeda Shanti <br /> Mahapuja and Til Tel Abhishek
          </h1>
          <p className="puja-benefits">
            For Prevention of Misfortunes and Adversities
          </p>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemple_venue_borderless.98b8f77c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              Shree Shanidev Temple, Shani Shingnapur, Maharashtra
            </h1>
          </div>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              20 July, Saturday, Ashadha Shukla Chaturdashi
            </h1>
          </div>
          <button type="button" className="button">
            PARTICIPATE
            <GoArrowRight className="arrow" />
          </button>
        </div>
        <div className="book-puja-cards">
          <img
            src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1721208690418.jpg&w=1920&q=75"
            alt="Book Puja"
            className="book-puja"
          />
          <p className="special-puja">MAHAVIDYA PURNIMA SPECIAL</p>
          <hr className="hr-line" />
          <h1 className="name-puja">
            Maa Bagalamukhi Tantra <br />
            Yukta Havan
          </h1>
          <p className="puja-benefits">
            for Victory in Court Cases and Victory over Enemies
          </p>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemple_venue_borderless.98b8f77c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              Maa Bagalamukhi Temple, Haridwar, Uttarakhand
            </h1>
          </div>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              21 July, Saturday, Ashadha Shukla Chaturdashi
            </h1>
          </div>
          <button type="button" className="button">
            PARTICIPATE
            <GoArrowRight className="arrow" />
          </button>
        </div>
        <div className="book-puja-cards">
          <img
            src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720890969814.webp&w=1920&q=75"
            alt="Book Puja"
            className="book-puja"
          />
          <p className="special-puja">PURNIMA SHAKTIPEETH NIGHT SPECIAL</p>
          <hr className="hr-line" />
          <h1 className="name-puja">
            Divya Mahakali Tantrokta <br />
            Havan
          </h1>
          <p className="puja-benefits">
            For Courage and Protection from Obstacles
          </p>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemple_venue_borderless.98b8f77c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal
            </h1>
          </div>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              20 July, Saturday, Ashadha Shukla Purnima (July 20 to 03:46 PM,
              July 21)
            </h1>
          </div>
          <button type="button" className="button">
            PARTICIPATE
            <GoArrowRight className="arrow" />
          </button>
        </div>
      </div>
      <div className="book-puja-cards-container">
        <div className="book-puja-cards">
          <img
            src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720883338524.webp&w=1920&q=75"
            alt="Book Puja"
            className="book-puja"
          />
          <p className="special-puja">SATURDAY SHANI SHINGNAPUR SPECIAL</p>
          <hr className="hr-line" />
          <h1 className="name-puja">
            Shani Saade Saati Peeda Shanti <br /> Mahapuja and Til Tel Abhishek
          </h1>
          <p className="puja-benefits">
            For Prevention of Misfortunes and Adversities
          </p>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemple_venue_borderless.98b8f77c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              Shree Shanidev Temple, Shani Shingnapur, Maharashtra
            </h1>
          </div>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              20 July, Saturday, Ashadha Shukla Chaturdashi
            </h1>
          </div>
          <button type="button" className="button">
            PARTICIPATE
            <GoArrowRight className="arrow" />
          </button>
        </div>
        <div className="book-puja-cards">
          <img
            src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1721208690418.jpg&w=1920&q=75"
            alt="Book Puja"
            className="book-puja"
          />
          <p className="special-puja">MAHAVIDYA PURNIMA SPECIAL</p>
          <hr className="hr-line" />
          <h1 className="name-puja">
            Maa Bagalamukhi Tantra <br />
            Yukta Havan
          </h1>
          <p className="puja-benefits">
            for Victory in Court Cases and Victory over Enemies
          </p>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemple_venue_borderless.98b8f77c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              Maa Bagalamukhi Temple, Haridwar, Uttarakhand
            </h1>
          </div>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              21 July, Saturday, Ashadha Shukla Chaturdashi
            </h1>
          </div>
          <button type="button" className="button">
            PARTICIPATE
          </button>
        </div>
        <div className="book-puja-cards">
          <img
            src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720890969814.webp&w=1920&q=75"
            alt="Book Puja"
            className="book-puja"
          />
          <p className="special-puja">PURNIMA SHAKTIPEETH NIGHT SPECIAL</p>
          <hr className="hr-line" />
          <h1 className="name-puja">
            Divya Mahakali Tantrokta <br />
            Havan
          </h1>
          <p className="puja-benefits">
            For Courage and Protection from Obstacles
          </p>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemple_venue_borderless.98b8f77c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal
            </h1>
          </div>
          <div className="puja-logo">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75"
              alt=""
              className="puja-name-img"
            />
            <h1 className="venue-day">
              20 July, Saturday, Ashadha Shukla Purnima (July 20 to 03:46 PM,
              July 21)
            </h1>
          </div>
          <button type="button" className="button">
            PARTICIPATE
          </button>
        </div>
      </div>
    </>
  );
}

export default Puja;
