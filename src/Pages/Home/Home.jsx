import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import OurCustomers from "../../components/OurCustomers/OurCustomers";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import Advert from "../../Payment/Advert/Advert";
import HomePageAdvert from "../../components/HomePageAdvert/HomePageAdvert";
import Teams from "../../components/Teams/Teams";
import Forum from "../../components/Forum/Forum";
import Why from "../../components/Why/Why";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  const words = [
    "Invest Smarter with WealthWise Today Now.",
    "Grow Your Wealth with WealthWise Fast Forward.",
    "WealthWise: Trusted Guidance Always Here.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      setDisplayedText(currentWord.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentWord.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000); // Pause before next word
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [wordIndex]);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = process.env.REACT_APP_JIVOCHAT_URL;
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      {/* <HomePageAdvert /> */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div
            className="text-content"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1
              style={{
                color: "var(--hero-text-one)",
                fontWeight: "bold",
              }}
            >
              Grow Your Wealth with WealthWise Fast Forward.
            </h1>
            <p>
              Build a strong financial future with investment strategies that
              are tailored to your goals. From beginners to seasoned investors,
              we provide reliable tools and guidance to help your money grow
              with confidence.
            </p>

            <NavLink to="/my-account" className="dashboard-link">
              Sign In
            </NavLink>
          </div>
          <div className="image-content"></div>
        </div>
      </div>
      <SectionTwo />
      <Teams />
      <Why />
      <OurCustomers />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
