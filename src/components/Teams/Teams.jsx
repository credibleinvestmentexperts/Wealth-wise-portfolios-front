import React from "react";
import imageTrust from "../../Assets/trustsheild.png";
import { NavLink } from "react-router-dom";
import "./Teams.css";

const Teams = () => {
  return (
    <section className="teams-section">
      {/* Hero Row */}
      <div className="teams-hero">
        <div className="teams-hero-left">
          <img src={imageTrust} alt="Trust Shield" className="teams-image" />
        </div>

        <div className="teams-content">
          <h1>Supporting Scams Awareness Week (24 – 29 August)</h1>
          <p>
            Scams often start from a phone call, email, social media or SMS –
            it’s important to learn how to identify common scams and what you
            can do to protect yourself. This Scams Awareness Week take a moment
            to familiarise yourself with scam types and how to spot the warning
            signs.
          </p>
        </div>

        <div>
          <div className="teams-btn-container">
            <NavLink to="/privacy-policy" className="teams-btn">
              View The Latest Scam Alerts
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
