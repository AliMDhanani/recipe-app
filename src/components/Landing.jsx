import React from "react";
import FoodGallery from "./FoodGallery";

const Landing = () => {
    const images = [
      "/img/food-gallery/img_1.jpg",
      "/img/food-gallery/img_2.jpg",
      "/img/food-gallery/img_3.jpg",
      "/img/food-gallery/img_4.jpg",
      "/img/food-gallery/img_5.jpg",
      "/img/food-gallery/img_6.jpg",
      "/img/food-gallery/img_7.jpg",
      "/img/food-gallery/img_8.jpg",
      "/img/food-gallery/img_9.jpg",
    ]


  return (
    <div className="section landing">
      <div className="column typography">
        <h1 className="title">What Are We About?</h1>
        <p className="info">
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">
            explore now
        </button>
      </div>
      <div className="column gallery">
        {images.map((src, index) => (
          <FoodGallery imgsrc={src} key={index} pt={"90%"} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
