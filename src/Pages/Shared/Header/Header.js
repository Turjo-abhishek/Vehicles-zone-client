import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar mb-7 py-5 bg-stone-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content font-semibold mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          <img width={80} src="" alt="" />
          <span>Vehicle's Zone</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="blogs">
          <button className="btn btn-ghost">Blogs</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
