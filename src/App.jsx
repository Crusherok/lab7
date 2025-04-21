import React, { useState } from "react";
import "./index.css";
import pic from "./assets/y.jpg"; // Import the image

const ProfileCard = ({ name, bio, initialBgColor }) => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setBgColor(initialBgColor);
  };

  return (
    <div
      className={`profile-card ${hovered ? "hovered" : ""}`}
      style={{ background: bgColor, color: "#000000" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={pic} alt={name} className="profile-pic" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
      </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <ProfileCard
        name="Unknown"
        bio="Innovator, entrepreneur, and co-founder of Stat Inc."
        initialBgColor="linear-gradient(135deg, #ADDBE6, rgb(146, 23, 23))"
      />
    </div>
  );
};

export default App;
