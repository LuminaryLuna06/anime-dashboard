import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cards from "../ui/Cards/Cards";
import CardSkeleton from "../ui/Skeleton/CardSkeleton";
import useAnimeSearch from "../../api/hooks/useAnimeSearch";
import Pagination from "../ui/Pagination/Pagination";
import AnimeFilter from "./AnimeFilter";
import Side from "../layout/SideBar/Side";


function SearchAnime() {
  return (
    <>
      <div className="lg:w-[85%] mx-auto py-3 flex flex-col md:flex-row gap-3">
        {/* Left */}
        <div className="flex flex-col md:w-[80%] lg:w-[75%]">
          <AnimeFilter />
        </div>
        <Side />
      </div>
    </>
  );
}

export default SearchAnime;
