import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../GeneralPages/errorPage/Errorpage";
import Home from "../GeneralPages/Home&children/Home";
import Register from "../AuthenticationPages/Register/Register";
import Login from "../AuthenticationPages/Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
           
        ]
    }
])

export default router