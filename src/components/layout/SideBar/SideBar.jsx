import React, { useState, useContext, createContext } from "react";
import { SideBarData } from "./SideBarData";
import { Link } from "react-router-dom";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

const SideBarContext = createContext();

function SideBar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`h-screen transition-all ${
        expanded ? "w-[250px]" : "w-[81px]"
      }`}
    >
      <nav className="bg-white h-full flex flex-col border-r shadow-sm">
        {/* Logo */}
        <div className="flex justify-between items-center ">
          <Link
            className={` text-gray-800 py-3 px-4 hover:bg-pink-50 flex transition-colors  ${
              expanded ? "text-xl" : "text-4xl"
            }`}
            to={"/"}
          >
            🌸{expanded ? <span>Anime Website</span> : null}
          </Link>
          <button
            className="text-gray-800 hover:bg-pink-50 rounded-full p-2 transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <FirstPageIcon /> : <LastPageIcon />}
          </button>
        </div>

        {/* Sidebar items */}
        <SideBarContext.Provider value={{ expanded }}>
          <ul className="text-black px-4 flex-1">
            {SideBarData.map((item) => (
              <Link to={item.link} key={item.title} className={`${expanded ? "" : "flex"}`}>
                <SideBarItem
                  icon={item.icon}
                  text={item.title}
                  active={item.active}
                />
              </Link>
            ))}
          </ul>
        </SideBarContext.Provider>

        {/* Admin User */}
        <div></div>
      </nav>
    </aside>
  );
}

export default SideBar;

export function SideBarItem({ icon, text, active }) {
  const { expanded } = useContext(SideBarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-semibold rounded-md cursor-pointer transition-colors group  ${
        active
          ? "bg-gradient-to-tr from-pink-100 to-pink-50 text-pink-600"
          : "hover:bg-gray-300 text-gray-800"
      }`}
    >
      {icon}
      {expanded && (
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
      )}
      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-pink-100 text-pink-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
