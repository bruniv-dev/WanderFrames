// import React, { useState } from "react";
// import Card from "../Card/card";
// import "./CardLayout.css";

// const CardLayout = ({
//   cardsData,
//   onFavoriteToggle,
//   onDelete,
//   onAdminDelete,
// }) => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const openModal = (card) => {
//     setSelectedCard(card);
//   };

//   const closeModal = () => {
//     setSelectedCard(null);
//   };

//   if (!cardsData || !Array.isArray(cardsData)) {
//     return <div>No cards available.</div>;
//   }

//   console.log("Cards Data:", cardsData); // Debug log to check data structure

//   return (
//     <div className="card-layout">
//       {cardsData.map((card) => (
//         <Card
//           key={card._id}
//           _id={card._id}
//           userId={card.user}
//           image={card.image}
//           location={card.location}
//           subLocation={card.subLocation}
//           description={card.description}
//           date={card.date}
//           locationUrl={card.locationUrl}
//           onFavoriteToggle={onFavoriteToggle}
//           onDelete={onDelete}
//           onAdminDelete={onAdminDelete ? () => onAdminDelete(card._id) : null}
//           onCardClick={() => openModal(card)}
//         />
//       ))}

//       {selectedCard && (
//         <div className="modal-backdrop" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close-button" onClick={closeModal}>
//               &times;
//             </span>
//             <img
//               className="modal-image"
//               src={selectedCard.image?.url || "https://placehold.co/600x400"}
//               alt="Main"
//             />
//             <h2>Card Details</h2>
//             <p>Location: {selectedCard.location}</p>
//             <p>Sub Location: {selectedCard.subLocation}</p>
//             <p>Description: {selectedCard.description}</p>
//             <p>Date: {new Date(selectedCard.date).toLocaleDateString()}</p>
//             {/* Add more details as needed */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardLayout;

// import React, { useState } from "react";
// import Card from "../Card/card";
// import "./CardLayout.css";

// const CardLayout = ({
//   cardsData,
//   onFavoriteToggle,
//   onDelete,
//   onAdminDelete,
//   isAdmin,
// }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleFavoriteToggle = (cardId, e) => {
//     e.stopPropagation();
//     if (!localStorage.getItem("userId")) {
//       // If user is not logged in, show the popup
//       setShowPopup(true);
//       setSelectedCard(cardId); // Optional: set selected card if needed
//     } else {
//       // Otherwise, proceed with favorite toggle
//       if (onFavoriteToggle) {
//         onFavoriteToggle(cardId);
//       }
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleLoginRedirect = () => {
//     handleClosePopup();
//     // Redirect to login page or perform navigation
//     window.location.href = "/loginSignup";
//   };

//   const openModal = (card) => {
//     setSelectedCard(card);
//   };

//   const closeModal = () => {
//     setSelectedCard(null);
//   };

//   if (!cardsData || !Array.isArray(cardsData)) {
//     return <div>No cards available.</div>;
//   }

//   return (
//     <div className="card-layout">
//       {cardsData.map((card) => (
//         <Card
//           key={card._id}
//           {...card}
//           onFavoriteToggle={() => handleFavoriteToggle(card._id)}
//           onDelete={onDelete}
//           onAdminDelete={onAdminDelete ? () => onAdminDelete(card._id) : null}
//           onCardClick={() => openModal(card)}
//           isAdmin={isAdmin}
//         />
//       ))}

//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <h2>Please login first</h2>
//             <button onClick={handleLoginRedirect} className="btn popup-button">
//               Go to Login
//             </button>
//             <button onClick={handleClosePopup} className="btn popup-button">
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {selectedCard && (
//         <div className="modal-backdrop" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close-button" onClick={closeModal}>
//               &times;
//             </span>
//             <img
//               className="modal-image"
//               src={selectedCard.image?.url || "https://placehold.co/600x400"}
//               alt="Main"
//             />
//             <h2>Card Details</h2>
//             <p>Location: {selectedCard.location}</p>
//             <p>Sub Location: {selectedCard.subLocation}</p>
//             <p>Description: {selectedCard.description}</p>
//             <p>Date: {new Date(selectedCard.date).toLocaleDateString()}</p>
//             {/* Add more details as needed */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardLayout;

//1

// import React from "react";
// import Card from "../Card/card";
// import "./CardLayout.css";

// const CardLayout = ({
//   cardsData,
//   onFavoriteToggle,
//   onDelete,
//   onAdminDelete,
// }) => {
//   if (!cardsData || !Array.isArray(cardsData)) {
//     return <div>No cards available.</div>;
//   }

//   console.log("Cards Data:", cardsData); // Debug log to check data structure

//   return (
//     <div className="card-layout">
//       {cardsData.map((card) => (
//         <Card
//           key={card._id}
//           _id={card._id}
//           userId={card.user}
//           image={card.image}
//           location={card.location}
//           subLocation={card.subLocation}
//           description={card.description}
//           date={card.date}
//           locationUrl={card.locationUrl}
//           onFavoriteToggle={onFavoriteToggle}
//           onDelete={onDelete}
//           onAdminDelete={onAdminDelete ? () => onAdminDelete(card._id) : null}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardLayout;

//2
import React, { useState } from "react";
import Card from "../Card/card";
import "./CardLayout.css";

const CardLayout = ({
  cardsData,
  onFavoriteToggle,
  onDelete,
  onAdminDelete,
}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

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
          onAdminDelete={onAdminDelete ? () => onAdminDelete(card._id) : null}
          onCardClick={() => openModal(card)}
        />
      ))}

      {selectedCard && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img
              className="modal-image"
              src={selectedCard.image?.url || "https://placehold.co/600x400"}
              alt="Main"
            />
            <h2>Card Details</h2>
            <p>Location: {selectedCard.location}</p>
            <p>Sub Location: {selectedCard.subLocation}</p>
            <p>Description: {selectedCard.description}</p>
            <p>Date: {new Date(selectedCard.date).toLocaleDateString()}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardLayout;
