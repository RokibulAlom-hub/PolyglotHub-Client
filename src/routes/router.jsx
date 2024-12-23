import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../GeneralPages/errorPage/Errorpage";
import Home from "../GeneralPages/Home&children/Home";
import Register from "../AuthenticationPages/Register/Register";
import Login from "../AuthenticationPages/Login/Login";
import Findtutor from "../Privateroute&Pages/Findtutors/Findtutor";
import Privateroute from "../Privateroute&Pages/Privateroute/Privateroute";
import Addtutorials from "../Privateroute&Pages/Addtutorials/Addtutorials";
import Mytutorials from "../Privateroute&Pages/Mytutorials/Mytutorials";
import TutorDetails from "../Privateroute&Pages/Findtutors/TutorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // authentication regiser and login
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // this all are private route pages
      {
        path: "/findtutor",
        element: (
          <Privateroute>
            <Findtutor></Findtutor>
          </Privateroute>
        ),
      },
      {
        path: "/addtutorials",
        element: (
          <Privateroute>
            <Addtutorials></Addtutorials>
          </Privateroute>
        ),
      },
      {
        path: "/mytutorials",
        element: (
          <Privateroute>
            <Mytutorials></Mytutorials>
          </Privateroute>
        ),
      },
      {
        path: "/tutor-details/:_id",
        element: (
          <Privateroute>
            <TutorDetails></TutorDetails>
          </Privateroute>
        ),
      },
    ],
  },
]);

export default router;
