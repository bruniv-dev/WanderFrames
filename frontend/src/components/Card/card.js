import React from "react";
import "./Card.css";
import { MdLocationOn } from "react-icons/md";

const Card = ({ images, location, subLocation, description, date, id }) => {
  // Assuming you want to display the first image from the images array as the main image
  const mainImageUrl =
    images.length > 0 ? images[0].url : "https://placehold.co/600x400";

  return (
    <div className="card-container">
      <img className="main-image" src={mainImageUrl} alt="Main" />
      <div className="card-header">
        <div className="user-info">
          <p className="username">Static Now</p>
          <p className="date">{new Date(`${date}`).toLocaleDateString()}</p>
        </div>
        <MdLocationOn className="location-button" />
        <button className="add-to-favorites">+</button>
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
