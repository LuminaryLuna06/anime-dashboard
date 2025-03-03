import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cards from "../ui/Cards/Cards";
import CardSkeleton from "../ui/Skeleton/CardSkeleton";
import useAnimeSearch from "../../api/hooks/useAnimeSearch";
import Pagination from "../ui/Pagination/Pagination";
import SearchIcon from "@mui/icons-material/Search";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchAnime() {
  const query = useQuery().get("query") || "";
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(query);
  const { data: animes, isLoading, isError } = useAnimeSearch(search, page);

  useEffect(() => {
    setSearch(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <>
      {isLoading ? <div className="w-screen"></div> : (

      <div className="mx-auto w-[95%]">
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
      )}

    </>
  );
}

export default SearchAnime;
