import React from "react";
import img1 from '../../../Assets/Images/Banner/car1.jpg'
import img2 from '../../../Assets/Images/Banner/car2.png'
import img3 from '../../../Assets/Images/Banner/car3.jpeg'
import img4 from '../../../Assets/Images/Banner/car4.jpg'
import BannerCarousel from "./BannerCarousel";




const bannerItems = [
    {
        image: img1,
        id: 1,
        previous: 4,
        next: 2
    },
    {
        image: img2,
        id: 2,
        previous: 1,
        next: 3
    },
    {
        image: img3,
        id: 3,
        previous: 2,
        next: 4
    },
    {
        image: img4,
        id: 4,
        previous: 3,
        next: 1
    }
]

const Banner = () => {
  return (
    <div className="carousel w-full mb-10">
      {
        bannerItems?.map(slider => <BannerCarousel key={slider?.id} slider={slider}></BannerCarousel>)
      }
    </div>
  );
};

export default Banner;