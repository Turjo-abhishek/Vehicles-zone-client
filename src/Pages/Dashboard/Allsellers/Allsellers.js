import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Allsellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/allsellers?role=seller");
        const data = res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteBuyer = (seller) => {
    fetch(`http://localhost:5000/allsellers/${seller._id}`,{
    method: 'DELETE'
    // headers: {
    //     authorization: `bearer ${localStorage.getItem("accessToken")}`
    // }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`${seller.name} deleted successfully`)
        }
    });
  }

  return (
    <div className="ml-7">
      <h2 className="text-2xl font-semibold mb-7 text-center">All Sellers</h2>
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
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td><button onClick={() => handleDeleteBuyer(seller)} className="btn btn-sm btn-error">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allsellers;