import React, { useState, useEffect } from "react";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import getAnime from "../../../api/hooks/getAnime";
import SliderCard from "../../../components/ui/Cards/SliderCard";
import SliderCardSkeleton from "../../../components/ui/Skeleton/SliderCardSkeleton";

function Trending() {
  let option = {
    order_by: "popularity",
    sort: "asc",
    limit: 20,
    min_score: 8.0,
    status: "airing",
    type: "tv",
  };
  const { data, isLoading, isError } = getAnime(option);
  const uniqueAnimes = data && data[0];
  return (
    <>
      <div className="h-auto mx-auto">
        <div className="py-4 ">
          <div className="py-4">
            <h1>⭐Trending Anime⭐</h1>
            <p className="text-md text-gray-400 text-center md:text-left">
              Find the best new and continuing simulcasts here!
            </p>
          </div>

          {isLoading ? (
            <SliderCardSkeleton cards={6} />
          ) : (
            <SliderCard props={uniqueAnimes} />
          )}
        </div>
      </div>
    </>
  );
}

export default Trending;
