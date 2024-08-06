// // import React, { useEffect, useState } from "react";
// // import Header from "../Header/header.js";
// // import "./Inspirations.css";
// // import CardLayout from "../Card-layout/cardLayout.js";
// // import { getAllPosts } from "../api-helpers/helpers.js";

// // const Inspirations = () => {
// //   const [cardsData, setCardsData] = useState([]);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [userLoggedIn, setUserLoggedIn] = useState(false); // Check if user is logged in

// //   useEffect(() => {
// //     getAllPosts()
// //       .then((data) => setCardsData(data.posts))
// //       .catch((e) => console.log(e));
// //   }, []);

// //   const handleCardClick = (e) => {
// //     e.stopPropagation();
// //     if (!userLoggedIn) {
// //       setIsModalOpen(true);
// //     }
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   const handleSignIn = () => {
// //     // Redirect to sign-in page or open sign-in modal
// //     window.location.href = "/signin"; // Or use another method to handle sign-in
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <>
// //       <Header
// //         classNameheader="inspirations-header"
// //         classNamelogo="inspirations-logo"
// //         classNamenav="inspirations-nav"
// //         classNamesignin="inspirations-signin"
// //       />
// //       <div className="inspirations-container">
// //         <CardLayout
// //           cardsData={cardsData}
// //           onCardClick={handleCardClick} // Pass the card click handler
// //         />
// //       </div>
// //       {isModalOpen && (
// //         <div className="modal-overlay">
// //           <div className="modal-content">
// //             <h2>Please Sign In</h2>
// //             <p>You need to be signed in to add items to your favorites.</p>
// //             <button onClick={handleSignIn}>Sign In</button>
// //             <button onClick={handleCloseModal}>Close</button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Inspirations;

// // import React, { useState, useEffect } from "react";
// // import Header from "../Header/header.js";
// // import "./Inspirations.css";
// // import CardLayout from "../Card-layout/cardLayout.js";
// // import { getAllPosts, fetchUserDetailsById } from "../api-helpers/helpers.js";

// // const Inspirations = () => {
// //   const [cardsData, setCardsData] = useState([]);
// //   const [filteredCards, setFilteredCards] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [userLoggedIn, setUserLoggedIn] = useState(false); // Check if user is logged in

// //   useEffect(() => {
// //     getAllPosts()
// //       .then(async (data) => {
// //         const postsWithUserNames = await Promise.all(
// //           data.posts.map(async (post) => {
// //             try {
// //               const user = await fetchUserDetailsById(post.user);
// //               return {
// //                 ...post,
// //                 userName: user.username || "Unknown",
// //                 lastName: user.lastName || "Unknown",
// //                 firstName: user.firstName || "Unknown", // Set userName to "Unknown" if not available
// //               };
// //             } catch {
// //               return {
// //                 ...post,
// //                 userName: "Unknown", // Default value on error
// //               };
// //             }
// //           })
// //         );
// //         setCardsData(postsWithUserNames);
// //         setFilteredCards(postsWithUserNames); // Set filtered data initially
// //       })
// //       .catch((e) => console.log(e));
// //   }, []);

// //   const handleSearch = (term) => {
// //     const lowercasedTerm = term.toLowerCase();
// //     const filtered = cardsData.filter((card) => {
// //       const userName = card.userName || ""; // Ensure userName exists
// //       const location = card.location || "";
// //       const subLocation = card.subLocation || "";
// //       const firstName = card.firstName || "";
// //       const lastName = card.lastName || "";
// //       return (
// //         userName.toLowerCase().includes(lowercasedTerm) ||
// //         firstName.toLowerCase().includes(lowercasedTerm) ||
// //         lastName.toLowerCase().includes(lowercasedTerm) ||
// //         location.toLowerCase().includes(lowercasedTerm) ||
// //         subLocation.toLowerCase().includes(lowercasedTerm)
// //       );
// //     });
// //     setFilteredCards(filtered);
// //   };

// //   const handleCardClick = (e) => {
// //     e.stopPropagation();
// //     if (!userLoggedIn) {
// //       setIsModalOpen(true);
// //     }
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   const handleSignIn = () => {
// //     // Redirect to sign-in page or open sign-in modal
// //     window.location.href = "/signin"; // Or use another method to handle sign-in
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <>
// //       <Header
// //         classNameheader="inspirations-header"
// //         classNamelogo="inspirations-logo"
// //         classNamenav="inspirations-nav"
// //         classNamesignin="inspirations-signin"
// //       />
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search by username, location, or sublocation"
// //           value={searchTerm}
// //           onChange={(e) => {
// //             setSearchTerm(e.target.value);
// //             handleSearch(e.target.value);
// //           }}
// //         />
// //         <button onClick={() => handleSearch(searchTerm)}>Search</button>
// //       </div>
// //       <div className="inspirations-container">
// //         <CardLayout
// //           cardsData={filteredCards}
// //           onCardClick={handleCardClick} // Pass the card click handler
// //         />
// //       </div>
// //       {isModalOpen && (
// //         <div className="modal-overlay">
// //           <div className="modal-content">
// //             <h2>Please Sign In</h2>
// //             <p>You need to be signed in to add items to your favorites.</p>
// //             <button onClick={handleSignIn}>Sign In</button>
// //             <button onClick={handleCloseModal}>Close</button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Inspirations;

// import React, { useState, useEffect } from "react";
// import Header from "../Header/header.js";
// import "./Inspirations.css";
// import CardLayout from "../Card-layout/cardLayout.js";
// import { getAllPosts, fetchUserDetailsById } from "../api-helpers/helpers.js";

// const Inspirations = () => {
//   const [cardsData, setCardsData] = useState([]);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [userLoggedIn, setUserLoggedIn] = useState(false); // Check if user is logged in
//   const [loggedInUserId, setLoggedInUserId] = useState(null); // Store logged-in user's ID

//   useEffect(() => {
//     // Retrieve the logged-in user's ID from localStorage
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       setLoggedInUserId(userId);
//       setUserLoggedIn(true);
//     }

//     getAllPosts()
//       .then(async (data) => {
//         const postsWithUserNames = await Promise.all(
//           data.posts.map(async (post) => {
//             try {
//               const user = await fetchUserDetailsById(post.user);
//               return {
//                 ...post,
//                 userName: user.username || "Unknown",
//                 lastName: user.lastName || "Unknown",
//                 firstName: user.firstName || "Unknown",
//               };
//             } catch {
//               return {
//                 ...post,
//                 userName: "Unknown",
//                 firstName: "Unknown",
//                 lastName: "Unknown",
//               };
//             }
//           })
//         );

//         // Filter out posts from the logged-in user
//         const filteredPosts = loggedInUserId
//           ? postsWithUserNames.filter((post) => post.user !== loggedInUserId)
//           : postsWithUserNames;
//         setCardsData(filteredPosts);
//         setFilteredCards(filteredPosts);
//       })
//       .catch((e) => console.log(e));
//   }, [loggedInUserId]);

//   const handleSearch = (term) => {
//     const lowercasedTerm = term.toLowerCase();
//     const filtered = cardsData.filter((card) => {
//       const userName = card.userName || "";
//       const location = card.location || "";
//       const subLocation = card.subLocation || "";
//       const firstName = card.firstName || "";
//       const lastName = card.lastName || "";
//       const fullName = `${card.firstName} ${card.lastName}` || "";
//       return (
//         userName.toLowerCase().includes(lowercasedTerm) ||
//         firstName.toLowerCase().includes(lowercasedTerm) ||
//         lastName.toLowerCase().includes(lowercasedTerm) ||
//         location.toLowerCase().includes(lowercasedTerm) ||
//         subLocation.toLowerCase().includes(lowercasedTerm) ||
//         fullName.toLowerCase().includes(lowercasedTerm)
//       );
//     });
//     setFilteredCards(filtered);
//   };

//   const handleCardClick = (e) => {
//     e.stopPropagation();
//     if (!userLoggedIn) {
//       setIsModalOpen(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSignIn = () => {
//     window.location.href = "/signin";
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Header
//         classNameheader="inspirations-header"
//         classNamelogo="inspirations-logo"
//         classNamenav="inspirations-nav"
//         classNamesignin="inspirations-signin"
//       />
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by username, location, or sublocation"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             handleSearch(e.target.value);
//           }}
//         />
//         <button onClick={() => handleSearch(searchTerm)}>Search</button>
//       </div>
//       <div className="inspirations-container">
//         <CardLayout
//           cardsData={filteredCards}
//           onCardClick={handleCardClick} // Pass the card click handler
//         />
//       </div>
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Please Sign In</h2>
//             <p>You need to be signed in to add items to your favorites.</p>
//             <button onClick={handleSignIn}>Sign In</button>
//             <button onClick={handleCloseModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Inspirations;

import React, { useState, useEffect } from "react";
import Header from "../Header/header.js";
import "./Inspirations.css";
import CardLayout from "../Card-layout/cardLayout.js";
import { getAllPosts, fetchUserDetailsById } from "../api-helpers/helpers.js";

const Inspirations = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setLoggedInUserId(userId);
      setUserLoggedIn(true);
    }

    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        const postsWithUserNames = await Promise.all(
          data.posts.map(async (post) => {
            try {
              const user = await fetchUserDetailsById(post.user);
              return {
                ...post,
                userName: user.username || "Unknown",
                lastName: user.lastName || "Unknown",
                firstName: user.firstName || "Unknown",
              };
            } catch {
              return {
                ...post,
                userName: "Unknown",
                firstName: "Unknown",
                lastName: "Unknown",
              };
            }
          })
        );

        // Temporary state to hold posts before filtering
        setCardsData(postsWithUserNames);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // Filter posts whenever cardsData or loggedInUserId changes
    if (cardsData.length > 0) {
      const filteredPosts = loggedInUserId
        ? cardsData.filter((post) => post.user !== loggedInUserId)
        : cardsData;

      setFilteredCards(filteredPosts);
    }
  }, [cardsData, loggedInUserId]);

  const handleSearch = (term) => {
    const lowercasedTerm = term.toLowerCase();
    const filtered = filteredCards.filter((card) => {
      const userName = card.userName || "";
      const location = card.location || "";
      const subLocation = card.subLocation || "";
      const firstName = card.firstName || "";
      const lastName = card.lastName || "";
      const fullName = `${card.firstName} ${card.lastName}` || "";
      return (
        userName.toLowerCase().includes(lowercasedTerm) ||
        firstName.toLowerCase().includes(lowercasedTerm) ||
        lastName.toLowerCase().includes(lowercasedTerm) ||
        location.toLowerCase().includes(lowercasedTerm) ||
        subLocation.toLowerCase().includes(lowercasedTerm) ||
        fullName.toLowerCase().includes(lowercasedTerm)
      );
    });
    setFilteredCards(filtered);
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (!userLoggedIn) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignIn = () => {
    window.location.href = "/signin";
    setIsModalOpen(false);
  };

  return (
    <>
      <Header
        classNameheader="inspirations-header"
        classNamelogo="inspirations-logo"
        classNamenav="inspirations-nav"
        classNamesignin="inspirations-signin"
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
      <div className="inspirations-container">
        <CardLayout cardsData={filteredCards} onCardClick={handleCardClick} />
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Please Sign In</h2>
            <p>You need to be signed in to add items to your favorites.</p>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Inspirations;
