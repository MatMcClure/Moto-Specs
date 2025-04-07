import React, { useState } from "react";
import Navbar from "./Navbar";
import "./navbar.css";
import "./style.css";

function App() {
  const [selectedBike, setSelectedBike] = useState(null); // Store bike info

  const handleBikeSelect = (bike) => {
    setSelectedBike(bike); // Update selected bike info
  };

  return (
    <div className="App">
      <Navbar onSelectBike={handleBikeSelect} /> {/* Pass function to Navbar */}

      <header className="App-header">
        {selectedBike && (
          <>
            <h2>{selectedBike.name}</h2>
            <img
              src={selectedBike.image}
              alt={selectedBike.name}
              className="bike-image show"
            />
            <div className="bike-stats">
              <p><strong>Top Speed:</strong> {selectedBike.topSpeed}</p>
              <p><strong>Horsepower:</strong> {selectedBike.horsepower}</p>
              <p><strong>Weight:</strong> {selectedBike.weight}</p>
              <p><strong>Torque:</strong> {selectedBike.torque}</p>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
