import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import "./style.css";

const brands = {
  Aprilia: ["RS660", "Tuono RS660", "RSV4", "Tuono V4"],
  BMW: ["S1000RR", "M1000RR"],
  CFMoto: ["300SS", "450SS", "675SS"],
  Kawasaki: ["Ninja 500", "ZX4R", "ZX4RR", "ZX6R", "ZX10R", "ZX10RR", "H2R"],
  Honda: ["CBR600RR", "CBR1000RR", "Africa Twin"],
  Suzuki: ["GXSR 600"],
  Triumph: ["Daytona 600", "Daytona 650", "Daytona 675"],
  Yamaha: ["R3", "R6", "R7", "R9", "R1"]
};

const Navbar = () => {
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

      {/* Dropdown stays open until a click outside */}
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
            <li key={model} className="dropdown-item">
              {model}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
