import React from "react";
import Card from "../Card/card";
import "./CardLayout.css";

const CardLayout = ({ cardsData, onFavoriteToggle }) => {
  if (!cardsData || !Array.isArray(cardsData)) {
    return <div>No cards available.</div>;
  }

  return (
    <div className="card-layout">
      {cardsData.map((card) => (
        <Card key={card._id} {...card} onFavoriteToggle={onFavoriteToggle} />
      ))}
    </div>
  );
};

export default CardLayout;
