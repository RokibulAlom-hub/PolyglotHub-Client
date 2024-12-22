import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, userLogout } = useAuth();
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
  return (
    <div>
      <div className="navbar bg-blue-400 text-gray-100">
        <div className="navbar-start">
          <div className="dropdown bg-blue-400">
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
              className="menu bg-blue-400 menu-sm space-y-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/findtutor">Findtutors</NavLink>
              <NavLink to="/addtutorials">AddTutorials</NavLink>
              <NavLink to="/mytutorials">MyTutorials</NavLink>
              <NavLink to="/mybookedtutors">Mybookedtutors</NavLink>
            </ul>
          </div>
          <NavLink to="/" className="p-2 font-bold text-3xl">
            PolyglotHub
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-3 menu-horizontal px-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/findtutor">Findtutors</NavLink>
            <NavLink to="/addtutorials">AddTutorials</NavLink>
            <NavLink to="/mytutorials">MyTutorials</NavLink>
            <NavLink to="/mybookedtutors">Mybookedtutors</NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <div className="flex gap-2 items-center justify-center">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="w-10 h-10 rounded-lg"
              />

              <Link className="btn" to="/login" onClick={handleLogout}>
                Logout
              </Link>
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
