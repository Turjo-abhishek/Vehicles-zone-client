import React, { useState } from "react";
import BookingModal from "../Modal/BookingModal";
import { GrLocation } from "react-icons/gr";
import { FaDollarSign } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [productInfo, setProductInfo] = useState(null);
  console.log(productInfo);

  const {
    name,
    image,
    resale_price,
    original_price,
    location,
    years_used,
    condition,
    year_of_purchase,
    time_posted,
    seller_name,
    mobile,
  } = product;
  return (
    <div className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          className="rounded-lg"
          style={{ height: "250px" }}
          alt=""
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title font-bold text-xl w-2/3">{name}</h2>
          <p className="text-end font-semibold text-xs">{condition}</p>
        </div>
        <div className="flex justify-between items-center gap-2 mb-3">
          <div>
            <GrLocation></GrLocation>
            <p className="text-sm">{location}</p>
          </div>
          <p className="text-end">Used: {years_used} years</p>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaDollarSign></FaDollarSign>
              <p className="text-sm font-semibold">{resale_price}</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <span className="text-sm font-semibold">Original</span>
                <FaDollarSign></FaDollarSign>
              </div>
              <p className="text-sm font-semibold">{original_price}</p>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <p className=" text-xs font-bold">Seller: {seller_name}</p>
            <div className="flex flex-col justify-center items-center">
              <p className="text-end text-xs font-bold">Purchased at:</p>
              <p>{year_of_purchase}</p>
            </div>
          </div>
          <p className=" text-xs font-bold">Phone: {mobile}</p>
          <div className="card-actions justify-start mt-5">
            <label
              onClick={() => setProductInfo(product)}
              htmlFor="booking-modal"
              className="btn btn-outline btn-primary text-white"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
      {productInfo && (
        <BookingModal
          setProductInfo={setProductInfo}
          productInfo={productInfo}
        ></BookingModal>
      )}
    </div>
  );
};

export default ProductCard;
