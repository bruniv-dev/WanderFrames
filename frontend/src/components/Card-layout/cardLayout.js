import Card from "../Card/card";
import "./CardLayout.css";

import React from "react";

const CardLayout = ({ cardData }) => {
  return (
    <div className="card-layout">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardLayout;
