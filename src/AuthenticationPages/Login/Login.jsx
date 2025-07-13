import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa"; // Import Google icon from React Icons
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import Headers from "../../Components/Heading/Headers";
import SweetSuccess from "../../Components/Sweetalerts/SweetSuccess";
import animation from "../../../public/Animation - 1741479934400.json";
export default function Login() {
  const navigate = useNavigate();
  const { googlelogin, userLogin, user, setUser } = useAuth();
  const [showSuccess, setShowsuccess] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        // console.log("user logged in", result.user);
        setShowsuccess(true);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googlelogin().then((result) => {
      const gogggleInfo = result.user;
      setUser({
        displayName: gogggleInfo.displayName,
        photoURL: gogggleInfo.photoURL,
        ...user,
      });
      setShowsuccess(true);
      // console.log(gogggleInfo);
      navigate("/");
    });
    // .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-4">
      {showSuccess && (
        <SweetSuccess
          titletxt=" Logged In"
          subtxt="Successfull"
          icon="success"
        ></SweetSuccess>
      )}
      <div className="w-full max-w-md border dark:border-gray-600 p-8 space-y-8 rounded shadow-md">
        <Headers headtext="Login"></Headers>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border  rounded-lg bg-white"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border  rounded-lg bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg  bg-secondary text-black  hover:bg-accent hover:scale-105 font-semibold hover:text-white duration-500 ease-in-out"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full px-4 py-2 mt-4  rounded-lg  flex items-center justify-center bg-accent text-white hover:bg-secondary hover:scale-110 hover:text-black duration-500 ease-in-out"
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm  ">
            Don't have an account?{" "}
            <Link to="/register" className="text-accent underline">
              Register
            </Link>
          </p>
        </div>
        {/* react lottie file  */}
      </div>
      <Lottie animationData={animation} loop={true} />
    </div>
  );
}
