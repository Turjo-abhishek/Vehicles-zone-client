import React from "react";
import {
  SiBmw,
  SiFord,
  SiHonda,
  SiHyundai,
  SiMercedes,
  SiMitsubishi,
  SiNissan,
  SiSuzuki,
  SiToyota,
} from "react-icons/si";

const Brands = () => {
  return (
      <div className="my-16">
        <h1 className="text-2xl text-center font-bold mb-4 text-orange-500">Available Car Brands</h1>
        <p className="text-4xl font-semibold w-2/3 text-center mx-auto  mb-16">Everyday We help the world's leading brands to create new vehicles</p>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 my-10 ">
            <div className="flex justify-center flex-col items-center gap-4">
              <SiHyundai className="text-6xl text-sky-600"></SiHyundai>
              <p className="text-md font-bold">Hyundai</p>
            </div>
            <div className="flex justify-center flex-col items-center gap-4">
              <SiToyota className="text-6xl text-yellow-400"></SiToyota>
              <p className="text-md font-bold">Toyota</p>
            </div>
          <div className="flex justify-center flex-col items-center gap-4">
            <SiHonda className="text-6xl text-orange-600"></SiHonda>
            <p className="text-md font-bold">Honda</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-4">
            <SiNissan className="text-6xl"></SiNissan>
            <p className="text-md font-bold">Nissan</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-4">
            <SiBmw className="text-6xl text-indigo-600"></SiBmw>
            <p className="text-md font-bold">BMW</p>
          </div>
        </div>
      </div>
  );
};

export default Brands;
