import React, { useState } from "react";
import Cards from "../../../components/ui/Cards/Cards";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import useAnimeSearch from "../../../api/hooks/useAnimeSearch";

function SearchAnime() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const { data: animes, isLoading, isError } = useAnimeSearch(search);
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
            placeholder="Search Anime..."
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

      <div className="mx-auto">
        {!animes ? null : isLoading ? (
          <CardSkeleton cards={6} />
        ) : (
          <div>
            <h1>Your search results:</h1>
            <div className="flex flex-wrap items-start">
              {animes?.map((anime) => (
                <Cards key={anime.mal_id} props={anime} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchAnime;
