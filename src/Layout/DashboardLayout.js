import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useSeller from "../Hooks/useSeller";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [ isSeller ] = useSeller(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side lg:bg-teal-200 lg:mb-10 lg:rounded-lg">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {isSeller && (
              <>
                <li>
                  <Link className="font-semibold" to="/dashboard/addproduct">Add a Product</Link>
                </li>
                <li>
                  <Link className="font-semibold" to="/dashboard/myproducts">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
