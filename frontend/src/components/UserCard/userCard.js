// // import React from "react";
// import { useNavigate } from "react-router-dom";
// import { MdDeleteForever } from "react-icons/md";
// import "./userCard.css";

// const UserCard = ({
//   userId,
//   name,
//   createdAt,
//   email,
//   bio,
//   profileImage,
//   isAdmin,
//   onAdminDelete,
//   role,
//   makeAdmin,
//   removeAdmin,
// }) => {
//   const navigate = useNavigate();

//   const handleUsernameClick = () => {
//     navigate(`/userProfile/${userId}`);
//   };

//   return (
//     <div className="user-card-container">
//       <img
//         className="profile-picture"
//         src={profileImage || "https://placehold.co/100x100"}
//         alt="Profile"
//       />
//       <div className="user-card-content">
//         <p className="userId">{userId}</p>
//         <p
//           className="username"
//           onClick={handleUsernameClick}
//           style={{ cursor: "pointer", color: "blue" }}
//         >
//           {name}
//         </p>
//         <p
//           className="role"
//           style={{ color: role === "admin" ? "red" : "black" }}
//         >
//           Role: {role}
//         </p>
//         <p className="joined">
//           Joined: {new Date(createdAt).toLocaleDateString()}
//         </p>
//         <p className="email">Email: {email}</p>
//         <p className="bio">{bio || "No bio available"}</p>
//       </div>
//       {isAdmin && (
//         <>
//           <button
//             className="admin-delete-button"
//             onClick={() => onAdminDelete(userId)}
//           >
//             <MdDeleteForever /> Delete
//           </button>
//           {role === "admin" ? (
//             <button
//               className="remove-admin-button"
//               onClick={() => removeAdmin(userId)}
//             >
//               Remove Admin
//             </button>
//           ) : (
//             <button
//               className="make-admin-button"
//               onClick={() => makeAdmin(userId)}
//             >
//               Make Admin
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default UserCard;
import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import "./userCard.css";

const UserCard = ({
  userId,
  username,
  lastName,
  firstName,
  createdAt,
  email,
  bio,
  profileImage,
  isAdmin,
  onAdminDelete,
  makeAdmin,
  removeAdmin,
  currentUserIsAdmin,
}) => {
  const navigate = useNavigate();

  const handleUsernameClick = () => {
    navigate(`/userProfile/${userId}`);
  };

  return (
    <div className="user-card-container">
      <img
        className="profile-picture"
        src={profileImage || "https://placehold.co/100x100"}
        alt="Profile"
      />
      <div className="user-card-content">
        <p className="userId">{userId}</p>
        <p
          className="username"
          onClick={handleUsernameClick}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {username}
        </p>
        <p className="name">{`${firstName} ${lastName}`}</p>
        <p className="role" style={{ color: isAdmin ? "red" : "black" }}>
          Role: {isAdmin ? "Admin" : "User"}
        </p>
        <p className="joined">
          Joined: {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="email">Email: {email}</p>
        <p className="bio">{bio || "No bio available"}</p>
      </div>
      <button
        className="admin-delete-button"
        onClick={() => onAdminDelete(userId)}
      >
        <MdDeleteForever /> Delete
      </button>
      {currentUserIsAdmin && !isAdmin && (
        <button className="make-admin-button" onClick={() => makeAdmin(userId)}>
          Make Admin
        </button>
      )}
      {currentUserIsAdmin && isAdmin && (
        <button
          className="remove-admin-button"
          onClick={() => removeAdmin(userId)}
        >
          Remove Admin
        </button>
      )}
    </div>
  );
};

export default UserCard;
