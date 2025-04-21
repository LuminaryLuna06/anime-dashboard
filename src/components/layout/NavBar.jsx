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
      navigate(`/anime?q=${query}&page=1`);
    }
  };

  return (
    <div className="navbar bg-background-secondary text-text h-5 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="p-3  md:hidden hover:bg-background focus:bg-background transition-all duration-300"
          >
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
            className="menu menu-sm dropdown-content text-text bg-background rounded-box z-[1] mt-3 w-52 p-2 shadow transition-all duration-300"
          >
            <li className="hover:bg-background-secondary transition-all duration-300">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:bg-background-secondary transition-all duration-300">
              <Link to={"/anime"}>Anime</Link>
            </li>
            <li className="hover:bg-background-secondary transition-all duration-300">
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
            <li className="hover:bg-background-secondary transition-all duration-300">
              <Link to={"/season"}>Seasonal</Link>
            </li>
            {isAdmin ? (
              <li className="hover:bg-background-secondary transition-all duration-300">
                <Link to={"/admin"}>Admin</Link>
              </li>
            ) : null}
          </ul>
        </div>
        <Link
          className="p-3 font-bold md:text-2xl text-xl text-text hover:bg-background transition-all duration-300"
          to={"/"}
        >
          🌸BlossomAnime
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg gap-2">
          <li className="hover:bg-background">
            <NavLink
              to="/"
              className={({ isActive }) => ` 
              ${
                isActive
                  ? "text-text-active bg-background"
                  : "inactive hover:bg-background"
              }
              `}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anime"
              className={({ isActive }) => ` 
              ${
                isActive
                  ? "text-text-active bg-background"
                  : "inactive hover:bg-background"
              }
              `}
            >
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popular"
              className={({ isActive }) => ` 
              ${
                isActive
                  ? "text-text-active bg-background"
                  : "inactive hover:bg-background"
              }
              `}
            >
              Popular
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/season"
              className={({ isActive }) => ` 
              ${
                isActive
                  ? "text-text-active bg-background"
                  : "inactive hover:bg-background"
              }
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
              className="block w-full p-4 pl-10 text-sm text-text border border-border rounded-lg bg-background focus:ring-border focus:border-border"
              placeholder="Search Anime..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="text-text absolute right-2.5 bottom-2 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm p-2"
            >
              <SearchIcon />
            </button>
          </div>
        </form>

        <button className="group relative text-text text-lg px-3 py-1 rounded">
          <AccountCircleOutlinedIcon fontSize="large" />
          <div className="absolute top-full right-0 w-[150px] rounded-lg p-3 mt-1 shadow-md bg-background/80 text-text scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100 origin-top duration-200 z-[10]">
            {userLoggedIn ? (
              <>
                <Link
                  to={"/profile"}
                  className="block px-4 py-2 hover:bg-primary hover:text-pink-700 transition-all duration-500"
                >
                  Profile
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-primary hover:text-pink-700 transition-all duration-500"
                >
                  Setting
                </a>
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate("/login");
                    });
                  }}
                  className="px-4 py-2 w-full hover:bg-primary hover:text-pink-700 transition-all duration-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="block px-4 py-2 w-full hover:bg-primary text-text transition-all duration-500 "
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
