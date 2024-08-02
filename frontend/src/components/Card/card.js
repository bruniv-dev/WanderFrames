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

//1
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
//   isAdmin, // Add a prop to determine if the user is an admin
//   onAdminDelete, // Add a prop to handle admin delete action
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
//         .then(() => {
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
//           setIsFavorite(!isFavorite);
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
//             onDelete(_id); // Notify parent component to refresh the list
//           }
//         })
//         .catch((err) => console.error("Error deleting post:", err));
//     }
//   };

//   const handleAdminDeleteClick = () => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       if (onAdminDelete) {
//         onAdminDelete(_id); // Notify parent component to refresh the list
//       }
//     }
//   };

//   return (
//     <div className="card-container">
//       <img className="main-image" src={mainImageUrl} alt="Main" />
//       <div className="card-header">
//         <img className="profile-image-card" src={userDetails.profileImage} />
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
//         {(loggedInUserId === userId || isAdmin) && (
//           <MdDeleteForever
//             className="delete-button"
//             onClick={handleDeleteClick}
//           />
//         )}
//         {loggedInUserId === userId && <MdEdit className="edit-button" />}
//         {onAdminDelete && (
//           <button className="delete-button" onClick={onAdminDelete}>
//             Delete
//           </button>
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

// //2
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
//   isAdmin,
//   onAdminDelete,
//   onCardClick,
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
//         .then(() => {
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
//           setIsFavorite(!isFavorite);
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
//             onDelete(_id); // Notify parent component to refresh the list
//           }
//         })
//         .catch((err) => console.error("Error deleting post:", err));
//     }
//   };

//   const handleAdminDeleteClick = () => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       if (onAdminDelete) {
//         onAdminDelete(_id); // Notify parent component to refresh the list
//       }
//     }
//   };

//   return (
//     <div className="card-container" onClick={onCardClick}>
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
//         {(loggedInUserId === userId || isAdmin) && (
//           <MdDeleteForever
//             className="delete-button"
//             onClick={handleDeleteClick}
//           />
//         )}
//         {loggedInUserId === userId && <MdEdit className="edit-button" />}
//         {onAdminDelete && (
//           <button className="delete-button" onClick={onAdminDelete}>
//             Delete
//           </button>
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
import "./Card.css";
import { useNavigate } from "react-router-dom";

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
  isAdmin,
  onAdminDelete,
  onCardClick,
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

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent event propagation to the card container
    if (_id) {
      toggleFavorite(_id)
        .then(() => {
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
          setIsFavorite(!isFavorite);
          if (onFavoriteToggle) {
            onFavoriteToggle();
          }
        })
        .catch((err) => console.log("Error in toggleFavorite:", err));
    } else {
      console.error("Post ID (_id) is missing");
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent event propagation to the card container
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePostById(_id)
        .then(() => {
          if (onDelete) {
            onDelete(_id); // Notify parent component to refresh the list
          }
        })
        .catch((err) => console.error("Error deleting post:", err));
    }
  };

  const handleAdminDeleteClick = (e) => {
    e.stopPropagation(); // Prevent event propagation to the card container
    if (window.confirm("Are you sure you want to delete this post?")) {
      if (onAdminDelete) {
        onAdminDelete(_id); // Notify parent component to refresh the list
      }
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevent event propagation to the card container
    navigate(`/editPost/${_id}`); // Navigate to the edit post page with the post ID
  };

  return (
    <div className="card-container" onClick={onCardClick}>
      <img className="main-image" src={mainImageUrl} alt="Main" />
      <div className="card-header">
        <img
          className="profile-image-card"
          src={userDetails.profileImage}
          alt="profilepic"
        />
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
        {(loggedInUserId === userId || isAdmin) && (
          <MdDeleteForever
            className="delete-button"
            onClick={handleDeleteClick}
          />
        )}
        {loggedInUserId === userId && (
          <MdEdit className="edit-button" onClick={handleEditClick} />
        )}
        {onAdminDelete && (
          <button className="delete-button" onClick={handleAdminDeleteClick}>
            Delete
          </button>
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
