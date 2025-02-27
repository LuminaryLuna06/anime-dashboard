import React, { useEffect, useState } from "react";
import Club from "./Club";
import axios from "axios";
import ClubSkeleton from "./ClubSkeleton";
import getClubInfo from "../../../../api/hooks/getClubInfo";
import Pagination from "../../../../components/ui/Pagination/Pagination";
import SearchIcon from "@mui/icons-material/Search"

function ClubList() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };
  const { data: clubs, isLoading } = getClubInfo(page, search);

  return (
    <>
      <div className="w-[95%] md:w-[80%] mx-auto my-5">
        <h1 className="font-bold text-3xl my-3">Clubs</h1>
        <form className="max-w-md mx-auto my-5" onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Search Club..."
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
        {isLoading ? (
          <ClubSkeleton cards={4} />
        ) : (
          clubs && clubs?.map((club, index) => <Club key={index} club={club} />)
        )}
        <Pagination page={page} setPage={setPage} totalPages={5} />
      </div>
    </>
  );
}

export default ClubList;
