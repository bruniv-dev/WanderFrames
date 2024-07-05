import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", id: "home", path: "/" },
    { name: "Services", id: "services", path: "/services" },
    { name: "About", id: "about", path: "/about" },
    { name: "Contact", id: "contact", path: "/contact" },
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

// import React, { useState } from "react";
// import "./Header.css";

// const Header = () => {
//   const [activeLink, setActiveLink] = useState("home");

//   const navLinks = [
//     { name: "Home", id: "home" },
//     { name: "Services", id: "services" },
//     { name: "About", id: "about" },
//     { name: "Contact", id: "contact" },
//   ];

//   const handleLinkClick = (id) => {
//     setActiveLink(id);
//   };

//   return (
//     <div className="header">
//       <h2 className="logo">BRUNIV</h2>
//       <nav className="nav">
//         {navLinks.map((link) => (
//           <a
//             key={link.id}
//             href={`/${link.name}`}
//             className={activeLink === link.id ? "active" : ""}
//             onClick={() => handleLinkClick(link.id)}
//           >
//             {link.name}
//           </a>
//         ))}
//       </nav>
//       <button className="sign-in">Sign In</button>
//     </div>
//   );
// };

// export default Header;

// //type rafce and enter

// import React from "react";
// import "../styleSheets/Header.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <h2 className="logo">BRUNIV</h2>
//       <nav className="nav">
//         <a href="./">Home</a>
//         <a href="./">Services</a>
//         <a href="./">About</a>
//         <a href="./">Contact</a>
//       </nav>
//       <button className="sign-in">Sign In</button>
//     </div>
//   );
// };

// export default Header;
