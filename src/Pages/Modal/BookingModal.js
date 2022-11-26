import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const BookingModal = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { name, resale_price } = product;
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
          <h3 className="text-lg font-bold mb-10">Please fill up the form</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              defaultValue={user?.email}
              disabled
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              defaultValue={name}
              className="input input-bordered w-full mb-3"
              disabled
            />
            <input
              type="text"
              defaultValue={`Price: ${resale_price}`}
              className="input input-bordered w-full mb-3"
              disabled
            />
            <input
              type="text"
              name="location"
              placeholder="Meeting Location"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
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
