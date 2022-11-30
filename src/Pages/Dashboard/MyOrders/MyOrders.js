import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loader from '../../../Loader/Loader';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
  const { data: orders, isLoading} = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`, {
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
        <div className="ml-7">
      <h2 className="text-2xl font-semibold mb-7 text-center">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Vehicle Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={order?._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={order?.product_image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{order?.product_name}</td>
                <td>{order?.price}</td>
                <td>
                  {/* <Link to={`/dashboard/payment/${order?._id}`} className="btn btn-sm btn-primary">Pay</Link> */}
                  {order?.price && !order?.paid && (
                    <Link to={`/dashboard/payment/${order?._id}`}>
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {order?.price && order?.paid && (
                    <p className="text-green-500 text-lg font-semibold">Paid</p>
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

export default MyOrders;