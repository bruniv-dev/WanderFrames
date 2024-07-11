import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({
  classNameheader,
  classNamelogo,
  classNamenav,
  classNamesignin,
}) => {
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", id: "home", path: "/" },
    { name: "Profile", id: "profile", path: "/profile" },
    { name: "Upload", id: "upload", path: "/upload" },
    { name: "Inspirations", id: "inspirations", path: "/inspirations" },
    { name: "Favorites", id: "favorites", path: "/favorites" },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  console.log(activeLink);

  return (
    <div className={`header ${classNameheader}`}>
      <h2 className={`logo ${classNamelogo}`}>BRUNIV</h2>
      <nav className={`nav ${classNamenav}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => handleLinkClick(link.id)}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <button className={`sign-in ${classNamesignin}`}>Sign In</button>
    </div>
  );
};

export default Header;
