import React from "react";
import background from "../../Assets/Images/Error/404.png";

const NotFound = () => {
  return (
    // <div className='my-20'>
    //     <img src={background} alt="" />
    // </div>
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={background} alt=""
          className=" rounded-lg "
        />
        <div>
          <h1 className="text-3xl font-semibold text-red-500">Page Not Found!</h1>
          <p className="py-6 text-gray-500">
            The link you are visiting might be broken or not available now. Please try again later or go back to homepage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
