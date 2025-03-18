import React, { useState, useEffect } from "react";
import getAnimeRecommendations from "../../../api/hooks/getAnimeRecommendations";
import CardSkeleton from "../../../components/ui/Skeleton/CardSkeleton";
import Cards from "../../../components/ui/Cards/Cards";
import UpcomingCard from "../../home/components/UpcomingCard";

function AnimeRecommend({ id }) {
  const [shouldFetch, setShouldFetch] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldFetch(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const { data: animes, isLoading } = getAnimeRecommendations(id, shouldFetch);

  return (
    <>
      <div className="my-10">
        <h1>⭐Recommended Anime⭐</h1>
        {/* Top */}
        <div className="flex">
          {isLoading ? (
            <CardSkeleton cards={6} />
          ) : animes && animes.length > 0 ? (
            animes
              .slice(0, 6)
              .map((anime) => (
                <UpcomingCard key={anime?.entry?.mal_id} props={anime?.entry} />
              ))
          ) : (
            <p className="text-gray-500">
              No recommendations available for this anime.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AnimeRecommend;
