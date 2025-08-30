import React from "react";
import "./SectionTwo.css";
import { FaChartLine, FaGlobe, FaDollarSign } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const cards = [
  {
    icon: <FaChartLine size={50} />,
    header: "Trade Digital Assets",
    content:
      "Gain access to hundreds of popular cryptocurrencies on WealthWise. Diversify your holdings and explore the fast-growing world of digital finance with ease.",
  },
  {
    icon: <FaGlobe size={50} />,
    header: "Global Crypto Access",
    content:
      "Expand your opportunities with secure access to worldwide crypto markets. Explore tokens, stablecoins, and DeFi projects to grow your wealth globally.",
  },
  {
    icon: <FaDollarSign size={50} />,
    header: "Smart Wealth Plans",
    content:
      "Tailor your crypto portfolio with WealthWise strategies designed to balance high-growth coins and long-term value. Build digital wealth confidently.",
  },
];

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      {/* Top Section */}
      <div className="sectionTwo-top">
        <div className="sectionTwo-text">
          <h1>One powerful platform, endless opportunities</h1>
          <p>
            Invest your way – WealthWise gives you easy access to the products
            and markets you need to grow your wealth confidently.
          </p>
        </div>
        <div className="sectionTwo-link">
          <NavLink to="/services">
            View full list of products & services
          </NavLink>
        </div>
      </div>

      {/* Cards */}
      <div className="sectionTwo-cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="icon">{card.icon}</div>
            <h2>{card.header}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
