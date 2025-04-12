import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import "./style.css";
import rs660 from "./images/bike-images/rs660.png";
import tuonors660 from "./images/bike-images/tuonors660.png";
import rsv4 from "./images/bike-images/rsv4.png";
import tuonov4 from "./images/bike-images/tuonov4.png";
import cbr600rr from "./images/bike-images/cbr600rr.png";
import cbr1000rr from "./images/bike-images/cbr1000rr.png";
import cbr1000rrr from "./images/bike-images/cbr1000rrr.png";

const brands = {
  Aprilia: ["RS660", "Tuono RS660", "RSV4", "Tuono V4"],
  BMW: ["S1000RR", "M1000RR"],
  CFMoto: ["300SS", "450SS", "675SS"],
  Ducati: ["V2", "V4", "V4S", "V4R"],
  Kawasaki: ["Ninja 500", "ZX4R", "ZX4RR", "ZX6R", "ZX10R", "ZX10RR", "H2R"],
  KTM: [""],
  Honda: ["CBR600RR", "CBR1000RR", "CBR1000RRR"],
  "MV Agusta": ["F3"],
  Suzuki: ["GXSR 600"],
  Triumph: ["Daytona 600", "Daytona 650", "Daytona 675"],
  Yamaha: ["R3", "R6", "R7", "R9", "R1"]
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
    weight: "403 lbs (183 kg)",
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
};

const Navbar = ({ onSelectBike }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current && !navRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (e, brand) => {
    setOpenDropdown(brand);
    const rect = e.target.getBoundingClientRect();
    setDropdownPosition({ left: rect.left + window.scrollX, top: rect.bottom + window.scrollY });
  };

  const handleModelClick = (model) => {
    if (bikeData[model]) {
      onSelectBike(bikeData[model]); // Send bike stats and image to App.js
    }
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-wrapper">
        <ul className="nav-list">
          {Object.keys(brands).map((brand) => (
            <li
              key={brand}
              className="nav-item"
              onMouseEnter={(e) => handleMouseEnter(e, brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {openDropdown && (
        <ul
          className="dropdown"
          ref={dropdownRef}
          style={{
            position: "absolute",
            left: `${dropdownPosition.left}px`,
            top: `${dropdownPosition.top}px`,
            zIndex: 2000
          }}
        >
          {brands[openDropdown].map((model) => (
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
