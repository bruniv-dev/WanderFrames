// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import "./EditPost.css";
// // import Header from "../Header/header";
// // import { fetchPostById, updatePost } from "../api-helpers/helpers";

// // const EditPost = () => {
// //   const { postId } = useParams();
// //   const navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     image: null,
// //     location: "",
// //     subLocation: "",
// //     description: "",
// //     date: "",
// //     locationUrl: "",
// //   });

// //   const [post, setPost] = useState(null);

// //   useEffect(() => {
// //     fetchPostById(postId)
// //       .then((data) => {
// //         const post = data.post;
// //         setPost(post);
// //         setFormData({
// //           image: post.image?.url || null,
// //           location: post.location,
// //           subLocation: post.subLocation,
// //           description: post.description,
// //           date: new Date(post.date).toISOString().split("T")[0], // Setting date properly
// //           locationUrl: post.locationUrl || "",
// //         });
// //       })
// //       .catch((err) => console.error("Error fetching post details:", err));
// //   }, [postId]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     updatePost(postId, formData)
// //       .then((response) => {
// //         console.log("Post updated successfully:", response);
// //         navigate("/profile", { state: { refresh: true } });
// //       })
// //       .catch((err) => console.error("Error updating post:", err));
// //   };

// //   return (
// //     <>
// //       <Header
// //         classNameheader="edit-header"
// //         classNamelogo="edit-logo"
// //         classNamenav="edit-nav"
// //         classNamesignin="edit-signin"
// //       />

// //       <div className="edit-container">
// //         {post && (
// //           <form
// //             className="edit-form"
// //             onSubmit={handleSubmit}
// //             encType="multipart/form-data"
// //           >
// //             <div className="left-section">
// //               <label htmlFor="image">Image:</label>

// //               {typeof formData.image === "string" && (
// //                 <img
// //                   src={formData.image}
// //                   alt="Current"
// //                   style={{ width: "100px", height: "100px" }}
// //                 />
// //               )}
// //               <label htmlFor="date" className="edit-label">
// //                 Date
// //                 <input
// //                   type="date"
// //                   id="date"
// //                   name="date"
// //                   value={formData.date}
// //                   className="edit-input"
// //                   required
// //                   disabled
// //                 />
// //               </label>
// //               <label htmlFor="locationUrl" className="edit-label">
// //                 Google Maps URL
// //                 <input
// //                   type="url"
// //                   id="locationUrl"
// //                   name="locationUrl"
// //                   value={formData.locationUrl}
// //                   onChange={handleInputChange}
// //                   className="edit-input"
// //                 />
// //               </label>
// //             </div>
// //             <div className="right-section">
// //               <label htmlFor="location" className="edit-label">
// //                 Location
// //                 <input
// //                   type="text"
// //                   id="location"
// //                   name="location"
// //                   value={formData.location}
// //                   onChange={handleInputChange}
// //                   className="edit-input"
// //                   required
// //                 />
// //               </label>
// //               <label htmlFor="subLocation" className="edit-label">
// //                 Sub-Location
// //                 <input
// //                   type="text"
// //                   id="subLocation"
// //                   name="subLocation"
// //                   value={formData.subLocation}
// //                   onChange={handleInputChange}
// //                   className="edit-input"
// //                   required
// //                 />
// //               </label>
// //               <label htmlFor="description" className="edit-label">
// //                 Description
// //                 <textarea
// //                   id="description"
// //                   name="description"
// //                   value={formData.description}
// //                   onChange={handleInputChange}
// //                   className="edit-input"
// //                   required
// //                 />
// //               </label>
// //             </div>
// //             <button type="submit" className="submit-button">
// //               Update
// //             </button>
// //           </form>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default EditPost;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./EditPost.css";
// import Header from "../Header/header";
// import { fetchPostById, updatePost } from "../api-helpers/helpers";

// const EditPost = () => {
//   const { postId } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     images: [], // Changed from image to images array
//     location: "",
//     subLocation: "",
//     description: "",
//     date: "",
//     locationUrl: "",
//   });

//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     fetchPostById(postId)
//       .then((data) => {
//         const post = data.post;
//         setPost(post);
//         setFormData({
//           images: post.images || [], // Handle multiple images
//           location: post.location,
//           subLocation: post.subLocation,
//           description: post.description,
//           date: new Date(post.date).toISOString().split("T")[0],
//           locationUrl: post.locationUrl || "",
//         });
//       })
//       .catch((err) => console.error("Error fetching post details:", err));
//   }, [postId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => ({
//       url: URL.createObjectURL(file),
//       file,
//     }));
//     setFormData((prevData) => ({
//       ...prevData,
//       images: [...prevData.images, ...newImages],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Prepare form data for submission
//     const updatedPost = {
//       ...formData,
//       images: formData.images.map((img) => img.url), // Handle file uploads accordingly
//     };

//     updatePost(postId, updatedPost)
//       .then((response) => {
//         console.log("Post updated successfully:", response);
//         navigate("/profile", { state: { refresh: true } });
//       })
//       .catch((err) => console.error("Error updating post:", err));
//   };

//   return (
//     <>
//       <Header
//         classNameheader="edit-header"
//         classNamelogo="edit-logo"
//         classNamenav="edit-nav"
//         classNamesignin="edit-signin"
//       />

//       <div className="edit-container">
//         {post && (
//           <form
//             className="edit-form"
//             onSubmit={handleSubmit}
//             encType="multipart/form-data"
//           >
//             <div className="left-section">
//               <label htmlFor="images">Images:</label>

//               <div className="image-preview">
//                 {formData.images.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img.url}
//                     alt={`Preview ${index + 1}`}
//                     style={{ width: "100px", height: "100px" }}
//                   />
//                 ))}
//               </div>
//               <label htmlFor="date" className="edit-label">
//                 Date
//                 <input
//                   type="date"
//                   id="date"
//                   name="date"
//                   value={formData.date}
//                   className="edit-input"
//                   required
//                   disabled
//                 />
//               </label>
//               <label htmlFor="locationUrl" className="edit-label">
//                 Google Maps URL
//                 <input
//                   type="url"
//                   id="locationUrl"
//                   name="locationUrl"
//                   value={formData.locationUrl}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                 />
//               </label>
//             </div>
//             <div className="right-section">
//               <label htmlFor="location" className="edit-label">
//                 Location
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   required
//                 />
//               </label>
//               <label htmlFor="subLocation" className="edit-label">
//                 Sub-Location
//                 <input
//                   type="text"
//                   id="subLocation"
//                   name="subLocation"
//                   value={formData.subLocation}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   required
//                 />
//               </label>
//               <label htmlFor="description" className="edit-label">
//                 Description
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   className="edit-input"
//                   required
//                 />
//               </label>
//             </div>
//             <button type="submit" className="submit-button">
//               Update
//             </button>
//           </form>
//         )}
//       </div>
//     </>
//   );
// };

// export default EditPost;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditPost.css";
import Header from "../Header/header";
import { fetchPostById, updatePost } from "../api-helpers/helpers";

const EditPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.state?.postId; // Retrieve postId from state

  const [formData, setFormData] = useState({
    images: [], // Changed from image to images array
    location: "",
    subLocation: "",
    description: "",
    date: "",
    locationUrl: "",
  });

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!postId) {
      // Handle the case where postId is not present
      console.error("No postId found in state");
      navigate("/error"); // Redirect to an error page or handle as needed
      return;
    }

    fetchPostById(postId)
      .then((data) => {
        const post = data.post;
        setPost(post);
        setFormData({
          images: post.images || [], // Handle multiple images
          location: post.location,
          subLocation: post.subLocation,
          description: post.description,
          date: new Date(post.date).toISOString().split("T")[0],
          locationUrl: post.locationUrl || "",
        });
      })
      .catch((err) => console.error("Error fetching post details:", err));
  }, [postId, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...newImages],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const updatedPost = {
      ...formData,
      images: formData.images.map((img) => img.url), // Handle file uploads accordingly
    };

    updatePost(postId, updatedPost)
      .then((response) => {
        console.log("Post updated successfully:", response);
        navigate("/profile", { state: { refresh: true } });
      })
      .catch((err) => console.error("Error updating post:", err));
  };

  return (
    <>
      <Header
        classNameheader="edit-header"
        classNamelogo="edit-logo"
        classNamenav="edit-nav"
        classNamesignin="edit-signin"
      />

      <div className="edit-container">
        {post && (
          <form
            className="edit-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="left-section">
              <label htmlFor="images">Images:</label>

              <div className="image-preview">
                {formData.images.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={`Preview ${index + 1}`}
                    style={{ width: "100px", height: "100px" }}
                  />
                ))}
                <input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  onChange={handleImageChange}
                />
              </div>
              <label htmlFor="date" className="edit-label">
                Date
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  className="edit-input"
                  required
                  disabled
                />
              </label>
              <label htmlFor="locationUrl" className="edit-label">
                Google Maps URL
                <input
                  type="url"
                  id="locationUrl"
                  name="locationUrl"
                  value={formData.locationUrl}
                  onChange={handleInputChange}
                  className="edit-input"
                />
              </label>
            </div>
            <div className="right-section">
              <label htmlFor="location" className="edit-label">
                Location
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="edit-input"
                  required
                />
              </label>
              <label htmlFor="subLocation" className="edit-label">
                Sub-Location
                <input
                  type="text"
                  id="subLocation"
                  name="subLocation"
                  value={formData.subLocation}
                  onChange={handleInputChange}
                  className="edit-input"
                  required
                />
              </label>
              <label htmlFor="description" className="edit-label">
                Description
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="edit-input"
                  required
                />
              </label>
            </div>
            <button type="submit" className="submit-button">
              Update
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default EditPost;
