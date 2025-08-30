// Testimonials.jsx
import React, { useState } from "react";
import { Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Investing with this company has been a game-changer. Consistent returns and complete transparency — I now trust them with a major part of my portfolio.",
    name: "James Carter",
    role: "Entrepreneur & Angel Investor",
  },
  {
    text: "I’ve partnered with this platform for over 5 years. Their professionalism and dedication to client success is unmatched in the investment space.",
    name: "Sophia Martinez",
    role: "Wealth Manager",
  },
  {
    text: "Finally, an investment firm that actually delivers on its promises. Withdrawals are smooth, and my portfolio has grown steadily.",
    name: "Michael Brown",
    role: "Real Estate Investor",
  },
  {
    text: "They helped me diversify intelligently. I feel confident that my long-term financial goals are in safe hands.",
    name: "Aisha Khan",
    role: "Tech Founder",
  },
  {
    text: "The past decade with them has been phenomenal — smart strategies, great advice, and steady growth.",
    name: "Daniel Roberts",
    role: "Financial Analyst",
  },
  {
    text: "What stands out most is their integrity. I’ve never had to worry about hidden fees or delayed withdrawals.",
    name: "Emily Zhang",
    role: "Corporate Executive",
  },
  {
    text: "This company gave me the confidence to invest globally. My portfolio is now more balanced than ever.",
    name: "Oluwaseun Adeyemi",
    role: "Oil & Gas Consultant",
  },
  {
    text: "Their expert insights into emerging markets have been invaluable. I’ve seen solid growth year after year.",
    name: "Carlos Fernandez",
    role: "Trader",
  },
  {
    text: "I used to be skeptical of investment platforms, but their track record speaks for itself — highly recommended!",
    name: "Linda Thompson",
    role: "Medical Doctor",
  },
  {
    text: "Clear communication and reliable performance — I wish I had started investing with them earlier.",
    name: "Rajesh Gupta",
    role: "Tech Investor",
  },
  {
    text: "Their advisory team really listens and tailors solutions for my goals. That makes all the difference.",
    name: "Fatima Al-Hassan",
    role: "Entrepreneur",
  },
  {
    text: "They’ve built partnerships across industries, which makes their investment opportunities very unique.",
    name: "William Scott",
    role: "Manufacturing CEO",
  },
  {
    text: "The consistency of their results gives me confidence to plan for the future with peace of mind.",
    name: "Hiroshi Tanaka",
    role: "Retired Banker",
  },
  {
    text: "Their 10+ years of experience shows in every aspect of their service. Reliable, trustworthy, and professional.",
    name: "Grace Johnson",
    role: "NGO Director",
  },
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Trusted by Investors Worldwide</h2>
      <p className="testimonials-subtitle">
        Hear directly from clients who’ve built wealth with us over the past decade.
      </p>

      <div className="testimonials-grid">
        {visibleTestimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FFD700" stroke="#FFD700" />
              ))}
            </div>
            <p className="testimonial-text">“{t.text}”</p>
            <div className="testimonial-user">
              <div className="testimonial-avatar">{t.name[0]}</div>
              <div>
                <h4 className="testimonial-name">{t.name}</h4>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="show-more-btn"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default Testimonials;
