import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductsByCategory from "../../Pages/ProductsByCategory/ProductsByCategory";
import Signup from "../../Pages/Signup/Signup";

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
                element: <ProductsByCategory></ProductsByCategory>,
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

            }
        ]
    }
])

export default Routes;