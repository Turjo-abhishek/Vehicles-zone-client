import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Allbuyers from "../../Pages/Dashboard/Allbuyers/Allbuyers";
import Allsellers from "../../Pages/Dashboard/Allsellers/Allsellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import PaymentPage from "../../Pages/Payment/PaymentPage/PaymentPage";
import ProductsByCategory from "../../Pages/ProductsByCategory/ProductsByCategory";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
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
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
            },
            {
                path: "/dashboard/allsellers",
                element: <AdminRoute><Allsellers></Allsellers></AdminRoute>
            },
            {
                path: "/dashboard/allbuyers",
                element: <AdminRoute><Allbuyers></Allbuyers></AdminRoute>
            },
            {
                path: "/dashboard/myorders",
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <BuyerRoute><PaymentPage></PaymentPage></BuyerRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])

export default Routes;