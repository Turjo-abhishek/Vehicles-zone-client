import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { img, title, category_id } = category;
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="w-96 h-64">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={img}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/80"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <Link to={`/categories/${category_id}`}><h2 className="font-dmserif text-3xl font-bold text-white">{title}</h2></Link>
          </div>
        </div>
  );
};

export default CategoryCard;
