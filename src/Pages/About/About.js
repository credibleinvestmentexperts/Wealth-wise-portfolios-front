import React from "react";
import { FaLightbulb, FaShieldAlt, FaChartLine } from "react-icons/fa";
import AboutImg from "../../Assets/aboutttsec.png";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>Who We Are</h1>
          <p>
            We are committed to making investing smarter, safer, and more rewarding 
            through innovation, guidance, and trust-driven solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="about-section">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              To simplify wealth creation by providing secure and reliable 
              investment opportunities that empower people to take control 
              of their financial future.
            </p>
            <NavLink to="/contact" className="about-btn">
              Let’s Connect
            </NavLink>
          </div>
          <div className="about-image">
            <img src={AboutImg} alt="About Us" />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="about-mission-section">
          <div className="mission-item">
            <FaLightbulb className="icon" />
            <h3>Innovation</h3>
            <p>
              We leverage technology and creativity to offer investment 
              solutions that are modern, efficient, and easy to use.
            </p>
          </div>
          <div className="mission-item">
            <FaShieldAlt className="icon" />
            <h3>Security</h3>
            <p>
              Your trust is our priority — we ensure every investment is backed 
              by transparency, accountability, and strong protection measures.
            </p>
          </div>
          <div className="mission-item">
            <FaChartLine className="icon" />
            <h3>Growth</h3>
            <p>
              Our focus is on long-term financial growth, helping our community 
              achieve lasting wealth and independence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
