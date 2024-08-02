import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./userCard.css";

const UserCard = ({
  userId,
  name,
  createdAt,
  email,
  bio,
  profileImage,
  isAdmin,
  onAdminDelete,
}) => {
  return (
    <div className="user-card-container">
      <img
        className="profile-picture"
        src={profileImage || "https://placehold.co/100x100"}
        alt="Profile"
      />
      <div className="user-card-content">
        <p className="userId">{userId}</p>
        <p className="username">{name}</p>
        <p className="joined">
          Joined: {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="email">Email: {email}</p>
        <p className="bio">{bio || "No bio available"}</p>
      </div>
      {isAdmin && (
        <button
          className="admin-delete-button"
          onClick={() => onAdminDelete(userId)}
        >
          <MdDeleteForever /> Delete
        </button>
      )}
    </div>
  );
};

export default UserCard;
