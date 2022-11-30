import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "../../../Loader/Loader";

const Allbuyers = () => {
  const { data: buyers = [], refetch, isLoading } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/allbuyers?role=buyer");
        const data = res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteBuyer = (buyer) => {
    fetch(`http://localhost:5000/allbuyers/${buyer?._id}`,{
    method: 'DELETE'
    // headers: {
    //     authorization: `bearer ${localStorage.getItem("accessToken")}`
    // }
    })
    .then(res => res.json())
    .then(data => {
        if(data?.deletedCount > 0){
            refetch();
            toast.success(`${buyer?.name} deleted successfully`)
        }
    });
  }
  if(isLoading){
    return <Loader></Loader>
  }

  return (
    <div className="ml-7">
      <h2 className="text-2xl font-semibold mb-7 text-center">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((buyer, i) => (
              <tr key={buyer?._id}>
                <th>{i + 1}</th>
                <td>{buyer?.name}</td>
                <td>{buyer?.email}</td>
                <td>{buyer?.role}</td>
                <td><button onClick={() => handleDeleteBuyer(buyer)} className="btn btn-sm btn-error">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbuyers;
