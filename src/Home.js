import React from "react";
import "./style.css";
import bikes from "./bikesData"; // Assuming your bike data is in bikesData.js
import aprilia from "./images/logo-images/aprilia-logo.png";

function Home({ onSelect }) {
  return (
    <div className="home-container">
      {/* Aprilia Logo Wrapper - Clickable */}
      <div
        className="aprilia-logo-wrapper"
        onClick={() => onSelect(aprilia)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={aprilia}
          alt="Aprilia Logo"
          className="aprilia-logo"
        />
      </div>

      {/* Bike Grid */}
      <div className="bike-grid">
        {bikes.map((bike, index) => (
          <div key={index} className="bike-card" onClick={() => onSelect(bike)}>
            <img src={bike.image} alt={bike.name} />
            <p>{bike.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
