import React, { useEffect, useState } from "react";
import "./Why.css";
import bgImage from "../../Assets/statistics.jpg"; // Replace with your bg image

const statsData = [
  { id: 1, start: 5704, end: 1000000, suffix: "+", text: "Assets Managed" },
  { id: 2, start: 0, end: 98, suffix: "%", text: "Customer Satisfaction" },
  { id: 3, start: 0, end: 30, suffix: "+", text: "Countries Served" },
  { id: 4, start: 0, end: 5000, suffix: "+", text: "Active Investors" },
];

const Counter = ({ start, end, suffix }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let current = start;
    const duration = 1000; // 3s
    const range = end - start;
    const stepTime = Math.max(Math.floor(duration / range), 1);

    const timer = setInterval(() => {
      current += Math.ceil(range / (duration / stepTime));
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <span>
      {count.toLocaleString()} {suffix}
    </span>
  );
};

const Why = () => {
  return (
    <section
      className="performance-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="performance-overlay">
        <h2 className="performance-title">Trusted Results Over the Years</h2>

        {/* Extra Trust Section */}
        <p className="performance-subtitle">
          For over <strong>20 years</strong>, we’ve built lasting partnerships
          and earned the trust of investors worldwide.
        </p>

        <div className="stats-grid">
          {statsData.map((stat) => (
            <div className="stat-card fade-in-up" key={stat.id}>
              <h3 className="stat-number">
                <Counter
                  start={stat.start}
                  end={stat.end}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
