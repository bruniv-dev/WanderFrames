import React, { useState } from "react";
import "./Upload.css";
import Header from "../Header/header";
import { addPost } from "../api-helpers/helpers";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: null,
    location: "",
    subLocation: "",
    description: "",
    date: "",
    locationUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleLocationUrlChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      locationUrl: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", formData.image);
    data.append("location", formData.location);
    data.append("subLocation", formData.subLocation);
    data.append("description", formData.description);
    data.append("date", formData.date);
    data.append("user", localStorage.getItem("userId"));
    if (formData.locationUrl) {
      data.append("locationUrl", formData.locationUrl); // Only append if not empty
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
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
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
            <label htmlFor="locationUrl" className="upload-label">
              Google Maps URL
              <input
                type="url"
                id="locationUrl"
                name="locationUrl"
                value={formData.locationUrl}
                onChange={handleLocationUrlChange}
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
