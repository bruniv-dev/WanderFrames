import React, { useState, useEffect } from "react";
import "./Card.css";
import { MdLocationOn } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { toggleFavorite, fetchUserDetailsById } from "../api-helpers/helpers"; // Import the API helper

const Card = ({
  image,
  location,
  subLocation,
  description,
  date,
  _id, // Use _id as postId
  userId, // Add userId prop
  locationUrl,
  onFavoriteToggle, // Callback to notify parent of change
}) => {
  const mainImageUrl = image?.url || "https://placehold.co/600x400";
  const [isFavorite, setIsFavorite] = useState(false);
  const [userDetails, setUserDetails] = useState({}); // Initialize as an empty object
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    console.log("Post ID (_id):", _id); // Debug log for _id
    console.log("User ID (userId):", userId); // Debug log for userId

    // Check if the post is a favorite
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(_id));

    const storedUserId = localStorage.getItem("userId");
    console.log("Stored user ID:", storedUserId); // Debug log
    setLoggedInUserId(storedUserId);

    // Fetch user details
    if (userId) {
      fetchUserDetailsById(userId)
        .then((user) => setUserDetails(user))
        .catch((err) => console.error("Error fetching user details:", err));
    }
  }, [_id, userId]);

  const handleFavoriteClick = () => {
    if (_id) {
      toggleFavorite(_id)
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
          <p className="username">{userDetails.name || "Unknown User"}</p>
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
        {loggedInUserId === userId && (
          <>
            <button>
              <MdEdit className="e-d-btn edit-button" />
            </button>
            <button>
              <MdDeleteForever className="e-d-btn delete-button" />
            </button>
          </>
        )}
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
