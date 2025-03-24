import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../../components/ui/Cards/Cards";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import getTopAnime from "../../../api/hooks/getTopAnime";
import Pagination from "../../../components/ui/Pagination/Pagination";
import SliderCardSkeleton from "../../../components/ui/Skeleton/SliderCardSkeleton";
import SliderCard from "../../../components/ui/Cards/SliderCard";
function TopAnime() {
  const [page, setPage] = useState(1);
  const { data: animes, isLoading } = getTopAnime(page);

  return (
    <>
      <div className="my-10">
        <h1>⭐Top animes of all times!⭐</h1>

        {/* Top */}
        <div className="">
          {isLoading ? (
            <SliderCardSkeleton cards={6} />
          ) : (
            <SliderCard props={animes} />
          )}
        </div>
      </div>
    </>
  );
}

export default TopAnime;
