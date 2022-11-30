import React from "react";
import { FaAward, FaCar } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";

const Awards = () => {
  return (
    <div className="hero mb-10 mt-24">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 lg:flex justify-between items-center">
          <div className="flex justify-center items-center flex-col">
            <FaAward className="text-6xl text-orange-500"></FaAward>
            <p className="text-xl font-bold mt-3">Total Awards</p>
            <p className="font-bold my-3 text-4xl">32</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <FaCar className="text-6xl"></FaCar>
            <p className="text-xl font-bold mt-3">Car Sold Per Month</p>
            <p className="font-bold my-3 text-4xl">1200</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <TbSteeringWheel className="text-6xl text-orange-500"></TbSteeringWheel>
            <p className="text-xl font-bold mt-3">Available Brands</p>
            <p className="font-bold my-3 text-4xl">10</p>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold text-indigo-600 mb-6">About Us</h1>
          <h1 className="text-5xl font-bold leading-tight">The Best Provider</h1>
          <p className="py-6"> Everyday we help the people to find their best choices. People with variety of needs find our place the most suitable of all. The result is the awards that we achieved so far.</p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
