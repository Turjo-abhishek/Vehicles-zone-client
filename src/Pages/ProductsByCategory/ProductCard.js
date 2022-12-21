import React, { useState } from "react";
import BookingModal from "../Modal/BookingModal";
import { GrLocation } from "react-icons/gr";
import { FaDollarSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const ProductCard = ({ product }) => {
  const [productInfo, setProductInfo] = useState(null);

  // useEffect( () => {
  //   fetch(`https://vehicles-zone-server.vercel.app/sellers/verified/${product?.seller_email}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // },[product?.seller_email])

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
    verified
  } = product;
  return (
    <div className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          className=" w-full p-4"
          style={{ height: "250px", borderRadius: "30px" }}
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
          <div className="flex justify-between mt-3 mb-2">
            <div className="flex items-center gap-2">
            <p className=" text-xs font-bold">Seller: {seller_name}</p>
            {
              verified? 
              <TiTick className="text-blue-600 text-2xl"></TiTick>
              :
              ""
            }
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-end text-xs font-bold">Purchased at:</p>
              <p className="text-end text-xs">{year_of_purchase}</p>
            </div>
          </div>
          <div className="flex items center">
          <p className=" text-xs font-bold">Phone: {mobile}</p>
          <p className=" text-xs font-bold text-end">Posted: {time_posted}</p>
          </div>
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
