// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   getAllUsers,
//   deleteUserById,
//   updateUserIsAdmin,
// } from "../api-helpers/helpers";
// import UserCard from "../UserCard/userCard";
// import "./UserActions.css";
// import Header from "../Header/header";

// const UserActions = () => {
//   const [usersData, setUsersData] = useState([]);
//   const [currentUserIsAdmin, setCurrentUserIsAdmin] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
//     setCurrentUserIsAdmin(storedIsAdmin);

//     if (!storedIsAdmin) {
//       navigate("/unauthorized");
//     } else {
//       getAllUsers()
//         .then((data) => setUsersData(data.users))
//         .catch((e) => console.log(e));
//     }
//   }, [navigate]);

//   const handleAdminDelete = (userId) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       deleteUserById(userId)
//         .then(() => {
//           setUsersData(usersData.filter((user) => user._id !== userId));
//         })
//         .catch((e) => console.log(e));
//     }
//   };

//   const makeAdmin = (userId) => {
//     if (window.confirm("Are you sure you want to make this user an admin?")) {
//       updateUserIsAdmin(userId, true)
//         .then((updatedUser) => {
//           setUsersData(
//             usersData.map((user) =>
//               user._id === userId
//                 ? { ...user, isAdmin: updatedUser.isAdmin }
//                 : user
//             )
//           );
//         })
//         .catch((e) => console.log(e));
//     }
//   };

//   const removeAdmin = (userId) => {
//     if (
//       window.confirm(
//         "Are you sure you want to remove admin privileges from this user?"
//       )
//     ) {
//       updateUserIsAdmin(userId, false)
//         .then((updatedUser) => {
//           setUsersData(
//             usersData.map((user) =>
//               user._id === userId
//                 ? { ...user, isAdmin: updatedUser.isAdmin }
//                 : user
//             )
//           );
//         })
//         .catch((e) => console.log(e));
//     }
//   };

//   return (
//     <>
//       <Header
//         classNameheader="postActions-header"
//         classNamelogo="postActions-logo"
//         classNamenav="postActions-nav"
//         classNamesignin="postActions-signin"
//       />
//       <div className="action-button">
//         <input placeholder="search by username or location"></input>
//         <button>Search</button>
//       </div>
//       <div className="user-actions-container">
//         {usersData.map((user) => (
//           <UserCard
//             key={user._id}
//             userId={user._id}
//             name={user.name}
//             createdAt={user.createdAt}
//             email={user.email}
//             bio={user.bio}
//             profileImage={user.profileImage}
//             isAdmin={user.isAdmin}
//             onAdminDelete={handleAdminDelete}
//             makeAdmin={makeAdmin}
//             removeAdmin={removeAdmin}
//             currentUserIsAdmin={currentUserIsAdmin}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default UserActions;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllUsers,
  deleteUserById,
  updateUserIsAdmin,
} from "../api-helpers/helpers";
import UserCard from "../UserCard/userCard";
import "./UserActions.css";
import Header from "../Header/header";

const UserActions = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUserIsAdmin, setCurrentUserIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
    setCurrentUserIsAdmin(storedIsAdmin);

    if (!storedIsAdmin) {
      navigate("/unauthorized");
    } else {
      getAllUsers()
        .then((data) => {
          setUsersData(data.users);
          setFilteredUsers(data.users); // Initialize filteredUsers with all users
        })
        .catch((e) => console.log(e));
    }
  }, [navigate]);

  useEffect(() => {
    // Filter users based on the search query
    if (searchQuery) {
      setFilteredUsers(
        usersData.filter((user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredUsers(usersData);
    }
  }, [searchQuery, usersData]);

  const handleAdminDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUserById(userId)
        .then(() => {
          setUsersData(usersData.filter((user) => user._id !== userId));
          setFilteredUsers(filteredUsers.filter((user) => user._id !== userId));
        })
        .catch((e) => console.log(e));
    }
  };

  const makeAdmin = (userId) => {
    if (window.confirm("Are you sure you want to make this user an admin?")) {
      updateUserIsAdmin(userId, true)
        .then((updatedUser) => {
          const updatedUsers = usersData.map((user) =>
            user._id === userId
              ? { ...user, isAdmin: updatedUser.isAdmin }
              : user
          );
          setUsersData(updatedUsers);
          setFilteredUsers(
            updatedUsers.filter((user) =>
              user.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
        })
        .catch((e) => console.log(e));
    }
  };

  const removeAdmin = (userId) => {
    if (
      window.confirm(
        "Are you sure you want to remove admin privileges from this user?"
      )
    ) {
      updateUserIsAdmin(userId, false)
        .then((updatedUser) => {
          const updatedUsers = usersData.map((user) =>
            user._id === userId
              ? { ...user, isAdmin: updatedUser.isAdmin }
              : user
          );
          setUsersData(updatedUsers);
          setFilteredUsers(
            updatedUsers.filter((user) =>
              user.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
        })
        .catch((e) => console.log(e));
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header
        classNameheader="postActions-header"
        classNamelogo="postActions-logo"
        classNamenav="postActions-nav"
        classNamesignin="postActions-signin"
      />
      <div className="action-button">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="user-actions-container">
        {filteredUsers.map((user) => (
          <UserCard
            key={user._id}
            userId={user._id}
            name={user.name}
            createdAt={user.createdAt}
            email={user.email}
            bio={user.bio}
            profileImage={user.profileImage}
            isAdmin={user.isAdmin}
            onAdminDelete={handleAdminDelete}
            makeAdmin={makeAdmin}
            removeAdmin={removeAdmin}
            currentUserIsAdmin={currentUserIsAdmin}
          />
        ))}
      </div>
    </>
  );
};

export default UserActions;
