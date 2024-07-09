import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", id: "home", path: "/" },
    { name: "Inspirations", id: "inspirations", path: "/inspirations" },
    { name: "Favorites", id: "favorites", path: "/favorites" },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  console.log(activeLink);

  return (
    <div className="header">
      <h2 className="logo">BRUNIV</h2>
      <nav className="nav">
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
      <button className="sign-in">Sign In</button>
    </div>
  );
};

export default Header;
