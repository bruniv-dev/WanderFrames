import React from "react";
// import Slider from "react-slick";
import "./Home.css";
import Carousel from "../Carousel/Carousel.js";
import slides from "../data/caraouselData.json";
import Header from "../Header/header.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="heading">WANDER FRAMES</h1>
        <h4 className="sub-heading">
          From your lens to the world: let your adventures inspire.
        </h4>
        <Carousel data={slides.slides} />
        <div className="hero-buttons">
          <Link to="/inspirations" className="btn hero-button-1">
            Explore Inspirations
          </Link>
          <Link to="/upload" className="btn hero-button-2">
            Share Your Journey
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
