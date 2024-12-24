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
import MyBookedTutors from "../Privateroute&Pages/Mybooked/MyBookedTutors";
import TutorCategory from "../GeneralPages/Find-tutor-categeory/TutorCategory";
import UpdateTutorials from "../Privateroute&Pages/UpdateTutorPage/UpdateTutorials";

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
      {
        path: "/mybookedtutors",
        element: (
          <Privateroute>
            <MyBookedTutors></MyBookedTutors>
          </Privateroute>
        ),
      },
      {
        path: "/find/tutor/:language",
        element: (
          <Privateroute>
            <TutorCategory></TutorCategory>
          </Privateroute>
        ),
      },
      {
        path: "/update/tutor/:id",
        element: (
          <Privateroute>
            <UpdateTutorials></UpdateTutorials>
          </Privateroute>
        ),
        loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/single-tutorials/${params.id}`)
      },
    ],
  },
]);

export default router;
