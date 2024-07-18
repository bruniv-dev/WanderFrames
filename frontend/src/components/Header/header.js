import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import SignIn from "../SignIn/signIn.js";

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

  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/signin");
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
      <button className="sign-in" onClick={handleSignInClick}>
        Sign In
      </button>
    </div>
  );
};

export default Header;
