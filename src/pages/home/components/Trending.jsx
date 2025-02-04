import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../../components/ui/Cards/Cards";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import getAnime from "../../../api/hooks/getAnime";

function Trending() {
  let option = {
    order_by: "popularity",
    sort: "asc",
    limit: 6,
    min_score: 8.0,
    status: "airing",
    start_date: "2024-10-01",
  };
  const { data, isLoading, isError } = getAnime(option);

  return (
    <div className="w-[95%] h-auto mx-auto">
      <div className="py-4 ">
        <div className="py-4">
          <h1>⭐Trending Anime⭐</h1>
          <p className="text-md text-gray-400">
            Find the best new and continuing simulcasts here!
          </p>
        </div>

        <div className="flex flex-wrap items-start ">
          {isLoading ? (
            <CardSkeleton cards={6} />
          ) : (
            data.map((anime) => <Cards key={anime.mal_id} props={anime} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Trending;
