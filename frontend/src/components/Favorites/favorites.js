// import React, { useState, useEffect } from "react";
// import "./Favorites.css";
// import CardLayout from "../Card-layout/cardLayout";
// import Header from "../Header/header";
// import { fetchFavorites } from "../api-helpers/helpers"; // Import the fetch function

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);

//   const refreshFavorites = async () => {
//     try {
//       const data = await fetchFavorites();
//       setFavorites(data.favorites); // Update state with fetched data
//     } catch (err) {
//       console.log("Error fetching favorites:", err);
//     }
//   };

//   useEffect(() => {
//     refreshFavorites(); // Fetch favorites on mount
//   }, []);

//   return (
//     <>
//       <Header
//         classNameheader="favorites-header"
//         classNamelogo="favorites-logo"
//         classNamenav="favorites-nav"
//         classNamesignin="favorites-signin"
//       />
//       <div className="favorites-container">
//         <CardLayout
//           cardsData={favorites}
//           onFavoriteToggle={refreshFavorites} // Pass callback to refresh favorites
//         />
//       </div>
//     </>
//   );
// };

// export default Favorites;

import React, { useState, useEffect } from "react";
import "./Favorites.css";
import CardLayout from "../Card-layout/cardLayout";
import Header from "../Header/header";
import { fetchFavorites } from "../api-helpers/helpers"; // Import the fetch function

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshFavorites = async () => {
    try {
      setLoading(true); // Start loading
      const data = await fetchFavorites();
      setFavorites(data.favorites); // Update state with fetched data
    } catch (err) {
      setError("Error fetching favorites. Please try again.");
      console.log("Error fetching favorites:", err);
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    refreshFavorites(); // Fetch favorites on mount
  }, []);

  if (loading) {
    return <div className="favorites-container">Loading...</div>;
  }

  if (error) {
    return <div className="favorites-container">{error}</div>;
  }

  return (
    <>
      <Header
        classNameheader="favorites-header"
        classNamelogo="favorites-logo"
        classNamenav="favorites-nav"
        classNamesignin="favorites-signin"
      />
      <div className="favorites-container">
        {favorites.length === 0 ? (
          <div className="no-favorites-message">No favorites added yet.</div>
        ) : (
          <CardLayout
            cardsData={favorites}
            onFavoriteToggle={refreshFavorites} // Pass callback to refresh favorites
          />
        )}
      </div>
    </>
  );
};

export default Favorites;
