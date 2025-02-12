import React from "react";
import { FaGoogle } from "react-icons/fa"; // Import Google icon from React Icons
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SweetSuccess from "../../Components/Sweetalerts/SweetSuccess";
import SweetError from "../../Components/Sweetalerts/SweetError";
import Headers from "../../Components/Heading/Headers";

export default function Login() {
  const navigate = useNavigate();
  const { googlelogin, userLogin } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    // console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        // console.log("user logged in", result.user);
        SweetSuccess();
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
        SweetError();
      });
  };

  const handleGoogleLogin = () => {
    googlelogin()
      .then((result) => {
        // console.log(result);
        SweetSuccess();
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.message);
        SweetError();
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md border dark:border-gray-600 p-8 space-y-8  rounded shadow-md">
        <Headers headtext="Login"></Headers>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border  rounded-lg shadow-sm"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border  rounded-lg shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg shadow-sm bg-secondary text-black  hover:bg-accent hover:scale-105 font-semibold hover:text-white duration-500 ease-in-out"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full px-4 py-2 mt-4  rounded-lg shadow-sm  flex items-center justify-center bg-accent text-white hover:bg-secondary hover:scale-110 hover:text-black duration-500 ease-in-out"
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm  ">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-accent underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
