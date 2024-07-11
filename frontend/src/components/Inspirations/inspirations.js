import React, { useEffect, useState } from "react";
import Header from "../Header/header.js";
import "./Inspirations.css";
import CardLayout from "../Card-layout/cardLayout.js";
import { getAllPosts } from "../api-helpers/helpers.js";

const Inspirations = () => {
  const [cardsData, setCardsData] = useState();

  useEffect(() => {
    getAllPosts()
      .then((data) => setCardsData(data.posts))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header
        classNameheader="inspirations-header"
        classNamelogo="inspirations-logo"
        classNamenav="inspirations-nav"
        classNamesignin="inspirations-signin"
      />
      <div className="inspirations-container">
        <CardLayout cardsData={cardsData} />
      </div>
    </>
  );
};

export default Inspirations;
