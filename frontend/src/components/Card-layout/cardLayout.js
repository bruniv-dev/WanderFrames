import React from "react";
import Card from "../Card/card";
import "./CardLayout.css";

const CardLayout = ({ cardsData, onFavoriteToggle }) => {
  if (!Array.isArray(cardsData)) {
    return null;
  }

  return (
    <div className="card-layout">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          {...card}
          onFavoriteToggle={onFavoriteToggle} // Pass callback to Card
        />
      ))}
    </div>
  );
};

export default CardLayout;
