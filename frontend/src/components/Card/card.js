import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img
          className="profile-image"
          src="/Images/slider-images/image-5.jpg"
          alt="Profile"
        />
        <div className="user-info">
          <p className="username">Username</p>
          <p className="date">Date</p>
        </div>

        <button className="addtofavorites">+</button>
      </div>
      <div className="card-content">
        <img
          className="main-image"
          src="/Images/slider-images/image-13.jpg"
          alt="Main"
        />
        <p className="location">Location</p>
        <p className="title">Title</p>
        <p className="description">
          Description nlnhlvishndv lheglovishdgiv lsihgvorsi ksrgoshfg fkeuuuu
          kjbglebg dkbgfslhdglsjbv kbjdgfsbdgs d skbgsbg
        </p>
      </div>
    </div>
  );
};

export default Card;
