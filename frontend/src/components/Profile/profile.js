import React, { useState, useEffect } from "react";
import { fetchUserProfile, fetchUserPosts } from "../api-helpers/helpers";
import CardLayout from "../Card-layout/cardLayout";
import "./Profile.css";
import Header from "../Header/header";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User not authenticated");
      }
      const userData = await fetchUserProfile(userId);
      setUser(userData.user);
      const userPosts = await fetchUserPosts(userId);
      setPosts(userPosts);
      console.log(posts);
    } catch (err) {
      console.error("Error fetching user details or posts:", err);
      setError(
        err.response?.data?.message || "Failed to fetch user details or posts"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handlePostDelete = async (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    await fetchUserDetails(); // Re-fetch user details to ensure updated data
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <>
      <Header
        classNameheader="profile-header"
        classNamelogo="profile-logo"
        classNamenav="profile-nav"
        classNamesignin="profile-signin"
      />
      <div className="profile-container">
        <h1>Profile</h1>
        {user ? (
          <div className="profile-details">
            <div className="profile-image">
              <img src={user.profileImage} alt="Profile" />
            </div>
            <div className="profile-info">
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ) : (
          <p>No user data available</p>
        )}
        <div className="posts-section">
          <h2>Your Posts</h2>
          {posts.length > 0 ? (
            <CardLayout cardsData={posts} onDelete={handlePostDelete} />
          ) : (
            <p>No posts yet</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
