import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
function NavBar() {
  const { isAdmin, userLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="navbar bg-[#23252b] text-neutral-content h-5 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
            className="menu menu-sm dropdown-content text-gray-200 bg-gradient-to-r from-slate-800 to-black rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/anime"}>Anime</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/genres"}>Genres</Link>
            </li>
            {isAdmin ? (
              <li>
                <Link to={"/admin"}>Admin</Link>
              </li>
            ) : null}
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl" to={"/"}>
          🌸Anime Website
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/anime"}>Anime</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/genres"}>Genres</Link>
          </li>
          {isAdmin ? (
            <li>
              <Link to={"/admin"}>Admin</Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {userLoggedIn ? (
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate("/login");
              });
            }}
            className="btn"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="btn ">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
