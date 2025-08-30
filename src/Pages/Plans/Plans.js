import React from "react";
import { NavLink } from "react-router-dom";
import "./Plans.css";
import Footer from "../../components/Footer/Footer";

const plansData = [
  {
    title: "Starter Plan",
    percent: "8",
    price: "$20 - $100",
    duration: "1-Day Duration",
    description:
      "An entry-level package for newcomers who want to experience investment returns with minimal risk.",
    benefits: [
      "Low-risk introduction",
      "Daily payout within 24 hours",
      "No hidden charges",
      "24/7 live support",
    ],
  },
  {
    title: "Beginner Plan",
    percent: "10",
    price: "$150 - $300",
    duration: "1-Day Duration",
    description:
      "Perfect for beginners ready to grow their portfolio steadily with quick returns.",
    benefits: [
      "Fast daily ROI",
      "Affordable entry range",
      "Flexible withdrawals",
      "Customer care access anytime",
    ],
  },
  {
    title: "Essential Plan",
    percent: "15",
    price: "$400 - $700",
    duration: "1-Day Duration",
    description:
      "A balanced option for ambitious investors who want consistent returns without high exposure.",
    benefits: [
      "Moderate daily returns",
      "Instant withdrawal after maturity",
      "Dedicated portfolio manager",
      "Monthly performance reports",
    ],
  },
  {
    title: "Advanced Plan",
    percent: "18",
    price: "$800 - $1,200",
    duration: "1-Day Duration",
    description:
      "Designed for experienced investors seeking premium returns and priority support.",
    benefits: [
      "Priority investment slots",
      "Early access to new packages",
      "Faster payout processing",
      "Expert investment guidance",
    ],
  },
  {
    title: "Premier Plan",
    percent: "23",
    price: "$1,500 - $5,000",
    duration: "1-Day Duration",
    description:
      "A high-value plan built for elite investors looking for maximum daily rewards and tailored services.",
    benefits: [
      "Highest ROI rate",
      "Exclusive financial advisor",
      "Premium support line",
      "First access to exclusive offers",
    ],
  },
  {
    title: "Executive Plan",
    percent: "28",
    price: "$6,000 - $10,000",
    duration: "2-Day Duration",
    description:
      "Premium package with top-level financial benefits, ideal for investors who want to grow wealth aggressively.",
    benefits: [
      "2-day double ROI",
      "Personalized portfolio strategy",
      "Exclusive priority withdrawals",
      "Executive client benefits",
    ],
  },
  {
    title: "Enterprise Plan",
    percent: "35",
    price: "$15,000 - $25,000",
    duration: "3-Day Duration",
    description:
      "Tailored for institutions and high-net-worth individuals looking for robust, short-term growth.",
    benefits: [
      "High-scale investment benefits",
      "Dedicated wealth advisor",
      "Custom investment opportunities",
      "Private strategy sessions",
    ],
  },
];

const Plans = () => {
  return (
    <>
      <section className="plans-wrapper">
        <header className="plans-hero">
          <h1 className="plans-title">Tailored Investment Packages</h1>
          <p className="plans-subtitle">
            Select the plan that aligns with your goals and take the next step
            toward financial growth.
          </p>
        </header>

        <div className="plans-grid">
          {plansData.map((plan, index) => (
            <div className="plan-card" key={index}>
              <div className="plan-header">
                <span className="plan-percent">{plan.percent}% ROI</span>
              </div>

              <div className="plan-body">
                <h2 className="plan-name">{plan.title}</h2>
                <p className="plan-duration">{plan.duration}</p>
                <p className="plan-price">{plan.price}</p>
                <p className="plan-description">{plan.description}</p>

                <ul className="plan-benefits">
                  {plan.benefits?.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="plan-footer">
                <NavLink to="/start-invest" className="plan-btn">
                  Get Started
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Plans;
