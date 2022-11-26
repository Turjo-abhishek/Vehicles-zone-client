import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../Modal/BookingModal';

const ProductCard = ({product}) => {

    const handleBooking = () => {

    }
    const {name, image, resale_price, original_price, location, years_used, time_posted} = product;
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
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">
                <span className=" text-yellow-400">Price:</span> ${resale_price}
              </p>
            </div>
            <div className="card-actions justify-start">
                <button onClick={handleBooking} className="btn btn-outline btn-primary">
                  Book Now
                </button>
            </div>
          </div>
        </div>
        <BookingModal product={product}></BookingModal>
      </div>
    );
};

export default ProductCard;