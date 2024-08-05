// // // // import React, { useState } from "react";
// // // // import "./Upload.css";
// // // // import Header from "../Header/header";
// // // // import { addPost } from "../api-helpers/helpers";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Upload = () => {
// // // //   const navigate = useNavigate();

// // // //   const [formData, setFormData] = useState({
// // // //     image: null,
// // // //     location: "",
// // // //     subLocation: "",
// // // //     description: "",
// // // //     date: "",
// // // //     locationUrl: "",
// // // //   });

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// // // //   };

// // // //   const handleImageChange = (e) => {
// // // //     setFormData((prevState) => ({
// // // //       ...prevState,
// // // //       image: e.target.files[0],
// // // //     }));
// // // //   };

// // // //   const handleLocationUrlChange = (e) => {
// // // //     setFormData((prevState) => ({
// // // //       ...prevState,
// // // //       locationUrl: e.target.value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     const data = new FormData();
// // // //     data.append("image", formData.image);
// // // //     data.append("location", formData.location);
// // // //     data.append("subLocation", formData.subLocation);
// // // //     data.append("description", formData.description);
// // // //     data.append("date", formData.date);
// // // //     data.append("user", localStorage.getItem("userId"));
// // // //     if (formData.locationUrl) {
// // // //       data.append("locationUrl", formData.locationUrl); // Only append if not empty
// // // //     }

// // // //     addPost(data)
// // // //       .then((response) => {
// // // //         console.log("Post added successfully:", response);
// // // //         navigate("/profile");
// // // //       })
// // // //       .catch((err) => console.error("Error adding post:", err));
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Header
// // // //         classNameheader="upload-header"
// // // //         classNamelogo="upload-logo"
// // // //         classNamenav="upload-nav"
// // // //         classNamesignin="upload-signin"
// // // //       />

// // // //       <div className="upload-container">
// // // //         <form
// // // //           className="upload-form"
// // // //           onSubmit={handleSubmit}
// // // //           encType="multipart/form-data"
// // // //         >
// // // //           <div className="left-section">
// // // //             <label htmlFor="image">Image:</label>
// // // //             <input
// // // //               type="file"
// // // //               id="image"
// // // //               name="image"
// // // //               onChange={handleImageChange}
// // // //               required
// // // //             />
// // // //             <label htmlFor="date" className="upload-label">
// // // //               Date
// // // //               <input
// // // //                 type="date"
// // // //                 id="date"
// // // //                 name="date"
// // // //                 value={formData.date}
// // // //                 onChange={handleInputChange}
// // // //                 className="upload-input"
// // // //                 required
// // // //               />
// // // //             </label>
// // // //             <label htmlFor="locationUrl" className="upload-label">
// // // //               Google Maps URL
// // // //               <input
// // // //                 type="url"
// // // //                 id="locationUrl"
// // // //                 name="locationUrl"
// // // //                 value={formData.locationUrl}
// // // //                 onChange={handleLocationUrlChange}
// // // //                 className="upload-input"
// // // //               />
// // // //             </label>
// // // //           </div>
// // // //           <div className="right-section">
// // // //             <label htmlFor="location" className="upload-label">
// // // //               Location
// // // //               <input
// // // //                 type="text"
// // // //                 id="location"
// // // //                 name="location"
// // // //                 value={formData.location}
// // // //                 onChange={handleInputChange}
// // // //                 className="upload-input"
// // // //                 required
// // // //               />
// // // //             </label>
// // // //             <label htmlFor="subLocation" className="upload-label">
// // // //               Sub-Location
// // // //               <input
// // // //                 type="text"
// // // //                 id="subLocation"
// // // //                 name="subLocation"
// // // //                 value={formData.subLocation}
// // // //                 onChange={handleInputChange}
// // // //                 className="upload-input"
// // // //                 required
// // // //               />
// // // //             </label>
// // // //             <label htmlFor="description" className="upload-label">
// // // //               Description
// // // //               <textarea
// // // //                 id="description"
// // // //                 name="description"
// // // //                 value={formData.description}
// // // //                 onChange={handleInputChange}
// // // //                 className="upload-input"
// // // //                 required
// // // //               />
// // // //             </label>
// // // //           </div>
// // // //           <button type="submit" className="submit-button">
// // // //             Add
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Upload;
// // // import React, { useState } from "react";
// // // import "./Upload.css";
// // // import Header from "../Header/header";
// // // import { addPost } from "../api-helpers/helpers";
// // // import { useNavigate } from "react-router-dom";

// // // const Upload = () => {
// // //   const navigate = useNavigate();

// // //   // Update state to handle multiple images
// // //   const [formData, setFormData] = useState({
// // //     images: [], // Change to an array for multiple images
// // //     location: "",
// // //     subLocation: "",
// // //     description: "",
// // //     date: "",
// // //     locationUrl: "",
// // //   });

// // //   // Handle text input changes
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// // //   };

// // //   // Handle multiple image file changes
// // //   const handleImageChange = (e) => {
// // //     const files = Array.from(e.target.files);
// // //     if (files.length + formData.images.length <= 3) {
// // //       setFormData((prevState) => ({
// // //         ...prevState,
// // //         images: [...prevState.images, ...files], // Append new files
// // //       }));
// // //     }
// // //   };

// // //   // Handle location URL changes
// // //   const handleLocationUrlChange = (e) => {
// // //     setFormData((prevState) => ({
// // //       ...prevState,
// // //       locationUrl: e.target.value,
// // //     }));
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const data = new FormData();
// // //     formData.images.forEach((file) => {
// // //       data.append("images", file); // Append each file
// // //     });
// // //     data.append("location", formData.location);
// // //     data.append("subLocation", formData.subLocation);
// // //     data.append("description", formData.description);
// // //     data.append("date", formData.date);
// // //     data.append("user", localStorage.getItem("userId"));
// // //     if (formData.locationUrl) {
// // //       data.append("locationUrl", formData.locationUrl); // Only append if not empty
// // //     }

// // //     addPost(data)
// // //       .then((response) => {
// // //         console.log("Post added successfully:", response);
// // //         navigate("/profile");
// // //       })
// // //       .catch((err) => console.error("Error adding post:", err));
// // //   };

// // //   return (
// // //     <>
// // //       <Header
// // //         classNameheader="upload-header"
// // //         classNamelogo="upload-logo"
// // //         classNamenav="upload-nav"
// // //         classNamesignin="upload-signin"
// // //       />

// // //       <div className="upload-container">
// // //         <form
// // //           className="upload-form"
// // //           onSubmit={handleSubmit}
// // //           encType="multipart/form-data"
// // //         >
// // //           <div className="left-section">
// // //             <label htmlFor="images">Images (Add up to 3):</label>
// // //             <input
// // //               type="file"
// // //               id="images"
// // //               name="images"
// // //               onChange={handleImageChange}
// // //               multiple // Allow multiple files
// // //               disabled={formData.images.length >= 3} // Disable if 3 files are selected
// // //               required={formData.images.length === 0} // Require at least one image
// // //             />
// // //             <label htmlFor="date" className="upload-label">
// // //               Date
// // //               <input
// // //                 type="date"
// // //                 id="date"
// // //                 name="date"
// // //                 value={formData.date}
// // //                 onChange={handleInputChange}
// // //                 className="upload-input"
// // //                 required
// // //               />
// // //             </label>
// // //             <label htmlFor="locationUrl" className="upload-label">
// // //               Google Maps URL
// // //               <input
// // //                 type="url"
// // //                 id="locationUrl"
// // //                 name="locationUrl"
// // //                 value={formData.locationUrl}
// // //                 onChange={handleLocationUrlChange}
// // //                 className="upload-input"
// // //               />
// // //             </label>
// // //           </div>
// // //           <div className="right-section">
// // //             <label htmlFor="location" className="upload-label">
// // //               Location
// // //               <input
// // //                 type="text"
// // //                 id="location"
// // //                 name="location"
// // //                 value={formData.location}
// // //                 onChange={handleInputChange}
// // //                 className="upload-input"
// // //                 required
// // //               />
// // //             </label>
// // //             <label htmlFor="subLocation" className="upload-label">
// // //               Sub-Location
// // //               <input
// // //                 type="text"
// // //                 id="subLocation"
// // //                 name="subLocation"
// // //                 value={formData.subLocation}
// // //                 onChange={handleInputChange}
// // //                 className="upload-input"
// // //                 required
// // //               />
// // //             </label>
// // //             <label htmlFor="description" className="upload-label">
// // //               Description
// // //               <textarea
// // //                 id="description"
// // //                 name="description"
// // //                 value={formData.description}
// // //                 onChange={handleInputChange}
// // //                 className="upload-input"
// // //                 required
// // //               />
// // //             </label>
// // //           </div>
// // //           <button type="submit" className="submit-button">
// // //             Add
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Upload;

// // import React, { useState } from "react";
// // import "./Upload.css";
// // import Header from "../Header/header";
// // import { addPost } from "../api-helpers/helpers";
// // import { useNavigate } from "react-router-dom";

// // const Upload = () => {
// //   const navigate = useNavigate();

// //   // Update state to handle multiple images
// //   const [formData, setFormData] = useState({
// //     images: [], // Change to an array for multiple images
// //     location: "",
// //     subLocation: "",
// //     description: "",
// //     date: "",
// //     locationUrl: "",
// //   });

// //   // Handle text input changes
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   // Handle multiple image file changes
// //   const handleImageChange = (e) => {
// //     const selectedFiles = Array.from(e.target.files);
// //     if (formData.images.length + selectedFiles.length <= 3) {
// //       setFormData((prevState) => ({
// //         ...prevState,
// //         images: [...prevState.images, ...selectedFiles],
// //       }));
// //     } else {
// //       alert("You can only upload up to 3 images.");
// //     }
// //   };

// //   // Handle location URL changes
// //   const handleLocationUrlChange = (e) => {
// //     setFormData((prevState) => ({
// //       ...prevState,
// //       locationUrl: e.target.value,
// //     }));
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const data = new FormData();
// //     formData.images.forEach((file, index) => {
// //       data.append("images", file); // Append each file
// //     });
// //     data.append("location", formData.location);
// //     data.append("subLocation", formData.subLocation);
// //     data.append("description", formData.description);
// //     data.append("date", formData.date);
// //     data.append("user", localStorage.getItem("userId"));
// //     if (formData.locationUrl) {
// //       data.append("locationUrl", formData.locationUrl); // Only append if not empty
// //     }

// //     addPost(data)
// //       .then((response) => {
// //         console.log("Post added successfully:", response);
// //         navigate("/profile");
// //       })
// //       .catch((err) => console.error("Error adding post:", err));
// //   };

// //   return (
// //     <>
// //       <Header
// //         classNameheader="upload-header"
// //         classNamelogo="upload-logo"
// //         classNamenav="upload-nav"
// //         classNamesignin="upload-signin"
// //       />

// //       <div className="upload-container">
// //         <form
// //           className="upload-form"
// //           onSubmit={handleSubmit}
// //           encType="multipart/form-data"
// //         >
// //           <div className="left-section">
// //             <label htmlFor="images">Images (up to 3):</label>
// //             <input
// //               type="file"
// //               id="images"
// //               name="images"
// //               onChange={handleImageChange}
// //               multiple // Allow multiple files
// //               required
// //               disabled={formData.images.length >= 3} // Disable if 3 or more images are selected
// //             />
// //             <label htmlFor="date" className="upload-label">
// //               Date
// //               <input
// //                 type="date"
// //                 id="date"
// //                 name="date"
// //                 value={formData.date}
// //                 onChange={handleInputChange}
// //                 className="upload-input"
// //                 required
// //               />
// //             </label>
// //             <label htmlFor="locationUrl" className="upload-label">
// //               Google Maps URL
// //               <input
// //                 type="url"
// //                 id="locationUrl"
// //                 name="locationUrl"
// //                 value={formData.locationUrl}
// //                 onChange={handleLocationUrlChange}
// //                 className="upload-input"
// //               />
// //             </label>
// //           </div>
// //           <div className="right-section">
// //             <label htmlFor="location" className="upload-label">
// //               Location
// //               <input
// //                 type="text"
// //                 id="location"
// //                 name="location"
// //                 value={formData.location}
// //                 onChange={handleInputChange}
// //                 className="upload-input"
// //                 required
// //               />
// //             </label>
// //             <label htmlFor="subLocation" className="upload-label">
// //               Sub-Location
// //               <input
// //                 type="text"
// //                 id="subLocation"
// //                 name="subLocation"
// //                 value={formData.subLocation}
// //                 onChange={handleInputChange}
// //                 className="upload-input"
// //                 required
// //               />
// //             </label>
// //             <label htmlFor="description" className="upload-label">
// //               Description
// //               <textarea
// //                 id="description"
// //                 name="description"
// //                 value={formData.description}
// //                 onChange={handleInputChange}
// //                 className="upload-input"
// //                 required
// //               />
// //             </label>
// //           </div>
// //           <button type="submit" className="submit-button">
// //             Add
// //           </button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // };

// // export default Upload;

// import React, { useState, useRef } from "react";
// import "./Upload.css";
// import Header from "../Header/header";
// import { addPost } from "../api-helpers/helpers";
// import { useNavigate } from "react-router-dom";

// const Upload = () => {
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null); // Reference to the file input

//   // Update state to handle multiple images
//   const [formData, setFormData] = useState({
//     images: [], // Change to an array for multiple images
//     location: "",
//     subLocation: "",
//     description: "",
//     date: "",
//     locationUrl: "",
//   });

//   // Get current date in yyyy-mm-dd format
//   const today = new Date().toISOString().split("T")[0];

//   // Handle text input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle multiple image file changes with image limit
//   const handleImageChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const totalImagesCount = formData.images.length + selectedFiles.length;

//     if (totalImagesCount > 3) {
//       alert("You can select up to 3 images.");
//       e.target.value = ""; // Clear the file input
//       return;
//     }

//     // Update state with selected images
//     setFormData((prevData) => ({
//       ...prevData,
//       images: [...prevData.images, ...selectedFiles],
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     formData.images.forEach((file) => {
//       data.append("images", file); // Append each file
//     });
//     data.append("location", formData.location);
//     data.append("subLocation", formData.subLocation);
//     data.append("description", formData.description);
//     data.append("date", formData.date);
//     data.append("user", localStorage.getItem("userId"));
//     if (formData.locationUrl) {
//       data.append("locationUrl", formData.locationUrl); // Only append if not empty
//     }

//     addPost(data)
//       .then((response) => {
//         console.log("Post added successfully:", response);
//         navigate("/profile");
//       })
//       .catch((err) => console.error("Error adding post:", err));
//   };

//   return (
//     <>
//       <Header
//         classNameheader="upload-header"
//         classNamelogo="upload-logo"
//         classNamenav="upload-nav"
//         classNamesignin="upload-signin"
//       />

//       <div className="upload-container">
//         <form
//           className="upload-form"
//           onSubmit={handleSubmit}
//           encType="multipart/form-data"
//         >
//           <div className="left-section">
//             <label htmlFor="images">Images (up to 3):</label>
//             <input
//               type="file"
//               id="images"
//               name="images"
//               onChange={handleImageChange}
//               multiple // Allow multiple files
//               ref={fileInputRef} // Attach the ref
//             />
//             <label htmlFor="date" className="upload-label">
//               Date
//               <input
//                 type="date"
//                 id="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleInputChange}
//                 className="upload-input"
//                 required
//                 max={today} // Restrict future dates
//               />
//             </label>
//             <label htmlFor="locationUrl" className="upload-label">
//               Google Maps URL
//               <input
//                 type="url"
//                 id="locationUrl"
//                 name="locationUrl"
//                 value={formData.locationUrl}
//                 onChange={handleInputChange}
//                 className="upload-input"
//               />
//             </label>
//           </div>
//           <div className="right-section">
//             <label htmlFor="location" className="upload-label">
//               Location
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="upload-input"
//                 required
//               />
//             </label>
//             <label htmlFor="subLocation" className="upload-label">
//               Sub-Location
//               <input
//                 type="text"
//                 id="subLocation"
//                 name="subLocation"
//                 value={formData.subLocation}
//                 onChange={handleInputChange}
//                 className="upload-input"
//                 required
//               />
//             </label>
//             <label htmlFor="description" className="upload-label">
//               Description
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 className="upload-input"
//                 required
//               />
//             </label>
//           </div>
//           <button type="submit" className="submit-button">
//             Add
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Upload;

import React, { useState, useRef } from "react";
import "./Upload.css";
import Header from "../Header/header";
import { addPost } from "../api-helpers/helpers";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    images: [],
    location: "",
    subLocation: "",
    description: "",
    date: "",
    locationUrl: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    const totalImagesCount = formData.images.length + selectedFiles.length;

    if (totalImagesCount > 3) {
      alert("You can select up to 3 images.");
      e.target.value = "";
      return;
    }

    const compressedFiles = await Promise.all(
      selectedFiles.map((file) =>
        imageCompression(file, {
          maxSizeMB: 1, // Maximum size in MB
          maxWidthOrHeight: 800, // Maximum width or height
          useWebWorker: true, // Use web worker for performance
        })
      )
    );

    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...compressedFiles],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    formData.images.forEach((file) => {
      data.append("images", file);
    });
    data.append("location", formData.location);
    data.append("subLocation", formData.subLocation);
    data.append("description", formData.description);
    data.append("date", formData.date);
    data.append("user", localStorage.getItem("userId"));
    if (formData.locationUrl) {
      data.append("locationUrl", formData.locationUrl);
    }

    addPost(data)
      .then((response) => {
        console.log("Post added successfully:", response);
        navigate("/profile");
      })
      .catch((err) => console.error("Error adding post:", err));
  };

  return (
    <>
      <Header
        classNameheader="upload-header"
        classNamelogo="upload-logo"
        classNamenav="upload-nav"
        classNamesignin="upload-signin"
      />

      <div className="upload-container">
        <form
          className="upload-form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="left-section">
            <label htmlFor="images">Images (up to 3):</label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleImageChange}
              multiple
              ref={fileInputRef}
            />
            <label htmlFor="date" className="upload-label">
              Date
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="upload-input"
                required
                max={today}
              />
            </label>
            <label htmlFor="locationUrl" className="upload-label">
              Google Maps URL
              <input
                type="url"
                id="locationUrl"
                name="locationUrl"
                value={formData.locationUrl}
                onChange={handleInputChange}
                className="upload-input"
              />
            </label>
          </div>
          <div className="right-section">
            <label htmlFor="location" className="upload-label">
              Location
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="upload-input"
                required
              />
            </label>
            <label htmlFor="subLocation" className="upload-label">
              Sub-Location
              <input
                type="text"
                id="subLocation"
                name="subLocation"
                value={formData.subLocation}
                onChange={handleInputChange}
                className="upload-input"
                required
              />
            </label>
            <label htmlFor="description" className="upload-label">
              Description
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="upload-input"
                required
              />
            </label>
          </div>
          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;
