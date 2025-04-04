import React from "react";
// import "./Stats.css";

const statsData = [
  { number: "2,500+", text: "Cyber Projects" },
  { number: "1,800+", text: "Clients Protection" },
  { number: "100%", text: "Services Guarantee" },
  { number: "50+", text: "Team Expert" },
];

const Stats = () => {
  return (
    <div className="stats-section">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-box">
          <h2>{stat.number}</h2>
          <p>{stat.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
