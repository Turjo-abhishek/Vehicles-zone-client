import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: vehicles = [], refetch } = useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/vehicles?email=${user?.email}`
        );
        const data = res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteVehicle = (vehicle) => {
    fetch(`http://localhost:5000/vehicles/${vehicle?._id}`, {
      method: "DELETE",
      // headers: {
      //     authorization: `bearer ${localStorage.getItem("accessToken")}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          refetch();
          toast.success(`${vehicle?.name} deleted successfully`);
        }
      });
  };

  const handleAdvertise = (vehicle) => {
    fetch(`http://localhost:5000/vehicles?vehicleId=${vehicle?._id}`, {
      method: "PATCH",
      body: JSON.stringify({
        advertised: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.modifiedCount) {
          fetch("http://localhost:5000/advertises", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(vehicle),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
          refetch();
        }
      });
  };

  return (
    <div className="ml-7">
      <h2 className="text-2xl font-semibold mb-7 text-center">Vehicles</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Vehicle Image</th>
              <th>Vehicle Name</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Action</th>
              <th>Advertise</th>
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
                <td>{vehicle.resale_price}</td>
                <td>{vehicle.status}</td>
                <td>
                  <button
                    onClick={() => handleDeleteVehicle(vehicle)}
                    className="btn btn-error btn-sm rounded-full"
                  >
                    delete
                  </button>
                </td>
                <td>
                  {!vehicle.advertised && (
                    <button
                      onClick={() => handleAdvertise(vehicle)}
                      className="btn btn-sm btn-primary rounded-full"
                    >
                      {" "}
                      Advertise
                    </button>
                  )}
                  {vehicle.advertised && (
                    <button className="btn btn-sm btn-success rounded-full">
                      {" "}
                      Advertised
                    </button>
                  )}
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
