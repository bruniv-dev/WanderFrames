import React from "react";
import "./Profile.css";
import Header from "../Header/header.js";
import Card from "../Card/card.js";
const Profile = () => {
  return (
    <>
      <Header
        classNameheader="profile-header"
        classNamelogo="profile-logo"
        classNamenav="profile-nav"
        classNamesignin="profile-signin"
      />
      <div className="profile-container">
        <Card />
      </div>
      ;
    </>
  );
};

export default Profile;
