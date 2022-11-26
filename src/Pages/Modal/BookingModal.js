import React from "react";
import toast from 'react-hot-toast';

const BookingModal = ({ product }) => {
//   const {
//     name,
//     image,
//     resale_price,
//     original_price,
//     location,
//     years_used,
//     time_posted,
//   } = product;
  const handleBooking = (event) => {
    event.preventDefault();

    const booking = {};

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("booking confirmed.");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">h</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
            //   value={date}
              className="input input-bordered w-full mb-3"
              disabled
            />
            {/* <select name="slot" className="select select-bordered w-full mb-3">
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select> */}
            <input
              type="text"
            //   defaultValue={user?.displayName}
              disabled
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
            //   defaultValue={user?.email}
              disabled
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mb-3"
            />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
