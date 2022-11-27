import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductsByCategory from "../../Pages/ProductsByCategory/ProductsByCategory";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/categories/:id",
                element: <PrivateRoute><ProductsByCategory></ProductsByCategory></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <h1 className="text-3xl font-bold mt-6 ml-10">Welcome to DashBoard</h1>
            },
            {
                path: "/dashboard/addproduct",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/myproducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            }
        ]
    }
])

export default Routes;