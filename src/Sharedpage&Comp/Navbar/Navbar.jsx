import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ThemeContext } from "../../Components/Themecontext/ThemeProvider";
import "./Navbar.css";
import { IoMoon, IoSunny } from "react-icons/io5";
const Navbar = () => {
  const { user, userLogout } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    userLogout()
      .then((result) => {
        // console.log(result.user);
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err.message));
  };
  console.log(user);

  return (
    <div>
      <div className="navbar bg-blue-400 dark:bg-gray-700 text-gray-100 dark:text-gray-100">
        <div className="navbar-start">
          <div className="dropdown bg-blue-400 dark:bg-gray-700 dark:text-gray-100">
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
              className="menu bg-blue-400 dark:bg-gray-700 dark:text-gray-100 menu-sm space-y-2 dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/findtutor">Findtutors</NavLink>
              {user ? (
                <details>
                  <summary>MyLinks</summary>
                  <ul className="bg-blue-400  dark:bg-gray-700 rounded-t-none p-2">
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
          <Link to="/" className="p-2 font-bold text-3xl">
            PolyglotHub
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded border border-yellow-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
                    <ul className="bg-blue-400  dark:bg-gray-700 rounded-t-none p-2">
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
        <div className="navbar-end space-x-2">
          {user ? (
            <div>
              <Link className="btn" to="/login" onClick={handleLogout}>
                Logout
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content cursor-not-allowed bg-base-100 text-black rounded z-[1] mt-3 w-20 p-2 shadow"
                >
                  <li>
                    <p className="justify-between text-black">
                      {user?.displayName}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link className="btn" to="/login">
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
