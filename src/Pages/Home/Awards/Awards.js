import React from "react";

const Awards = () => {
  return (
    <div className="hero mb-10 mt-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src="" alt="" className="w-full rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold text-indigo-600 mb-6">About Me</h1>
          <h1 className="text-5xl font-bold leading-tight">
            A graduate in Television, Film and Photography
          </h1>
          <p className="py-6">
            I have done my undergraduate studies from Dhaka University at the
            department of Television, Film and Photography. After graduation, I
            have worked with renowned photographers and have worked on some add
            films. Recently I have covered a lot of wedding shoots and have vast
            experience in portrait also.
          </p>
          <button className="btn btn-outline text-indigo-600">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awards;
