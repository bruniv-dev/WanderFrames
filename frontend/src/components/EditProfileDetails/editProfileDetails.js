import React, { useState } from "react";
import { updateUserProfile } from "../api-helpers/helpers"; // Import the helper function
import "./EditProfileDetails.css";
import { useNavigate } from "react-router-dom";

const EditProfileDetails = ({ user, onClose, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(
    user.bio || "Hi, I'm excited to share my travel diaries."
  );
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To navigate after update

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User not authenticated");
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("bio", bio);
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await updateUserProfile(userId, formData); // Call the helper function
      console.log("Profile updated successfully:", response);
      onUpdate(response.user); // Update the profile data in the parent component
      navigate("/profile", { state: { refresh: true } }); // Navigate to the profile page with a refresh flag
    } catch (err) {
      console.error("Error updating user profile:", err);
      setError("Failed to update profile.");
    }
  };

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-backdrop" onClick={onClose}></div>
      <div className="edit-profile-content">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Profile Image</label>
            <input type="file" onChange={handleImageChange} />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileDetails;
