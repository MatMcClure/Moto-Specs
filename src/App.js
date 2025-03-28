import React, { useState } from "react";
import Navbar from "./Navbar";
import "./navbar.css";
import "./style.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null); // No image initially

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="App">
      <Navbar onSelectImage={handleImageSelect} /> {/* Pass function to Navbar */}

      <header className="App-header">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Motorcycle"
            className={`bike-image show`}
          />
        )}
      </header>
    </div>
  );
}

export default App;
