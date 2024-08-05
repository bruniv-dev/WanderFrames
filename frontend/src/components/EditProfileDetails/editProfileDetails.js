// // import React, { useState } from "react";
// // import { updateUserProfile } from "../api-helpers/helpers"; // Import the helper function
// // import "./EditProfileDetails.css";
// // import { useNavigate } from "react-router-dom";

// // const EditProfileDetails = ({ user, onClose, onUpdate }) => {
// //   const [username, setUserName] = useState(user.username);
// //   const [firstName, setFirstName] = useState(user.firstName);
// //   const [lastName, setLastName] = useState(user.lastName);
// //   const [bio, setBio] = useState(
// //     user.bio || "Hi, I'm excited to share my travel diaries."
// //   );
// //   const [profileImage, setProfileImage] = useState(null);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate(); // To navigate after update

// //   const handleImageChange = (e) => {
// //     setProfileImage(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const userId = localStorage.getItem("userId");
// //       if (!userId) {
// //         throw new Error("User not authenticated");
// //       }

// //       const formData = new FormData();
// //       formData.append("username", username);
// //       formData.append("firstName", firstName);
// //       formData.append("lastName", lastName);
// //       formData.append("bio", bio);
// //       if (profileImage) {
// //         formData.append("profileImage", profileImage);
// //       }
// //       console.log(formData);
// //       const response = await updateUserProfile(userId, formData); // Call the helper function
// //       console.log("Profile updated successfully:", response);
// //       onUpdate(response.user); // Update the profile data in the parent component
// //       navigate("/profile", { state: { refresh: true } }); // Navigate to the profile page with a refresh flag
// //     } catch (err) {
// //       console.error("Error updating user profile:", err);
// //       setError("Failed to update profile.");
// //     }
// //   };

// //   return (
// //     <div className="edit-profile-modal">
// //       <div className="edit-profile-backdrop" onClick={onClose}></div>
// //       <div className="edit-profile-content">
// //         <h2>Edit Profile</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Username</label>
// //             <input
// //               type="text"
// //               value={username}
// //               onChange={(e) => setUserName(e.target.value)}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <div className="first-last">
// //               <div>
// //                 <label htmlFor="firstName">First Name:</label>
// //                 <input
// //                   name="firstName"
// //                   value={firstName}
// //                   onChange={(e) => setFirstName(e.target.value)}
// //                   type="text"
// //                   id="firstName"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="lastName">Last Name:</label>
// //                 <input
// //                   name="lastName"
// //                   value={lastName}
// //                   onChange={(e) => setLastName(e.target.value)}
// //                   type="text"
// //                   id="lastName"
// //                   required
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //           <div className="form-group">
// //             <label>Bio</label>
// //             <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
// //           </div>
// //           <div className="form-group">
// //             <label>Profile Image</label>
// //             <input type="file" onChange={handleImageChange} />
// //           </div>
// //           {error && <p className="error-message">{error}</p>}
// //           <button type="submit">Save</button>
// //           <button type="button" onClick={onClose}>
// //             Cancel
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditProfileDetails;
// import React, { useState } from "react";
// import {
//   updateUserProfile,
//   checkUsernameAvailability,
// } from "../api-helpers/helpers";
// import "./EditProfileDetails.css";
// import { useNavigate } from "react-router-dom";

// const EditProfileDetails = ({ user, onClose, onUpdate }) => {
//   const [username, setUserName] = useState(user.username);
//   const [firstName, setFirstName] = useState(user.firstName);
//   const [lastName, setLastName] = useState(user.lastName);
//   const [bio, setBio] = useState(
//     user.bio || "Hi, I'm excited to share my travel diaries."
//   );
//   const [profileImage, setProfileImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [usernameError, setUsernameError] = useState("");
//   const [loading, setLoading] = useState(false); // Added loading state
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     setProfileImage(e.target.files[0]);
//   };

//   const handleUsernameBlur = async () => {
//     if (username) {
//       try {
//         const isAvailable = await checkUsernameAvailability(username);
//         if (!isAvailable) {
//           setUsernameError("Username is already taken.");
//         } else {
//           setUsernameError("");
//         }
//       } catch (err) {
//         setUsernameError("Error checking username availability.");
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (usernameError) {
//       setError("Username Already Taken.");
//       return;
//     }

//     setLoading(true); // Start loading state

//     try {
//       const userId = localStorage.getItem("userId");
//       if (!userId) {
//         throw new Error("User not authenticated");
//       }

//       const formData = new FormData();
//       formData.append("username", username);
//       formData.append("firstName", firstName);
//       formData.append("lastName", lastName);
//       formData.append("bio", bio);
//       if (profileImage) {
//         formData.append("profileImage", profileImage);
//       }

//       const response = await updateUserProfile(userId, formData);
//       onUpdate(response.user);
//       navigate("/profile", { state: { refresh: true } });
//     } catch (err) {
//       console.error("Error updating user profile:", err);
//       setError("Failed to update profile.");
//     } finally {
//       setLoading(false); // End loading state
//     }
//   };

//   return (
//     <div className="edit-profile-modal">
//       <div className="edit-profile-backdrop" onClick={onClose}></div>
//       <div className="edit-profile-content">
//         <h2>Edit Profile</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUserName(e.target.value)}
//               onBlur={handleUsernameBlur} // Validate on blur
//             />
//             {usernameError && (
//               <p className="username-error-message">{usernameError}</p>
//             )}
//           </div>
//           <div className="form-group">
//             <div className="first-last">
//               <div>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input
//                   name="firstName"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   type="text"
//                   id="firstName"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                   name="lastName"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   type="text"
//                   id="lastName"
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Bio</label>
//             <textarea
//               value={bio}
//               onChange={(e) => setBio(e.target.value)}
//               placeholder="Write a little about yourself..."
//             />
//           </div>
//           <div className="form-group">
//             <label>Profile Image</label>
//             <input type="file" accept="image/*" onChange={handleImageChange} />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           <button type="submit" disabled={loading}>
//             {loading ? "Saving..." : "Save"}
//           </button>
//           <button type="button" onClick={onClose}>
//             Cancel
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfileDetails;

import React, { useState, useEffect } from "react";
import {
  updateUserProfile,
  checkUsernameAvailability,
} from "../api-helpers/helpers";
import "./EditProfileDetails.css";
import { useNavigate } from "react-router-dom";

const EditProfileDetails = ({ user, onClose, onUpdate }) => {
  const [username, setUserName] = useState(user.username);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [bio, setBio] = useState(
    user.bio || "Hi, I'm excited to share my travel diaries."
  );
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const [usernameStatus, setUsernameStatus] = useState(""); // New state for username status
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  useEffect(() => {
    const checkAvailability = async () => {
      if (username) {
        try {
          const isAvailable = await checkUsernameAvailability(username);
          if (isAvailable) {
            setUsernameStatus("Username is available.");
          } else {
            setUsernameStatus("Username is already taken.");
          }
        } catch (err) {
          setUsernameStatus("Error checking username availability.");
        }
      } else {
        setUsernameStatus("");
      }
    };

    const debounce = setTimeout(checkAvailability, 300); // Debounce to avoid too many requests

    return () => clearTimeout(debounce); // Cleanup the timeout on unmount or when username changes
  }, [username]);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usernameStatus === "Username is already taken.") {
      setError("Username already taken.");
      return;
    }

    setLoading(true); // Start loading state

    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User not authenticated");
      }

      const formData = new FormData();
      formData.append("username", username);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("bio", bio);
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await updateUserProfile(userId, formData);
      onUpdate(response.user);
      navigate("/profile", { state: { refresh: true } });
    } catch (err) {
      console.error("Error updating user profile:", err);
      setError("Failed to update profile.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-backdrop" onClick={onClose}></div>
      <div className="edit-profile-content">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              // Optionally add `onBlur` for additional checks
            />
            <p
              className={`username-status-message ${
                usernameStatus.includes("available") ? "available" : ""
              } ${usernameStatus.includes("taken") ? "taken" : ""}
              `}
            >
              {usernameStatus}
            </p>
          </div>
          <div className="form-group">
            <div className="first-last">
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="firstName"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="lastName"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write a little about yourself..."
            />
          </div>
          <div className="form-group">
            <label>Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileDetails;
