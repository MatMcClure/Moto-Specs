import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import "./navbar.css";
import "./style.css";

function App() {
  const [selectedBike, setSelectedBike] = useState(null);
  const [animationDuration, setAnimationDuration] = useState("10s");
  const marqueeRef = useRef();

  const handleBikeSelect = (bike) => {
    setSelectedBike(bike);
  };

  useEffect(() => {
    if (marqueeRef.current) {
      const textWidth = marqueeRef.current.offsetWidth;
      const screenWidth = window.innerWidth;
      const speed = 200; // pixels per second

      const duration = (textWidth + screenWidth) / speed;
      setAnimationDuration(`${duration}s`);
    }
  }, [selectedBike]);

  return (
    <div className="App">
      <Navbar onSelectBike={handleBikeSelect} />

      <header className="App-header">
        {selectedBike && (
          <>
            <div className="marquee-wrapper">
              <div
                className="marquee-text"
                ref={marqueeRef}
                style={{
                  animationDuration: animationDuration,
                }}
              >
                <h1>{selectedBike.name}</h1>
              </div>
            </div>

            <BikeDisplay key={selectedBike.name} bike={selectedBike} />
          </>
        )}
      </header>
    </div>
  );
}

function BikeDisplay({ bike }) {
  return (
    <>
      <img
        src={bike.image}
        alt={bike.name}
        className="bike-image show"
      />
      <div className="bike-stats">
        <p className="fade-in"><strong>Top Speed:</strong> {bike.topSpeed}</p>
        <p className="fade-in"><strong>Horsepower:</strong> {bike.horsepower}</p>
        <p className="fade-in"><strong>Weight:</strong> {bike.weight}</p>
        <p className="fade-in"><strong>Torque:</strong> {bike.torque}</p>
      </div>
    </>
  );
}

export default App;