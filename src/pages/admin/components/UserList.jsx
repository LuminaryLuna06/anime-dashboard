import axios from "axios";
import React, { useEffect, useState } from "react";
import getUsersInfo from "../../../api/hooks/getUsersInfo";
import Pagination from "../../../components/ui/Pagination/Pagination";
function UserList() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const { data: users, isLoading } = getUsersInfo(page, search);
  // const filteredUsers = users?.filter((user) =>
  //   user.username.toLowerCase().includes(search.toLowerCase())
  // );
  // const usersToDisplay = search ? filteredUsers : users;
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };
  return (
    <>
      {isLoading ? (
        <div className="h-[100vh]"></div>
      ) : (
        <>
          <div className="w-[80%] mx-auto my-4 flex">
            <h1 className="font-bold text-3xl">User Information</h1>
          </div>
          <div className="md:w-[80%] w-[95%] mx-auto border rounded my-4">
          <form className="max-w-md mx-auto my-5" onSubmit={handleSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13l4 4m-4-4a7 7 0 1110 0 7 7 0 01-10 0z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search User..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
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
          </div>
        </>
      )}
      <div>
        <Pagination page={page} setPage={setPage} totalPages={10} />
      </div>
    </>
  );
}

export default UserList;
