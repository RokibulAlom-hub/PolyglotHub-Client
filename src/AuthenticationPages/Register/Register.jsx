import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa"; // Import Google icon from React Icons
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SweetSuccess from '../../Components/Sweetalerts/SweetSuccess';
import SweetError from '../../Components/Sweetalerts/SweetError';

export default function Register() {
  const navigate = useNavigate();
  const { googlelogin, createUserByemail, updateUserData, setUser, user } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log({ name, photoURL, email, password });

    createUserByemail(email, password, name, photoURL)
      .then((result) => {
        console.log(result.user);
        updateUserData({ displayName: name, photoURL: photoURL }).then(() => {
          setUser({ displayName: name, photoURL: photoURL, ...user });
        });
        SweetSuccess();
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        SweetError();
      });
  };

  const handleGoogleLogin = () => {
    googlelogin()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-gray-100">
      <div className="w-full max-w-md  border-blue-400 border  p-8 space-y-8 bg-white dark:bg-gray-700 dark:text-gray-100 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
          >
            Register
          </button>
        </form>
        <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full px-4 py-2 mt-4 font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 flex items-center justify-center"
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-100">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
