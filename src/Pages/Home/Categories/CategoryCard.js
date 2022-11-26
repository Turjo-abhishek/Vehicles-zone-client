import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const {img, title, category_id} = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <Link to={`/categories/${category_id}`}><h2 className="flex items-center justify-center text-3xl">{title}</h2></Link>
      </div>
    </div>
  );
};

export default CategoryCard;
