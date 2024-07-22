import React, { useState } from "react";
import "./Upload.css";
import Header from "../Header/header";
import { addPost } from "../api-helpers/helpers";
const Upload = () => {
  const [formData, setFormData] = useState({
    images: [{ url: "" }],
    location: "",
    subLocation: "",
    description: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      images: [{ url: value }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data being sent to the server:", formData); // Debug log
    addPost(formData)
      .then((data) => {
        console.log("Post added successfully:", data);
      })
      .catch((err) => console.log(err));
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
        <form className="upload-form" onSubmit={handleSubmit}>
          <div className="left-section">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.images[0].url}
              onChange={handleImageChange}
              required
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
