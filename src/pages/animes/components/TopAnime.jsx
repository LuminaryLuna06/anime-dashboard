import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../../components/ui/Cards/Cards";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import getTopAnime from "../../../api/hooks/getTopAnime";
import Pagination from "../../../components/ui/Pagination/Pagination";
function TopAnime() {
  const [page, setPage] = useState(1);
  const { data: animes, isLoading } = getTopAnime(page);

  return (
    <>
      <div className="my-10">
        <h1>⭐Top animes of all times!⭐</h1>
        <Pagination page={page} setPage={setPage} totalPages={3} />

        {/* Top */}
        <div className="flex flex-wrap items-start ">
          {isLoading ? (
            <CardSkeleton cards={24} />
          ) : (
            animes.map((anime) => <Cards key={anime.mal_id} props={anime} />)
          )}
        </div>
        <Pagination page={page} setPage={setPage} totalPages={3} />
      </div>
    </>
  );
}

export default TopAnime;
