import React from "react";
import "./Carousel.css";
import { VscArrowCircleLeft, VscArrowCircleRight } from "react-icons/vsc";

const Carousel = ({ data }) => {
  return (
    <div className="carousel">
      <VscArrowCircleLeft className="arrow left-arrow" />
      {data.map((item, id) => (
        <img src={item.src} alt={item.alt} key={id} />
      ))}
      <VscArrowCircleRight className="arrow right-arrow" />
      <span className="slider-buttons">
        {data.map((_, id) => {
          return (
            <button className="slider-button" key={id} onClick={null}></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
