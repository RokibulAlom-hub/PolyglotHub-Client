import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa"; // Import Google icon from React Icons
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SweetSuccess from "../../Components/Sweetalerts/SweetSuccess";
import Headers from "../../Components/Heading/Headers";

export default function Register() {
  const navigate = useNavigate();
  const { googlelogin, createUserByemail, updateUserData, setUser, user } =
    useAuth();
  const [showSuccess, setShowsuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // console.log({ name, photoURL, email, password });

    createUserByemail(email, password, name, photoURL)
      .then((result) => {
        // console.log(result.user);
        updateUserData({ displayName: name, photoURL: photoURL }).then(() => {
          setUser({ displayName: name, photoURL: photoURL, ...user });
        });
        setShowsuccess(true)
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
      // console.log(gogggleInfo);
      setShowsuccess(true)
      navigate("/");
    });
    // .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      {showSuccess && (
        <SweetSuccess
          titletxt=" Registerd"
          subtxt="Successfull"
          icon="success"
        ></SweetSuccess>
      )}
      <div className="w-full max-w-md border dark:border-gray-600 p-8 space-y-8  rounded shadow-md">
        <Headers headtext="Register"></Headers>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border  rounded-lg shadow-sm"
              placeholder="Name Please"
              required
            />
          </div>
          <div>
            <input
              type="url"
              name="photo"
              className="w-full px-3 py-2 border  rounded-lg shadow-sm"
              placeholder="PhotoURl"
              required
            />
          </div>
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
              className="w-full px-3 py-2 border  rounded-lg shadow-sm"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg shadow-sm bg-secondary text-black  hover:bg-accent hover:scale-105 font-semibold hover:text-white duration-500 ease-in-out"
          >
            Register
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
          <p className="text-sm ">
            Already have an account?{" "}
            <Link to="/login" className="text-accent underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
