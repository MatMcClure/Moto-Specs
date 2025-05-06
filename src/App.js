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
      const speed = 200;
      const duration = (textWidth + screenWidth) / speed;
      setAnimationDuration(`${duration}s`);
    }
  }, [selectedBike]);

  return (
    <div className="App">
      <Navbar onSelectBike={handleBikeSelect} />

  {/* Top-left paragraph section */}
  {selectedBike && selectedBike.name === "Aprilia RS660" && (
    <div className="bike-description">
        <p>
          The Aprilia RS660 redefines the middleweight sportbike segment by
          blending advanced electronics, lightweight agility, and everyday
          usability. With a 659cc parallel-twin engine and aerodynamic design, it
          offers thrilling performance without compromising comfort. A true
          balance between track-ready dynamics and road-going versatility.
        </p>
      </div>
       )}

      <header className="App-header">
        {selectedBike && (
          <>
            <div className="marquee-wrapper">
              <div
                className="marquee-text"
                ref={marqueeRef}
                style={{ animationDuration }}
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
      <img src={bike.image} alt={bike.name} className="bike-image show" />
      <div className="bike-stats">
        <p className="fade-in"><strong>Name:</strong> {bike.name}</p>
        <p className="fade-in"><strong>Top Speed:</strong> {bike.topSpeed}</p>
        <p className="fade-in"><strong>Horsepower:</strong> {bike.horsepower}</p>
        <p className="fade-in"><strong>Weight:</strong> {bike.weight}</p>
        <p className="fade-in"><strong>Torque:</strong> {bike.torque}</p>
      </div>
    </>
  );
}

export default App;
