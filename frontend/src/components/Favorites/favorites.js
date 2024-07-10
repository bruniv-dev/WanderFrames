import React from "react";
import Header from "../Header/header";
import Card from "../Card/card";
import "./Favorites.css";

const Favorites = () => {
  return (
    <>
      <Header
        classNameheader="favorites-header"
        classNamelogo="favorites-logo"
        classNamenav="favorites-nav"
      />
      <div className="favorites-container">
        <Card />
      </div>
      ;
    </>
  );
};

export default Favorites;
