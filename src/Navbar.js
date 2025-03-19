import React, { useState } from "react";
import "./navbar.css"; // Import the CSS file
import "./style.css";

const brands = {
  Aprilia: ["RS660", "Tuono RS660", "RSV4", "Tuono V4"],
  BMW: ["S1000RR", "M1000R", "R1250GS"],
  CFMoto: ["300SS", "450SS", "675SS"],
  Kawasaki: ["Ninja 400", "ZX4R", "ZX4RR", "ZX6R", "ZX10R", "ZX10RR", "H2R"],
  Honda: ["CBR600RR", "CBR1000RR", "Africa Twin"],
  Suzuki: ["GXSR-600"],
  Triumph: ["Daytona 600", "Daytona 650", "Daytona 675"],
  Yamaha: ["R3", "R6", "R7", "R9", "R1"]
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {Object.keys(brands).map((brand) => (
          <li
            key={brand}
            className="nav-item"
            onMouseEnter={() => setOpenDropdown(brand)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {brand}
            {openDropdown === brand && (
              <ul className="dropdown">
                {brands[brand].map((model) => (
                  <li key={model} className="dropdown-item">
                    {model}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
