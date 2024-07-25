import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = ({ isSlidingActive }) => {
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    if (imageWrapperRef.current) {
      if (isSlidingActive) {
        imageWrapperRef.current.style.pointerEvents = "none";
      } else {
        imageWrapperRef.current.style.pointerEvents = "auto";
      }
    }
  }, [isSlidingActive]);

  return (
    <div className="home-main-wrapper">
      <div className="home-image-wrapper" ref={imageWrapperRef}>
        <img
          src="static/images/Home/bg-home.png"
          alt="Background"
          className="home-background-image"
        />
      </div>

      <div className="home-page">
        <h2>Synchronise Your</h2>
        <h2>Business Finances</h2>
        <p>
          Welcome to Synk Pay, where innovation meets security in digital
          finance.
        </p>
      </div>
      <div className="home-page-two">
        <p>
          Synk Pay empowers businesses to seamlessly manage cryptocurrency and
          fiat funds. Harness the progressive regulatory framework of Lithuania
          with our secure and intuitive platform, integrating digital and
          traditional currencies into one comprehensive financial tool for
          businesses worldwide.
        </p>
      </div>
      <div className="footer-container">
        <div className="copyright">
          <p>Powered by Novatide Labs</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
