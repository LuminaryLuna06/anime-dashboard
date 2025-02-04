import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../../components/ui/Cards/Cards";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import getTopAnime from "../../../api/hooks/getTopAnime";
function TopAnime() {
  let option = { limit: 12 };
  const { data: animes, isLoading } = getTopAnime(option);

  return (
    <>
      <div className="my-10">
        <h1>⭐Top animes of all times!⭐</h1>
        {/* Top */}
        <div className="flex flex-wrap items-start ">
          {isLoading ? (
            <CardSkeleton cards={12} />
          ) : (
            animes.map((anime) => <Cards key={anime.mal_id} props={anime} />)
          )}
        </div>
      </div>
    </>
  );
}

export default TopAnime;
