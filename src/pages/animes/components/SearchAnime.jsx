import React, { useState } from "react";
import Cards from "../../../components/ui/Cards/Cards";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import useAnimeSearch from "../../../api/hooks/useAnimeSearch";
import Pagination from "../../../components/ui/Pagination/Pagination";
import SearchIcon from "@mui/icons-material/Search";

function SearchAnime() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const { data: animes, isLoading, isError } = useAnimeSearch(search, page);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <>
      <form className="max-w-md mx-auto my-5" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-800">
            <SearchIcon />
          </div>
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
            className="text-white absolute right-2.5 bottom-2.5 bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mx-auto">
        {!animes ? null : isLoading ? (
          <CardSkeleton cards={24} />
        ) : (
          <div>
            <h1>Your search results:</h1>
            <div className="flex flex-wrap items-start">
              {animes?.map((anime) => (
                <Cards key={anime.mal_id} props={anime} />
              ))}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={3} />
          </div>
        )}
      </div>
    </>
  );
}

export default SearchAnime;
