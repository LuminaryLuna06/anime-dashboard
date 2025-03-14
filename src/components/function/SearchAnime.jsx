import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cards from "../ui/Cards/Cards";
import CardSkeleton from "../ui/Skeleton/CardSkeleton";
import useAnimeSearch from "../../api/hooks/useAnimeSearch";
import Pagination from "../ui/Pagination/Pagination";
import AnimeFilter from "./AnimeFilter";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchAnime() {
  const query = useQuery().get("query") || "";
  return (
    <>
      <AnimeFilter
        initialOption={{
          q: query,
          limit: 12,
          sfw: true,
          page: 1,
        }}
        totalPages={3}
        query={query}
      />
    </>
  );
}

export default SearchAnime;
