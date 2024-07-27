import React from "react";
import Card from "../Card/card";
import "./CardLayout.css";

const CardLayout = ({ cardsData, onFavoriteToggle, onDelete }) => {
  if (!cardsData || !Array.isArray(cardsData)) {
    return <div>No cards available.</div>;
  }

  console.log("Cards Data:", cardsData); // Debug log to check data structure

  return (
    <div className="card-layout">
      {cardsData.map((card) => (
        <Card
          key={card._id}
          _id={card._id}
          userId={card.user}
          image={card.image}
          location={card.location}
          subLocation={card.subLocation}
          description={card.description}
          date={card.date}
          locationUrl={card.locationUrl}
          onFavoriteToggle={onFavoriteToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CardLayout;
