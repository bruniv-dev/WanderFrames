import React, { useState, useEffect } from "react";
import "./Favorites.css";
import CardLayout from "../Card-layout/cardLayout";
import Header from "../Header/header";
import { fetchFavorites } from "../api-helpers/helpers"; // Import the fetch function

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const refreshFavorites = async () => {
    try {
      const data = await fetchFavorites();
      setFavorites(data.favorites); // Update state with fetched data
    } catch (err) {
      console.log("Error fetching favorites:", err);
    }
  };

  useEffect(() => {
    refreshFavorites(); // Fetch favorites on mount
  }, []);

  return (
    <>
      <Header
        classNameheader="favorites-header"
        classNamelogo="favorites-logo"
        classNamenav="favorites-nav"
        classNamesignin="favorites-signin"
      />
      <div className="favorites-container">
        <CardLayout
          cardsData={favorites}
          onFavoriteToggle={refreshFavorites} // Pass callback to refresh favorites
        />
      </div>
    </>
  );
};

export default Favorites;
