import { useQuery } from "@tanstack/react-query";

const Allbuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/allbuyers?role=buyer");
        const data = res.json();
        return data;
      } catch (error) {}
    },
  });

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
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>{buyer.role}</td>
                <td><button className="btn btn-sm btn-error">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbuyers;
