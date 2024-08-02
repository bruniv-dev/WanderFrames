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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header.js";
import "./PostAction.css";
import CardLayout from "../Card-layout/cardLayout.js";
import { getAllPosts, deletePostById } from "../api-helpers/helpers.js";

const PostActions = () => {
  const [cardsData, setCardsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // const userId = localStorage.getItem("userId");
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    console.log(`isAdmin ${isAdmin}`);

    if (!isAdmin) {
      navigate("/unauthorized");
    } else {
      getAllPosts()
        .then((data) => setCardsData(data.posts))
        .catch((e) => console.log(e));
    }
  }, [navigate]);

  const handleAdminDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePostById(postId)
        .then(() => {
          setCardsData(cardsData.filter((post) => post._id !== postId));
        })
        .catch((e) => console.log(e));
    }
  };

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? (
    <>
      <Header
        classNameheader="postActions-header"
        classNamelogo="postActions-logo"
        classNamenav="postActions-nav"
        classNamesignin="postActions-signin"
      />
      <div className="postActions-container">
        <CardLayout cardsData={cardsData} onAdminDelete={handleAdminDelete} />
      </div>
    </>
  ) : null;
};

export default PostActions;
