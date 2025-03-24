import React, { useState, useEffect } from "react";
import axios from "axios";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import getUpcoming from "../../../api/hooks/getUpcoming";
import UpcomingCard from "./UpcomingCard";
import SliderCardSkeleton from "../../../components/ui/Skeleton/SliderCardSkeleton";
import SliderCard from "../../../components/ui/Cards/SliderCard";

function UpcomingAnime() {
  let option = { limit: 24 };

  const { data, isLoading, isError } = getUpcoming(option);

  return (
    <>
      <div className="mx-auto">
        <div className="py-4 ">
          <h1 className="text-3xl font-bold my-3">⭐Upcoming 2025 Anime⭐</h1>
          {/* Upcoming */}

          {isLoading ? (
            <SliderCardSkeleton cards={6} />
          ) : (
            <SliderCard props={data} />
          )}
        </div>
      </div>
    </>
  );
}

export default UpcomingAnime;
