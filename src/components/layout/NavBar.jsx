import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function NavBar() {
  const { isAdmin, userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

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
              <Link to={"/popular"}>Popular</Link>
              {/* <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul> */}
            </li>
            {/* <li>
              <Link to={"/genres"}>Genres</Link>
            </li> */}
            <li>
              <Link to={"/season"}>Seasonal</Link>
            </li>
            {isAdmin ? (
              <li>
                <Link to={"/admin"}>Admin</Link>
              </li>
            ) : null}
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl" to={"/"}>
          🌸BlossomAnime
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => ` 
              ${isActive ? "text-pink-400" : "inactive"}
              `}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anime"
              className={({ isActive }) => ` 
              ${isActive ? "text-pink-400" : "inactive"}
              `}
            >
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popular"
              className={({ isActive }) => ` 
              ${isActive ? "text-pink-400" : "inactive"}
              `}
            >
              Popular
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/season"
              className={({ isActive }) => ` 
              ${isActive ? "text-pink-400" : "inactive"}
              `}
            >
              Seasonal
            </NavLink>
          </li>
          {isAdmin ? (
            <li>
              <Link to={"/admin"}>Admin</Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <form
          className="max-w-md my-5 invisible lg:visible"
          onSubmit={handleSearchSubmit}
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Search Anime..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm p-2"
            >
              <SearchIcon />
            </button>
          </div>
        </form>

        <button className="group relative text-gray-200 text-lg px-3 py-1 rounded">
          <AccountCircleOutlinedIcon fontSize="large" />
          <div className="absolute top-full right-0 rounded-lg p-3 mt-1 shadow-md bg-slate-800 text-gray-200 scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100 origin-top duration-200 z-[10]">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-pink-300 hover:text-pink-700 transition-all duration-500"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-pink-300 hover:text-pink-700 transition-all duration-500"
            >
              Favourites
            </a>
            {userLoggedIn ? (
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate("/login");
                  });
                }}
                className="px-4 py-2 hover:bg-pink-300 hover:text-pink-700 transition-all duration-500"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="block px-4 py-2 hover:bg-pink-300 hover:text-pink-700 transition-all duration-500 "
              >
                Log in
              </Link>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
