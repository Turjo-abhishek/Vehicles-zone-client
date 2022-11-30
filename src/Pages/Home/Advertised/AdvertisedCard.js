import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const AdvertisedCard = ({ advertise }) => {
    const {vehicle_image, vehicle_name, vehicle_price, vehicle_condition, vehicle_description, vehicle_location, vehicle_status } = advertise;
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover lg:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={vehicle_image}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start w-full">
          <h5 className="text-gray-900 text-xl font-bold mb-1">{vehicle_name}</h5>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center"> 
                <FaDollarSign className="text-orange-500"></FaDollarSign>
                <p className="text-sm font-semibold">{vehicle_price}</p>
            </div>
            <p className="text-sm font-semibold">Condition: {vehicle_condition}</p>
          </div>
          <p className="text-gray-700 text-base mb-4 w-full text-justify">
            {vehicle_description.slice(0,200)}...
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
                <GrLocation className="text-sm font-bold"></GrLocation>
                <p className="text-sm font-bold">{vehicle_location}</p>
            </div>
            <p className="text-sm font-bold">Status: {vehicle_status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
