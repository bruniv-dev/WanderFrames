import React, { useState, useEffect } from "react";
import {
  fetchUserProfile,
  fetchUserPosts,
  deleteUserAccount,
} from "../api-helpers/helpers";
import CardLayout from "../Card-layout/cardLayout";
import "./Profile.css";
import Header from "../Header/header";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store"; // Import your auth actions

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch

  const fetchUserDetails = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User not authenticated");
      }
      const userData = await fetchUserProfile(userId);
      console.log("Fetched user data:", userData);
      setUser(userData.user);
      const userPosts = await fetchUserPosts(userId);
      console.log("Fetched user posts:", userPosts);
      setPosts(userPosts);
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
  }, [location.state?.refresh]);

  const handlePostDelete = async (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    await fetchUserDetails(); // Re-fetch user details to ensure updated data
  };

  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          throw new Error("User not authenticated");
        }
        await deleteUserAccount(userId);
        localStorage.removeItem("userId"); // Clear userId from local storage
        dispatch(authActions.logout()); // Dispatch logout action
        navigate("/loginSignup"); // Redirect to login page
      } catch (err) {
        console.error("Error deleting user profile:", err);
        setError("Failed to delete profile.");
      }
    }
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
              <p>
                Bio: {user.bio || "Hi, I'm excited to share my travel diaries."}
              </p>
              <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
              <button onClick={handleDeleteProfile} className="delete-button">
                Delete Profile
              </button>{" "}
              {/* Delete button */}
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
            <p>No posts available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
