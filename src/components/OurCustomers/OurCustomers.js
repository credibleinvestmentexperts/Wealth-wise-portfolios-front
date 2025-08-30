import React from "react";
import { Briefcase, TrendingUp, ShieldCheck, Users } from "lucide-react";
import team1 from "../../Assets/firstImg.jpg";
import team2 from "../../Assets/secondImg.jpg";
import team3 from "../../Assets/thirdImg.png";
import team4 from "../../Assets/ForthImg.jpeg";
import "./OurCustomers.css";

const teamMembers = [
  {
    id: 1,
    name: "Elizabeth Warren",
    title: "Chief Investment Officer",
    image: team1,
    description:
      "With over 20 years in global finance, Elizabeth has secured multi-billion-dollar portfolios, helping clients achieve sustainable long-term growth.",
    icon: <Briefcase size={24} />,
  },
  {
    id: 2,
    name: "Michael Carter",
    title: "Head of Wealth Management",
    image: team2,
    description:
      "Michael leads our client strategies, focusing on wealth preservation, trust-building, and personalized investment planning.",
    icon: <ShieldCheck size={24} />,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    title: "Global Market Strategist",
    image: team3,
    description:
      "Sophia analyzes emerging markets and provides clients with innovative growth opportunities across 30+ countries.",
    icon: <TrendingUp size={24} />,
  },
  {
    id: 4,
    name: "David Chen",
    title: "Senior Investment Advisor",
    image: team4,
    description:
      "David has built partnerships with Fortune 500 companies and advises on high-value investment portfolios worldwide.",
    icon: <Users size={24} />,
  },
];

const OurCustomers = () => {
  return (
    <section className="team-section">
      <h2 className="team-header">Meet Our Leadership</h2>
      <p className="team-subtitle">
        For over a decade, our experts have guided investors with trust, vision, 
        and proven results.
      </p>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card fade-in-up">
            <div className="card-top">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="team-info-inline">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
              </div>
              <div className="team-icon">{member.icon}</div>
            </div>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCustomers;
