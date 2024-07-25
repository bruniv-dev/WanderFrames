import React, { useState, useEffect } from "react";
import "./Card.css";
import { MdLocationOn } from "react-icons/md";
import { toggleFavorite } from "../api-helpers/helpers"; // Import the API helper

const Card = ({
  image,
  location,
  subLocation,
  description,
  date,
  _id, // Use _id as postId
  locationUrl,
  onFavoriteToggle, // Callback to notify parent of change
}) => {
  const mainImageUrl = image?.url || "https://placehold.co/600x400";
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(_id));
  }, [_id]);

  const handleFavoriteClick = () => {
    if (_id) {
      toggleFavorite(_id) // Ensure _id is being passed correctly
        .then((data) => {
          console.log("Favorite toggled, new data:", data);
          setIsFavorite(!isFavorite); // Toggle favorite state

          // Update localStorage with the new state
          const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          if (isFavorite) {
            localStorage.setItem(
              "favorites",
              JSON.stringify(favorites.filter((favId) => favId !== _id))
            );
          } else {
            localStorage.setItem(
              "favorites",
              JSON.stringify([...favorites, _id])
            );
          }

          // Notify parent component of the change
          if (onFavoriteToggle) {
            onFavoriteToggle();
          }
        })
        .catch((err) => console.log("Error in toggleFavorite:", err));
    } else {
      console.error("Post ID (_id) is missing");
    }
  };

  return (
    <div className="card-container">
      <img className="main-image" src={mainImageUrl} alt="Main" />
      <div className="card-header">
        <div className="user-info">
          <p className="username">Static Now</p>
          <p className="date">{new Date(date).toLocaleDateString()}</p>
        </div>
        {locationUrl && (
          <a href={locationUrl} target="_blank" rel="noopener noreferrer">
            <MdLocationOn className="location-button" />
          </a>
        )}
        <button
          className={`add-to-favorites ${isFavorite ? "favorite" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "-" : "+"}
        </button>
      </div>
      <div className="card-content">
        <p className="location">{location}</p>
        <p className="sub-location">{subLocation}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
