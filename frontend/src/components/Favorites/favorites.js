// import React, { useState, useEffect } from "react";
// import "./Favorites.css";
// import CardLayout from "../Card-layout/cardLayout";
// import Header from "../Header/header";
// import { fetchFavorites } from "../api-helpers/helpers"; // Import the fetch function

// const Favorites = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const refreshFavorites = async () => {
//     try {
//       setLoading(true); // Start loading
//       const data = await fetchFavorites();
//       setFavorites(data.favorites); // Update state with fetched data
//     } catch (err) {
//       setError("Error fetching favorites. Please try again.");
//       console.log("Error fetching favorites:", err);
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   useEffect(() => {
//     refreshFavorites(); // Fetch favorites on mount
//   }, []);

//   if (loading) {
//     return <div className="favorites-container">Loading...</div>;
//   }

//   if (error) {
//     return <div className="favorites-container">{error}</div>;
//   }

//   return (
//     <>
//       <Header
//         classNameheader="favorites-header"
//         classNamelogo="favorites-logo"
//         classNamenav="favorites-nav"
//         classNamesignin="favorites-signin"
//       />
//       <div className="favorites-container">
//         {favorites.length === 0 ? (
//           <div className="no-favorites-message">No favorites added yet.</div>
//         ) : (
//           <CardLayout
//             cardsData={favorites}
//             onFavoriteToggle={refreshFavorites} // Pass callback to refresh favorites
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default Favorites;
import React, { useState, useEffect } from "react";
import "./Favorites.css";
import CardLayout from "../Card-layout/cardLayout";
import Header from "../Header/header";
import { fetchFavorites, fetchUserDetailsById } from "../api-helpers/helpers"; // Import the fetch function
import Search from "../Search/Search"; // Import the search component

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshFavorites = async () => {
    try {
      setLoading(true); // Start loading
      const data = await fetchFavorites();
      const favoritesList = data.favorites;

      // Fetch user details for each favorite
      const userDetailsPromises = favoritesList.map((favorite) =>
        fetchUserDetailsById(favorite.user)
          .then((user) => ({
            ...favorite,
            userName: user.name || "Unknown", // Set userName to "Unknown" if not available
          }))
          .catch(() => ({
            ...favorite,
            userName: "Unknown", // Default value on error
          }))
      );

      return Promise.all(userDetailsPromises);
    } catch (err) {
      setError("Error fetching favorites. Please try again.");
      console.log("Error fetching favorites:", err);
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    refreshFavorites().then((favoritesWithUserNames) => {
      setFavorites(favoritesWithUserNames);
      setFilteredFavorites(favoritesWithUserNames);
    });
  }, []);

  const handleSearch = (term) => {
    const lowercasedTerm = term.toLowerCase();
    const filtered = favorites.filter((favorite) => {
      const userName = favorite.userName || ""; // Ensure userName exists
      const location = favorite.location || "";
      const subLocation = favorite.subLocation || "";

      return (
        userName.toLowerCase().includes(lowercasedTerm) ||
        location.toLowerCase().includes(lowercasedTerm) ||
        subLocation.toLowerCase().includes(lowercasedTerm)
      );
    });
    setFilteredFavorites(filtered);
  };

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
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by username, location, or sublocation"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <button onClick={() => handleSearch(searchTerm)}>Search</button>
      </div>
      <div className="favorites-container">
        {filteredFavorites.length === 0 ? (
          <div className="no-favorites-message">No favorites added yet.</div>
        ) : (
          <CardLayout
            cardsData={filteredFavorites}
            onFavoriteToggle={refreshFavorites} // Pass callback to refresh favorites
          />
        )}
      </div>
    </>
  );
};

export default Favorites;
