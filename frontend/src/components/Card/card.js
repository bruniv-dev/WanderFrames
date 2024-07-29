// import React, { useState, useEffect } from "react";
// import { MdLocationOn, MdDeleteForever, MdEdit } from "react-icons/md";
// import {
//   toggleFavorite,
//   fetchUserDetailsById,
//   deletePostById,
// } from "../api-helpers/helpers";

// import "./Card.css";

// const Card = ({
//   image,
//   location,
//   subLocation,
//   description,
//   date,
//   _id,
//   userId,
//   locationUrl,
//   onFavoriteToggle,
//   onDelete,
// }) => {
//   const mainImageUrl = image?.url || "https://placehold.co/600x400";
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   const [loggedInUserId, setLoggedInUserId] = useState(null);

//   useEffect(() => {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setIsFavorite(favorites.includes(_id));

//     const storedUserId = localStorage.getItem("userId");
//     setLoggedInUserId(storedUserId);

//     if (userId) {
//       fetchUserDetailsById(userId)
//         .then((user) => setUserDetails(user))
//         .catch((err) => console.error("Error fetching user details:", err));
//     }
//   }, [_id, userId]);

//   const handleFavoriteClick = () => {
//     if (_id) {
//       toggleFavorite(_id)
//         .then((data) => {
//           setIsFavorite(!isFavorite);
//           const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//           if (isFavorite) {
//             localStorage.setItem(
//               "favorites",
//               JSON.stringify(favorites.filter((favId) => favId !== _id))
//             );
//           } else {
//             localStorage.setItem(
//               "favorites",
//               JSON.stringify([...favorites, _id])
//             );
//           }
//           if (onFavoriteToggle) {
//             onFavoriteToggle();
//           }
//         })
//         .catch((err) => console.log("Error in toggleFavorite:", err));
//     } else {
//       console.error("Post ID (_id) is missing");
//     }
//   };

//   const handleDeleteClick = () => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       deletePostById(_id)
//         .then(() => {
//           if (onDelete) {
//             onDelete(_id); // Notify parent component to refresh the profile
//           }
//         })
//         .catch((err) => console.error("Error deleting post:", err));
//     }
//   };

//   return (
//     <div className="card-container">
//       <img className="main-image" src={mainImageUrl} alt="Main" />
//       <div className="card-header">
//         <div className="user-info">
//           <p className="username">{userDetails.name || "Unknown User"}</p>
//           <p className="date">{new Date(date).toLocaleDateString()}</p>
//         </div>
//         {locationUrl && (
//           <a href={locationUrl} target="_blank" rel="noopener noreferrer">
//             <MdLocationOn className="location-button" />
//           </a>
//         )}
//         <button
//           className={`add-to-favorites ${isFavorite ? "favorite" : ""}`}
//           onClick={handleFavoriteClick}
//         >
//           {isFavorite ? "-" : "+"}
//         </button>
//         {loggedInUserId === userId && (
//           <>
//             <MdEdit className="e-d-btn edit-button" />

//             <MdDeleteForever
//               className="e-d-btn delete-button"
//               onClick={handleDeleteClick}
//             />
//           </>
//         )}
//       </div>
//       <div className="card-content">
//         <p className="location">{location}</p>
//         <p className="sub-location">{subLocation}</p>
//         <p className="description">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useState, useEffect } from "react";
import { MdLocationOn, MdDeleteForever, MdEdit } from "react-icons/md";
import {
  toggleFavorite,
  fetchUserDetailsById,
  deletePostById,
} from "../api-helpers/helpers";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({
  image,
  location,
  subLocation,
  description,
  date,
  _id,
  userId,
  locationUrl,
  onFavoriteToggle,
  onDelete,
}) => {
  const mainImageUrl = image?.url || "https://placehold.co/600x400";
  const [isFavorite, setIsFavorite] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(_id));

    const storedUserId = localStorage.getItem("userId");
    setLoggedInUserId(storedUserId);

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
          setIsFavorite(!isFavorite);
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
          if (onFavoriteToggle) {
            onFavoriteToggle();
          }
        })
        .catch((err) => console.log("Error in toggleFavorite:", err));
    } else {
      console.error("Post ID (_id) is missing");
    }
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePostById(_id)
        .then(() => {
          if (onDelete) {
            onDelete(_id); // Notify parent component to refresh the profile
          }
        })
        .catch((err) => console.error("Error deleting post:", err));
    }
  };

  const handleEditClick = () => {
    navigate(`/editPost/${_id}`);
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
            <MdEdit className="e-d-btn edit-button" onClick={handleEditClick} />

            <MdDeleteForever
              className="e-d-btn delete-button"
              onClick={handleDeleteClick}
            />
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
