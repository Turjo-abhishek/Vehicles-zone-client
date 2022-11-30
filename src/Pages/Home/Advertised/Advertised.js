import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedCard from "./AdvertisedCard";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Loader from "../../../Loader/Loader";

const Advertised = () => {
  const { data: advertises, isLoading } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/advertises", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`
          }
        });
        const data = res.json();
        return data;
      } catch (error) {}
    },
  });

  if(isLoading){
    return <Loader></Loader>
  }
  return (
    <div className="mb-10">
      <h2 className="text-2xl text-center font-bold mb-4 text-orange-500">
        Advertised Vehicles
      </h2>
      <p className="text-4xl font-semibold w-2/3 text-center mx-auto  mb-16">
        Hurry Up! before stock runs out.
      </p>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
          {advertises?.map((advertise) => (
            <SwiperSlide>
              <AdvertisedCard
                key={advertise?._id}
                advertise={advertise}
              ></AdvertisedCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Advertised;
