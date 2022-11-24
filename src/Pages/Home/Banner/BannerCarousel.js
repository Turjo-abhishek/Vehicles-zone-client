import React from "react";
import "./BannerCarousel.css";

const BannerCarousel = ({ slider }) => {
  const { image, id, next, previous } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div style={{height: "800px"}} className="img-overlay ">
        <img
          src={image}
          style={{height: "800px"}}
          alt=""
          className="w-full rounded-xl"
        />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-10 top-1/2">
        <a href={`#slide${previous}`} className="btn-ghost text-6xl text-zinc-500">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn-ghost text-6xl text-zinc-500">
          ❯
        </a>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 left-24 lg:left-44 top-1/3">
        <h1 className="text-white font-bold leading-none text-4xl lg:text-6xl">
           Buy your dream car<br /> With Vehicle's <br /> Zone
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 gap-3 w-2/5 left-24 lg:left-44 top-2/4 mt-8">
        <p className="text-white text-xl ">
          Do you wish to buy a car with relatively low budget? These place is for you. Vehicle's Zone provides you with the most attractive cars in affordable prices...
        </p>
      </div>
    </div>
  );
};

export default BannerCarousel;