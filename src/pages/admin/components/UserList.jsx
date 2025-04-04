import axios from "axios";
import React, { useEffect, useState } from "react";
import getUsersInfo from "../../../api/hooks/getUsersInfo";
import Pagination from "../../../components/ui/Pagination/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import { CSVLink } from "react-csv";
import Papa from "papaparse";

function UserList() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const { data: users, isLoading } = getUsersInfo(page, search);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  const exportToCSV = () => {
    const csvData = users.map((user) => ({
      username: user.username,
      email: "handsomeuser@gmail.com",
      last_online: user.last_online,
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "user_list.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="w-[80%] mx-auto my-4 flex">
        <h1 className="font-bold text-3xl">User Information</h1>
      </div>
      <div>
        <form
          className="max-w-md mx-auto my-5 flex gap-4"
          onSubmit={handleSubmit}
        >
          <button
            onClick={exportToCSV}
            className="text-white bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Export to CSV
          </button>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Search User..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-[80%] w-[95%] mx-auto border rounded my-4">
        {isLoading ? null : (
          <table className="table">
            <thead>
              <tr className="text-white">
                <th>User</th>
                <th>Email</th>
                <th className="hidden md:block">Last online</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr className="hover:bg-gray-500" key={index}>
                  <div>
                    <a
                      href={`https://myanimelist.net/profile/${user.username}`}
                    >
                      <td>
                        <div className="flex items-center gap-3">
                          <img
                            src={user.images.webp.image_url}
                            alt=""
                            className="rounded-full object-cover w-10 h-10"
                          />
                          {user.username}
                        </div>
                      </td>
                    </a>
                  </div>
                  <td>handsomeuser@gmail.com</td>
                  <td>
                    <div className="hidden md:block">
                      {user.last_online.slice(0, 10)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <Pagination page={page} setPage={setPage} totalPages={10} />
      </div>
    </>
  );
}

export default UserList;
