import React from "react";
import Card from "../Card/card";
import "./CardLayout.css";

const CardLayout = ({ cardsData }) => {
  if (!Array.isArray(cardsData)) {
    return null; // Or render some fallback UI
  }

  return (
    <div className="card-layout">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardLayout;
