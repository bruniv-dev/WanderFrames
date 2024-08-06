// import React, { useEffect, useState } from "react";
// import Header from "../Header/header.js";
// import "./PostAction.css";
// import CardLayout from "../Card-layout/cardLayout.js";
// import { getAllPosts } from "../api-helpers/helpers.js";

// const PostActions = () => {
//   const [cardsData, setCardsData] = useState([]);

//   useEffect(() => {
//     getAllPosts()
//       .then((data) => setCardsData(data.posts))
//       .catch((e) => console.log(e));
//   }, []);

//   return (
//     <>
//       <Header
//         classNameheader="postActions-header"
//         classNamelogo="postActions-logo"
//         classNamenav="postActions-nav"
//         classNamesignin="postActions-signin"
//       />
//       <div className="postActions-container">
//         <CardLayout cardsData={cardsData} />
//       </div>
//     </>
//   );
// };

// export default PostActions;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/header.js";
// import "./PostAction.css";
// import CardLayout from "../Card-layout/cardLayout.js";
// import { getAllPosts, deletePostById } from "../api-helpers/helpers.js";
// import { useUser } from "../UserContext";

// const PostActions = () => {
//   const [cardsData, setCardsData] = useState([]);
//   const navigate = useNavigate();
//   const user = useUser();

//   useEffect(() => {
//     if (user && !user.isAdmin) {
//       navigate("/unauthorized");
//     } else {
//       getAllPosts()
//         .then((data) => setCardsData(data.posts))
//         .catch((e) => console.log(e));
//     }
//   }, [user, navigate]);

//   const handleDelete = (postId) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       deletePostById(postId)
//         .then(() => {
//           setCardsData(cardsData.filter((post) => post.id !== postId));
//         })
//         .catch((e) => console.log(e));
//     }
//   };

//   return user?.isAdmin ? (
//     <>
//       <Header
//         classNameheader="postActions-header"
//         classNamelogo="postActions-logo"
//         classNamenav="postActions-nav"
//         classNamesignin="postActions-signin"
//       />
//       <div className="postActions-container">
//         <CardLayout cardsData={cardsData} onDelete={handleDelete} />
//       </div>
//     </>
//   ) : null;
// };

// export default PostActions;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/header.js";
// import "./PostAction.css";
// import CardLayout from "../Card-layout/cardLayout.js";
// import { getAllPosts, deletePostById } from "../api-helpers/helpers.js";

// const PostActions = () => {
//   const [cardsData, setCardsData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // const userId = localStorage.getItem("userId");
//     const isAdmin = localStorage.getItem("isAdmin") === "true";
//     console.log(`isAdmin ${isAdmin}`);

//     if (!isAdmin) {
//       navigate("/unauthorized");
//     } else {
//       getAllPosts()
//         .then((data) => setCardsData(data.posts))
//         .catch((e) => console.log(e));
//     }
//   }, [navigate]);

//   const handleDelete = (postId) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       deletePostById(postId)
//         .then(() => {
//           setCardsData(cardsData.filter((post) => post.id !== postId));
//         })
//         .catch((e) => console.log(e));
//     }
//   };

//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   return isAdmin ? (
//     <>
//       <Header
//         classNameheader="postActions-header"
//         classNamelogo="postActions-logo"
//         classNamenav="postActions-nav"
//         classNamesignin="postActions-signin"
//       />
//       <div className="postActions-container">
//         <CardLayout cardsData={cardsData} />
//       </div>
//     </>
//   ) : null;
// };

// export default PostActions;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/header.js";
// import "./PostAction.css";
// import CardLayout from "../Card-layout/cardLayout.js";
// import { getAllPosts, deletePostById } from "../api-helpers/helpers.js";

// const PostActions = () => {
//   const [cardsData, setCardsData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // const userId = localStorage.getItem("userId");
//     const isAdmin = localStorage.getItem("isAdmin") === "true";
//     console.log(`isAdmin ${isAdmin}`);

//     if (!isAdmin) {
//       navigate("/unauthorized");
//     } else {
//       getAllPosts()
//         .then((data) => setCardsData(data.posts))
//         .catch((e) => console.log(e));
//     }
//   }, [navigate]);

//   const handleAdminDelete = (postId) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       deletePostById(postId)
//         .then(() => {
//           setCardsData(cardsData.filter((post) => post._id !== postId));
//         })
//         .catch((e) => console.log(e));
//     }
//   };

//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   return isAdmin ? (
//     <>
//       <Header
//         classNameheader="postActions-header"
//         classNamelogo="postActions-logo"
//         classNamenav="postActions-nav"
//         classNamesignin="postActions-signin"
//       />
//       <div className="postActions-container">
//         <CardLayout cardsData={cardsData} onAdminDelete={handleAdminDelete} />
//       </div>
//     </>
//   ) : null;
// };

// export default PostActions;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/header.js";
// import "./PostAction.css";
// import CardLayout from "../Card-layout/cardLayout.js";
// import {
//   getAllPosts,
//   deletePostById,
//   fetchUserDetailsById,
// } from "../api-helpers/helpers.js";

// const PostActions = () => {
//   const [cardsData, setCardsData] = useState([]);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isAdmin = localStorage.getItem("isAdmin") === "true";
//     console.log(`isAdmin ${isAdmin}`);

//     if (!isAdmin) {
//       navigate("/unauthorized");
//     } else {
//       getAllPosts()
//         .then(async (data) => {
//           const postsWithUserNames = await Promise.all(
//             data.posts.map(async (post) => {
//               try {
//                 const user = await fetchUserDetailsById(post.user);
//                 return {
//                   ...post,
//                   userName: user.name || "Unknown", // Set userName to "Unknown" if not available
//                 };
//               } catch {
//                 return {
//                   ...post,
//                   userName: "Unknown", // Default value on error
//                 };
//               }
//             })
//           );
//           setCardsData(postsWithUserNames);
//           setFilteredCards(postsWithUserNames); // Set filtered data initially
//         })
//         .catch((e) => console.log(e));
//     }
//   }, [navigate]);

//   const handleSearch = (term) => {
//     const lowercasedTerm = term.toLowerCase();
//     const filtered = cardsData.filter((card) => {
//       const userName = card.userName || ""; // Ensure userName exists
//       const location = card.location || "";
//       const subLocation = card.subLocation || "";

//       return (
//         userName.toLowerCase().includes(lowercasedTerm) ||
//         location.toLowerCase().includes(lowercasedTerm) ||
//         subLocation.toLowerCase().includes(lowercasedTerm)
//       );
//     });
//     setFilteredCards(filtered);
//   };

//   const handleAdminDelete = (postId) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       deletePostById(postId)
//         .then(() => {
//           setCardsData(cardsData.filter((post) => post._id !== postId));
//           setFilteredCards(filteredCards.filter((post) => post._id !== postId));
//         })
//         .catch((e) => console.log(e));
//     }
//   };

//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   return isAdmin ? (
//     <>
//       <Header
//         classNameheader="postActions-header"
//         classNamelogo="postActions-logo"
//         classNamenav="postActions-nav"
//         classNamesignin="postActions-signin"
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
//       <div className="postActions-container">
//         <CardLayout
//           cardsData={filteredCards}
//           onAdminDelete={handleAdminDelete} // Pass the card click handler
//         />
//       </div>
//     </>
//   ) : null;
// };

// export default PostActions;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/header.js";
// import "./PostAction.css";
// import CardLayout from "../Card-layout/cardLayout.js";
// import {
//   getAllPosts,
//   deletePostById,
//   fetchUserDetailsById,
// } from "../api-helpers/helpers.js";
// import Search from "../Search/Search.js";

// const PostActions = () => {
//   const [cardsData, setCardsData] = useState([]);
//   const [filteredCards, setFilteredCards] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isAdmin = localStorage.getItem("isAdmin") === "true";
//     console.log(`isAdmin ${isAdmin}`);

//     if (!isAdmin) {
//       navigate("/unauthorized");
//     } else {
//       getAllPosts()
//         .then(async (data) => {
//           const postsWithUserNames = await Promise.all(
//             data.posts.map(async (post) => {
//               try {
//                 const user = await fetchUserDetailsById(post.user);
//                 return {
//                   ...post,
//                   userName: user.username || "Unknown",
//                   lastName: user.lastName || "Unknown",
//                   firstName: user.firstName || "Unknown",
//                 };
//               } catch {
//                 return {
//                   ...post,
//                   userName: "Unknown",
//                   firstName: "Unknown",
//                   lastName: "Unknown",
//                 };
//               }
//             })
//           );
//           setCardsData(postsWithUserNames);
//           setFilteredCards(postsWithUserNames); // Set filtered data initially
//         })
//         .catch((e) => console.log(e));
//     }
//   }, [navigate]);

//   const handleSearch = (term) => {
//     const lowercasedTerm = term.toLowerCase();
//     const filtered = cardsData.filter((card) => {
//       const userName = card.userName || ""; // Ensure userName exists
//       const location = card.location || "";
//       const subLocation = card.subLocation || "";
//       const firstName = card.firstName || "";
//       const lastName = card.lastName || "";
//       const fullName = `${card.firstName} ${card.lastName}` || "";

//       return (
//         userName.toLowerCase().includes(lowercasedTerm) ||
//         location.toLowerCase().includes(lowercasedTerm) ||
//         subLocation.toLowerCase().includes(lowercasedTerm) ||
//         firstName.toLowerCase().includes(lowercasedTerm) ||
//         lastName.toLowerCase().includes(lowercasedTerm) ||
//         fullName.toLowerCase().includes(lowercasedTerm)
//       );
//     });
//     setFilteredCards(filtered);
//   };

//   const handleAdminDelete = (postId) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       deletePostById(postId)
//         .then(() => {
//           setCardsData(cardsData.filter((post) => post._id !== postId));
//           setFilteredCards(filteredCards.filter((post) => post._id !== postId));
//         })
//         .catch((e) => console.log(e));
//     }
//   };

//   const isAdmin = localStorage.getItem("isAdmin") === "true";

//   return isAdmin ? (
//     <>
//       <Header
//         classNameheader="postActions-header"
//         classNamelogo="postActions-logo"
//         classNamenav="postActions-nav"
//         classNamesignin="postActions-signin"
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
//       <div className="postActions-container">
//         <CardLayout
//           cardsData={filteredCards}
//           onAdminDelete={handleAdminDelete}
//           isAdminContext={true} // Pass the isAdminContext prop
//         />
//       </div>
//     </>
//   ) : null;
// };

// export default PostActions;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header.js";
import "./PostAction.css";
import CardLayout from "../Card-layout/cardLayout.js";
import {
  getAllPosts,
  deletePostById,
  fetchUserDetailsById,
} from "../api-helpers/helpers.js";
import Search from "../Search/Search.js";

const PostActions = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (!isAdmin) {
      navigate("/unauthorized");
    } else {
      getAllPosts()
        .then(async (data) => {
          const postsWithUserNames = await Promise.all(
            data.posts.map(async (post) => {
              try {
                const user = await fetchUserDetailsById(post.user);
                return {
                  ...post,
                  userName: user.username || "Unknown",
                  lastName: user.lastName || "Unknown",
                  firstName: user.firstName || "Unknown",
                  role: user.role || "user", // Add role to the post data
                };
              } catch {
                return {
                  ...post,
                  userName: "Unknown",
                  firstName: "Unknown",
                  lastName: "Unknown",
                  role: "user", // Default role
                };
              }
            })
          );
          setCardsData(postsWithUserNames);
          setFilteredCards(postsWithUserNames); // Set filtered data initially
        })
        .catch((e) => console.log(e));
    }
  }, [navigate]);

  const handleSearchAndFilter = () => {
    const lowercasedTerm = searchTerm.toLowerCase();

    const filtered = cardsData.filter((card) => {
      const userName = card.userName || "";
      const location = card.location || "";
      const subLocation = card.subLocation || "";
      const firstName = card.firstName || "";
      const lastName = card.lastName || "";
      const fullName = `${card.firstName} ${card.lastName}` || "";

      const matchesSearchTerm =
        userName.toLowerCase().includes(lowercasedTerm) ||
        location.toLowerCase().includes(lowercasedTerm) ||
        subLocation.toLowerCase().includes(lowercasedTerm) ||
        firstName.toLowerCase().includes(lowercasedTerm) ||
        lastName.toLowerCase().includes(lowercasedTerm) ||
        fullName.toLowerCase().includes(lowercasedTerm);

      const matchesRole =
        roleFilter === "all" ||
        card.role.toLowerCase() === roleFilter.toLowerCase();

      return matchesSearchTerm && matchesRole;
    });

    setFilteredCards(filtered);
  };

  const handleAdminDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePostById(postId)
        .then(() => {
          setCardsData(cardsData.filter((post) => post._id !== postId));
          setFilteredCards(filteredCards.filter((post) => post._id !== postId));
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    handleSearchAndFilter();
  }, [searchTerm, roleFilter, cardsData]);

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? (
    <>
      <Header
        classNameheader="postActions-header"
        classNamelogo="postActions-logo"
        classNamenav="postActions-nav"
        classNamesignin="postActions-signin"
      />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by username, location, or sublocation"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button onClick={() => handleSearchAndFilter()}>Search</button>
      </div>
      <div className="postActions-container">
        <CardLayout
          cardsData={filteredCards}
          onAdminDelete={handleAdminDelete}
          isAdminContext={true}
        />
      </div>
    </>
  ) : null;
};

export default PostActions;
