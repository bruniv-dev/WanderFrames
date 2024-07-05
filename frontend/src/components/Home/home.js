import React from "react";
// import Slider from "react-slick";
import "./Home.css";
import Carousel from "../Carousel/Carousel.js";
import slides from "../data/caraouselData.json";

const Home = () => {
  return (
    <div className="slider-container">
      <Carousel data={slides.slides} />
    </div>
  );
};

export default Home;
