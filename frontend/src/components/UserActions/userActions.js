import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, deleteUserById } from "../api-helpers/helpers";
import UserCard from "../UserCard/userCard";
import "./UserActions.css";
import Header from "../Header/header";

const UserActions = () => {
  const [usersData, setUsersData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // Assume a way to determine if user is admin
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(storedIsAdmin);

    if (!storedIsAdmin) {
      navigate("/unauthorized");
    } else {
      getAllUsers()
        .then((data) => setUsersData(data.users))
        .catch((e) => console.log(e));
    }
  }, [navigate]);

  const handleAdminDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUserById(userId)
        .then(() => {
          setUsersData(usersData.filter((user) => user._id !== userId));
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <>
      <Header
        classNameheader="postActions-header"
        classNamelogo="postActions-logo"
        classNamenav="postActions-nav"
        classNamesignin="postActions-signin"
      />
      <div className="user-actions-container">
        {usersData.map((user) => (
          <UserCard
            key={user._id}
            userId={user._id}
            name={user.name}
            createdAt={user.createdAt}
            email={user.email}
            bio={user.bio}
            profileImage={user.profileImage}
            isAdmin={isAdmin}
            onAdminDelete={handleAdminDelete}
          />
        ))}
      </div>
    </>
  );
};

export default UserActions;
