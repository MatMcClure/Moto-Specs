import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import "./style.css";
import aprilia from "./images/logo-images/aprilia-logo.png";
import bmw from "./images/logo-images/bmw-logo.png";
import cfmoto from  "./images/logo-images/cfmoto-logo.png";
import ducati from "./images/logo-images/ducati-logo.png";
import kawasaki from "./images/logo-images/kawasaki-logo.png";
import ktm from "./images/logo-images/ktm-logo.png";
import honda from "./images/logo-images/honda-logo.png";
import mvagusta from "./images/logo-images/mvagusta-logo.png";
import suzuki from "./images/logo-images/suzuki-logo.png";
import triumph from "./images/logo-images/triumph-logo.png";
import yamaha from "./images/logo-images/yamaha-logo.png";
import rs660 from "./images/bike-images/rs660.png";
import tuonors660 from "./images/bike-images/tuonors660.png";
import rsv4 from "./images/bike-images/rsv4.png";
import tuonov4 from "./images/bike-images/tuonov4.png";
import panigalev2 from "./images/bike-images/panigalev2.png";
import panigalev4 from "./images/bike-images/panigalev4.png";
import panigalev4s from "./images/bike-images/panigalev4s.png";
import panigalev4r from "./images/bike-images/panigalev4r.png";
import cbr600rr from "./images/bike-images/cbr600rr.png";
import cbr1000rr from "./images/bike-images/cbr1000rr.png";
import cbr1000rrr from "./images/bike-images/cbr1000rrr.png";
import gsxr600 from "./images/bike-images/gsxr600.png";
import gsxr750 from "./images/bike-images/gsxr750.png";
import gsxr1000 from "./images/bike-images/gsxr1000.png";
import gsxr1000r from "./images/bike-images/gsxr1000r.png";
import hayabusa from "./images/bike-images/hayabusa.png";

const brands = {
  Aprilia: {
    logo: aprilia,
    models: ["RS660", "Tuono RS660", "RSV4", "Tuono V4"],
  },
  BMW: {
    logo: bmw,
    models: ["S1000RR", "M1000RR"]
  },
  CFMoto: {
    logo: cfmoto,
    models: ["300SS", "450SS", "675SS"]
  },
  Ducati: {
    logo: ducati,
    models: ["Panigale V2", "Panigale V4", "Panigale V4S", "Panigale V4R"]
  },
  Kawasaki: {
    logo: kawasaki,
    models: ["Ninja 500", "ZX4R", "ZX4RR", "ZX6R", "ZX10R", "ZX10RR", "H2R"]
  },
  KTM: {
    logo: ktm,
    models: ["RC 8C", "RC390"]
  },
  Honda: {
    logo: honda,
    models: ["CBR600RR", "CBR1000RR", "CBR1000RRR"]
  },
  "MV Agusta": {
    logo: mvagusta,
    models: ["F3"]
  },
  Suzuki: {
    logo: suzuki,
    models: ["GSX-R600", "GSX-R750", "GSX-R1000", "GSX-R1000R", "Hayabusa"]
  },
  Triumph: {
    logo: triumph,
    models: ["Daytona 650", "Daytona 675r"]
  },
  Yamaha: {
    logo: yamaha,
    models: ["R3", "R6", "R7", "R9", "R1"]
  },
};

const bikeData = {
  RS660: {
    name: "Aprilia RS660",
    topSpeed: "140 mph / 225 km/h",
    horsepower: "100 HP",
    weight: "404 lbs (183 kg)",
    torque: "49 lb-ft (67 Nm)",
    image: rs660
  },
  "Tuono RS660": {
    name: "Aprilia Tuono RS660",
    topSpeed: "140 mph / 225 km/h",
    horsepower: "100 HP",
    weight: "404 lbs (183 kg)",
    torque: "50 lb-ft (68 Nm)",
    image: tuonors660
  },
  RSV4: {
    name: "Aprilia RSV4",
    topSpeed: "186 mph / 299 km/h",
    horsepower: "217 HP",
    weight: "445 lbs (202 kg)",
    torque: "92 lb-ft (125 Nm)",
    image: rsv4
  },
  "Tuono V4": {
    name: "Aprilia Tuono V4",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "175 HP",
    weight: "459 lbs (208 kg)",
    torque: "89 lb-ft (121 Nm)",
    image: tuonov4
  },
  "Panigale V2": {
    name: "Panigale V2",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: panigalev2
  },
  "Panigale V4": {
    name: "Panigale V4",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: panigalev4
  },
  "Panigale V4S": {
    name: "Panigale V4S",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: panigalev4s
  },
  "Panigale V4R": {
    name: "Panigale V4R",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: panigalev4r
  },
  CBR600RR: {
    name: "Honda CBR600RR",
    topSpeed: "160 mph / 289 km/h",
    horsepower: "189 HP",
    weight: "432 lbs (195 kg)",
    torque: "89 lb-ft (121 Nm)",
    image: cbr600rr
  },
  CBR1000RR: {
    name: "Honda CBR1000RR",
    topSpeed: "180 mph / 289 km/h",
    horsepower: "189 HP",
    weight: "432 lbs (195 kg)",
    torque: "89 lb-ft (121 Nm)",
    image: cbr1000rr
  },
  CBR1000RRR: {
    name: "Honda CBR1000RR-R Fireblade SP",
    topSpeed: "186 mph / 289 km/h",
    horsepower: "189 HP",
    weight: "432 lbs (195 kg)",
    torque: "89 lb-ft (121 Nm)",
    image: cbr1000rrr
  },
  "GSX-R600": {
    name: "GSX-R600",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: gsxr600
  },
  "GSX-R750": {
    name: "GSX-R750",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: gsxr750
  },
  "GSX-R1000": {
    name: "GSX-R1000",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: gsxr1000
  },
  "GSX-R1000R": {
    name: "GSX-R1000R",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: gsxr1000r
  },
  Hayabusa: {
    name: "Hayabusa",
    topSpeed: "170 mph / 273 km/h",
    horsepower: "121 HP",
    weight: "419",
    torque: "53 lb-ft (71 Nm)",
    image: hayabusa
  }
};

const Navbar = ({ onSelectBike }) => {
  const [activeBrand, setActiveBrand] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });
  const [selectedBrand, setSelectedBrand] = useState(null); // added
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current && !navRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setActiveBrand(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  

  const handleMouseEnter = (e, brand) => {
    setActiveBrand(brand);
    const rect = e.target.getBoundingClientRect();
  
    const dropdownWidth = 150; // Set this to the actual width of your dropdown in px
  
    const centerLeft = rect.left + rect.width / 2 - dropdownWidth / 2;
  
    setDropdownPosition({
      left: centerLeft + window.scrollX,
      top: rect.bottom + window.scrollY,
    });
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const handleModelClick = (model) => {
    if (bikeData[model]) {
      onSelectBike(bikeData[model]);
    }
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-wrapper">
      <button
      className="back-button"
        onClick={() => {
          setSelectedBrand(null);
          setActiveBrand(null);
          onSelectBike(null);
        }}
        >
        <h1>⬅</h1>
        </button>
        <ul className="nav-list">
          {Object.entries(brands).map(([brand, data]) => (
            <li
              key={brand}
              className={`nav-item ${selectedBrand === brand ? 'active' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(e, brand)}
              onClick={() => handleBrandClick(brand)}
            >
              <img
                src={data.logo}
                alt={`${brand} logo`}
                style={{ width: "20px", height: "20px", marginRight: "8px", verticalAlign: "middle" }}
              />
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {activeBrand && (
        <ul
          className="dropdown"
          style={{
            position: "absolute",
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            zIndex: 2000
          }}
        >
          {brands[activeBrand].models.map((model) => (
            <li key={model} className="dropdown-item" onClick={() => handleModelClick(model)}>
              {model}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
export { brands, bikeData };
