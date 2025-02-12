import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ThemeContext } from "../../Components/Themecontext/ThemeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import "./Nabvar.css";
const Navbar = () => {
  const { user, userLogout } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    userLogout().then((result) => {
      //  console.log(result.user);
      // console.log(result);
      navigate("/login");
    });
    // .catch((err) => console.log(err.message));
  };
  // console.log(user);

  return (
    <div className=" bg-secondary dark:bg-black sticky top-0 z-50  ">
      <div className="navbar py-2 w-11/12 mx-auto border-b dark:text-white  text-black ">
      {/* navbar start */}
        <div className="navbar-start">
          <div className="dropdown bg-accent ">
            {/* this is dropdown  */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu bg-black  menu-sm space-y-2 dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/findtutor">Findtutors</NavLink>
              </li>
              {user ? (
                <details>
                  <summary>MyLinks</summary>
                  <ul className="bg-blue-400   rounded-t-none p-2">
                    <li>
                      <NavLink to="/addtutorials">AddTutorials</NavLink>
                    </li>
                    <li>
                      <NavLink to="/mytutorials">MyTutorials</NavLink>
                    </li>
                    <li>
                      <NavLink to="/mybookedtutors">Mybookedtutors</NavLink>
                    </li>
                  </ul>
                </details>
              ) : (
                ""
              )}
            </ul>
          </div>
          <Link
            to="/"
            className=" md:font-bold hidden md:block md:text-3xl "
          >
            PolyglotHub
          </Link>
        </div>
        {/* theme changer button  */}
        <button
          onClick={toggleTheme}
          className="px-2 mr-1 py-1 rounded border border-white  text-gray-900 "
        >
          {theme === "dark" ? (
            <div className="text-yellow-400">
              <IoSunny />
            </div>
          ) : (
            <div className="text-black">
              <IoMoon />
            </div>
          )}
        </button>
        {/* navbar center content */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/findtutor">Findtutors</NavLink>
              </li>
              <li>
                {user ? (
                  <details>
                    <summary>MyLinks</summary>
                    <ul className=" dark:bg-secondary dark:text-black rounded-t-none p-2">
                      <li>
                        <NavLink to="/addtutorials">AddTutorials</NavLink>
                      </li>
                      <li>
                        <NavLink to="/mytutorials">MyTutorials</NavLink>
                      </li>
                      <li>
                        <NavLink to="/mybookedtutors">Mybookedtutors</NavLink>
                      </li>
                    </ul>
                  </details>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* navabr end contents */}
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-between items-center">
              <div>
                <Link
                  className="p-1 mr-1  border font-semibold text-black rounded-md bg-primary md:btn-md"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 rounded-full hidden md:block">
                    <img alt="user" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content cursor-not-allowed bg-base-100 text-black rounded z-[1] mt-3 w-20 p-2 shadow"
                >
                  <li>
                    <p className="justify-between bg-base-100 text-black">
                      {user?.displayName}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link
                className="btn-sm p-1 border font-bold text-black rounded-md bg-primary md:btn-md"
                to="/login"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
