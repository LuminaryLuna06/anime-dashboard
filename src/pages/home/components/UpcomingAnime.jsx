import React, { useState, useEffect } from "react";
import axios from "axios";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import getUpcoming from "../../../api/hooks/getUpcoming";
import UpcomingCard from "./UpcomingCard";

function UpcomingAnime() {
  let option = { limit: 6 };

  const { data, isLoading, isError } = getUpcoming(option);

  return (
    <>
      <div className="w-[95%] mx-auto">
        <div className="py-4 ">
          <h1 className="text-3xl font-bold my-3">⭐Upcoming 2025 Anime⭐</h1>
          {/* Upcoming */}

          {isLoading ? (
            <div className="flex flex-wrap items-start ">
              <CardSkeleton cards={6} />
            </div>
          ) : (
            <div className="flex flex-wrap items-start ">
              {data.map((anime) => (
                <UpcomingCard key={anime.mal_id} props={anime} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UpcomingAnime;
