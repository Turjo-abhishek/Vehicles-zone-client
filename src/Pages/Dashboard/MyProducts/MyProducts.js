import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyProducts = () => {
    const {user} = useContext(AuthContext);
  const { data: vehicles = [], refetch } = useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/vehicles?email=${user?.email}`);
        const data = res.json();
        return data;
      } catch (error) {}
    },
  });
  return (
    <div className="ml-7">
      <h2 className="text-2xl font-semibold mb-7 text-center">Vehicles</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Available</th>
              <th>Sold</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, i) => (
              <tr key={vehicle._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={vehicle.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{vehicle.name}</td>
                <td>{vehicle.original_price}</td>
                <td>{vehicle.resale_price}</td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                    // onClick={() => SetDeletingDoctor(doctor)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
