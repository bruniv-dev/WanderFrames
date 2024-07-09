import React from "react";
// import Slider from "react-slick";
import "./Home.css";
import Carousel from "../Carousel/Carousel.js";
import slides from "../data/caraouselData.json";

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">WANDER FRAMES</h1>
      <h4 className="sub-heading">
        From your lens to the world: let your adventures inspire.
      </h4>
      <Carousel data={slides.slides} />
      <div className="hero-buttons">
        <button className="hero-button-1">Explore Inspirations</button>
        <button className="hero-button-2">Share Your Journey</button>
      </div>
    </div>
  );
};

export default Home;
