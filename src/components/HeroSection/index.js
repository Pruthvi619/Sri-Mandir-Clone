import "./index.css";

function HeroSection() {
  return (
    <section className="HeroSection">
      <div className="items-container">
        <div style={{ display: "flex" }}>
          <div className="main-heading-container">
            <h1 id="mainTitle">
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_achievement.6722fe43.webp&w=64&q=75"
                alt="achievement icon"
                className="achievement-icon"
              />
              WORLD’S LARGEST APP FOR HINDU DEVOTEES
            </h1>

            <h1 className="secondary-title">
              Pray daily with <span className="span-text">Sri Mandir</span>.{" "}
              <br />
              One App for all your <br />
              devotional needs.
            </h1>
            <a
              href="https://play.google.com/store/apps/details?id=com.mandir"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=640&q=75"
                alt="playstore"
                className="logo"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/sri-mandir-puja-chadhava/id1637621461"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=640&q=75"
                alt="appstore"
              />
            </a>
          </div>
          <div className="main-image-container" style={{ width: "50%" }}>
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.ecfc0911.webp&w=1920&q=75"
              alt="main logo"
              className="main-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
